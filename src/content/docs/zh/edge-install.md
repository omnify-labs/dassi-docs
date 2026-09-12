---
title: 在 Edge 安装 Dassi
description: 用真实截图完成 Edge 扩展安装，打开 Dassi 侧栏，并开始第一个中文任务。
---

用 Edge 打开安装链接，添加扩展，再登录 Dassi。完成后，就可以直接用中文描述网页任务。

本文截图来自 2026 年 9 月 12 日的 macOS Edge 实际安装。Windows 的按钮位置可能略有不同。**已验证扩展安装及侧栏打开；本次没有在 Edge 中登录并验证任务执行。**

## 1. 打开官方商店页

在 **Microsoft Edge** 中打开 [Dassi 的 Edge 扩展商店页面](https://microsoftedge.microsoft.com/addons/detail/dassi-ai-browser-agent-f/pngbomhpcimlmobhfpjfccfgpppkhbnb?hl=zh-CN)。

认准橙色 `[d]` 图标和开发者 **Omnify Labs LLC**，点击 **获取**。已经安装时，页面会显示其他管理按钮。

## 2. 确认添加扩展

阅读 Edge 弹窗列出的权限，再点击 **添加扩展 / Add Extension**。Dassi 需要读取网页、操作标签页等权限来完成浏览器任务。

![Edge 的添加扩展确认窗口](/images/zh-install/edge-02-confirm.jpg)

## 3. 打开 Dassi

安装成功后会打开欢迎页，并出现安装完成提示。点击 **Open Dassi and start** 可以打开侧栏。平时也可以从 Edge 工具栏的扩展菜单找到 Dassi。

![实际安装成功后的 Dassi 欢迎页](/images/zh-install/edge-03-installed.jpg)

## 4. 登录，再开始中文任务

侧栏提供 **Sign in with Google** 和 **Sign in with email instead** 两个登录入口。选择你能正常访问的方式，按页面提示完成登录。安装扩展和使用模型是两个步骤；具体额度、套餐以当前账户页面为准。

![Edge 中已打开的 Dassi 侧栏与登录入口](/images/zh-install/edge-04-sidebar.jpg)

在普通网页中打开 Dassi，先试一个简单任务：

```text
用中文整理当前网页的标题、主要内容和来源链接。
只读取，不修改网页。找不到的信息写“未找到”，不要猜。
```

不要在浏览器设置页、扩展商店页上测试网页操作。先用一个能正常打开的公开网页。

## 国内用户遇到连接问题怎么办？

- **商店打不开：** 确认用的是 Edge，检查当前网络是否能访问 Microsoft 的扩展商店。
- **Google 登录打不开：** 尝试侧栏里的邮箱登录入口。
- **已登录但模型报错：** 按实际错误区分网络、额度和模型配置问题。更换浏览器不等于更换模型服务。
- **使用自己的 API key：** 参考 [模型与服务商配置](/guides/connect-ai-provider/)。API 服务费用和 Dassi 的账户权益分别以各自页面为准，不保证填写 key 后所有功能都可免费使用。

## 下一步

[复制一个外贸、电商任务](/zh/ecommerce-start/) · [紫鸟安装状态说明](/zh/ziniao-install/)
