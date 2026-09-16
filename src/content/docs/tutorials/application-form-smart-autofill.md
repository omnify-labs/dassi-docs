---
title: "Fill a job application form from your resume"
description: "Have Dassi fill a Workday, Greenhouse or similar application from your resume, pausing on anything ambiguous, and leave the submit button to you."
---

[中文](/zh/tutorials/application-form-smart-autofill/) · [All use cases](/tutorials/)

:::note[Start small]
This is a prompt template for a workflow, not a verified case study. Results depend on the site, the page you have open and the model. Review the output before acting on it, and keep anything that changes an account (submit, send, book, buy) for your own hands.
:::

Browser autofill matches field names; it doesn't know that "Most recent employer" and "Current company" are the same question. Dassi reads the label, the resume, and fills by meaning.

## Before you start

New to Dassi? Follow the [installation guide](/getting-started/installation/) and [model setup guide](/guides/connect-ai-provider/).

Open the application form in Chrome. Have your resume open in another tab (a Google Doc, PDF or LinkedIn profile), or add it as a [file reference](/guides/file-references/). Open Dassi on the form tab.

## 1. Fill the current page

```text
Fill the fields on this application page using my resume in the tab "[resume tab name]". Match fields by meaning, not just by label. Use the date format the form asks for.
Leave blank and list for me: anything not in my resume, any yes/no question about eligibility or legal status, and any free-text question. Do not click Next or Submit.
```

## 2. Answer the leftovers

```text
Here are the answers for the blanks: [field → value, …]. Fill them in. Then list every field on the page with the value you entered so I can check before I click Next myself.
```

## Check the result

Read the field list against the form — dates and phone formats are where auto-fill goes wrong. Confirm nothing was submitted: the page should still be the one you started on. Multi-page forms: repeat step 1 per page; you click **Next** each time.

[Try another use case](/tutorials/)
