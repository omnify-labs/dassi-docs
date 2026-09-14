import { ctaUrl, pageContext, rememberCampaign } from './tutorial-attribution';

type Gtag = (...args: unknown[]) => void;
const analyticsWindow = window as unknown as { dataLayer?: unknown[]; gtag?: Gtag; docsAnalyticsReady?: boolean };

// Preview builds and localhost never send production analytics.
if (location.hostname === 'docs.dassi.ai' && !analyticsWindow.docsAnalyticsReady) {
  analyticsWindow.docsAnalyticsReady = true;
  let storage: Storage | undefined;
  try { storage = sessionStorage; } catch { /* storage may be disabled */ }
  const campaign = rememberCampaign(location.search, storage);
  const context = pageContext(location.pathname);
  const { is_tutorial, ...fields } = context;
  const locationUrl = new URL(location.origin + location.pathname);
  for (const [key, value] of Object.entries(campaign)) locationUrl.searchParams.set(key, value);
  let referrer = '';
  try { referrer = new URL(document.referrer).origin; } catch { /* direct visit */ }

  analyticsWindow.dataLayer = analyticsWindow.dataLayer || [];
  analyticsWindow.gtag = analyticsWindow.gtag || function () { analyticsWindow.dataLayer!.push(arguments); };
  const send = (name: string, extra: Record<string, string | number> = {}) => {
    try {
      analyticsWindow.gtag?.('event', name, {
        ...fields, page_location: locationUrl.href, page_referrer: referrer,
        ...extra, transport_type: 'beacon',
      });
    } catch { /* a failed tag must not break copy or navigation */ }
  };
  try {
    analyticsWindow.gtag('js', new Date());
    analyticsWindow.gtag('config', 'G-RGTYH1GFZ4', {
      send_page_view: false, page_location: locationUrl.href, page_referrer: referrer,
      cookie_domain: 'dassi.ai',
    });
    const tag = document.createElement('script');
    tag.async = true;
    tag.src = 'https://www.googletagmanager.com/gtag/js?id=G-RGTYH1GFZ4';
    document.head.append(tag);
    send('page_view');
    if (is_tutorial) send('docs_tutorial_view');
  } catch { /* no analytics is preferable to a broken tutorial */ }

  document.querySelectorAll<HTMLAnchorElement>('a[data-docs-cta]').forEach((link) => {
    link.href = ctaUrl(link.href, location.pathname, campaign);
  });
  document.addEventListener('click', (event) => {
    if (!(event.target instanceof Element)) return;
    const link = event.target.closest<HTMLAnchorElement>('a[data-docs-cta]');
    const action = link?.dataset.docsCta;
    if (action === 'signup' || action === 'install') {
      send(action === 'signup' ? 'docs_signup_click' : 'docs_install_click', { placement: 'header' });
    }
    // Expressive Code's native copy handler owns clipboard access. This is
    // intent only, including keyboard activation, not proof of clipboard success.
    const copy = event.target.closest('.expressive-code .copy button');
    if (is_tutorial && copy) {
      const block = copy.closest('.expressive-code');
      const blocks = Array.from(document.querySelectorAll('.sl-markdown-content .expressive-code'));
      const index = blocks.indexOf(block!);
      if (index >= 0) send('docs_prompt_copy_click', { prompt_index: index + 1 });
    }
  });
}
