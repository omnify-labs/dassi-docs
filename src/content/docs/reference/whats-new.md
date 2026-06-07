---
title: What's New
description: Release notes and recent updates to dassi.
---

Stay up to date with the latest dassi features, improvements, and fixes.

---

## v0.24.1

### Save on BYOK with annual billing

The BYOK plan card in **Settings > Plan** now has a **Monthly / Annual** toggle. Annual billing costs $12 per year — a 90% saving compared to paying $10 month-to-month. Switch the toggle before you subscribe to pick the interval that works for you.

The Plan & Billing settings page is also reorganized into two clear sections — **BYOK Plans** (bring your own API key) and **Managed Plans** (credits included) — so it's easier to compare your options at a glance.

### Your account now lives in the settings header

Your name and profile picture appear in the top-right corner of the Settings page header, alongside a sign-out button. There's no longer a separate Account tab.

### Rate dassi from the sidebar

Open the sidebar overflow menu (**⋮**) and select **Rate dassi** to leave a review on the Chrome Web Store.

### Bug fixes and reliability

- Completing a subscription checkout now automatically dismisses the paywall prompt in the chat panel — no manual reload needed.
- Tasks that stop responding mid-run now auto-recover instead of staying stuck indefinitely.
- Subscription status refreshes each time you open the sidebar and after each task completes, so plan changes take effect without a manual reload.

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
