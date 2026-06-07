---
title: What's New
description: Release notes and recent updates to dassi.
---

Stay up to date with the latest dassi features, improvements, and fixes.

---

## v0.32.0

### Start fresh in Telegram with /new

If you use Dassi through the Telegram bot, you can now send `/new` to instantly clear your conversation and start a fresh session. Dassi stops any task that's currently running right away — `/new` doesn't wait in line behind ongoing work. If you sent a message and then quickly sent `/new` before Dassi had a chance to respond, the earlier message is automatically cancelled so you're not left with a stale reply.

### More accurate browser automation

Dassi now detects when a JavaScript selector it uses to find an element on the page matches more than one element. When that happens, Dassi sees which elements were matched and which one it acted on, and can course-correct on the spot by using a more specific approach. This reduces cases where Dassi clicked the wrong button on pages with multiple similar elements — for example, hitting "Send feedback" instead of "Send" on Gmail.

### Bug fixes

- **Telegram: long tasks no longer cut short.** Tasks that took several minutes via Telegram were sometimes killed by the gateway watchdog because acknowledgement and liveness checks were treated as the same signal. They're now separate, so long research or multi-step tasks complete reliably.
- **Telegram: replies no longer lost after Chrome restarts.** If Chrome (or the extension's service worker) restarted while Dassi was mid-task, the completed reply sometimes never reached the Telegram bot. Dassi now flushes any unsent replies when it starts up and when you open the sidebar.

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
