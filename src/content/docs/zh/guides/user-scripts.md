---
title: 持久脚本
description: 让 dassi 编写 JavaScript 片段，在之后访问页面时自动运行。
---

用户脚本（User Scripts）让你可以让 dassi 编写小段 JavaScript，在每次访问匹配的网站时自动运行。保存之后，脚本会自己运行，不用再次向 dassi 发出请求。

可以用它自动关掉 cookie 提示、在整个网站上高亮关键词、预填一个经常要填的表单，或者调整一个让你不舒服的布局。

## 一次性设置

在 dassi 能创建用户脚本之前，Chrome 需要开启两项设置。dassi 第一次尝试创建脚本时，聊天里会出现一张设置卡片，引导你完成两步：

1. **授予权限** — 点击设置卡片里的 **Grant**。Chrome 会请你确认给 dassi `userScripts` 权限。
2. **在 Chrome 中开启「Allow User Scripts」** — 点击卡片里的 **Open Chrome settings**。在 dassi 的扩展详情页打开 **Allow User Scripts** 开关，然后回到聊天。

<!-- TODO: screenshot of the two-step setup card -->

两步完成后，设置卡片会确认用户脚本已就绪，并提示你重新发送原来的请求。

## 创建脚本

在聊天里描述你想要的效果：

> 「每次访问 github.com 时，自动折叠左侧栏」

> 「在我们团队的 wiki 上，把所有 'TODO' 用黄色高亮」

> 「在我们内部工具的搜索框里预填我的默认筛选条件」

dassi 会编写 JavaScript、选择合适的 URL 匹配模式，并向 Chrome 注册脚本。聊天里会出现一张确认卡片，显示脚本名称、匹配的 URL 和代码预览。

<!-- TODO: screenshot of the confirmation card -->

### 撤销创建

确认卡片上有一个带倒计时的 **Undo** 按钮。10 秒内点击 **Undo** 会立即删除脚本。倒计时结束后按钮仍然可用，之后改主意也可以点。

## 管理脚本

在聊天里让 dassi 列出、更新或删除脚本：

> 「你给我创建了哪些脚本？」

> 「删掉 GitHub 侧栏那个脚本」

> 「更新 wiki 高亮脚本，把 'FIXME' 也包括进去」

## 脚本如何运行

脚本运行在 Chrome 隔离的用户脚本环境中——可以完整访问页面 DOM，但不与页面自身的 JavaScript 共享变量。默认在页面完全加载后运行；你提出要求时 dassi 可以调整时机。

脚本只在匹配其 URL 模式的页面上运行。例如，设为 `https://*.github.com/*` 的脚本会在所有 GitHub 页面运行；`https://github.com/*/issues/*` 只覆盖 issue 页面。

## 排查问题

**设置完成后设置卡片又出现了** — 两项设置必须同时生效。打开 `chrome://extensions`，点击 dassi 卡片上的 **Details**，确认 **Allow User Scripts** 开关是开着的。

**脚本没有在预期的页面上运行** — 可能是 URL 模式不匹配。让 dassi 列出你的脚本，把模式和你正在访问的完整 URL 对一下。

**重装后脚本消失了** — 扩展重装或更新时 Chrome 会移除用户脚本。让 dassi 重新创建你需要的脚本。
