---
title: "Categorize spending on your bank statement"
description: "Read the transaction list on your bank's website and get totals by category, recurring subscriptions and a chart — without a CSV export."
---

[中文](/zh/tutorials/bank-statement-categorizer/) · [All use cases](/tutorials/)

:::note[Start small]
This is a prompt template for a workflow, not a verified case study. Results depend on the site, the page you have open and the model. Review the output before acting on it, and keep anything that changes an account (submit, send, book, buy) for your own hands.
:::

Budgeting apps want a CSV export or your login. Dassi reads the transaction table on the page you are already signed in to, so nothing leaves your browser except the text you ask it to read.

## Before you start

New to Dassi? Follow the [installation guide](/getting-started/installation/) and [model setup guide](/guides/connect-ai-provider/).

Sign in to your bank in Chrome and open the account's transaction list for one month. Open Dassi alongside it. Have a short category list ready if you already use one (for example: groceries, transport, subscriptions, dining, other).

## 1. Categorize one month

```text
Read the transactions visible on this page. Put each one in exactly one of these categories: [your categories]. Use "unsure" when the merchant name is ambiguous.
Give me: a table of transactions with category, totals per category, and a list of transactions that look like recurring subscriptions with their amount.
Read only. Do not click into transactions, download statements, or change any settings.
```

## 2. Fix the ambiguous ones

```text
For the "unsure" transactions, here are the right categories: [merchant → category, …]. Recompute the totals and show the split as a simple bar chart.
```

## Check the result

Compare the category totals to the account's statement total for the month — they should add up. Merchant names on bank pages are often truncated, so check the "unsure" list yourself rather than letting Dassi guess. Nothing here should have changed on the bank's side; if Dassi reports clicking anything beyond scrolling, stop and review.

[Try another use case](/tutorials/)
