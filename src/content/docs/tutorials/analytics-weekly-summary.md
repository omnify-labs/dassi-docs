---
title: "Write a weekly update from an analytics dashboard"
description: "Turn the metrics visible on a Google Analytics or similar dashboard into a short, ready-to-paste weekly update."
---

[中文](/zh/tutorials/analytics-weekly-summary/) · [All use cases](/tutorials/)

:::note[Start small]
This is a prompt template for a workflow, not a verified case study. Results depend on the site, the page you have open and the model. Review the output before acting on it, and keep anything that changes an account (submit, send, book, buy) for your own hands.
:::

The Monday update is the same every week: read the dashboard, pick out what moved, write three sentences. Dassi reads whatever view you have on screen — including custom dashboards no integration can see.

## Before you start

New to Dassi? Follow the [installation guide](/getting-started/installation/) and [model setup guide](/guides/connect-ai-provider/).

Open the dashboard in Chrome with the date range set to last week (compared to the week before, if the tool supports it). Scroll so the metrics you report on are visible. Open Dassi alongside it.

## 1. Draft the update

```text
Read the metrics visible on this dashboard for the selected period. Write a weekly update for [Slack / email] in under 120 words: overall traffic change, the top 3 pages, and the biggest mover up or down.
Use only numbers shown on the page and quote them exactly. If the comparison period isn't visible, say so instead of estimating a change.
Read only — do not change filters, date ranges or dashboard settings.
```

## 2. Add the "so what"

```text
Add one sentence explaining the most likely driver of the biggest change, clearly marked as a hypothesis, and one suggested action for this week.
```

## Check the result

Every number in the draft should be findable on screen; check the two or three you'd be asked about. If Dassi needed to scroll or switch tabs inside the dashboard, confirm the date range didn't change. The hypothesis sentence is an opinion — edit it or cut it before sending.

[Try another use case](/tutorials/)
