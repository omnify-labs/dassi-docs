---
title: 从 Telegram 控制 dassi
description: 关联你的 Telegram 账号，随时随地给 dassi 派任务，不用碰电脑就能收到回复。
---

Telegram 远程控制让你在手机上给 `@dassi_ai_bot` 发消息，由电脑上的 Chrome 里的 dassi 执行任务。干活的是电脑，手机只是输入端。

这个功能处于 **beta** 阶段。Settings 里的 **Remote** 标签会显示 BETA 角标。

## 什么时候用

你不在电脑前，但想让 dassi 查点东西、填个表单，或者跑一个多步任务。不用等回到座位，在手机上发条消息，dassi 做完会回复你。

它和多设备搭配也很好用——可以把不同 Chrome 配置文件里的 dassi 都关联上，在同一个 Telegram 聊天里切换。

## 开始之前

你需要：

- 一个 [Telegram 账号](https://telegram.org)
- 在负责执行任务的电脑上已安装并登录 dassi

## 连接 Telegram 账号

1. 打开 **Settings**（侧栏工具栏的 **⋮** 菜单 → **Settings**）。
2. 点击 **Remote** 标签。
3. 点击 **Connect Telegram**。dassi 会生成一个配对 token——5 分钟内有效。
4. 任选一种方式：
   - 点击 **Open in Telegram** 直接跳到 `@dassi_ai_bot` 聊天。第一次关联时 Telegram 会显示 **Start** 按钮——点一下。机器人回复「Linked」。
   - 点击 **Copy /link `<token>`**，自己把这条命令粘贴到 `@dassi_ai_bot`。

<!-- TODO: screenshot of the Remote tab with pairing token ready -->

关联成功后，Connect 卡片下方的 **Linked connections** 区域会列出这个连接。

## 发送任务

在 Telegram 里给 `@dassi_ai_bot` 发消息，说你想做什么：

> 帮我在太空针塔附近的餐厅订周六晚上两个人的位子。

dassi 收到消息后在 Chrome 里执行任务，完成后在同一个 Telegram 聊天里回复。任务最长可以跑 10 分钟。

可以附上照片——dassi 会把它们作为任务的一部分。

这段对话也会出现在电脑上 dassi 的侧栏里，你可以实时看任务运行，或之后再接着处理。

## 发送语音消息

从已关联的账号给 `@dassi_ai_bot` 发一条语音。dassi 会转写、执行任务，并在 Telegram 里回复。保持连接的电脑不休眠、在线，且 Chrome 在运行。

在 **Settings → Models → Voice** 选择 **Dassi managed（默认）**，或选择 OpenAI/Groq 并配上对应的语音 API key。侧栏口述用的是同一个语音设置。设置、限制和排查见[语音输入](/zh/guides/voice-dictation/#发送-telegram-语音消息)。

## 管理已关联的连接

Remote 标签里的 **Linked connections** 卡片显示所有有效的配对。每行显示：

- 来自哪个 Telegram 聊天
- 通过哪个机器人配对
- 哪个 Chrome 安装负责处理该聊天的请求
- 设备最近活跃时间

### 切换由哪台电脑处理请求

如果你在多台电脑或多个 Chrome 配置文件里都装了 dassi，可以把它们全部关联到同一个 Telegram 聊天。要选择由哪个来处理请求，在 `@dassi_ai_bot` 聊天里发送：

```
/use <label>
```

label 对应 Linked connections 列表里显示的设备名——类似 `macOS Chrome` 或 `My Chrome`。

### 解除关联

在 `@dassi_ai_bot` 聊天里发送 `/unlink`，即可把该 Chrome 配置文件与聊天断开。
