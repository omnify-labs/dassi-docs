---
title: "Move bank transactions into a Google Sheet"
description: "Read transactions from your bank's page and type them into the next empty rows of a budget spreadsheet — no CSV export, no import step."
---

[中文](/zh/tutorials/bank-to-sheets-no-export/) · [All use cases](/tutorials/)

:::note[Start small]
This is a prompt template for a workflow, not a verified case study. Results depend on the site, the page you have open and the model. Review the output before acting on it, and keep anything that changes an account (submit, send, book, buy) for your own hands.
:::

Two tabs, one task: Dassi reads the live transaction list in one and writes rows into the other. Because it writes into your sheet, start with a handful of rows and check them before doing a full month.

## Before you start

New to Dassi? Follow the [installation guide](/getting-started/installation/) and [model setup guide](/guides/connect-ai-provider/).

Open your bank's transaction list in one tab and the budget sheet in another, both in the same Chrome window. Note the sheet's column order (for example: date, description, category, amount). Open Dassi on the bank tab.

## 1. Transfer a few rows

```text
Read the 5 most recent transactions on this page. Then switch to my Google Sheets tab "[sheet name]" and type them into the next empty rows, using the columns: [date, description, category, amount].
Keep the bank's date and amount exactly as shown; use a negative amount for debits. Leave category blank if you're not sure.
Do not overwrite existing rows, and do not change anything on the bank's page.
```

## 2. Do the rest of the month

```text
Good. Now do the remaining transactions from [date] onwards the same way. Skip any that already appear in the sheet by date + amount. Tell me how many rows you added.
```

## Check the result

Count rows: the sheet should have gained exactly the number of transactions Dassi reports. Check the sign convention on two debits and one credit, and look at the last row — a half-typed row is the most common failure when a page is slow. Undo in Sheets (`Ctrl+Z`) reverses a bad batch.

[Try another use case](/tutorials/)
