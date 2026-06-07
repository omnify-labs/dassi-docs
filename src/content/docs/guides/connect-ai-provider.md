---
title: AI Models & Providers
description: Choose your AI model — use managed credits or bring your own API key.
---

Dassi supports multiple AI models. You can use managed credits (default, no setup required) or bring your own API key from several providers.

## Managed credits (default)

When you sign in, Dassi automatically provisions managed credits. No API key is needed — just pick a model and start working.

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

- **Gemini 3 Pro** — great all-around model, fast and capable. Good default choice.
- **Claude Sonnet 4.5** — excellent for writing, analysis, and complex reasoning.
- **Claude Haiku 4.5** — fastest response times, good for simple tasks.
- **Claude Opus 4.6** — most capable, best for complex multi-step tasks.
- **Gemini 3 Flash** — very fast, good for quick questions.

## Bring your own key (BYOK)

If you prefer to use your own API key, Dassi supports eight providers. All models must be vision-capable — Dassi takes screenshots to interact with pages, so text-only models won't work.

### Setting up a provider

1. Open **Settings** (gear icon in the sidebar toolbar).
2. Click the **Plan** tab.
3. The **BYOK** section is selected by default — scroll down to the provider card you want.
4. Paste your API key and click **Save**.

<!-- TODO: screenshot of BYOK provider section in the Plan tab -->

### Supported BYOK providers

| Provider | Available models |
|----------|-----------------|
| **OpenAI** | GPT-5.5, GPT-5.4, GPT-5.4 Mini, GPT-4o Mini |
| **ChatGPT** (subscription) | GPT-5.5, GPT-5.4 — sign in with your ChatGPT account |
| **Anthropic** | Claude Opus 4.7, Claude Sonnet 4.6, Claude Haiku 4.5 |
| **Google** | Gemini 3.1 Pro, Gemini 3 Flash, Gemini 3.1 Flash Lite |
| **DeepSeek** | DeepSeek V4 Pro, DeepSeek V4 Flash |
| **OpenRouter** | GPT-5.5, Grok 4, Kimi K2.6, Qwen3-VL, and more |
| **Kimi (Moonshot AI)** | Kimi K2.6, Kimi K2.5 |
| **xAI (Grok)** | Grok 4.3, Grok 4 Fast, Grok 4 Fast (1M context) |

OpenRouter routes requests through a single key to models from multiple providers. All models in the OpenRouter list are vision-capable.

### Getting an OpenAI API key

1. Sign up at [platform.openai.com](https://platform.openai.com).
2. Navigate to **API Keys** in your account settings.
3. Click **Create new secret key**.
4. Copy the key and paste it into the OpenAI card in Dassi's **Plan** tab.

### Connecting ChatGPT

The ChatGPT card uses your ChatGPT subscription rather than an API key. Click **Sign in to ChatGPT** and follow the OAuth prompt.

## How Dassi uses models

Dassi uses your selected model as the main reasoning engine. For certain visual tasks — like clicking at a specific coordinate on a page — Dassi automatically uses a faster secondary model to keep things quick and cost-efficient. You don't need to configure this.

## Switching models

You can switch models at any time from **Settings**. The change takes effect for your next message. Your conversation history is preserved when switching models.
