---
title: "Fact-check the claims in a news article"
description: "Have Dassi list the checkable claims in an article, look up sources for each, and separate what's confirmed from what's opinion."
---

[中文](/zh/tutorials/news-inline-fact-checks/) · [All use cases](/tutorials/)

:::note[Start small]
This is a prompt template for a workflow, not a verified case study. Results depend on the site, the page you have open and the model. Review the output before acting on it, and keep anything that changes an account (submit, send, book, buy) for your own hands.
:::

Most claims in an article are unchecked not because they're hard to check, but because checking means leaving the page. Dassi can open the sources in other tabs and report back.

## Before you start

New to Dassi? Follow the [installation guide](/getting-started/installation/) and [model setup guide](/guides/connect-ai-provider/).

Open the article in Chrome. Open Dassi alongside it. Dassi will open new tabs to look things up; it will ask you to approve the sites it wants to visit.

## 1. List the claims

```text
Read this article and list every claim that could be checked against a source: numbers, dates, quotes, "first / largest / only" statements. Number them. Separate them from statements of opinion. Don't check anything yet.
```

## 2. Check the top ones

```text
Check claims [1, 3, 5]. For each, find a primary source (official statistics, the original report, the quoted person's own statement), give the link, and rate the claim: confirmed / partly true — explain what's missing / couldn't verify. Quote the source's exact figure next to the article's figure.
```

## Check the result

Open the sources Dassi cites and confirm the figure is there — a link that doesn't contain the number is the most common failure. "Couldn't verify" is an acceptable answer; a confident rating with no source is not. Dassi's ratings are a starting point for your own judgement, not a verdict.

[Try another use case](/tutorials/)
