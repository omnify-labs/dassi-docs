---
title: "让 GitHub PR 逐段解释改动"
description: "为 pull request 的每一段 diff 得到一句大白话解释和风险标记，就放在它描述的代码旁边。"
---

[English](/tutorials/github-pr-diff-explainer/) · [全部场景](/zh/tutorials/)

:::note[先从小范围开始]
这是一个工作流的提示模板，不是经过验证的案例。结果取决于网站、你打开的页面和模型。行动之前先检查输出；任何会改变账号状态的操作（提交、发送、预订、购买）留给你自己来做。
:::

PR 顶部的摘要告诉你它声称做了什么。每个 hunk 旁边的解释告诉你它实际做了什么——以及哪里要多看两眼。

## 开始之前

第一次用 dassi？先看[安装指南](/zh/getting-started/installation/)和[模型设置指南](/zh/guides/connect-ai-provider/)。

在 Chrome 里打开 pull request 的 **Files changed** 标签。展开你关心的折叠文件。旁边打开 dassi。

## 1. 标注 diff

```text
读取本页的 diff。对每个改动的文件，在 diff 旁边加一条简短说明，用大白话解释这段改动做了什么，并标为低 / 中 / 高风险。凡是涉及认证、权限、限流、支付或数据删除的都算高风险。
只读取：不要在 GitHub 上评论、批准、请求修改或编辑任何东西。
```

## 2. 要一份审查清单

```text
根据这个 diff，列出批准前我应该核实的 5 件事，按风险排序。每一条注明文件和行号。
```

## 检查结果

打开 dassi 标为最高风险的两个 hunk 自己读一遍；标注是指引，不是结论。确认没有发布任何内容：PR 的 conversation 标签里不应该有你的新评论。刷新后标注会消失。

[试试另一个场景](/zh/tutorials/)
