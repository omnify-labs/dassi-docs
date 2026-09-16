---
title: "Compare grocery items by cost per unit"
description: "Have Dassi work out cost per ounce, per 100g or per item for everything on a listing page and highlight the best value."
---

[中文](/zh/tutorials/grocery-cost-per-unit/) · [All use cases](/tutorials/)

:::note[Start small]
This is a prompt template for a workflow, not a verified case study. Results depend on the site, the page you have open and the model. Review the output before acting on it, and keep anything that changes an account (submit, send, book, buy) for your own hands.
:::

A 24-pack of 12 oz cans for $18 against a 1.5 L bottle for $3 is a unit-conversion problem, and stores don't make it easy on purpose. Dassi does the arithmetic for the whole page.

## Before you start

New to Dassi? Follow the [installation guide](/getting-started/installation/) and [model setup guide](/guides/connect-ai-provider/).

Open the listing or search-results page in Chrome (grocery site, Amazon, a retailer). Open Dassi alongside it.

## 1. Compute unit prices

```text
For every product visible on this page, read the price and the pack size (count × size, or total weight/volume). Compute the cost per [100 g / ounce / item] and show a table sorted from cheapest to most expensive per unit.
Mark any item where the size wasn't clearly stated instead of guessing it. Don't add anything to the cart.
```

## 2. Narrow it down

```text
Exclude items that need a subscription or have a shipping fee shown, and highlight the cheapest per unit among what's left.
```

## Check the result

Check the top item's arithmetic by hand — it takes ten seconds and catches a misread "12 × 12 oz" as "12 oz". Items marked "size unclear" need your eyes. Prices on the page may exclude tax or delivery; Dassi compares what's shown.

[Try another use case](/tutorials/)
