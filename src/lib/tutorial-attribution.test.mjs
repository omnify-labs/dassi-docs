import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';
const code = ts.transpileModule(fs.readFileSync(new URL('./tutorial-attribution.ts', import.meta.url), 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
const context = { exports: {}, URL, URLSearchParams };
vm.runInNewContext(code, context);
const { campaignFrom, rememberCampaign, pageContext, ctaUrl } = context.exports;
const plain = (value) => JSON.parse(JSON.stringify(value));

const store = (initial = null) => { let value = initial; return { getItem: () => value, setItem: (_, next) => { value = next; } }; };
test('English and Chinese tutorials have separate language and stable tutorial ids', () => {
  assert.deepEqual(plain(pageContext('/zh/tutorials/price-reply/')), { page_path: '/zh/tutorials/price-reply/', tutorial_id: 'price-reply', content_language: 'zh', is_tutorial: true });
  assert.equal(pageContext('/tutorials/').tutorial_id, 'index');
  assert.equal(pageContext('/guides/first-task/').is_tutorial, false);
});
test('organic signup carries exact tutorial path and keeps signup entry', () => {
  const url = new URL(ctaUrl('https://www.dassi.ai/?signup=1&utm_content=install', '/tutorials/acuity-appointment-catalog/'));
  assert.equal(url.searchParams.get('signup'), '1');
  assert.equal(url.searchParams.get('utm_content'), '/tutorials/acuity-appointment-catalog/');
  assert.equal(url.searchParams.get('utm_campaign'), 'docs_tutorials');
});
test('upstream campaign survives internal navigation and wins over docs defaults', () => {
  const storage = store();
  rememberCampaign('?utm_source=partner&utm_campaign=pilot&utm_content=post_a', storage);
  const campaign = rememberCampaign('', storage);
  const url = new URL(ctaUrl('https://chromewebstore.google.com/detail/example', '/tutorials/gmail-reply-drafts/', campaign));
  assert.equal(url.searchParams.get('utm_source'), 'partner');
  assert.equal(url.searchParams.get('utm_campaign'), 'pilot');
  assert.equal(url.searchParams.get('utm_content'), 'post_a');
});
test('first campaign wins within docs session', () => {
  const storage = store();
  rememberCampaign('?utm_source=first', storage);
  assert.equal(rememberCampaign('?utm_source=second', storage).utm_source, 'first');
});
test('direct visit does not claim an empty campaign', () => {
  const storage = store();
  rememberCampaign('', storage);
  assert.equal(rememberCampaign('?utm_source=partner', storage).utm_source, 'partner');
});
test('storage failures and malformed JSON retain URL attribution', () => {
  const denied = { getItem() { throw Error(); }, setItem() { throw Error(); } };
  assert.equal(rememberCampaign('?utm_source=partner', denied).utm_source, 'partner');
  assert.equal(rememberCampaign('?utm_source=partner', store('{')).utm_source, 'partner');
});
test('only campaign keys are captured; values are bounded and nonstrings discarded', () => {
  assert.deepEqual(plain(campaignFrom({ email: 'private@example.com', prompt: 'private', utm_source: 5 })), {});
  assert.equal(campaignFrom({ utm_content: 'x'.repeat(1000) }).utm_content.length, 200);
  assert.deepEqual(plain(rememberCampaign('?email=private&token=secret')), {});
});

const clientCode = ts.transpileModule(fs.readFileSync(new URL('./tutorial-analytics.ts', import.meta.url), 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
function browser(hostname = 'docs.dassi.ai', tagThrows = false) {
  const handlers = {};
  const tags = [];
  const block = {};
  const link = { href: 'https://www.dassi.ai/?signup=1', dataset: { docsCta: 'signup' } };
  class Element {
    constructor(kind) { this.kind = kind; }
    closest(selector) {
      if (selector === 'a[data-docs-cta]') return this.kind === 'link' ? link : null;
      if (selector === '.expressive-code .copy button') return this.kind === 'copy' ? this : null;
      if (selector === '.expressive-code') return block;
      return null;
    }
  }
  const window = tagThrows ? { gtag() { throw Error('blocked'); } } : {};
  const document = {
    referrer: 'https://partner.example/path?email=private@example.com',
    head: { append: (tag) => tags.push(tag) },
    createElement: () => ({}),
    querySelectorAll: (selector) => selector === 'a[data-docs-cta]' ? [link] : [block],
    addEventListener: (name, handler) => { handlers[name] = handler; },
  };
  const sandbox = { exports: {}, require: () => context.exports, window, document, Element, URL, URLSearchParams,
    sessionStorage: store(), location: { hostname, origin: 'https://' + hostname, pathname: '/tutorials/gmail-reply-drafts/', search: '?email=private&token=secret' } };
  const run = () => vm.runInNewContext('(function(){' + clientCode + '})();', sandbox);
  run();
  return { run, tags, link, window, click: (kind) => handlers.click?.({ target: new Element(kind) }), events: () => (window.dataLayer || []).map((args) => Array.from(args)).filter((args) => args[0] === 'event') };
}
test('production emits one view per document, CTA click and copy intent without content', () => {
  const b = browser();
  b.run();
  b.click('link'); b.click('copy'); b.click('unrelated');
  assert.deepEqual(plain(b.events().map((e) => e[1])),  ['page_view', 'docs_tutorial_view', 'docs_signup_click', 'docs_prompt_copy_click']);
  assert.equal(b.tags.length, 1);
  assert.equal(b.events().at(-1)[2].prompt_index, 1);
  assert.equal(b.events()[0][2].page_referrer, 'https://partner.example');
  assert.ok(!JSON.stringify(b.events()).includes('private'));
  assert.ok(!JSON.stringify(b.events()).includes('secret'));
});
test('preview does not load production tag or emit events', () => {
  const b = browser('preview.pages.dev'); b.click('link');
  assert.equal(b.tags.length, 0); assert.equal(b.events().length, 0);
});
test('throwing analytics tag leaves links and copy click handling functional', () => {
  const b = browser('docs.dassi.ai', true);
  assert.doesNotThrow(() => { b.click('link'); b.click('copy'); });
  assert.equal(new URL(b.link.href).searchParams.get('utm_content'), '/tutorials/gmail-reply-drafts/');
});
