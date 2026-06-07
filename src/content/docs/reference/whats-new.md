---
title: What's New
description: Release notes and recent updates to dassi.
---

Stay up to date with the latest dassi features, improvements, and fixes.

---

## v0.26.3

### File references

You can now give Dassi persistent access to files and folders on your computer. Add references in **Settings → References**, then pin the ones you want to share for a given conversation. Dassi can browse directories, read documents and code files, and write new files inside any pinned reference — so you can ask it to, say, read a folder of invoices or write a script to your project directory. [Learn more](/guides/file-references/)

### Background task status bar

When scheduled background tasks are active, a status bar now appears at the top of the chat. Each task shows a preview of its instruction, how often it runs, and a **Stop** button. A green dot means the task is running normally; a red dot means it stopped due to an error.

If Dassi exhausts your AI budget while running background tasks, it automatically cancels all scheduled tasks for that session, shows a red **!** badge on the extension icon, and sends a desktop notification.

### Settings tab order

The **Plan** tab now appears first in the settings navigation, and the BYOK pricing section is the default view within it.

### Bug fix

The `/compact` command now correctly reloads the agent's working context after compressing conversation history, so subsequent messages reflect the compacted summary.

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
