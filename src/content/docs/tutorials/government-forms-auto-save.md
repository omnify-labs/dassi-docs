---
title: "Keep your progress on a long web form"
description: "Have Dassi checkpoint what you type into a long form that doesn't save, and restore it after a timeout or reload."
---

[中文](/zh/tutorials/government-forms-auto-save/) · [All use cases](/tutorials/)

:::note[Start small]
This is a prompt template for a workflow, not a verified case study. Results depend on the site, the page you have open and the model. Review the output before acting on it, and keep anything that changes an account (submit, send, book, buy) for your own hands.
:::

Government portals, visa applications and grant forms time out after twenty minutes and forget everything. Dassi can keep a copy of your answers as you go and put them back.

## Before you start

New to Dassi? Follow the [installation guide](/getting-started/installation/) and [model setup guide](/guides/connect-ai-provider/).

Open the form in Chrome before you start typing. Open Dassi alongside it. Dassi keeps the checkpoint in your browser only; the form site never sees it.

## 1. Start checkpointing

```text
I'm about to fill in this form and the site may time out. Record the values of every field on this page as I fill them in, and keep a checkpoint you can restore from. Tell me when the checkpoint is set up and remind me to ask for a new checkpoint before I click Next.
Do not submit, click Next, or change any field yourself.
```

## 2. Restore after a reload

```text
The page reloaded and the fields are empty. Restore every field from the last checkpoint, then list what you restored and anything you couldn't (for example file uploads or dropdowns that changed).
```

## Check the result

After a restore, scroll the whole page: file uploads and CAPTCHA-style checks never restore, and dropdown options sometimes change between sessions. The checkpoint is per page — on multi-step forms, ask for a fresh checkpoint on each step. It is a safety net, not a substitute for finishing before the timeout.

[Try another use case](/tutorials/)
