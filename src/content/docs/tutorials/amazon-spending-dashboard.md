---
title: "Total up your Amazon order history"
description: "Read every order on your Amazon history pages, total them by month and category, and find the small impulse buys."
---

[中文](/zh/tutorials/amazon-spending-dashboard/) · [All use cases](/tutorials/)

:::note[Start small]
This is a prompt template for a workflow, not a verified case study. Results depend on the site, the page you have open and the model. Review the output before acting on it, and keep anything that changes an account (submit, send, book, buy) for your own hands.
:::

Amazon shows orders one at a time and never totals them. Dassi can read the order history you are already signed in to and add it up — no export, no third-party app with your credentials.

## Before you start

New to Dassi? Follow the [installation guide](/getting-started/installation/) and [model setup guide](/guides/connect-ai-provider/).

Sign in to Amazon in Chrome, open **Returns & Orders**, and set the time filter to the range you care about (for example, the last year). Open Dassi alongside it. Start with one page of orders; add pagination once the first pass looks right.

## 1. Total one page

```text
Read the orders visible on this page. For each order give the date, the items, and the order total in the currency shown.
Then add them up: total for the page, total by month, and a count of orders under $25 with their combined amount.
Read only — do not open item pages, reorder, or change anything. If an order total is not visible, say "not shown" instead of estimating.
```

## 2. Extend across pages

```text
Continue with the next pages of order history until you reach [month/year]. Keep one running table and one running total; tell me how many pages you read.
Stop and tell me if a page fails to load or the layout changes.
```

## Check the result

Spot-check three orders against the page — a large one, a small one and one from a different month. Dassi should never invent an order total; a "not shown" is better than a guess. Category labels are Dassi's inference from item names, so treat them as a rough split, not accounting.

[Try another use case](/tutorials/)
