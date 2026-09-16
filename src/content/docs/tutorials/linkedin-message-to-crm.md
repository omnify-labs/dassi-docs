---
title: "Log a LinkedIn message to your CRM"
description: "Have Dassi copy a LinkedIn conversation into the matching contact's notes in Salesforce or HubSpot, plus a follow-up task."
---

[中文](/zh/tutorials/linkedin-message-to-crm/) · [All use cases](/tutorials/)

:::note[Start small]
This is a prompt template for a workflow, not a verified case study. Results depend on the site, the page you have open and the model. Review the output before acting on it, and keep anything that changes an account (submit, send, book, buy) for your own hands.
:::

LinkedIn and your CRM don't talk to each other without an integration you have to buy. Dassi reads one tab and types into the other.

## Before you start

New to Dassi? Follow the [installation guide](/getting-started/installation/) and [model setup guide](/guides/connect-ai-provider/).

Open the LinkedIn message thread in one tab and your CRM, signed in, in another. Open Dassi on the LinkedIn tab. Start with one thread and one contact.

## 1. Find the contact

```text
Read this LinkedIn thread with [person's name]. Then switch to my [Salesforce / HubSpot] tab and find the contact record for that person. Show me the matching record's name, company and email before doing anything. If there is more than one match or none, stop and tell me.
```

## 2. Log it

```text
That's the right record. Add a note to it containing the last [5] messages with sender and date, titled "LinkedIn thread [today's date]". Then create a follow-up task for [next Tuesday] with the subject "[subject]". Save both and show me what was saved.
```

## Check the result

Open the contact in the CRM: one new note, one new task, nothing else changed. Check the note's message order and that no other contact got the note (a same-name mismatch is the main risk, which is why step 1 stops for confirmation). Dassi should not have sent, liked or replied to anything on LinkedIn.

[Try another use case](/tutorials/)
