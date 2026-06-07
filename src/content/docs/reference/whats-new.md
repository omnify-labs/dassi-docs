---
title: What's New
description: Release notes and recent updates to dassi.
---

Stay up to date with the latest dassi features, improvements, and fixes.

---

## v0.24.0

### Slash command menu for skills and commands

Type `/` in the message box to open a floating menu listing all your installed skills and built-in commands. Start typing to filter the list, use ↑↓ to navigate, then press Enter or Tab to run. Press Escape to dismiss without running anything.

[Learn more about running skills](/guides/skills-and-context/#running-a-skill)

### Dassi automatically applies relevant skills

When you have skills installed, dassi now recognizes when one applies to your request and uses it without you having to explicitly ask. You can still invoke skills by name or through the slash command menu.

[Learn more about skills](/guides/skills-and-context/)

### Smarter response formatting

Dassi adapts how it presents information based on your task: shopping and recommendation requests surface images and direct links, comparison questions use tables, drafting tasks offer multiple variations, and multi-step workflows show progress summaries.

### BYOK subscription required for API key providers

Using your own OpenAI, Anthropic, or Google AI key now requires an active BYOK plan. A new annual option ($12/yr) is available alongside the monthly plan ($10/mo).

If you're on a BYOK provider without an active subscription, a banner appears in the chat with options to subscribe or switch to free managed credits.

[See plans](/reference/plans-and-billing/)

### Bug fixes

- Dassi no longer asks you to log in before navigating to authenticated services like Gmail, GitHub, or Google Search Console. It goes directly to the page and only surfaces an auth issue if it actually hits a login wall.

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
