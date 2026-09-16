---
title: "Check a product's price history before buying"
description: "Have Dassi look up how a product's price has moved and tell you whether today's price is a deal — without leaving the product page."
---

[中文](/zh/tutorials/price-history-injector/) · [All use cases](/tutorials/)

:::note[Start small]
This is a prompt template for a workflow, not a verified case study. Results depend on the site, the page you have open and the model. Review the output before acting on it, and keep anything that changes an account (submit, send, book, buy) for your own hands.
:::

"$599" means nothing without knowing it was $499 in November. Dassi can look that up in another tab and put the answer next to the price.

## Before you start

New to Dassi? Follow the [installation guide](/getting-started/installation/) and [model setup guide](/guides/connect-ai-provider/).

Open the product page in Chrome. Open Dassi alongside it. Dassi will open a price-tracking site in a new tab and ask you to approve it.

## 1. Look up the history

```text
Read the product name, model and current price on this page. Open a price-history site (for example camelcamelcamel for Amazon items) in a new tab, find this exact product, and report: lowest price in the last 12 months with its date, average price, and the current price relative to both.
Quote the figures as shown on the history site; if you can't find the exact model, say so rather than using a similar one.
```

## 2. Decide

```text
Based on that, is today's price above, near or below the 12-month average? Suggest a target price and, if the history shows a pattern (Black Friday, Prime Day), when the next drop is likely. Don't add to cart or buy anything.
```

## Check the result

Open the history tab Dassi used and confirm it's the same model number, not a variant. The "next drop" guess is pattern-spotting, not a forecast. Nothing on the store should have changed: no cart, no wishlist, no price alert unless you asked.

[Try another use case](/tutorials/)
