---
title: 模型与服务商
description: 选择 AI 模型——使用托管额度，或填入自己的 API key。
---

dassi 支持多种 AI 模型。你可以使用托管额度（默认，无需设置）、为指定服务商填入自己的 API key，或连接任何 OpenAI 兼容的端点。

## 托管额度（默认）

登录后，dassi 会自动为你开通托管额度。不需要 API key——选一个模型就能开始。

可用模型取决于你的套餐：

| 模型 | 免费额度 | 付费套餐 |
|-------|-----------|------------|
| Gemini 3.5 Flash | 是 | 是 |
| Gemini 3 Pro | 是 | 是 |
| Claude Haiku 4.5 | — | 是 |
| Claude Sonnet 4.5 | — | 是 |
| Claude Opus 4.6 | — | 是 |
| Gemini 3 Flash | — | 是 |
| DeepSeek V3.2 | — | 是 |
| GLM 4.7 | — | 是 |

默认模型是 **Gemini 3.5 Flash**。随时可以在 **Settings** 里切换。

### 怎么选模型

- **Gemini 3.5 Flash** — 快而省。全能型默认选择
- **Gemini 3 Pro** — 通用能力强，适合复杂推理
- **Claude Sonnet 4.5** — 写作、分析和复杂推理表现出色
- **Claude Haiku 4.5** — 响应最快，适合简单任务
- **Claude Opus 4.6** — 能力最强，适合复杂的多步任务
- **Gemini 3 Flash** — 非常快，适合快速提问

## 使用自己的 key（BYOK）

如果你想用自己的 OpenAI API key：

1. 打开 **Settings**（侧栏工具栏的 **⋮** 菜单 → **Settings**）
2. 计费模式选 **BYOK**
3. 输入你的 **OpenAI API key**
4. 选择模型：

| 模型 | 说明 |
|-------|-------------|
| GPT-5 | OpenAI 能力最强的模型 |
| GPT-5 Mini | 性能与成本均衡 |
| GPT-5 Nano | 最快、最便宜 |

### 获取 OpenAI API key

1. 在 [platform.openai.com](https://platform.openai.com) 注册
2. 进入账户设置中的 **API Keys**
3. 点击 **Create new secret key**
4. 复制 key，粘贴到 dassi 的设置里

## 自定义（OpenAI 兼容）端点

任何实现了 [OpenAI Chat Completions API](https://platform.openai.com/docs/api-reference/chat) 的服务器都可以连接，包括：

- **Azure OpenAI** — 部署在你 Azure 订阅里的模型
- **Ollama** — 在本机运行的本地模型（[分步教程](/zh/guides/ollama/)）
- **LiteLLM** — 把多个服务商汇聚到一个端点的代理
- **vLLM** 及其他自托管推理服务器

### 连接步骤

1. 打开 **Settings**（侧栏工具栏的 **⋮** 菜单 → **Settings**），进入 **Models**
2. 展开 **API keys** 区域，滚动到底部的 **Custom (OpenAI-compatible)** 卡片，点击 **Add endpoint**
3. 输入端点的 **Base URL** — 比如 Azure 是 `https://my-resource.openai.azure.com/openai/v1`，本地 Ollama 是 `http://localhost:11434`
4. 输入 **Model ID** — 服务器要求的准确标识，如 `gpt-4o`、`llama3.2` 或 `mistral-7b`。这一项可选：留空的话 dassi 会列出端点上报的模型，让你在聊天里选
5. 如果服务器需要，输入 **API key**。不需要鉴权的服务器（LM Studio、Ollama、vLLM）可以留空
6. 点击 **Save** — Chrome 会请求允许访问该端点，然后 dassi 验证连接

### 支持的模型系列

dassi 接受以下系列的模型 ID：GPT、Claude、Gemini/Gemma、Grok、Kimi/Moonshot、DeepSeek、Llama、Qwen、Mistral/Mixtral、Phi、Command-R、GLM、Nemotron 和 Yi。如果模型 ID 不属于支持的系列，连接会被拦下，并提示哪些系列可以用。

### 高级：响应超时

点击 Custom 卡片里的 **Advanced** 可以设置 **响应超时**——dassi 等待模型开始响应的最长时间。默认 600 秒，最低可设为 10 秒。如果你跑的是首个 token 很慢的大型本地模型，就调高；如果希望遇到慢或卡住的服务器时快速失败，就调低。

### 说明

- 自定义端点允许使用纯 HTTP 的 base URL（如 `http://localhost:11434` 或 `http://192.168.1.20:11434`），因为本机或局域网里的自托管服务器通常没配 HTTPS。Azure 这类预设仍然要求 HTTPS。
- dassi 会把 base URL 规范成以 `/v1` 结尾，所以输入 `http://localhost:11434` 和 `http://localhost:11434/v1` 连的是同一个端点。
- 如果连接成功后紧接着请求失败，通常是服务器的 CORS 策略拦住了 dassi 的请求，而不是连接有问题。Ollama 的话，用 `OLLAMA_ORIGINS=<你的来源> ollama serve` 重启以允许扩展的来源，然后重试——[Ollama 教程](/zh/guides/ollama/)有完整说明。

## 语音转写

语音有单独的服务商设置，在 **Settings → Models → Voice**。**Dassi managed（默认）** 不需要语音 API key，即使聊天用的是 BYOK 也一样。要用自己的语音服务商，连接 OpenAI 或 Groq 的 API key，然后选对应的语音选项。这对麦克风口述和 Telegram 语音消息都适用。步骤和额度见[语音输入](/zh/guides/voice-dictation/)。

## dassi 如何使用模型

dassi 把你选的模型作为主要推理引擎。对某些视觉任务（比如点击页面上的特定坐标），dassi 会自动换用更快的辅助模型，以保证速度和成本。这不需要配置，会自动进行。

## 切换模型

随时可以在 **Settings** 页切换模型，下一条消息即生效。切换模型不会丢失对话历史。
