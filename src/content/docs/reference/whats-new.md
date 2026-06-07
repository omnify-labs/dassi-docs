---
title: What's New
description: Release notes and recent updates to dassi.
---

Stay up to date with the latest dassi features, improvements, and fixes.

---

## v0.28.0

### AI-generated user scripts

Dassi can now write and manage persistent JavaScript snippets — called user scripts — that run automatically on every future visit to matching sites. Tell Dassi what you want in chat ("highlight all TODO comments on our wiki", "pre-fill this form field"), and it creates, registers, and manages the script for you.

A confirmation card appears in the chat after each script is created, with an **Undo** button so you can remove a script immediately if you change your mind.

The first time you ask Dassi to create a script, a setup card walks you through two one-time Chrome permissions. [Learn more](/guides/user-scripts/)

<!-- TODO: screenshot of user script confirmation card -->

### More providers for BYOK

Bring your own API key from four new providers:

- **DeepSeek** — DeepSeek V4 Pro and V4 Flash
- **OpenRouter** — routes to GPT, Grok, Kimi, Qwen, and more via a single key
- **Kimi (Moonshot AI)** — Kimi K2.6 and K2.5
- **xAI (Grok)** — Grok 4.3, Grok 4 Fast, and Grok 4 Fast (1M context)

Provider configuration is now in the **Plan** tab (the **BYOK** section), replacing the separate Connection tab. [Learn more](/guides/connect-ai-provider/)

### Model refresh

The BYOK model lineup is updated: OpenAI adds **GPT-5.5**, Anthropic adds **Claude Opus 4.7**, and Google's **Gemini 3.1 Flash Lite** is now generally available.

### Welcome screen on fresh install

A welcome modal appears the first time you open Dassi after installing it, pointing you to key features including Remote control.

### Remote control reliability

The Telegram push subscription layer now automatically detects and repairs drift, so Remote control sessions stay connected more reliably after long idle periods.

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
