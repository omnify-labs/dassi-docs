---
title: "Make a documentation code sample runnable"
description: "Turn a code example on a documentation page into something you can edit and run in place, with the output shown below it."
---

[中文](/zh/tutorials/docs-interactive-playground/) · [All use cases](/tutorials/)

:::note[Start small]
This is a prompt template for a workflow, not a verified case study. Results depend on the site, the page you have open and the model. Review the output before acting on it, and keep anything that changes an account (submit, send, book, buy) for your own hands.
:::

Reading a code sample and running it are usually two different windows. For JavaScript and simple HTTP examples, Dassi can run it right under the sample.

## Before you start

New to Dassi? Follow the [installation guide](/getting-started/installation/) and [model setup guide](/guides/connect-ai-provider/).

Open the documentation page in Chrome and scroll to the example you want to try. Open Dassi alongside it. This works for browser-runnable code (JavaScript, `fetch` calls to public APIs). Server-side languages need your own runtime; ask Dassi to adapt the sample instead of running it.

## 1. Run the sample

```text
Take the code sample under "[heading]" and make it runnable on this page: add an editable box with the code, a Run button, and an area that shows the output or the error.
Do not call any endpoint that needs my API key until I paste one in. Tell me what the sample does before you run it.
```

## 2. Change it

```text
Change the sample to use [my endpoint / parameter], run it again, and show me the difference in output. Then give me the final version as a code block I can copy.
```

## Check the result

Confirm the output matches what the documentation says it should be. If Dassi had to guess a value (an ID, a date), check the guess. The playground lives only on this page load — copy the working code before you navigate away.

[Try another use case](/tutorials/)
