---
title: AI Models & Providers
description: Choose your AI model — use managed credits or bring your own API key.
---

dassi supports multiple AI models. You can use managed credits (default, no setup required), bring your own API key for a named provider, or connect any OpenAI-compatible endpoint.

## Managed credits (default)

When you sign in, dassi automatically provisions managed credits. No API key is needed — just pick a model and start working.

Available models depend on your plan:

| Model | Free credit | Paid plans |
|-------|-----------|------------|
| Gemini 3.5 Flash | yes | yes |
| Gemini 3 Pro | yes | yes |
| Claude Haiku 4.5 | — | yes |
| Claude Sonnet 4.5 | — | yes |
| Claude Opus 4.6 | — | yes |
| Gemini 3 Flash | — | yes |
| DeepSeek V3.2 | — | yes |
| GLM 4.7 | — | yes |

The default model is **Gemini 3.5 Flash**. You can switch models in **Settings** at any time.

### Choosing a model

- **Gemini 3.5 Flash** — fast and cost-efficient. Good all-around default choice
- **Gemini 3 Pro** — strong general-purpose model, good for complex reasoning
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

## Custom (OpenAI-compatible) endpoint

You can connect any server that speaks the [OpenAI Chat Completions API](https://platform.openai.com/docs/api-reference/chat), including:

- **Azure OpenAI** — a model deployed in your Azure subscription
- **Ollama** — local models running on your machine
- **LiteLLM** — a proxy that routes to many providers under one endpoint
- **vLLM** and other self-hosted inference servers

### Connecting

1. Open **Settings** (gear icon in the sidebar toolbar) and select the **Connection** tab
2. Find the **Custom (OpenAI-compatible)** card and click **Add endpoint**
3. Enter the **Base URL** of your endpoint — for example, `https://my-resource.openai.azure.com/openai/v1` for Azure or `http://localhost:11434` for a local Ollama server
4. Enter the **Model ID** — the exact identifier your server expects, e.g. `gpt-4o`, `llama3.2`, or `mistral-7b`
5. Enter your **API key**. For Ollama running locally, enter any non-empty string (e.g. `ollama`)
6. Click **Connect** — Chrome will ask to allow access to that endpoint, then dassi verifies the connection

### Supported model families

Dassi accepts model IDs from these families: GPT, Claude, Gemini/Gemma, Grok, Kimi/Moonshot, DeepSeek, Llama, Qwen, Mistral/Mixtral, Phi, Command-R, GLM, Nemotron, and Yi. If your model ID doesn't match a supported family, the connection will be blocked with a message telling you which families are accepted.

### Notes

- Local servers using plain HTTP (e.g. `http://localhost:11434`) are allowed. Remote endpoints must use HTTPS.
- Dassi normalizes your base URL to end with `/v1`, so entering `http://localhost:11434` or `http://localhost:11434/v1` connects to the same endpoint.

## How dassi uses models

dassi uses your selected model as the main reasoning engine. For certain visual tasks (like clicking at specific coordinates on a page), dassi automatically uses a faster secondary model to keep things quick and cost-efficient. You don't need to configure this — it happens automatically.

## Switching models

You can switch models at any time from the **Settings** page. The change takes effect for your next message. Your conversation history is preserved when switching models.
