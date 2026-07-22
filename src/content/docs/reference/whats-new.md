---
title: What's New
description: Release notes and recent updates to dassi.
---

Stay up to date with the latest dassi features, improvements, and fixes.

---

## v0.46.0

### Profile card shows your email only

The account profile in **Settings** used to show your full name above your email, which often just repeated the same information. It now shows your email address alone, and your avatar's initials are generated from it too.

---

## v0.39.0

### Task dashboard at app.dassi.ai

A new web page, [app.dassi.ai](https://app.dassi.ai), shows every dassi task across your browser in one place — what's running, what needs your approval, what's scheduled, and what's recently finished. Type a prompt into its command bar to start a new task without opening a tab first. [Learn more](/guides/task-dashboard/)

### Custom endpoints: no API key required, plus adjustable timeout

The **Custom (OpenAI-compatible)** connection card no longer requires an API key — servers that don't need auth, like LM Studio, Ollama, and vLLM, can leave the field blank. Plain HTTP base URLs are now accepted for any host, not just `localhost`, so self-hosted servers elsewhere on your LAN connect too.

A new **Advanced** section lets you set how long dassi waits for the model to start responding (10–600 seconds, default 600) — useful for large local models with a slow first token. If a request fails right after a successful connection, dassi now shows a specific message pointing at the server's CORS settings instead of a generic network error. [Learn more](/guides/connect-ai-provider/#custom-openai-compatible-endpoint)

### Auto-approve sessions no longer expire

Choosing **Approve + auto-approve rest of session** on a plan used to stop auto-approving after 20 plans or 30 minutes, whichever came first. It now stays active for the whole conversation until you click **Stop**.

---

## v0.35.0

### Pay with WeChat

If your Dassi interface language is set to Chinese, plan cards in **Settings → Plan & Billing** now show a **微信支付** (WeChat Pay) button. This lets you buy any tier — BYOK, Starter, Pro, or Max — as a one-time payment without signing up for a recurring subscription.

The term matches the billing interval toggle: 30 days at the monthly price, or 365 days at the annual price. Prices are in USD; Stripe shows the ¥ equivalent at checkout. The purchase doesn't auto-renew — when the term ends, access expires automatically.

The WeChat Pay button only appears when you have no active subscription. [See Plans & Billing](/reference/plans-and-billing/)

### Bug fix: monthly credits on annual plans

Annual managed subscribers (Starter, Pro, and Max) were only receiving their tier's credit allowance once per year — when the annual invoice was paid — rather than monthly. This is now fixed. If you're on an annual plan, your credit refreshes every month throughout the year.

---

## v0.34.1

### Annual pricing in the Plans tab

The **Plans & Billing** tab now defaults to the yearly billing view and shows annual prices as a per-month-billed-annually figure — so a plan billed at $120/year displays as $10/month. Use the **Monthly / Yearly** toggle to compare both intervals side by side. Choosing annual billing saves up to 50% across all plans.

The button on each plan card now reads "Get Starter", "Get Pro", and so on, so it's clear which tier you're selecting before you commit.

[See Plans & Billing](/reference/plans-and-billing/)

### Model picker now scrolls

The model dropdown in the sidebar now scrolls when there are more models than fit on screen. This was most noticeable when several AI providers were connected at the same time.

### CLI: multiple Chrome profiles

If you use the Dassi CLI with more than one Chrome profile open, each profile now registers with the CLI daemon using a stable install ID and an optional label. This lets CLI commands reliably target the right browser when multiple profiles are running.

### Bug fixes

- Model picker dropdown overflowed the panel when many providers were connected. It now scrolls.

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

## v0.32.2

### Monthly/Yearly toggle on the Plan tab

The Plan & Billing tab now shows all four plans — BYOK, Starter, Pro, and Max — side by side in a single flat grid. A **Monthly** / **Yearly** toggle above the cards lets you compare prices at both billing intervals without leaving the tab.

Switch to **Yearly** to see the discounted annual price for each plan, with the equivalent monthly cost struck through and a "Save X%" badge so the difference is obvious at a glance. BYOK yearly is $60/year (50% off the monthly rate); managed plans (Starter, Pro, Max) save approximately 17%.

Your current plan appears in the **Current Plan** row at the top. Click **Manage** on that row to switch plans, update payment, or cancel through the Stripe billing portal.

<!-- TODO: screenshot of the new flat tier picker with Yearly selected -->

---

## v0.32.1

### Free credit for new users

New accounts now get $5 in free managed credits to get started — no credit card. Use it to try Dassi before committing to a paid plan.

When you install Dassi, the welcome screen shows the offer. Sign in to claim it.

See [Plans & Billing](/reference/plans-and-billing/) for details on what managed credits cover.

<!-- TODO: screenshot of welcome modal -->

### Bug fixes

- Signing in or out from the options page (or an OAuth popup) now immediately updates the sidebar panel, without needing to close and reopen it.
- New accounts are no longer incorrectly blocked by a paywall before Dassi finishes setting up the account.

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

## v0.31.1

### More reliable JavaScript actions

When Dassi uses JavaScript to click a button, submit a form, or dispatch a UI event, it now checks whether the action actually had an effect. If the page URL and title both stayed the same after a state-changing script ran — a strong sign the click missed its target or the event was rejected — Dassi flags the result as unconfirmed and investigates further instead of reporting success. This eliminates a class of false "I did it" responses, most notably on single-page apps where a failed submit returns no error.

### Dead-link and redirect detection

Dassi now verifies every URL it visits resolves to a live page. It detects soft 404s, robot-check pages, and silent redirects (where a URL appears to succeed but lands on a homepage or generic search page). When Dassi finds a dead or redirected URL it won't cite that address as a valid result — it'll tell you what happened and try a different approach.

### Gemini 3.5 Flash available via Google BYOK

If you've connected your own Google AI Studio API key, Gemini 3.5 Flash is now available as a model option. See [AI Models & Providers](/guides/connect-ai-provider/) for setup details.

### Title-change trigger for scheduled tasks

Scheduled tasks can now use a `"title"` trigger in addition to the default timer. A title-triggered task wakes up whenever the watched tab's page title changes — no polling interval required. This is ideal for monitoring inboxes, chat apps, and dashboards that reflect new activity in their title (for example, "(28) WhatsApp Web" or "Inbox (12) – Gmail"). The trigger mutes itself while Dassi is working and briefly after, so Dassi's own activity can't accidentally re-trigger the task.

### Smarter tool routing on WebMCP pages

On web pages that expose [WebMCP](https://github.com/google-deepmind/model-context-protocol) tools, Dassi now preferentially calls those page-native tools instead of DOM scraping. Page-declared tools return canonical IDs and confirmed state rather than scraped values, so automation on WebMCP-enabled apps is more reliable.

### Telegram: typing indicator

The Telegram integration now shows a "typing…" indicator while Dassi is processing your request, giving you visual feedback right away.

### Bug fixes

- Fixed `fetch_url` incorrectly sending a request body on GET and HEAD requests, which caused some servers to reject the call.

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

## v0.27.0

### Control Dassi from Telegram

You can now send tasks to Dassi from your phone via Telegram and get replies without touching your computer. Link your Telegram account in **Settings → Gateway**, then message `@dassi_ai_bot` with whatever you want done. Dassi runs the task in Chrome and replies when it's finished — attachments and photos work too.

The same conversation appears in Dassi's side panel, so you can watch tasks run live or review them later. If you have Dassi on multiple computers, you can link them all and use `/use <label>` to choose which one handles requests. [Learn more](/guides/telegram-remote-control/)

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

## v0.26.2

### Refreshed provider icons in Connection settings

The **Connection** settings tab now shows each AI provider's official logo — the ChatGPT mark for OpenAI, Claude's logo for Anthropic, and Gemini's gradient icon for Google — alongside each provider's full product name. It's much easier to tell at a glance which provider you're connecting or have already connected. [Learn more](/guides/connect-ai-provider/)

<!-- TODO: screenshot of the Connection tab with the three provider cards -->

### Enter key works correctly in rich text editors

Dassi now handles Enter correctly when typing into rich text editors like Gmail compose, Slack, and LinkedIn messaging. Previously, Enter in these editors would insert a raw line break instead of triggering the editor's own Enter handler, which could cause unexpected behavior when submitting messages or creating paragraph breaks. The fix applies automatically — no settings change needed.

---

## v0.26.1

### Sign in with Google for free Gemini access

You can now connect your Google account to use Gemini models through Google's Cloud Code Assist free tier — no subscription or API key required. In **Settings → Connection**, find the Google row and click **Sign In**. Dassi opens Google's login page, you grant access, and Dassi automatically provisions a Cloud Code Assist project. [Learn more](/guides/connect-ai-provider/#sign-in-with-google)

<!-- TODO: screenshot of Google sign-in button in Connection tab -->

### Clearer plan page

Your active plan is now easier to spot: the button on your current tier turns a deeper orange and reads **Current**, replacing the small badge that used to sit at the top of the card. The **RECOMMENDED** badge stays visible on its card at all times, even when you've selected a different tier, so you can always see which plan Dassi suggests.

### Bug fixes

- The Google sign-in button on the settings overlay now shows Google's official brand mark.

---

## v0.26.0

### Redesigned Plan & Billing tab

The **Settings > Plan** tab now has dedicated sections for **Managed Plans** and **BYOK**, so you can browse and subscribe to each independently. A **Current Plan** card at the top shows all active subscriptions at a glance. Each active subscription has its own **Manage** button that opens the Stripe billing portal scoped to just that subscription. [Learn more](/reference/plans-and-billing/)

### BYOK and Managed plans can now run together

You can now subscribe to both a BYOK plan and a Managed plan at the same time. The Current Plan card shows both, and managing one subscription doesn't affect the other. [Learn more](/reference/plans-and-billing/#running-byok-and-a-managed-plan-together)

### BYOK annual billing

BYOK is now available as an annual subscription for $12/year — a 90% saving compared to the monthly rate. The BYOK section shows both Monthly and Annual cards so you can pick the interval that works for you.

### Starter repriced to $25/month

The Starter managed plan dropped from $30/month to $25/month. Everything included in Starter stays the same.

### Bug fixes

- The dassi sidebar now reliably refreshes state from the correct storage area, fixing edge cases where plan or provider changes weren't reflected until the extension reloaded.

---

## v0.24.1

### Save on BYOK with annual billing

The BYOK plan card in **Settings > Plan** now has a **Monthly / Annual** toggle. Annual billing costs $12 per year — a 90% saving compared to paying $10 month-to-month. Switch the toggle before you subscribe to pick the interval that works for you.

The Plan & Billing settings page is also reorganized into two clear sections — **BYOK Plans** (bring your own API key) and **Managed Plans** (credits included) — so it's easier to compare your options at a glance.

### Your account now lives in the settings header

Your name and profile picture appear in the top-right corner of the Settings page header, alongside a sign-out button. There's no longer a separate Account tab.

### Rate dassi from the sidebar

Open the sidebar overflow menu (**⋮**) and select **Rate dassi** to leave a review on the Chrome Web Store.

### Bug fixes and reliability

- Completing a subscription checkout now automatically dismisses the paywall prompt in the chat panel — no manual reload needed.
- Tasks that stop responding mid-run now auto-recover instead of staying stuck indefinitely.
- Subscription status refreshes each time you open the sidebar and after each task completes, so plan changes take effect without a manual reload.

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

## v0.23.1

### Bug fixes

- Desktop notifications now consistently show "Agent completed the task" as the message body. Previously the body sometimes repeated the app name instead. The task name (tab group title) is still appended as context when available.

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
