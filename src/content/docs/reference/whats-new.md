---
title: What's New
description: Release notes and recent updates to dassi.
---

Stay up to date with the latest dassi features, improvements, and fixes.

---

## v0.31.1

### More reliable JavaScript actions

When Dassi uses JavaScript to click a button, submit a form, or dispatch a UI event, it now checks whether the action actually had an effect. If the page URL and title both stayed the same after a state-changing script ran — a strong sign the click missed its target or the event was rejected — Dassi flags the result as unconfirmed and investigates further instead of reporting success. This eliminates a class of false "I did it" responses, most notably on single-page apps where a failed submit returns no error.

### Dead-link and redirect detection

Dassi now verifies every URL it visits resolves to a live page. It detects soft 404s, robot-check pages, and silent redirects (where a URL appears to succeed but lands on a homepage or generic search page). When Dassi finds a dead or redirected URL it won't cite that address as a valid result — it'll tell you what happened and try a different approach.

### Gemini 3.5 Flash available via Google BYOK

If you've connected your own Google AI Studio API key, Gemini 3.5 Flash is now available as a model option. See [AI Models & Providers](/guides/connect-ai-provider/) for setup details.

### Title-change trigger for scheduled tasks

Scheduled tasks can now use a `"title"` trigger in addition to the default timer. A title-triggered task wakes up whenever the watched tab's page title changes — no polling interval required. This is ideal for monitoring inboxes, chat apps, and dashboards that reflect new activity in their title (for example, "(28) WhatsApp Web" or "Inbox (12) – Gmail"). The trigger mutes itself while Dassi is working and briefly after, so Dassi's own activity can't accidentally re-trigger the task.

### Smarter tool routing on WebMCP pages

On web pages that expose [WebMCP](https://github.com/google-deepmind/model-context-protocol) tools, Dassi now preferentially calls those page-native tools instead of DOM scraping. Page-declared tools return canonical IDs and confirmed state rather than scraped values, so automation on WebMCP-enabled apps is more reliable.

### Telegram: typing indicator

The Telegram integration now shows a "typing…" indicator while Dassi is processing your request, giving you visual feedback right away.

### Bug fixes

- Fixed `fetch_url` incorrectly sending a request body on GET and HEAD requests, which caused some servers to reject the call.

---

## v0.23.0

### Conversation history

You can now browse and restore past conversations. Click the **clock icon** in the sidebar toolbar to see a list of previous sessions, each with an auto-generated title and timestamp. Click any entry to pick up where you left off. [Learn more](/guides/using-the-sidebar/#conversation-history)

<!-- TODO: screenshot of history browser -->

### Live activity feed

A new activity feed appears in the sidebar while dassi is working. It shows a rolling, timestamped log of each action — navigating to a site, reading a page, clicking a button, and more — so you always know what's happening. [Learn more](/guides/using-the-sidebar/#activity-feed)

<!-- TODO: screenshot of activity feed -->

### Switch away while dassi works

When a task takes longer than about 10 seconds, a banner appears offering to let you browse freely while dassi finishes. Click **Switch Away** to jump to another tab. You'll get a desktop notification when the task is complete. [Learn more](/guides/using-the-sidebar/#switch-away-while-dassi-works)

### Automatic tab cleanup

After completing a task, dassi now closes intermediate tabs it opened during research (like search results and reference pages), keeping only the tabs with your final results. [Learn more](/guides/browser-automation/#automatic-tab-cleanup)

### Smarter desktop notifications

Desktop notifications now include the name of your task (shown as the tab group title) so you can tell which task just finished — especially useful when running multiple tasks at once.

### Bug fixes

- Restoring a past conversation no longer causes the original session to disappear from history.
- The "Switch Away" banner no longer appears immediately at the start of subsequent tasks.
- Error and budget-limit screens now properly reset the activity feed.
- Reconnecting after a Chrome restart preserves your active conversation instead of starting a blank session.
