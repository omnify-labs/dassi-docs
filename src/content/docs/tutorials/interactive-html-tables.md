---
title: "Sort, filter and chart a table on any page"
description: "Have Dassi add sorting, a filter bar and a chart to a static HTML table — without copying it into a spreadsheet."
---

[中文](/zh/tutorials/interactive-html-tables/) · [All use cases](/tutorials/)

:::note[Start small]
This is a prompt template for a workflow, not a verified case study. Results depend on the site, the page you have open and the model. Review the output before acting on it, and keep anything that changes an account (submit, send, book, buy) for your own hands.
:::

A long table on a government or vendor site usually means copy, paste, clean up, chart. Dassi can read the table where it is and add the controls to the page itself.

## Before you start

New to Dassi? Follow the [installation guide](/getting-started/installation/) and [model setup guide](/guides/connect-ai-provider/).

Open the page with the table in Chrome and scroll so the table header is visible. Open Dassi alongside it. If the page has several tables, decide which one you mean and describe it by its heading or first column.

## 1. Make the table interactive

```text
Look at the table under the heading "[heading]". Add a sort button to each column header and a filter box above the table for the [column] column.
Do this on the page itself; do not change the underlying data or submit anything. Tell me which column types you detected (text, number, date).
```

## 2. Ask a question of it

```text
Now show totals by [column] as a bar chart below the table, and highlight any row where [column] is over [threshold].
```

## Check the result

Sort by a number column and check the first and last rows by eye; wrong type detection (numbers read as text) shows up here. The chart totals should match a quick manual sum of two or three groups. Reloading the page removes everything Dassi added — this is a view, not an edit.

[Try another use case](/tutorials/)
