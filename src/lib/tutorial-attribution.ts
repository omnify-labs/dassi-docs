export const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as const;
export const CAMPAIGN_KEY = 'dassi_docs_campaign';
export type Campaign = Partial<Record<(typeof UTM_KEYS)[number], string>>;

export function campaignFrom(value: unknown): Campaign {
  const result: Campaign = {};
  if (!value || typeof value !== 'object') return result;
  for (const key of UTM_KEYS) {
    const raw = (value as Record<string, unknown>)[key];
    if (typeof raw === 'string' && raw.trim()) result[key] = raw.trim().slice(0, 200);
  }
  return result;
}

export function rememberCampaign(search: string, storage?: Pick<Storage, 'getItem' | 'setItem'>): Campaign {
  const incoming = campaignFrom(Object.fromEntries(new URLSearchParams(search)));
  try {
    const saved = campaignFrom(JSON.parse(storage?.getItem(CAMPAIGN_KEY) || 'null'));
    if (Object.keys(saved).length) return saved;
  } catch { /* invalid or inaccessible storage: use the current URL */ }
  try {
    if (Object.keys(incoming).length) storage?.setItem(CAMPAIGN_KEY, JSON.stringify(incoming));
  } catch { /* attribution must not block navigation */ }
  return incoming;
}

export function pageContext(path: string) {
  const match = path.match(/^\/(zh\/)?(tutorials|chromebook)(?:\/([^/]+))?\/?$/);
  const tutorialId = match ? match[3] || 'index' : 'none';
  return {
    page_path: path,
    tutorial_id: match && match[2] === 'chromebook' ? `chromebook-${tutorialId}` : tutorialId,
    content_language: path.startsWith('/zh/') ? 'zh' : 'en',
    is_tutorial: Boolean(match),
  };
}

export function ctaUrl(base: string, path: string, campaign: Campaign = {}) {
  const url = new URL(base);
  for (const key of UTM_KEYS) url.searchParams.delete(key);
  const attribution = {
    utm_source: 'dassi_docs',
    utm_medium: 'referral',
    utm_campaign: pageContext(path).is_tutorial ? 'docs_tutorials' : 'docs_header',
    utm_content: path.slice(0, 200),
    ...campaignFrom(campaign),
  };
  for (const [key, value] of Object.entries(attribution)) url.searchParams.set(key, value);
  return url.href;
}
