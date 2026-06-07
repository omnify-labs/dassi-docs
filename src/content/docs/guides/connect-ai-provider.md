---
title: AI Models & Providers
description: Choose your AI model — use managed credits or bring your own API key from OpenAI, Google, Anthropic, and more.
---

dassi supports multiple AI models. You can use managed credits (no setup required) or connect your own API keys from several providers.

## Managed credits (default)

When you sign in, dassi automatically provisions managed credits. No API key needed — just pick a model and start working.

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

The default model is **Gemini 3 Pro**. You can switch models in **Settings** at any time, or from the model badge below the chat input.

### Choosing a model

- **Gemini 3 Pro** — great all-around model, fast and capable. Good default choice.
- **Claude Sonnet 4.5** — excellent for writing, analysis, and complex reasoning.
- **Claude Haiku 4.5** — fastest response times, good for simple tasks.
- **Claude Opus 4.6** — most capable, best for complex multi-step tasks.
- **Gemini 3 Flash** — very fast, good for quick questions.

## Vision capability

Most dassi tasks involve taking screenshots and understanding what's on the page — clicking at exact positions, reading images, understanding layouts. This requires a vision-capable model.

If you select a text-only model (one without image understanding), dassi shows a **⚠ No vision** badge next to the model name and a persistent reminder below the chat input. Tasks that rely on reading the page visually will tell you they can't proceed.

Stick with a vision-capable model unless you're doing text-only work like writing, summarization, or coding.

## Bring your own key (BYOK)

You can connect API keys from several providers. Each provider's card in Settings shows the available models and a field to paste your key.

To add a provider:

1. Open **Settings** (gear icon in the sidebar)
2. Select the **Providers** tab
3. Find the provider card and paste in your API key

### OpenAI

| Model | Notes |
|-------|-------|
| GPT-5.5 | Most capable |
| GPT-5.4 | Balanced |
| GPT-5.4 Mini | Lightweight, cost-efficient |
| GPT-4o Mini | Budget option |

Get a key at [platform.openai.com](https://platform.openai.com). Keys start with `sk-proj-`.

You can also connect via **ChatGPT subscription** (OAuth) — no API key required if you have an active ChatGPT Plus or Pro plan.

### Google Gemini

| Model | Notes |
|-------|-------|
| Gemini 3.1 Pro | Best quality |
| Gemini 3 Flash | Fast |
| Gemini 3.1 Flash Lite | Most efficient |

Get a key from [Google AI Studio](https://aistudio.google.com). Keys start with `AIza-`.

### Anthropic Claude

| Model | Notes |
|-------|-------|
| Claude Opus 4.7 | Most capable |
| Claude Sonnet 4.6 | Balanced |
| Claude Haiku 4.5 | Fastest |

Get a key at [console.anthropic.com](https://console.anthropic.com). Keys start with `sk-ant-`.

### DeepSeek

| Model | Notes |
|-------|-------|
| DeepSeek V4 Pro | Frontier, large context |
| DeepSeek V4 Flash | Fast, cost-efficient |

Get a key at [platform.deepseek.com](https://platform.deepseek.com). Keys start with `sk-`.

### OpenRouter

OpenRouter is a proxy that routes to models from many providers. One key, many models.

Available models include:

| Model | Vision |
|-------|:------:|
| OpenAI GPT-5.5 | yes |
| OpenAI GPT-5.4 | yes |
| xAI Grok 4 | yes |
| Moonshot Kimi K2.6 | yes |
| Qwen 3 VL 235B | yes |
| Qwen 3 VL 30B | yes |
| Z.ai GLM-4.6V | yes |
| Z.ai GLM-5V Turbo | yes |
| Meta Llama 4 Scout | yes |
| Qwen 3.6 Plus | — |
| Qwen 3 Max Thinking | — |
| Qwen 3 Coder Plus | — |
| Z.ai GLM-5.1 | — |
| MiniMax M2.7 | — |

Models without vision are useful for writing, coding, and reasoning tasks where dassi doesn't need to see the page.

Get a key at [openrouter.ai](https://openrouter.ai). Keys start with `sk-or-`.

### Moonshot Kimi

| Model | Notes |
|-------|-------|
| Kimi K2.6 | Flagship, vision-capable |
| Kimi K2.5 | Previous generation |

Get a key at [platform.moonshot.cn](https://platform.moonshot.cn). Keys start with `sk-`.

### xAI Grok

| Model | Notes |
|-------|-------|
| Grok 4.3 | Flagship, 1M context |
| Grok 4 Fast | Fast, 2M context |
| Grok 4-1 Fast | Fast variant, 2M context |

Get a key at [console.x.ai](https://console.x.ai). Keys start with `xai-`.

## How dassi uses models

dassi uses your selected model as the main reasoning engine. For certain visual tasks (like clicking at specific coordinates on a page), dassi automatically uses a faster secondary model to keep things quick and cost-efficient. You don't need to configure this — it happens automatically.

## Switching models

You can switch models at any time from the **Settings** page or directly from the model badge below the chat input. The change takes effect for your next message. Your conversation history is preserved when switching models.
