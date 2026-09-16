---
title: "Prepare three Gmail replies for review"
description: "Read a small set of email threads, save reply drafts, and verify them before sending."
---

[All use cases](/tutorials/)

:::note[Start with a small batch]
This prompt template adapts an observed user workflow. Results depend on your account and the current page. Review the comparison before making changes, and verify saved results on the site.
:::

Use a small batch to see whether Dassi can prepare useful replies in your voice. You review the saved drafts before sending.

## Before you start

New to Dassi? Follow the [installation guide](/getting-started/installation/) and [model setup guide](/guides/connect-ai-provider/).

Open the intended Gmail account in Chrome and open Dassi alongside it. Choose three threads or a clearly bounded inbox scope. Provide a short description of your preferred tone and any facts needed to answer. Gmail's [reply guide](https://support.google.com/mail/answer/9259856?hl=en-GB) explains the underlying reply interface.

## Prepare the drafts

```text
In the Gmail account I have open, review [three selected threads / my three most recent unread inbox threads].
Read enough of each thread to understand the latest request. My preferred tone is [tone]. Approved facts for replies: [facts].

For each thread, prepare a concise reply addressed to the intended recipient. Do not invent dates, prices, promises or personal details. If a reply needs missing information, list the question for me instead of guessing.

Check for an existing draft first. Do not overwrite it or create a competing draft without asking. Save new replies as drafts only; do not send, archive, delete, unsubscribe or change labels. Do not choose Reply all unless I explicitly request it.

Confirm each draft is saved and can be reopened. Return the thread subject, intended recipient, draft status, source link where available and any question I need to resolve. Stop for my review.
```

## Check the result

Open each draft and check the recipient, context, factual claims, and tone. A generated reply shown in chat is not a saved Gmail draft. If there is no saved draft, mark that item incomplete and resolve the blocker before retrying.

Opening unread messages may mark them as read. If preserving unread status matters, include that requirement before starting and verify it afterwards.

This is a review workflow, not an unattended inbox responder. Save the result list if interrupted so a later run can check for existing drafts first.

[Try another use case](/tutorials/)
