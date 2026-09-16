---
title: 搭配 Ollama 使用
description: 把 dassi 指向本地 Ollama 服务器。带截图的分步说明：端点设置在哪里、该填什么。
---

dassi 可以跑在你自己托管的模型上。如果你已经在用 [Ollama](https://ollama.com)，把 dassi 指向 `http://localhost:11434`，它就会用你的本地模型作为推理引擎，而不是 dassi 的托管额度——没有云服务商、没有按 token 计费、页面内容也不会离开你的电脑。

这个设置是真实存在的，只是藏得深：它在 Models 页面一个折叠区域里，位于一长串服务商列表的最底部。本页告诉你具体该点哪里。

**关于价格：** 用自己的模型意味着你走的是 **Developer** 套餐——每月 $10，或整年 $36，算下来***一天大约 10 美分***。key 由你提供，所以你只为扩展本身付费，比任何托管额度档位都便宜。这个选项在连接服务商之前是隐藏的，别先去找它：见下文[解锁 Developer 套餐](#解锁-developer-套餐)，或到[套餐与计费](/zh/reference/plans-and-billing/)看完整对比。

## 为什么用它

<figure>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 300" style="width:100%;height:auto;max-width:720px" role="img" aria-labelledby="costTitle costDesc">
<title id="costTitle">一次运行的成本：第一次 vs 之后每一次</title>
<desc id="costDesc">两根柱子。第一次运行由三部分组成：读取所有内容、摸清网站、做实际工作。之后每次运行，前两部分缩成一小条，柱子其余部分消失；只有实际工作保持同样大小。</desc>
<style>
.lbl { font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 13px; fill: #1a1a1a; font-weight: 700; }
.seg { font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 12px; fill: #666666; }
.gone{ font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 12px; fill: #999999; }
</style>
<text x="0" y="16" class="lbl">第一次运行</text>
<rect x="0"   y="30" width="250" height="40" fill="#FF5C00"/>
<rect x="250" y="30" width="210" height="40" fill="#FFB088"/>
<rect x="460" y="30" width="180" height="40" fill="#1a1a1a"/>
<text x="0"   y="88" class="seg">读取所有内容</text>
<text x="250" y="88" class="seg">摸清网站</text>
<text x="460" y="88" class="seg">实际工作</text>
<text x="0" y="150" class="lbl">之后每一次</text>
<rect x="0"  y="164" width="26"  height="40" fill="#FF5C00"/>
<rect x="26" y="164" width="34"  height="40" fill="#FFB088"/>
<rect x="60" y="164" width="180" height="40" fill="#1a1a1a"/>
<rect x="240" y="164" width="400" height="40" fill="none" stroke="#c4c4c4" stroke-width="1" stroke-dasharray="4 4"/>
<text x="252" y="189" class="gone">这部分你不再需要付费</text>
<text x="60"  y="222" class="seg">实际工作 — 同样的活，同样的价</text>
<line x1="0" y1="250" x2="720" y2="250" stroke="#e5e5e5" stroke-width="1"/>
<rect x="0" y="266" width="10" height="10" fill="#FF5C00"/>
<text x="18" y="275" class="seg">dassi 已经发过的上下文 — 复用，不重新处理</text>
<rect x="0" y="286" width="10" height="10" fill="#FFB088"/>
<text x="18" y="295" class="seg">摸清页面 — 被 dassi 自己写的捷径替代</text>
</svg>
<figcaption>示意图。在你自己的硬件上，复用带来的是速度而不是省钱——<a href="/zh/reference/cost-and-caching/">为什么重复运行更便宜</a>解释了这两部分。</figcaption>
</figure>

<div style="display:flex;flex-direction:column;gap:14px;margin-top:1.25rem"><div style="display:flex;gap:16px;align-items:flex-start;margin:0"><svg style="flex:none" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/><circle cx="12" cy="16.5" r="1.5" fill="#FF5C00" stroke="none"/></svg><div style="margin:0"><strong>数据留在你的机器上。</strong> 页面文字、截图和提示都发往 <code>localhost</code>，不会发给模型厂商。</div></div><div style="display:flex;gap:16px;align-items:flex-start;margin:0"><svg style="flex:none" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M21 3v5h-5" stroke="#FF5C00"/><path d="M3 21v-5h5" stroke="#FF5C00"/></svg><div style="margin:0"><strong>市面上运行浏览器代理最便宜的方式之一。</strong> dassi 的<a href="/zh/reference/cost-and-caching/">缓存</a>让一个任务里重复的部分在多次运行之间保持完全一致，所以它被复用，而不是再付一次钱——在你自己的硬件上，则是不用再等一次。</div></div><div style="display:flex;gap:16px;align-items:flex-start;margin:0"><svg style="flex:none" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 2v4M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="m9 16 2 2 4-4" stroke="#FF5C00"/></svg><div style="margin:0"><strong>没有按 token 的账单。</strong> 你花的是自己的 GPU 时间，不是额度——外加一个<a href="#解锁-developer-套餐">更便宜的固定月费套餐</a>。</div></div><div style="display:flex;gap:16px;align-items:flex-start;margin:0"><svg style="flex:none" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.91a1 1 0 0 0 0-1.83Z" stroke="#FF5C00"/><path d="m22 12.18-8.58 3.91a2 2 0 0 1-1.66 0L2 12.18"/><path d="m22 17.18-8.58 3.91a2 2 0 0 1-1.66 0L2 17.18"/></svg><div style="margin:0"><strong>模型随你选。</strong> 在聊天的模型选择器里，你拉取过的任何模型都可以随时切换。</div></div></div>


代价是能力。浏览器自动化是一种要求高、跨度长、依赖工具调用的工作负载——在多步任务上，7B 模型会比前沿模型明显不可靠。

## 开始之前

:::caution[先配置 Ollama]
在你允许 dassi 的来源之前，Ollama 会拒绝来自 Chrome 扩展的请求。跳过这一步的话，下面的步骤看起来能成功，然后每个任务都会失败。

先做[为 dassi 配置 Ollama](/zh/guides/ollama-server-setup/)——只需两条命令。
:::

你还需要在 Chrome 里[安装好 dassi](/zh/getting-started/installation/)。

## 1. 打开 dassi 的设置

侧栏工具栏上没有齿轮图标。设置藏在 **⋮** 菜单后面。

![dassi 侧栏，三点菜单已展开。右上角工具栏的菜单按钮标为 1；菜单顶部的 Settings 项标为 2。](/images/ollama-open-settings.png)

1. 点击 dassi 侧栏右上角的 **⋮**。
2. 点击 **Settings**。dassi 会在新标签页打开设置页。

## 2. 进入 Models，展开 API keys

这是最容易漏掉的一步——**API keys** 默认是折叠的，点开之前看不到服务商列表。

![dassi 设置页的 Models 标签。左侧导航的 Models 标为 1；底部附近折叠的 API KEYS 区域标题标为 2。](/images/ollama-models-api-keys.png)

1. 点击左侧导航 **Agent** 下的 **Models**。
2. 点击 **API KEYS** 展开该区域，会出现一长串服务商。

## 3. 找到 Custom endpoint 卡片

滚动到服务商列表的最底部，越过 Azure OpenAI。

![API keys 列表的底部。Custom (OpenAI-compatible) 卡片标为 1，其中的 Add endpoint 按钮标为 2。](/images/ollama-add-endpoint.png)

1. **Custom (OpenAI-compatible)** 卡片——副标题写着「Azure, LiteLLM, Ollama …」。要的是这一张，不是它正上方的 Azure OpenAI。
2. 点击 **Add endpoint** 打开表单。

## 4. 填写表单

会出现三个字段。只有第一个需要填：

![展开的 Custom endpoint 表单，Base URL 填为 http://localhost:11434，Model ID 和 API Key 留空。每个字段和 Save 按钮都有编号。](/images/ollama-endpoint-form.png)

1. **Base URL** — 填 `http://localhost:11434`。要带协议：只写 `localhost:11434` 会被判为无效 URL。dassi 会把 URL 规范成以 `/v1` 结尾，所以 `http://localhost:11434` 和 `http://localhost:11434/v1` 等价。
2. **Model ID** — **留空。** dassi 会从你的服务器读取模型列表，让你在聊天里选。（如果想固定一个，填 `ollama list` 里的准确标签，如 `qwen3:8b`。`gpt-4o` 只是占位文字。）
3. **API Key** — **留空。** Ollama 不需要鉴权，自定义端点的 key 是可选的。忽略 `sk-...` 占位文字。
4. 点击 **Save**。

Chrome 会请求访问 `http://localhost` 的权限——允许它。然后 dassi 调用 `http://localhost:11434/v1/models` 验证连接，卡片显示已验证。

## 5. 选模型，跑一个任务

打开聊天窗口底部的模型选择器。你拉取过且 dassi 支持的每个模型都在里面——切到你想用的那个。

先试个小任务，确认整个链路能跑通：

> 用三条要点总结本页。

能跑通的话，再上一个真实任务：

> 找到这个网站的定价页，告诉我最便宜的付费套餐包含什么。

## 解锁 Developer 套餐

用本地模型意味着你不需要托管额度，所以 Starter / Pro / Max 档位不是你要的。**Developer**（「Dassi for developers」）就是为此设计的：key 由你提供，因为只为扩展付费，所以比任何托管档位都便宜。

**在连接服务商之前它是隐藏的。** 如果在完成第 4 步之前去找，Plan 页面上根本没有它——这就是为什么很容易错过这个更便宜的选项。

Ollama 端点验证通过后，打开 **Settings → Plan**。Developer 选项出现在 Starter / Pro / Max 卡片下方，单独放置而不在网格里——它是另一种类型的套餐，不是另一个额度档位。

![dassi Plan 页面底部。Starter、Pro 和 Max 卡片下方，一条标着「Dassi for developers」的独立区域被框出，显示月费、「Bring your own API keys — ChatGPT, Gemini, Claude and more」一行、dassi CLI 链接和 Continue 按钮。](/images/ollama-developer-plan.png)

结账用银行卡。在托管额度购买暂停的地区，旁边还会出现微信支付按钮。

如果你已经订阅了它，或者托管额度套餐在你所在地区不可用，它也会显示出来。

各套餐包含的内容见[套餐与计费](/zh/reference/plans-and-billing/)。

## 如果模型很慢

普通硬件上的本地模型可能要等一会儿才出第一个 token，尤其是模型加载后的第一次请求。dassi 默认等待 600 秒，这也是上限。

要查看或修改，点击同一个 Custom endpoint 表单里的 **Advanced**：

![Custom endpoint 表单展开的 Advanced 区域，显示 Response timeout 字段设为 600 秒。](/images/ollama-response-timeout.png)

这是 dassi 等待模型*开始*响应的最长时间。如果撞到了这个上限，要在 Ollama 那边解决——见[为 dassi 配置 Ollama](/zh/guides/ollama-server-setup/#让慢模型保持响应)。

dassi 也在努力让你的模型少嚼点东西，这在本地硬件上比在任何地方都重要。它让一个任务里重复的部分在多次运行之间逐字节一致，这样 Ollama 可以复用已经处理过的内容而不是从头开始——这个复用默认开启，但只在前缀匹配时生效。它还会为做过的网站给自己写捷径，重复运行时读页面的轮次更少。两者都表现为更少的等待。[为什么重复运行更便宜](/zh/reference/cost-and-caching/)有详细解释。

## 排查问题

| 你看到的 | 意味着 |
|--------------|---------------|
| 任务开始后提示 **"Your local model blocked the request"** | `OLLAMA_ORIGINS` 没设，或者和你的扩展 ID 不匹配。连接检查不需要它也能通过——只有真正的模型调用会失败——所以问题出现在第一个任务，而不是设置时。见[允许 dassi 的扩展来源](/zh/guides/ollama-server-setup/#2-允许-dassi-的扩展来源)。 |
| "Enter a valid URL, including the scheme" | 你填的是 `localhost:11434`。改成 `http://localhost:11434`。 |
| "The endpoint could not be verified" | Ollama 没在运行，或者不在 11434 端口。用 `curl http://localhost:11434/v1/models` 确认。 |
| "Permission to `http://localhost` was denied" | Chrome 的主机权限提示被关掉了。再点一次 **Save** 并允许。 |
| 模型没出现在聊天的选择器里 | 它的 ID 不属于支持的系列，或者还没拉取。见[选择模型](/zh/guides/ollama-server-setup/#选择模型)。 |
| dassi 有回复但从不点击 | 模型不支持工具调用。换一个支持的。 |
| 任务在回复前就超时 | 在 **Advanced** 下调高 **Response timeout**，最高 600 秒（600 也是默认值）。 |

## 什么留在本地

连接 Ollama 后，模型调用——提示、页面内容和 dassi 截取的截图——只发往你自己的服务器，不去别处。dassi 仍然会为与推理无关的账号和同步功能与自己的后端通信；完整情况见[隐私与安全](/zh/reference/privacy-and-security/)。

## 相关

- [为 dassi 配置 Ollama](/zh/guides/ollama-server-setup/) — 服务器这一侧：拉取模型、允许 dassi 的来源、在另一台机器上运行 Ollama
- [模型与服务商](/zh/guides/connect-ai-provider/) — 所有连接方式，包括托管额度和其他 OpenAI 兼容端点
- [第一个任务](/zh/guides/first-task/) — 连接好之后让 dassi 做什么
- [为什么重复运行更便宜](/zh/reference/cost-and-caching/) — dassi 如何减少重复运行的工作量；在本地硬件上体现为速度而不是省钱
