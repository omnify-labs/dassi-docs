---
title: "Turn an email into a calendar event"
description: "Have Dassi pull the date, time and place out of an email thread and create the calendar event for you to confirm."
---

[中文](/zh/tutorials/calendar-button-emails/) · [All use cases](/tutorials/)

:::note[Start small]
This is a prompt template for a workflow, not a verified case study. Results depend on the site, the page you have open and the model. Review the output before acting on it, and keep anything that changes an account (submit, send, book, buy) for your own hands.
:::

"Thursday at 3, Blue Bottle on 5th?" is a calendar event written in prose. Dassi reads the thread, works out the details, and drafts the event — you confirm it.

## Before you start

New to Dassi? Follow the [installation guide](/getting-started/installation/) and [model setup guide](/guides/connect-ai-provider/).

Open the email thread in Chrome and your calendar (Google Calendar, Outlook) in another tab. Open Dassi on the email tab.

## 1. Extract the details

```text
Read this email thread and pull out the meeting details: date, start time, timezone if mentioned, duration, location or video link, and who's attending. Show them to me as a list and say which ones you inferred (e.g. duration) rather than read.
Don't create anything yet.
```

## 2. Create the event

```text
Those are right, except [correction]. Switch to my calendar tab and create the event with those details and the email subject as the title. Save it, then show me the saved event's date, time and location.
```

## Check the result

Open the event in the calendar and compare it to the email — "Thursday" without a date is where inference goes wrong, and timezone is the second most common slip. Confirm no invitation was sent to attendees unless you asked for one.

[Try another use case](/tutorials/)
