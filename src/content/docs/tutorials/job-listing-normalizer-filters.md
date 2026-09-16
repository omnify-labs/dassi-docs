---
title: "Normalize a page of job listings"
description: "Turn a page of inconsistent job cards into one table with salary, remote policy and required years, then filter it to a shortlist."
---

[中文](/zh/tutorials/job-listing-normalizer-filters/) · [All use cases](/tutorials/)

:::note[Start small]
This is a prompt template for a workflow, not a verified case study. Results depend on the site, the page you have open and the model. Review the output before acting on it, and keep anything that changes an account (submit, send, book, buy) for your own hands.
:::

Fifty listings, each hiding the salary and remote policy in a different paragraph. Dassi reads them once and gives you the same five columns for every one.

## Before you start

New to Dassi? Follow the [installation guide](/getting-started/installation/) and [model setup guide](/guides/connect-ai-provider/).

Open the job search results page in Chrome (LinkedIn, Indeed, a company careers page). Open Dassi alongside it. Start with the listings visible on one page.

## 1. Normalize what's on screen

```text
Read the job listings on this page. For each, give: title, company, location, remote policy (remote / hybrid / onsite / not stated), salary range as written (or "not stated"), years of experience required, and the 3 main skills named.
Read from the listing text only; write "not stated" rather than inferring. Don't open the listings or apply to anything.
```

## 2. Shortlist

```text
From that table, hide anything that requires more than [N] years or is onsite. Rank the rest by how well they match [my stack / my priorities] and explain each ranking in one line.
```

## Check the result

Open two listings from the shortlist and compare the salary and years fields to the listing — those are the fields sites format most inconsistently. "Not stated" should be common; if Dassi fills every cell, it is guessing. The table is a snapshot of one page; paginate by repeating step 1.

[Try another use case](/tutorials/)
