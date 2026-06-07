---
title: What's New
description: Release notes and recent updates to dassi.
---

Stay up to date with the latest dassi features, improvements, and fixes.

---

## v0.31.0

### Four new BYOK providers: Groq, Cerebras, HuggingFace, and Mistral

You can now bring your own API key for four more providers — Groq, Cerebras, HuggingFace, and Mistral — alongside the existing lineup of OpenAI, Google, Anthropic, DeepSeek, OpenRouter, Kimi, and xAI. Each new provider shows up as its own card in **Settings → Connections**. Add your key, pick a model, and Dassi routes your tasks through it.

[See all supported BYOK providers](/guides/connect-ai-provider/#supported-byok-providers)

### Telegram voice notes

If you use Dassi through Telegram, you can now send a voice note instead of typing. Dassi transcribes it using Whisper and treats the text as your prompt. You'll need a BYOK key for either OpenAI or Groq, and you pick which one handles transcription in **Settings → Preferences → Voice transcription**.

[Set up voice transcription](/guides/connect-ai-provider/#voice-transcription-for-telegram)

### Import skill bundles from .zip files

The **Import Skill** dialog now accepts `.zip` bundles in addition to a SKILL.md URL. A bundle is a folder containing `SKILL.md` at the root, plus optional `references/` and `assets/` subdirectories, zipped together. Drop the file in and Dassi installs the skill along with all its included text files.

[Import a skill bundle](/guides/skills-and-context/#importing-a-skill-bundle)

### German language support

The Dassi interface is now available in German. Switch the language in **Settings → Preferences**.

### Contact tab in Settings

A new **Contact** tab in Settings gives you quick access to the support email, Discord, and Reddit community — without leaving your browser.

### Bug fixes

- Adding a BYOK key while on a free trial no longer clears your remaining free-tier credits.
- The notification gateway now automatically recovers a stale push endpoint when the service worker wakes — this fixes occasional missed Telegram notifications.
- Signing in from the Settings page now triggers proper account provisioning.

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
