---
title: AI Models & Providers
description: Choose your AI model — use managed credits or bring your own API key.
---

dassi supports multiple AI models. You can use managed credits (default, no setup required) or bring your own OpenAI API key.

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

If you prefer to use your own API key, dassi supports several providers:

1. Open **Settings** (gear icon in the sidebar toolbar)
2. Select **BYOK** as the billing mode
3. Choose a provider, enter your API key, and select a model

### OpenAI

| Model | Description |
|-------|-------------|
| GPT-5.5 | Most capable OpenAI model |
| GPT-5.4 | Balanced performance and cost |
| GPT-5.4 mini | Faster and more affordable |
| GPT-4o mini | Budget-friendly option |

To get an OpenAI API key: sign up at [platform.openai.com](https://platform.openai.com), go to **API Keys**, and click **Create new secret key**.

### Google Gemini

| Model | Description |
|-------|-------------|
| Gemini 3.5 Flash | Fast and capable, 1M context |
| Gemini 3.1 Pro Preview | Most capable Gemini model |
| Gemini 3.1 Flash Lite | Efficient, lower cost |

To get a Google AI Studio API key: visit [aistudio.google.com](https://aistudio.google.com), open **Get API key**, and create a key for your project.

### Other providers

Dassi also supports Anthropic, DeepSeek, OpenRouter, xAI Grok, Moonshot Kimi, and more. Open **Settings → Connections** to see all available providers and their supported models.

## How dassi uses models

dassi uses your selected model as the main reasoning engine. For certain visual tasks (like clicking at specific coordinates on a page), dassi automatically uses a faster secondary model to keep things quick and cost-efficient. You don't need to configure this — it happens automatically.

## Switching models

You can switch models at any time from the **Settings** page. The change takes effect for your next message. Your conversation history is preserved when switching models.
