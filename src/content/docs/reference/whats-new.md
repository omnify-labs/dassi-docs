---
title: What's New
description: Release notes and recent updates to dassi.
---

Stay up to date with the latest dassi features, improvements, and fixes.

---

## v0.32.1

### Free trial: $3 per day for your first 7 days

New accounts now get $3 in free managed credits every day for the first 7 days. Each day's credits are separate — unused credit doesn't carry over to the next day, so it's worth using Dassi while the trial is active.

When you install Dassi, the welcome screen shows the offer. Sign in to claim it.

See [Plans & Billing](/reference/plans-and-billing/) for details on what managed credits cover.

<!-- TODO: screenshot of welcome modal -->

### Bug fixes

- Signing in or out from the options page (or an OAuth popup) now immediately updates the sidebar panel, without needing to close and reopen it.
- New accounts are no longer incorrectly blocked by a paywall before Dassi finishes setting up the account.

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
