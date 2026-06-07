---
title: AI Models & Providers
description: Choose your AI model — use managed credits or bring your own API key.
---

dassi supports multiple AI models. You can use managed credits (default, no setup required) or connect your own account with OpenAI ChatGPT, Google Gemini, or Anthropic Claude.

## Managed credits (default)

When you sign in, dassi automatically provisions managed credits. No API key is needed — just pick a model and start working.

Available models depend on your plan:

| Model | Free Trial | Paid plans |
|-------|-----------|------------|
| Gemini 3 Pro | yes | yes |
| Claude Haiku 4.5 | — | yes |
| Claude Sonnet 4.5 | — | yes |
| Claude Opus 4.6 | — | yes |
| Gemini 3 Flash | — | yes |
| DeepSeek V3.2 | — | yes |
| GLM 4.7 | — | yes |

The default model is **Gemini 3 Pro**. You can switch models in **Settings** at any time.

### Choosing a model

- **Gemini 3 Pro** — great all-around model, fast and capable. Good default choice
- **Claude Sonnet 4.5** — excellent for writing, analysis, and complex reasoning
- **Claude Haiku 4.5** — fastest response times, good for simple tasks
- **Claude Opus 4.6** — most capable, best for complex multi-step tasks
- **Gemini 3 Flash** — very fast, good for quick questions

## Bring your own key (BYOK)

The **Connection** tab in Settings shows three provider cards — OpenAI ChatGPT, Google Gemini, and Anthropic Claude. Open **Settings** (gear icon in the sidebar toolbar) and select **Connection** to get started.

### OpenAI ChatGPT

Connect by signing in with your ChatGPT account or by entering an API key directly.

**Sign in** — Click **Sign In** on the ChatGPT card. Dassi redirects you to ChatGPT's authorization page; approve access and you'll be returned to the extension. Requires an active ChatGPT subscription that supports API access.

**API key** — Click **Use API key** below the Sign In button, enter your key (starts with `sk-proj-`), and click **Save**.

To get an API key: go to [platform.openai.com](https://platform.openai.com), navigate to **API Keys**, and create a new secret key.

### Google Gemini

Connect by signing in with your Google account or by entering a Gemini API key (starts with `AIza-`).

**Sign in** — Click **Sign In** on the Gemini card. Requires a Google account with an active Google AI subscription that supports API access.

**API key** — Click **Use API key**, paste your key, and click **Save**.

### Anthropic Claude

The Claude card supports API keys only. Click the **API Key** button, enter your key (starts with `sk-ant-`), and click **Save**.

## How dassi uses models

dassi uses your selected model as the main reasoning engine. For certain visual tasks (like clicking at specific coordinates on a page), dassi automatically uses a faster secondary model to keep things quick and cost-efficient. You don't need to configure this — it happens automatically.

## Switching models

You can switch models at any time from the **Settings** page. The change takes effect for your next message. Your conversation history is preserved when switching models.
