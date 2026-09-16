---
title: 更新日志
description: dassi 的发布说明和近期更新。
---

了解 dassi 最新的功能、改进和修复。

---

## v0.39.0

### app.dassi.ai 任务面板

新网页 [app.dassi.ai](https://app.dassi.ai) 把你整个浏览器里的所有 dassi 任务放在一处——正在运行的、等你批准的、已计划的、刚完成的。在它的命令栏里输入提示，不用先开标签页就能发起新任务。[了解更多](/zh/guides/task-dashboard/)

### 自定义端点：不再要求 API key，且超时可调

**Custom (OpenAI-compatible)** 连接卡片不再要求填写 API key——LM Studio、Ollama、vLLM 这类不需要鉴权的服务器可以留空。纯 HTTP 的 base URL 现在对任何主机都可用，不再限于 `localhost`，局域网里其他机器上的自托管服务器也能连。

新的 **Advanced** 区域可以设置 dassi 等待模型开始响应的时长（10–600 秒，默认 600）——对首个 token 很慢的大型本地模型很有用。如果连接成功后请求立刻失败，dassi 现在会给出指向服务器 CORS 设置的具体提示，而不是笼统的网络错误。[了解更多](/zh/guides/connect-ai-provider/#自定义openai-兼容端点)

### 自动批准会话不再过期

在计划上选择 **Approve + auto-approve rest of session** 之前会在 20 个计划或 30 分钟后（以先到者为准）停止自动批准。现在它在整段对话中一直有效，直到你点击 **Stop**。

---

## v0.35.0

### 微信支付

如果 dassi 的界面语言设为中文，**Settings → Plan & Billing** 里的套餐卡片现在会显示 **微信支付** 按钮。可以用它一次性购买任意档位——BYOK、Starter、Pro 或 Max——不用注册连续订阅。

期限与计费周期开关一致：按月价 30 天，或按年价 365 天。价格以美元计；Stripe 会在结账时显示等值人民币。购买不会自动续费——期限结束后使用权自动到期。

微信支付按钮只在你没有有效订阅时显示。[查看套餐与计费](/zh/reference/plans-and-billing/)

### 修复：年付套餐的每月额度

年付托管订阅（Starter、Pro、Max）之前每年只在支付年度账单时获得一次额度，而不是每月。现已修复。年付用户的额度现在全年每月刷新。

---

## v0.34.1

### Plans 标签中的年付价格

**Plans & Billing** 标签现在默认显示年付视图，并把年付价格换算成「按年计费的每月价格」——比如一个 $120/年 的套餐显示为 $10/月。用 **Monthly / Yearly** 开关可以并排比较两种周期。年付在所有套餐上最多可省 50%。

每张套餐卡片上的按钮现在写的是「Get Starter」「Get Pro」等，在确认前就能清楚知道选的是哪一档。

[查看套餐与计费](/zh/reference/plans-and-billing/)

### 模型选择器可以滚动了

侧栏的模型下拉菜单在模型多到超出屏幕时现在可以滚动。之前同时连接多个 AI 服务商时这个问题最明显。

### CLI：多个 Chrome 配置文件

如果你在多个 Chrome 配置文件同时打开的情况下使用 dassi CLI，每个配置文件现在会用稳定的安装 ID 和可选标签向 CLI 守护进程注册。这样多个配置文件同时运行时，CLI 命令能可靠地定位到正确的浏览器。

### 修复

- 连接多个服务商时模型选择器下拉菜单会溢出面板。现在可以滚动。

---

## v0.34.0

### 定时任务

现在可以设置 dassi 每天自动运行的重复任务。在侧栏里告诉 dassi 时间、网站和要做的事——dassi 会显示一张确认卡片，批准后，只要 Chrome 开着，任务每天都会在那个时间运行，即使侧栏是关闭的。[了解更多](/zh/guides/scheduled-tasks/)

在 Options 的 **Schedules** 标签管理所有定时任务——随时暂停、恢复或删除。

### Gmail 集成

在 Gmail 上，dassi 现在可以通过 Gmail 自己的消息管道发送邮件，而不是在撰写界面里点击。邮件会正常出现在已发送文件夹，支持 `to`、`cc`、`bcc`、主题，以及纯文本或 HTML 正文。[了解更多](/zh/guides/browser-automation/#gmail)

### 修复

- **定时任务现在各自独立失败。** 之前一个反复失败的重复任务可能影响会话中的所有任务。现在每个任务单独统计失败——连续三次失败后只暂停那一个任务。它仍然显示在 **Schedules** 标签里，问题解决后可以恢复。

---

## v0.33.0

### 自动化 WhatsApp Web

dassi 现在支持 WhatsApp Web。在标签页打开 [web.whatsapp.com](https://web.whatsapp.com)，dassi 会自动获得 12 个工具，用于读消息、发送文字和文件、表情回应、搜索聊天和管理群成员。每个写操作执行前都会请你确认。[了解更多](/zh/guides/whatsapp/)

<!-- TODO: screenshot of WhatsApp tools in action -->

### 连接 Azure、Ollama 或任何 OpenAI 兼容端点

现在可以把 dassi 指向任何实现 OpenAI Chat Completions API 的服务器——Azure OpenAI、LiteLLM、Ollama、vLLM 或任何自托管推理代理。在 **Settings → Connection** 的 **Custom (OpenAI-compatible)** 卡片里输入 base URL、模型 ID 和 API key。[了解更多](/zh/guides/connect-ai-provider/#自定义openai-兼容端点)

### 新默认模型：Gemini 3.5 Flash

托管账号现在默认使用 **Gemini 3.5 Flash**，比之前的默认模型更快、更省。随时可以在 **Settings** 切换到其他可用模型。

### 更新自动生效

Chrome 下载到新版 dassi 后，现在会在后台直接应用更新，不用等浏览器重启——前提是没有任务在运行且侧栏没有打开。

### 用 /usage 查看 token 和成本

在输入框输入 `/usage`，可以看到当前任务和整个会话用了多少 token，以及估算的 API 成本。

### 修复与改进

- 页面上出错时，WebMCP 工具现在会显示完整的底层错误信息，而不是笼统的失败提示。

---

## v0.32.2

### Plan 标签的月付/年付开关

Plan & Billing 标签现在把四个套餐——BYOK、Starter、Pro、Max——并排放在一个平铺网格里。卡片上方的 **Monthly** / **Yearly** 开关可以不离开标签就比较两种计费周期的价格。

切到 **Yearly** 可以看到每个套餐的年付折扣价，等值月价被划掉，并有「Save X%」角标，差异一目了然。BYOK 年付 $60/年（比月付省 50%）；托管套餐（Starter、Pro、Max）约省 17%。

当前套餐显示在顶部的 **Current Plan** 行。点击该行的 **Manage** 可以通过 Stripe 账单门户切换套餐、更新付款方式或取消。

<!-- TODO: screenshot of the new flat tier picker with Yearly selected -->

---

## v0.32.1

### 新用户免费额度

新账号现在获得 $5 免费托管额度——不需要信用卡。可以用它在选购付费套餐前先试试 dassi。

安装 dassi 时，欢迎页会显示这个优惠。登录即可领取。

托管额度覆盖什么，见[套餐与计费](/zh/reference/plans-and-billing/)。

<!-- TODO: screenshot of welcome modal -->

### 修复

- 在 options 页面（或 OAuth 弹窗）登录或登出，现在会立即更新侧栏面板，不用关闭再重开。
- 新账号在 dassi 完成账号设置之前不会再被付费墙错误拦住。

---

## v0.32.0

### 在 Telegram 用 /new 重新开始

通过 Telegram 机器人使用 dassi 时，现在可以发送 `/new` 立即清空对话、开始新会话。dassi 会马上停止正在运行的任务——`/new` 不会排在进行中的工作后面。如果你发了一条消息，然后在 dassi 来得及回复之前很快发了 `/new`，之前那条消息会自动取消，不会留下一个过期的回复。

### 更准确的浏览器自动化

dassi 现在能检测到它用来定位页面元素的 JavaScript 选择器匹配了多个元素。发生时，dassi 会看到匹配了哪些元素、操作了哪一个，并当场用更精确的方式纠正。这减少了在有多个相似元素的页面上点错按钮的情况——比如在 Gmail 上点到「Send feedback」而不是「Send」。

### 修复

- **Telegram：长任务不再被截断。** 通过 Telegram 运行几分钟的任务有时会被网关看门狗杀掉，因为确认信号和存活检查被当成了同一个信号。现在两者分开，长时间的调研或多步任务能可靠完成。
- **Telegram：Chrome 重启后回复不再丢失。** 如果 Chrome（或扩展的 service worker）在 dassi 执行任务中途重启，完成的回复有时永远到不了 Telegram 机器人。dassi 现在会在启动时和你打开侧栏时把未发送的回复补发出去。

---

## v0.31.1

### 更可靠的 JavaScript 操作

dassi 用 JavaScript 点击按钮、提交表单或派发 UI 事件时，现在会检查操作是否真的产生了效果。如果一段会改变状态的脚本运行后页面 URL 和标题都没变——这强烈暗示点击没中目标或事件被拒绝——dassi 会把结果标为未确认并进一步调查，而不是报告成功。这消除了一类错误的「我做完了」回复，尤其是在提交失败也不报错的单页应用上。

### 死链和重定向检测

dassi 现在会核实它访问的每个 URL 都解析到一个真实页面。它能检测软 404、机器人检查页面和静默重定向（URL 看似成功但落到首页或通用搜索页）。发现死链或重定向的 URL 时，dassi 不会把那个地址当作有效结果引用——它会告诉你发生了什么，并尝试另一种方式。

### Google BYOK 可用 Gemini 3.5 Flash

如果你连接了自己的 Google AI Studio API key，现在可以选 Gemini 3.5 Flash。设置细节见[模型与服务商](/zh/guides/connect-ai-provider/)。

### 定时任务的标题变化触发器

定时任务除了默认的计时器，现在还可以用 `"title"` 触发器。标题触发的任务会在被监视标签页的页面标题变化时唤醒——不需要轮询间隔。适合监控收件箱、聊天应用和在标题中反映新动态的面板（比如「(28) WhatsApp Web」或「Inbox (12) – Gmail」）。触发器在 dassi 工作期间及之后短时间内会静音，所以 dassi 自己的活动不会误触发任务。

### WebMCP 页面上更聪明的工具路由

在暴露 [WebMCP](https://github.com/google-deepmind/model-context-protocol) 工具的网页上，dassi 现在优先调用这些页面原生工具，而不是抓取 DOM。页面声明的工具返回规范的 ID 和确认过的状态，而不是抓取来的值，所以在支持 WebMCP 的应用上自动化更可靠。

### Telegram：输入中提示

Telegram 集成现在在 dassi 处理请求时显示「typing…」提示，让你立刻得到视觉反馈。

### 修复

- 修复 `fetch_url` 在 GET 和 HEAD 请求中错误地发送请求体，导致部分服务器拒绝调用的问题。

---

## v0.31.0

### 四个新的 BYOK 服务商：Groq、Cerebras、HuggingFace 和 Mistral

现在可以为另外四个服务商——Groq、Cerebras、HuggingFace 和 Mistral——填入自己的 API key，与现有的 OpenAI、Google、Anthropic、DeepSeek、OpenRouter、Kimi 和 xAI 并列。每个新服务商在 **Settings → Connections** 里都有自己的卡片。加上 key、选个模型，dassi 就会通过它运行任务。

[查看所有支持的 BYOK 服务商](/zh/guides/connect-ai-provider/#使用自己的-keybyok)

### Telegram 语音

通过 Telegram 使用 dassi 时，现在可以发语音而不用打字。dassi 用 Whisper 转写，并把文字当作你的提示。你需要 OpenAI 或 Groq 的 BYOK key，并在 **Settings → Preferences → Voice transcription** 里选择由哪个负责转写。

[设置语音转写](/zh/guides/connect-ai-provider/)

### 从 .zip 文件导入技能包

**Import Skill** 对话框现在除了 SKILL.md URL，也接受 `.zip` 技能包。技能包是一个文件夹，根目录有 `SKILL.md`，另外可选 `references/` 和 `assets/` 子目录，打包成 zip。拖进去，dassi 会安装技能及其包含的所有文本文件。

[导入技能包](/zh/guides/skills-and-context/#导入技能包)

### 德语支持

dassi 界面现在提供德语。在 **Settings → Preferences** 切换语言。

### Settings 中的 Contact 标签

Settings 新增 **Contact** 标签，不离开浏览器就能快速找到支持邮箱、Discord 和 Reddit 社区。

### 修复

- 在免费试用期间添加 BYOK key 不再清除剩余的免费额度。
- 通知网关现在会在 service worker 唤醒时自动恢复失效的推送端点——修复了偶尔漏掉 Telegram 通知的问题。
- 从 Settings 页面登录现在会正确触发账号开通。

---

## v0.30.0

### 跨标签页图片捕获

dassi 现在可以从一个网页取一张图片，作为附件用在另一个网页上——不用手动下载。比如从商品目录复制一张商品图，附加到另一个网站的上传字段。

捕获的图片沿用来源页面的登录会话，所以需要登录才能看到的图片和公开图片一样可用。[了解更多](/zh/guides/browser-automation/#截图)

### Telegram 表情反馈

通过 Telegram 给 dassi 发任务时，dassi 一接手你的消息就会打上 👀 表情。任务完成时是 ✅，出错时是 ❌——不用等回复也能随时知道请求的状态。

### 更可靠地处理长任务和大页面

两项底层改进让长时间任务更稳定：

- **截图记忆** — dassi 在会话中截取的截图现在保存在本地。如果长任务触发了上下文压缩，dassi 仍能取回并推理之前的截图，而不是丢掉它们。
- **大内容处理** — 当页面产生非常大量的文字（搜索结果、文档、数据导出）时，dassi 现在把它保存到本地存储并分块读取，而不是一次全部加载进上下文。这避免了在内容密集的页面上上下文过载。

---

## v0.29.0

### 持久站点工具

dassi 现在可以在特定网站上安装轻量的 JavaScript 工具，并跨会话保留。安装后，dassi 会在匹配的页面上自动调用它们，不用每次重新注入代码。可以在 **Settings > User Scripts** 查看和删除已安装的工具。[了解更多](/zh/guides/user-scripts/)

### OpenRouter 上更多模型

OpenRouter 服务商现在包括 Qwen 3（视觉和纯文本推理版本）、Z.ai GLM（视觉和纯文本）和 MiniMax M2.7，与现有的 GPT-5.5、Grok 4、Kimi K2.6 和 Llama 4 Scout 并列。[查看完整模型列表](/zh/guides/connect-ai-provider/)

### 视觉能力提醒

选择纯文本模型（不能分析截图的模型）时，dassi 现在会在模型名旁显示 **⚠ No vision** 角标，并在聊天输入框下方持续提醒。没有视觉能力的模型在写作、编码和推理任务上依然好用。[了解更多](/zh/guides/connect-ai-provider/)

### 改进的订阅管理

Current Plan 卡片上的 **Manage** 按钮现在会打开一个下拉菜单，分别提供 **Switch plan** 和 **Cancel subscription**。[了解更多](/zh/reference/plans-and-billing/#管理订阅)

### 托管套餐上的 BYOK

Starter、Pro 和 Max 订阅者现在除了使用托管额度，还可以连接自己的 API key（BYOK）。

### 更丰富的技能详情

**Settings > Skills** 的技能详情视图现在显示每个技能的 token 占用（常驻加载的 token vs. 激活时的 token）、工具限制，以及技能规范中的自定义元数据。[了解更多](/zh/guides/skills-and-context/#管理技能)

---

## v0.28.0

### AI 生成的用户脚本

dassi 现在可以编写和管理持久的 JavaScript 片段——称为用户脚本——在之后每次访问匹配网站时自动运行。在聊天里告诉 dassi 你想要什么（「高亮我们 wiki 上所有 TODO 注释」「预填这个表单字段」），它会替你创建、注册和管理脚本。

每次创建脚本后，聊天里会出现一张确认卡片，带 **Undo** 按钮，改主意可以立刻删除。

第一次让 dassi 创建脚本时，一张设置卡片会引导你完成两项一次性的 Chrome 权限。[了解更多](/zh/guides/user-scripts/)

<!-- TODO: screenshot of user script confirmation card -->

### BYOK 支持更多服务商

四个新服务商可以使用自己的 API key：

- **DeepSeek** — DeepSeek V4 Pro 和 V4 Flash
- **OpenRouter** — 用一个 key 路由到 GPT、Grok、Kimi、Qwen 等
- **Kimi（Moonshot AI）** — Kimi K2.6 和 K2.5
- **xAI（Grok）** — Grok 4.3、Grok 4 Fast 和 Grok 4 Fast（1M 上下文）

服务商配置现在位于 **Plan** 标签（**BYOK** 区域），取代了原来单独的 Connection 标签。[了解更多](/zh/guides/connect-ai-provider/)

### 模型更新

BYOK 模型阵容更新：OpenAI 新增 **GPT-5.5**，Anthropic 新增 **Claude Opus 4.7**，Google 的 **Gemini 3.1 Flash Lite** 正式可用。

### 全新安装的欢迎页

安装后第一次打开 dassi 时会出现一个欢迎弹窗，介绍包括 Remote control 在内的关键功能。

### 远程控制可靠性

Telegram 推送订阅层现在会自动检测并修复漂移，长时间空闲后 Remote control 会话能更可靠地保持连接。

---

## v0.27.0

### 从 Telegram 控制 dassi

现在可以从手机通过 Telegram 给 dassi 发任务，不碰电脑就能收到回复。在 **Settings → Gateway** 关联 Telegram 账号，然后给 `@dassi_ai_bot` 发消息说你想做什么。dassi 在 Chrome 里运行任务，完成后回复——附件和照片也支持。

同一段对话会出现在 dassi 的侧栏里，可以实时看任务运行，或之后再看。如果多台电脑上都有 dassi，可以全部关联，用 `/use <label>` 选择由哪台处理请求。[了解更多](/zh/guides/telegram-remote-control/)

---

## v0.26.3

### 文件引用

现在可以让 dassi 持续访问你电脑上的文件和文件夹。在 **Settings → References** 添加引用，然后为某段对话固定你想共享的那些。dassi 可以浏览目录、读取文档和代码文件，并在任何已固定的引用里写入新文件——比如让它读一个发票文件夹，或往你的项目目录里写一个脚本。[了解更多](/zh/guides/file-references/)

### 后台任务状态栏

有定时后台任务在运行时，聊天顶部现在会出现一个状态栏。每个任务显示指令预览、运行频率和一个 **Stop** 按钮。绿点表示正常运行；红点表示因错误停止。

如果 dassi 在运行后台任务时用完了 AI 额度，它会自动取消该会话的所有定时任务，在扩展图标上显示红色 **!** 角标，并发送桌面通知。

### Settings 标签顺序

**Plan** 标签现在排在设置导航的第一位，BYOK 定价区域是其中的默认视图。

### 修复

`/compact` 命令现在会在压缩对话历史后正确重新加载代理的工作上下文，之后的消息会反映压缩后的摘要。

---

## v0.26.2

### Connection 设置中更新的服务商图标

**Connection** 设置标签现在显示每个 AI 服务商的官方 logo——OpenAI 的 ChatGPT 标志、Anthropic 的 Claude logo、Google 的 Gemini 渐变图标——以及各服务商的完整产品名称。一眼就能看出正在连接或已经连接的是哪个服务商。[了解更多](/zh/guides/connect-ai-provider/)

<!-- TODO: screenshot of the Connection tab with the three provider cards -->

### 富文本编辑器中 Enter 键正常工作

dassi 现在在 Gmail 撰写、Slack 和 LinkedIn 消息等富文本编辑器里输入时能正确处理 Enter。之前在这些编辑器里按 Enter 会插入一个原始换行，而不是触发编辑器自己的 Enter 处理逻辑，提交消息或分段时可能出现意外行为。修复自动生效——不需要改设置。

---

## v0.26.1

### 用 Google 登录免费使用 Gemini

现在可以连接 Google 账号，通过 Google Cloud Code Assist 的免费档使用 Gemini 模型——不需要订阅或 API key。在 **Settings → Connection** 找到 Google 一行，点击 **Sign In**。dassi 会打开 Google 登录页，你授权后，dassi 自动开通一个 Cloud Code Assist 项目。[了解更多](/zh/guides/connect-ai-provider/)

<!-- TODO: screenshot of Google sign-in button in Connection tab -->

### 更清晰的套餐页

当前套餐更容易看出来了：你当前档位的按钮变成更深的橙色并显示 **Current**，取代了原来卡片顶部的小角标。**RECOMMENDED** 角标会一直显示在它的卡片上，即使你选了另一档，所以总能看到 dassi 推荐的是哪个套餐。

### 修复

- 设置浮层上的 Google 登录按钮现在显示 Google 的官方品牌标志。

---

## v0.26.0

### 重新设计的 Plan & Billing 标签

**Settings > Plan** 标签现在有独立的 **Managed Plans** 和 **BYOK** 区域，可以分别浏览和订阅。顶部的 **Current Plan** 卡片一览所有有效订阅。每个有效订阅有自己的 **Manage** 按钮，打开只针对该订阅的 Stripe 账单门户。[了解更多](/zh/reference/plans-and-billing/)

### BYOK 和托管套餐可以同时使用

现在可以同时订阅 BYOK 套餐和托管套餐。Current Plan 卡片会同时显示两者，管理其中一个不影响另一个。[了解更多](/zh/reference/plans-and-billing/)

### BYOK 年付

BYOK 现在提供年付订阅，$12/年——比月付省 90%。BYOK 区域同时显示 Monthly 和 Annual 两张卡片，可以选适合你的周期。

### Starter 降价到 $25/月

Starter 托管套餐从 $30/月 降到 $25/月。Starter 包含的内容不变。

### 修复

- dassi 侧栏现在能可靠地从正确的存储区域刷新状态，修复了套餐或服务商变更要等扩展重载才生效的边缘情况。

---

## v0.24.1

### BYOK 年付更省

**Settings > Plan** 里的 BYOK 套餐卡片现在有 **Monthly / Annual** 开关。年付每年 $12——比按月付 $10 省 90%。订阅前切换开关选择适合你的周期。

Plan & Billing 设置页也重新组织成两个清晰的区域——**BYOK Plans**（使用自己的 API key）和 **Managed Plans**（包含额度）——更容易一眼比较选项。

### 账号信息移到设置页头部

你的名字和头像现在显示在 Settings 页面头部的右上角，旁边有登出按钮。不再有单独的 Account 标签。

### 在侧栏给 dassi 评分

打开侧栏的溢出菜单（**⋮**），选择 **Rate dassi**，在 Chrome 应用商店留下评价。

### 修复与可靠性

- 完成订阅结账后，聊天面板里的付费墙提示现在会自动消失——不用手动重载。
- 运行中途停止响应的任务现在会自动恢复，而不是一直卡住。
- 每次打开侧栏和每个任务完成后都会刷新订阅状态，套餐变更不用手动重载就能生效。

---

## v0.24.0

### 技能和命令的斜杠命令菜单

在输入框输入 `/`，会弹出一个浮动菜单，列出所有已安装的技能和内置命令。继续输入可以筛选，用 ↑↓ 导航，按 Enter 或 Tab 运行。按 Escape 关闭且不运行任何东西。

[了解更多关于运行技能](/zh/guides/skills-and-context/#运行技能)

### dassi 自动应用相关技能

安装了技能后，dassi 现在能识别出哪个技能适用于你的请求，并自动使用，不用你明确要求。仍然可以按名字或通过斜杠命令菜单调用技能。

[了解更多关于技能](/zh/guides/skills-and-context/)

### 更聪明的回复格式

dassi 会根据任务调整信息的呈现方式：购物和推荐类请求会显示图片和直接链接，比较类问题用表格，写作类任务提供多个版本，多步工作流显示进度摘要。

### API key 服务商需要 BYOK 订阅

使用自己的 OpenAI、Anthropic 或 Google AI key 现在需要有效的 BYOK 套餐。除月付（$10/月）外，新增年付选项（$12/年）。

如果你在使用 BYOK 服务商但没有有效订阅，聊天里会出现一条横幅，可以选择订阅或切换到免费托管额度。

[查看套餐](/zh/reference/plans-and-billing/)

### 修复

- dassi 不再在访问 Gmail、GitHub 或 Google Search Console 等需要登录的服务之前先让你登录。它会直接打开页面，只有真的遇到登录墙时才提示认证问题。

---

## v0.23.1

### 修复

- 桌面通知的正文现在统一显示「Agent completed the task」。之前正文有时会重复应用名称。任务名（标签页组标题）在可用时仍会附加为上下文。

---

## v0.23.0

### 对话历史

现在可以浏览和恢复过去的对话。点击侧栏工具栏上的 **时钟图标**，会看到之前会话的列表，每条都有自动生成的标题和时间。点击任意一条接着上次继续。[了解更多](/zh/guides/using-the-sidebar/#对话历史)

<!-- TODO: screenshot of history browser -->

### 实时活动日志

dassi 工作时侧栏会出现一条新的活动日志。它滚动显示每个动作的带时间戳记录——打开网站、读取页面、点击按钮等——让你随时知道正在发生什么。[了解更多](/zh/guides/using-the-sidebar/#活动日志)

<!-- TODO: screenshot of activity feed -->

### dassi 工作时切走

任务超过大约 10 秒时，会出现一条横幅，让你在 dassi 完成期间自由浏览。点击 **Switch Away** 跳到另一个标签页。任务完成时你会收到桌面通知。[了解更多](/zh/guides/using-the-sidebar/#dassi-工作时切走)

### 自动清理标签页

完成任务后，dassi 现在会关闭调研过程中打开的中间标签页（比如搜索结果和参考页面），只保留包含最终结果的标签页。[了解更多](/zh/guides/browser-automation/#自动清理标签页)

### 更聪明的桌面通知

桌面通知现在包含任务名称（显示为标签页组标题），能分辨刚完成的是哪个任务——同时运行多个任务时尤其有用。

### 修复

- 恢复过去的对话不再导致原会话从历史中消失。
- 「Switch Away」横幅不再在后续任务一开始就立刻出现。
- 错误和额度上限页面现在会正确重置活动日志。
- Chrome 重启后重新连接会保留当前对话，而不是开始一个空白会话。
