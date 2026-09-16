---
title: "Explain a GitHub pull request diff inline"
description: "Get a plain-language explanation and a risk flag for each section of a pull request diff, next to the lines it describes."
---

[中文](/zh/tutorials/github-pr-diff-explainer/) · [All use cases](/tutorials/)

:::note[Start small]
This is a prompt template for a workflow, not a verified case study. Results depend on the site, the page you have open and the model. Review the output before acting on it, and keep anything that changes an account (submit, send, book, buy) for your own hands.
:::

A summary at the top of a PR tells you what it claims to do. An explanation next to each hunk tells you what it actually does — and where to look harder.

## Before you start

New to Dassi? Follow the [installation guide](/getting-started/installation/) and [model setup guide](/guides/connect-ai-provider/).

Open the pull request's **Files changed** tab in Chrome. Expand any collapsed files you care about. Open Dassi alongside it.

## 1. Annotate the diff

```text
Read the diff on this page. For each changed file, add a short note next to the diff explaining what the change does in plain language, and mark it low / medium / high risk. Treat anything touching authentication, permissions, rate limits, payments or data deletion as high risk.
Read only: do not comment, approve, request changes or edit anything on GitHub.
```

## 2. Get a review checklist

```text
Based on the diff, list 5 things I should verify before approving, in order of risk. Include the file and line for each.
```

## Check the result

Open the two hunks Dassi marked highest risk and read them yourself; the annotation is a pointer, not a verdict. Confirm nothing was posted: the PR's conversation tab should have no new comment from you. Annotations disappear on reload.

[Try another use case](/tutorials/)
