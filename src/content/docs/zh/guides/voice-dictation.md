---
title: 语音输入
description: 对着 dassi 侧栏说话，或发送 Telegram 语音消息，使用 dassi 托管转写或你自己的 OpenAI / Groq key。
---

用语音在 dassi 里写消息，或给 Telegram 机器人派任务。

| 在哪说话 | 会发生什么 |
| --- | --- |
| dassi 侧栏 | 转写文字加入草稿。检查后点击 **Send**。 |
| Telegram 机器人 | 语音变成一个任务。dassi 执行并在 Telegram 回复。 |

你需要已登录 dassi。扩展里必须有 **Models → Voice** 和 **Record voice** 麦克风按钮。如果没有这些控件，说明你安装的版本还不支持这个功能。

标为 **Example** 的图片是语音控件的独立预览，用的是示例数据，用来说明该选什么、各个录音状态长什么样。

## 从 Dassi managed 开始

1. 在侧栏打开 **⋮ → Settings**。

   ![dassi 侧栏菜单，三点按钮标为 1，Settings 标为 2](/images/ollama-open-settings.png)

2. 选择 **Models**，找到 **Voice**。
3. 把 **Voice transcription** 设为 **Dassi managed (default)**。

   ![示例：语音设置中转写选择了 Dassi managed](/images/voice-dictation/managed-provider.png)

不需要语音 API key。即使聊天用的是你自己的服务商也一样可用。语音转写有独立的服务商设置，换聊天模型不会影响它。

## 在侧栏口述

1. 打开一个普通的 dassi 聊天，点击麦克风按钮 **Record voice**。

   ![示例：输入框中 Send 旁边的麦克风按钮](/images/voice-dictation/start.png)

2. 第一次使用时，dassi 会打开一个麦克风设置标签页。点击 **Allow microphone**，再在 Chrome 单独弹出的权限提示中点击 **Allow**。如果操作系统也询问，允许 Chrome 使用麦克风。
3. 回到侧栏，再次点击 **Record voice**。设置标签页只负责授权，不会开始录音。
4. 说话，然后点击方形的 **Finish recording** 按钮。

   ![示例：录音控件，带计时器、方形 Finish recording 按钮和取消的 X](/images/voice-dictation/recording.png)

5. 等待转写文字出现在已有草稿旁边。需要的话编辑一下，然后点击 **Send** 或按 **Enter**。

   ![示例：草稿内容为「用三条要点总结本页」，Send 按钮可用](/images/voice-dictation/draft.png)

比如说：「用三条要点总结本页。」结束录音后这句话会加入输入框；发送后任务开始。

点击 **Cancel dictation** 丢弃录音。保持录音面板可见：关闭或隐藏它会取消采集，包括还在启动中的录音。录音结束之后，转写可以在你切走时继续完成。

## 使用浏览器快捷键

Chrome 处于前台时：

| 平台 | 开始或结束录音 |
| --- | --- |
| Mac | **Command+Shift+Space**（`⌘⇧Space`） |
| Windows / Linux | **Ctrl+Shift+Space** |

按一次会为当前标签页打开 dassi 并开始录音。再按一次结束录音，并把转写文字加入 dassi 草稿。不需要按住不放。快捷键写入的是 dassi，不是网页上的文本框。

使用快捷键前先完成麦克风授权。启动过程中再按一次会取消；显示 **Transcribing…** 时按键无效。

## 发送 Telegram 语音消息

1. 在你希望 dassi 使用的 Chrome 配置文件里，从 **Settings → Remote** [连接 Telegram](/zh/guides/telegram-remote-control/#连接-telegram-账号)。
2. 在同一个配置文件里，到 **Models → Voice** 选择服务商。
3. 保持电脑不休眠、在线，Chrome 运行且 dassi 已登录。
4. 从已关联的 Telegram 账号打开 [@dassi_ai_bot](https://t.me/dassi_ai_bot)，发一条语音。试试：「请回复 hello。」

   ![DassiBot 的 Telegram 公开页面，显示 @dassi_ai_bot、Start Bot 和 Open in Web](/images/voice-dictation/telegram-bot.png)

   链接会在浏览器里打开机器人页面。选择 **Start Bot** 打开 Telegram，或 **Open in Web** 使用 Telegram Web。连接账号后，在机器人对话中发送语音。

5. dassi 转写语音，作为任务执行，并在同一个 Telegram 聊天里回复。

Telegram 语音一经处理就立即开始任务，没有草稿检查这一步。机器人使用其连接的 Chrome 配置文件中的语音设置。在 Telegram 里录制语音不需要授予 dassi 电脑麦克风的权限。

Telegram 对话在 dassi 侧栏里是只读的。要继续那段对话，请在 Telegram 里进行；或者打开一个普通的侧栏聊天，口述到草稿里。

## 使用自己的 OpenAI 或 Groq key

要用自己的语音服务商：

1. 打开 **Settings → Models**，展开 **API keys**。
2. 用有效的 API key 连接 **OpenAI** 或 **Groq**。该服务商账号需要有语音模型的访问权限，以及可用的额度或计费。
3. 在 **Voice** 下选择与 key 对应的 **OpenAI Whisper** 或 **Groq Whisper**。

   使用 OpenAI 语音 key：

   ![示例：语音设置选择了 OpenAI Whisper](/images/voice-dictation/openai.png)

   使用 Groq 语音 key：

   ![示例：语音设置选择了 Groq Whisper](/images/voice-dictation/groq.png)

4. 录一句短话检查设置。

这个选择对侧栏口述和 Telegram 语音都生效。聊天订阅、账号登录或其他服务商的 key 都不能代替 OpenAI 或 Groq 的语音 key。聊天用 Ollama 也不会让语音转写变成本地的。

如果所选服务商拒绝了请求，dassi 会显示错误，不会自动切换到 Dassi managed。你可以自己选回 **Dassi managed (default)** 使用附带的额度。

## 语言、限制和音频处理

- **语言：** 自动检测。如果混合语言识别不好，打开 **Models → Voice → Spoken languages (optional)**，最多选两种语言。
- **录音时长：** 在 **Models → Voice** 查看当前上限。侧栏到达上限会自动停止；使用 Dassi managed 时，Telegram 语音也请控制在上限内。
- **托管额度：** **Models → Voice** 显示的每日额度在你的 dassi 账号下由侧栏和 Telegram 共用。每天 UTC 午夜重置，与聊天额度分开计算。服务商请求失败也可能计入该额度。
- **BYOK 用量：** 按你所选语音服务商的限制和收费计算。
- **音频：** 转写由所选服务在云端处理。发送前请检查侧栏转写，尤其是人名、数字和混合语言的文字。

展开 **Spoken languages (optional)** 可以看到两个语言选择器。除非想给出语言提示，否则保持 **Automatic**。

![示例：语音设置展开了 Spoken languages，两个语言选择器都是 Automatic](/images/voice-dictation/languages.png)

## 排查问题

| 问题 | 试试这些 |
| --- | --- |
| 麦克风设置一直在等待 | 找一下 Chrome 单独弹出的权限提示。如果被屏蔽，用设置标签页上的 **Open microphone settings**，并检查操作系统对 Chrome 的麦克风权限。回到 dassi 重新开始录音。 |
| 快捷键没反应 | 打开 `chrome://extensions/shortcuts`，检查 dassi 的 **Start or stop voice dictation in Dassi** 命令。如果被其他应用占用，换一个可用的快捷键。 |
| Mac 弹出了表情选择器 | 用 **Command+Shift+Space**。**Control+Command+Space** 打开的是 macOS 表情选择器。 |
| 切换标签页后录音消失 | 隐藏录音面板会取消录音。回来重新录一次，录完之前保持面板可见。 |
| 「No speech」或录音错误 | 检查所选麦克风，录一句更短、更清晰的话。检查网络连接后重试。 |
| 每日语音额度用完 | 等到 UTC 午夜，或配置自己的 OpenAI/Groq 语音 key 并在 **Voice** 下选中。 |
| BYOK key 或服务商错误 | 检查 **Voice** 的选择与已保存的 API key 是否匹配，以及该服务商是否有语音访问权限和可用额度。 |
| Telegram 不回复 | 检查关联的 Chrome 配置文件是否在运行、已登录并在线。检查 **Settings → Remote** 的连接和 **Models → Voice** 的服务商。 |
