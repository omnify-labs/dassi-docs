---
title: What's New
description: Release notes and recent updates to dassi.
---

Stay up to date with the latest dassi features, improvements, and fixes.

---

## v0.30.0

### Cross-tab image capture

dassi can now pick up an image from one web page and use it as an attachment on another — without any manual downloading. For example, it can copy a product photo from a catalog and attach it to an upload field on a different site.

Captured images respect the source page's login session, so photos behind authentication work the same as public ones. [Learn more](/guides/browser-automation/#image-capture)

### Telegram reaction feedback

When you send dassi a task via Telegram, your message now gets a 👀 reaction as soon as dassi picks it up. You'll see ✅ when the task completes and ❌ if something goes wrong — so you always know the state of your request without waiting for a reply.

### More reliable handling of long tasks and large pages

Two under-the-hood improvements make extended tasks more consistent:

- **Screenshot memory** — screenshots dassi takes during a session are now stored locally. If a long task triggers context compression, dassi can still retrieve and reason about earlier screenshots rather than losing them.
- **Large content handling** — when a page produces a very large amount of text (search results, documentation, data exports), dassi now saves it to local storage and reads it in chunks instead of loading everything into context at once. This prevents context overload on content-heavy pages.

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
