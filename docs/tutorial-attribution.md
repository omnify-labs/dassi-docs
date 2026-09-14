# Tutorial attribution

This change is prepared for deployment, not a completed production measurement rollout.

## Events

Uses the existing website GA4 stream, `G-RGTYH1GFZ4`, only on `docs.dassi.ai`. Localhost and Pages previews do not load the tag or send events. Each document sends one manual `page_view`; automatic config pageviews are disabled. Existing GA4 enhanced-measurement settings are not changed by this PR.

| Event | Trigger | Meaning |
| --- | --- | --- |
| docs_tutorial_view | Tutorial or tutorial index loads | Viewed instructions, not task completion |
| docs_prompt_copy_click | Native code-block copy button clicked | Copy intent, not clipboard success or a Dassi run |
| docs_signup_click | Header signup link activated | Registration intent, not a new account |
| docs_install_click | Header store link activated | Store visit intent, not installation |

Events include `page_path`, `tutorial_id`, and `content_language`. CTA events add `placement=header`; copy events add one-based `prompt_index` for the code block. Both English and Chinese tutorial routes are covered. Header CTA events also work on other docs pages (`tutorial_id=none`). Only primary/keyboard click activation is counted; middle-click/context-menu open is not counted by this implementation.

No prompt contents, code contents, emails, thread subjects, contact names or profile URLs are read into event payloads. `page_location` includes only the docs origin/path and allowlisted UTM fields; referrer is reduced to its origin. Do not put personal information in campaign tags. Telemetry failures do not cancel navigation or the native copy handler.

## Source handoff

Organic tutorial CTA links carry:

- `utm_source=dassi_docs`
- `utm_medium=referral`
- `utm_campaign=docs_tutorials`
- `utm_content=<tutorial pathname>`

Non-tutorial docs use `docs_header` as campaign. These defaults are rendered in static HTML, so signup/install links work without JavaScript. Signup retains `signup=1` and uses the existing homepage flow.

The first inbound UTM campaign in a docs tab is retained in sessionStorage and forwarded across internal navigation. Its supplied fields override the defaults, including `utm_content`; do not relabel an upstream creative as a tutorial. Without an upstream campaign, the CTA identifies the current tutorial, not necessarily the first tutorial the visitor read. No ad click IDs are newly captured or forwarded in this PR.

The homepage's existing `rememberAttribution`/`readAttribution` flow captures these URL tags and attaches its first-touch attribution at signup. A previously attributed website visitor keeps their earlier attribution. Shared GA cookie domain supports anonymous same-browser continuity; this change does not add a docs-side account ID.

Direct Chrome Web Store UTMs do not prove a user-level install/payment join. No extension install event, server signup event or Stripe payment tracking is modified here. Treat docs-assisted conversions and first-touch acquisition separately. When upstream `utm_content` already exists, tutorial-level payment attribution requires GA journey analysis; the account attribution remains the upstream creative.

## Validation and release

- `pnpm test`: campaign handoff, first-touch precedence, malformed/blocked storage, no capture of unrelated URL fields, event payloads and duplicate initialization, preview suppression, throwing tags.
- `pnpm typecheck`, `pnpm lint`, `pnpm build`.
- Confirm built English/Chinese tutorial pages have CTA tags, page-specific URL parameters and native code-copy controls.
- After an approved production deployment, verify the four events in GA4 Realtime/DebugView using a designated test session. Inspect existing enhanced-measurement settings if duplicate pageviews appear.
- Register event-scoped custom dimensions `tutorial_id`, `content_language`, and `placement` if needed for GA4 reports; `prompt_index` can be a custom metric. These admin changes are not performed by this PR. Raw event parameters remain available in configured BigQuery export without custom-dimension registration.
- Verify a designated new signup's persisted attribution before reporting tutorial-to-paid conversion. Do not create real payments for this check.

GA references: [manual pageviews](https://developers.google.com/analytics/devguides/collection/ga4/views), [configuration fields](https://developers.google.com/analytics/devguides/collection/ga4/reference/config).
