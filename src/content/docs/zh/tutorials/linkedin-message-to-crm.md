---
title: "把 LinkedIn 消息记进 CRM"
description: "让 dassi 把一段 LinkedIn 对话复制到 Salesforce 或 HubSpot 里对应联系人的备注中，再加一个跟进任务。"
---

[English](/tutorials/linkedin-message-to-crm/) · [全部场景](/zh/tutorials/)

:::note[先从小范围开始]
这是一个工作流的提示模板，不是经过验证的案例。结果取决于网站、你打开的页面和模型。行动之前先检查输出；任何会改变账号状态的操作（提交、发送、预订、购买）留给你自己来做。
:::

LinkedIn 和你的 CRM 之间没有集成就互不相通，而集成要花钱买。dassi 读一个标签页，往另一个里输入。

## 开始之前

第一次用 dassi？先看[安装指南](/zh/getting-started/installation/)和[模型设置指南](/zh/guides/connect-ai-provider/)。

一个标签页打开 LinkedIn 消息会话，另一个打开已登录的 CRM。在 LinkedIn 标签页上打开 dassi。先从一段会话、一个联系人开始。

## 1. 找到联系人

```text
读这段和 [对方姓名] 的 LinkedIn 会话。然后切换到我的 [Salesforce / HubSpot] 标签页，找到这个人的联系人记录。在做任何操作之前，先把匹配到的记录的姓名、公司和邮箱显示给我。如果匹配到多个或一个都没有，停下来告诉我。
```

## 2. 记录

```text
就是这条记录。给它加一条备注，包含最近 [5] 条消息及发送者和日期，标题为「LinkedIn 会话 [今天日期]」。然后创建一个 [下周二] 的跟进任务，主题为「[主题]」。保存两者，并显示保存的内容。
```

## 检查结果

在 CRM 里打开该联系人：一条新备注、一个新任务，其他没变。检查备注里的消息顺序，并确认备注没有加到别的联系人上（同名误匹配是主要风险，所以第 1 步要停下来确认）。dassi 不应该在 LinkedIn 上发送、点赞或回复任何东西。

[试试另一个场景](/zh/tutorials/)
