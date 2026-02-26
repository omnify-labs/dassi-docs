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

If you prefer to use your own OpenAI API key:

1. Open **Settings** (gear icon in the sidebar toolbar)
2. Select **BYOK** as the billing mode
3. Enter your **OpenAI API key**
4. Choose a model:

| Model | Description |
|-------|-------------|
| GPT-5 | Most capable OpenAI model |
| GPT-5 Mini | Balanced performance and cost |
| GPT-5 Nano | Fastest, most affordable |

### Getting an OpenAI API key

1. Sign up at [platform.openai.com](https://platform.openai.com)
2. Navigate to **API Keys** in your account settings
3. Click **Create new secret key**
4. Copy the key and paste it in dassi's settings

## How dassi uses models

dassi uses your selected model as the main reasoning engine. For certain visual tasks (like clicking at specific coordinates on a page), dassi automatically uses a faster secondary model to keep things quick and cost-efficient. You don't need to configure this — it happens automatically.

## Switching models

You can switch models at any time from the **Settings** page. The change takes effect for your next message. Your conversation history is preserved when switching models.
