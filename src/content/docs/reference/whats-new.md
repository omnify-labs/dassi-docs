---
title: What's New
description: Release notes and recent updates to dassi.
---

Stay up to date with the latest dassi features, improvements, and fixes.

---

## v0.34.0

### Scheduled tasks

You can now set up recurring daily tasks that Dassi runs automatically. Ask Dassi in the side panel with a time, a site, and what to do — Dassi shows a consent card, and once you approve, the task runs every day at that time, even when the side panel is closed, as long as Chrome is open. [Learn more](/guides/scheduled-tasks/)

Manage all your schedules from the **Schedules** tab in Options — pause, resume, or delete tasks at any time.

### Gmail integration

When you're on Gmail, Dassi can now send email through Gmail's own message pipeline instead of clicking through the compose UI. Messages land correctly in your Sent folder and support `to`, `cc`, `bcc`, subjects, and plain-text or HTML bodies. [Learn more](/guides/browser-automation/#gmail)

### Bug fixes

- **Scheduled tasks now fail independently.** Previously, a single recurring task that failed repeatedly could affect all tasks in the session. Now each task tracks failures on its own — after three consecutive failures, only that task is paused. It stays visible in the **Schedules** tab and can be resumed once the underlying problem is fixed.

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
