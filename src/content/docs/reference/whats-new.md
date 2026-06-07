---
title: What's New
description: Release notes and recent updates to dassi.
---

Stay up to date with the latest dassi features, improvements, and fixes.

---

## v0.33.0

### Automate WhatsApp Web

Dassi now works with WhatsApp Web. Open [web.whatsapp.com](https://web.whatsapp.com) in a tab and Dassi automatically gains 12 tools for reading messages, sending text and files, reacting, searching chats, and managing group members. Every write action asks for your confirmation before it runs. [Learn more](/guides/whatsapp/)

<!-- TODO: screenshot of WhatsApp tools in action -->

### Connect to Azure, Ollama, or any OpenAI-compatible endpoint

You can now point Dassi at any server that speaks the OpenAI Chat Completions API — Azure OpenAI, LiteLLM, Ollama, vLLM, or any self-hosted inference proxy. Enter a base URL, model ID, and API key in the **Custom (OpenAI-compatible)** card in **Settings → Connection**. [Learn more](/guides/connect-ai-provider/#custom-openai-compatible-endpoint)

### New default model: Gemini 3.5 Flash

Managed accounts now default to **Gemini 3.5 Flash**, which is faster and more cost-efficient than the previous default. You can switch to any other available model in **Settings** at any time.

### Updates apply automatically

When Chrome downloads a new version of Dassi, it now applies the update in the background without waiting for a browser restart — as long as no task is running and the sidebar isn't open.

### Token and cost tracking with /usage

Type `/usage` in the message composer to see a breakdown of how many tokens the current task and the full session have used, along with the estimated API cost.

### Bug fixes and improvements

- WebMCP tools now surface the full underlying error message when something goes wrong on the page, instead of a generic failure notice.

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
