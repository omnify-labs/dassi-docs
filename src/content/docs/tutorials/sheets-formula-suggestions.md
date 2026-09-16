---
title: "Get a Google Sheets formula in plain English"
description: "Describe what you want a column to compute and get a formula that uses your sheet's actual column names, with an explanation."
---

[中文](/zh/tutorials/sheets-formula-suggestions/) · [All use cases](/tutorials/)

:::note[Start small]
This is a prompt template for a workflow, not a verified case study. Results depend on the site, the page you have open and the model. Review the output before acting on it, and keep anything that changes an account (submit, send, book, buy) for your own hands.
:::

Formula help in Sheets assumes you already know the function name. Dassi can see your headers and a few rows, so it can turn "month-over-month growth for Revenue" into a formula for *this* sheet.

## Before you start

New to Dassi? Follow the [installation guide](/getting-started/installation/) and [model setup guide](/guides/connect-ai-provider/).

Open the sheet in Chrome with the header row and a few data rows visible. Click the cell where the result should go. Open Dassi alongside it.

## 1. Ask for the formula

```text
Look at this sheet's header row and the first few rows of data. I need a formula for cell [cell] that computes [what you want, e.g. month-over-month growth of the Revenue column].
Give me the formula, a one-paragraph explanation of what each part does, and which cells it references. Do not enter it into the sheet yet.
```

## 2. Insert and extend

```text
That's right. Enter it in [cell], then fill it down to the last row that has data in column [column]. Tell me how many rows you filled.
```

## Check the result

Verify one row by hand — pick a row in the middle and compute the value yourself. Check the last filled row references the right neighbours (off-by-one is the usual error). If the formula shows `#REF!` or `#N/A`, undo (`Ctrl+Z`) and ask Dassi to fix the range rather than retyping.

[Try another use case](/tutorials/)
