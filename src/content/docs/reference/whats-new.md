---
title: What's New
description: Release notes and recent updates to dassi.
---

Stay up to date with the latest dassi features, improvements, and fixes.

---

## v0.29.0

### Persistent site tools

dassi can now install lightweight JavaScript tools directly on specific websites that persist across sessions. Once installed, dassi calls them automatically on matching pages without re-injecting code each time. You can view and delete installed tools in **Settings > User Scripts**. [Learn more](/guides/browser-automation/#persistent-site-tools)

### More models on OpenRouter

The OpenRouter provider now includes Qwen 3 (vision and text-only reasoning variants), Z.ai GLM (vision and text-only), and MiniMax M2.7, alongside the existing GPT-5.5, Grok 4, Kimi K2.6, and Llama 4 Scout. [See the full model list](/guides/connect-ai-provider/#openrouter)

### Vision capability warning

When you select a text-only model (one that can't analyze screenshots), dassi now shows a **⚠ No vision** badge next to the model name and a persistent reminder below the chat input. Models without vision still work well for writing, coding, and reasoning tasks. [Learn more](/guides/connect-ai-provider/#vision-capability)

### Improved subscription management

The **Manage** button on the Current Plan card now opens a dropdown with separate **Switch plan** and **Cancel subscription** options. [Learn more](/reference/plans-and-billing/#managing-your-subscription)

### BYOK on managed plans

Starter, Pro, and Max subscribers can now connect their own API keys (BYOK) in addition to using managed credits.

### Richer skill details

The skill detail view in **Settings > Skills** now shows each skill's token footprint (always-loaded tokens vs. on-activation tokens), any tool restrictions, and custom metadata from the skill's specification. [Learn more](/guides/skills-and-context/#skill-details)

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
