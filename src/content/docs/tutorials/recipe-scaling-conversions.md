---
title: "Scale a recipe and convert its units"
description: "Rescale a recipe page to the number of servings you need, convert cups to grams, and get substitutions — without the life story."
---

[中文](/zh/tutorials/recipe-scaling-conversions/) · [All use cases](/tutorials/)

:::note[Start small]
This is a prompt template for a workflow, not a verified case study. Results depend on the site, the page you have open and the model. Review the output before acting on it, and keep anything that changes an account (submit, send, book, buy) for your own hands.
:::

A recipe for four when you're cooking for seven means arithmetic at the stove. Dassi does it once, on the page, and keeps the original for comparison.

## Before you start

New to Dassi? Follow the [installation guide](/getting-started/installation/) and [model setup guide](/guides/connect-ai-provider/).

Open the recipe in Chrome and scroll to the ingredient list. Open Dassi alongside it.

## 1. Rescale and convert

```text
Find the ingredient list on this page. Rescale it from [original servings] to [target servings] and convert every quantity to metric (grams, millilitres). Show original and new quantities side by side.
Round to sensible kitchen amounts and say when a conversion depends on density (e.g. cups of flour vs. sugar).
```

## 2. Substitutions and a list

```text
Suggest a substitute for [ingredient] that's [dairy-free / vegan / what I have]. Then give me a shopping list grouped by aisle, with quantities for the scaled recipe.
```

## Check the result

Check one ingredient by hand (7/4 × the original). Watch eggs and other things that don't scale linearly — Dassi should round, not tell you to use 3.5 eggs. Substitutions are suggestions; cooking times aren't rescaled unless you ask.

[Try another use case](/tutorials/)
