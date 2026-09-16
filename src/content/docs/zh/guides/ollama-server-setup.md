---
title: 为 dassi 配置 Ollama
description: Ollama 这一侧的设置——拉取一个支持工具调用的模型，并允许 dassi 的扩展来源，让本地服务器响应它。
---

dassi 能用上 Ollama 之前，你的机器上要满足两件事：有一个支持工具调用的模型，并且 Ollama 接受来自 Chrome 扩展的请求。

两件都做完后，按[搭配 Ollama 使用](/zh/guides/ollama/)把 dassi 指向这台服务器。

## 1. 拉取一个支持工具调用的模型

dassi 通过工具调用来驱动浏览器。不支持工具的模型只会跟你聊天，不会点击任何东西，所以要选支持的——Ollama 在[模型库](https://ollama.com/library)页面上有标注。

```bash
ollama pull qwen3:8b
```

硬件允许的话，更大的模型在这里明显更好：

```bash
ollama pull qwen3:32b
# 或者
ollama pull gpt-oss:20b
```

确认已经拉下来：

```bash
ollama list
```

## 2. 允许 dassi 的扩展来源

默认情况下 Ollama 只接受少数几个本地来源的请求，Chrome 扩展不在其中。

这一步值得一开始就做对，因为失败的表现很迷惑：dassi 的连接检查运行在一个绕过浏览器跨域规则的上下文里，所以端点能正常验证通过。而真正的模型调用没有这个豁免。结果就是连接看起来一切正常，直到第一个任务失败，提示 **"Your local model blocked the request."**

先获取你的 dassi 扩展 ID。Chrome 只有在开启 **Developer mode** 时才显示扩展 ID——看不到的话见[附录：查找扩展 ID](#附录查找扩展-id)。Chrome 应用商店版本的 ID 是 `bjcngahpcjeililljmfegmlanlpgibdi`。

然后带上这个来源启动 Ollama。

**macOS / Linux：**

```bash
OLLAMA_ORIGINS=chrome-extension://bjcngahpcjeililljmfegmlanlpgibdi ollama serve
```

**Windows（PowerShell）：**

```powershell
$env:OLLAMA_ORIGINS="chrome-extension://bjcngahpcjeililljmfegmlanlpgibdi"
ollama serve
```

要在 macOS 上永久生效，把它设为 launch agent 变量，菜单栏应用就会读到：

```bash
launchctl setenv OLLAMA_ORIGINS "chrome-extension://bjcngahpcjeililljmfegmlanlpgibdi"
```

然后退出并重新打开 Ollama。

:::caution
用你自己准确的扩展 ID。不要设成 `OLLAMA_ORIGINS=*` 或 `chrome-extension://*`——那会让你安装的*任何*扩展都能访问本地模型服务器，而它通常完全没有鉴权。
:::

## 选择模型

dassi 只接受一组指定系列的模型 ID。如果模型 ID 不匹配，连接会被拦下，并列出可接受的系列。

不过通过这道检查还不够——模型还得支持工具调用。下面这些系列既在 dassi 的名单上，*也*在 Ollama 里有支持工具的版本：

| 系列 | Ollama 标签示例 |
|--------|---------------------|
| Qwen | `qwen3:8b`、`qwen3:32b` |
| Llama | `llama3.1:8b`、`llama3.3:70b` |
| GPT-OSS | `gpt-oss:20b`、`gpt-oss:120b` |
| DeepSeek | `deepseek-r1:14b` |
| Mistral | `mistral`、`mixtral`、`devstral` |
| Command-R | `command-r7b` |
| Nemotron | `nemotron-mini` |

dassi 也接受 **Gemma**（`gemma3`）、**Phi**（`phi4`）和 **GLM**（`glm4`），但 Ollama 目前的这几个版本没有声明工具支持——端点能连上，然后模型只会跟你说话，不会点击任何东西。它们可以用于非浏览器工作，别用来跑任务。

工具支持会随 Ollama 更新版本而变化，选定之前先看一下模型[库页面](https://ollama.com/library)上的 `tools` 标签。

系列之外，规模比什么都重要。浏览器任务涉及很长的上下文（页面内容、截图、工具历史）和很多连续决策。7B 以下的模型在多步工作中会跟丢线索。显存够的话，跑 20B–70B 这一档。

## 让慢模型保持响应

dassi 最多等待 600 秒让模型开始响应，这个上限不能再调高。如果你撞到了这个上限，要在 Ollama 那边解决：

- **让模型常驻。** 首次请求的大部分等待是模型加载进显存。`OLLAMA_KEEP_ALIVE=30m` 让它在任务之间保持驻留。
- **用更小的量化。** 大模型的 Q4 版本往往在速度和质量上都胜过小模型的 Q8 版本。
- **降一个规模档。** 5 秒回答的 8B 模型比超时的 70B 模型能做更多事。

## 使用远程 Ollama 服务器

Ollama 不一定要和 Chrome 跑在同一台机器上。把 dassi 的 **Base URL** 指向运行它的主机——比如局域网里的一台台式机 `http://192.168.1.50:11434`。自定义端点允许纯 `http://`，所以局域网地址不需要证书就能用。

服务器端需要两处改动：

- 把 Ollama 绑定到网络接口，而不只是回环地址：`OLLAMA_HOST=0.0.0.0:11434`
- `OLLAMA_ORIGINS` 保持不变——dassi 发送的来源是它的扩展 ID，与服务器在哪台机器无关

只在你信任的网络上这么做。绑定到 `0.0.0.0` 的 Ollama 服务器没有任何鉴权。

## 附录：查找扩展 ID

Chrome 默认不显示扩展 ID，所以 `chrome://extensions` 看起来没有 ID 可复制。打开 **Developer mode** 就会出现。

![chrome://extensions 页面。右上角的 Developer mode 开关标为 1；dassi 扩展描述下方的 ID 一行标为 2。](/images/ollama-extension-id.png)

1. 打开 `chrome://extensions`，在右上角打开 **Developer mode**。
2. **ID** 出现在 dassi 的描述下方。复制它。

之后可以保持 Developer mode 开启，也可以关掉——ID 不会变。

### 不开 Developer mode 的方法

改为点击 dassi 卡片上的 **Details**。地址栏会变成：

```
chrome://extensions/?id=bjcngahpcjeililljmfegmlanlpgibdi
```

`?id=` 之后的部分就是扩展 ID。

### 你会看到哪个 ID

dassi 在扩展 manifest 里固定了 ID，所以 Chrome 应用商店版本和手动加载的副本都是 `bjcngahpcjeililljmfegmlanlpgibdi`。但还是请核对你自己的，不要直接从这里粘贴——没有固定 key 的分叉版或本地构建版会得到不同的 ID，而 `OLLAMA_ORIGINS` 必须完全匹配，否则 Ollama 会拒绝请求。

## 下一步

服务器准备好了。现在[把 dassi 指向它](/zh/guides/ollama/)——设置在 **Models** 页面的 **API keys** 下。
