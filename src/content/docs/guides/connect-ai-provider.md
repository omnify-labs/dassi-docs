---
title: AI Models & Providers
description: Choose your AI model — use managed credits or bring your own API key.
---

Dassi supports multiple AI models. You can use managed credits (default, no setup required) or bring your own API key from one of several supported providers.

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

If you have an API key from a supported provider, you can use it in Dassi directly. Your tasks route through that provider's API and don't consume managed credits.

### Supported BYOK providers

| Provider | Example models | API key prefix |
|----------|---------------|----------------|
| OpenAI | GPT series | `sk-proj-...` |
| Google | Gemini series | `AIza-...` |
| Anthropic | Claude series | `sk-ant-...` |
| DeepSeek | DeepSeek V4 Pro, Flash | `sk-...` |
| OpenRouter | GPT, Grok, Kimi, Qwen, and more | `sk-or-...` |
| Kimi (Moonshot) | Kimi K2 series | `sk-...` |
| xAI | Grok 4 series | `xai-...` |
| Groq | Llama, Kimi, GPT-OSS | `gsk_...` |
| Cerebras | GPT-OSS, Qwen, GLM, Llama | `csk-...` |
| HuggingFace | DeepSeek, MiniMax, Kimi, GLM | `hf_...` |
| Mistral | Mistral Large, Magistral, Devstral | varies |

### Setting up a BYOK provider

1. Open **Settings** (gear icon in the sidebar toolbar).
2. Go to the **Connections** tab.
3. Find the provider you want and click its card.
4. Paste your API key.
5. Optionally pick a specific model — Dassi selects a sensible default if you don't.

Your key is stored locally in the extension and sent only to that provider's API.

### Getting an API key

Each provider has a developer console where you can generate a key:

- **OpenAI** — [platform.openai.com](https://platform.openai.com) → API Keys
- **Google** — [aistudio.google.com](https://aistudio.google.com) → Get API key
- **Anthropic** — [console.anthropic.com](https://console.anthropic.com) → API Keys
- **Groq** — [console.groq.com/keys](https://console.groq.com/keys)
- **Cerebras** — [inference.cerebras.ai](https://inference.cerebras.ai) → API Keys
- **HuggingFace** — [huggingface.co/settings/tokens](https://huggingface.co/settings/tokens) (Inference API)
- **Mistral** — [console.mistral.ai](https://console.mistral.ai) → API keys
- For DeepSeek, OpenRouter, Kimi, and xAI, search for their developer console and look for an API keys section.

## Voice transcription for Telegram

If you use Dassi through Telegram, you can send voice notes instead of typing. Dassi transcribes the audio and treats the resulting text as your prompt.

Transcription runs through the Whisper speech-to-text API. Two providers are supported — both reuse the BYOK key you already have configured for chat:

- **OpenAI Whisper** — uses your OpenAI API key
- **Groq Whisper** — uses your Groq API key

To set this up:

1. Make sure you've saved a BYOK key for OpenAI or Groq under **Settings → Connections**.
2. Go to **Settings → Preferences**.
3. Under **Voice transcription**, pick **OpenAI Whisper** or **Groq Whisper**.

If you send a voice note before choosing a provider, Dassi will tell you to configure one first.

## How dassi uses models

dassi uses your selected model as the main reasoning engine. For certain visual tasks (like clicking at specific coordinates on a page), dassi automatically uses a faster secondary model to keep things quick and cost-efficient. You don't need to configure this — it happens automatically.

## Switching models

You can switch models at any time from the **Settings** page. The change takes effect for your next message. Your conversation history is preserved when switching models.
