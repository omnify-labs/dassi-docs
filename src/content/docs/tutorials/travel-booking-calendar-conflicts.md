---
title: "Check a booking date against your calendar"
description: "Before you book a flight or hotel, have Dassi compare the dates with your open calendar tab and flag the conflicts."
---

[中文](/zh/tutorials/travel-booking-calendar-conflicts/) · [All use cases](/tutorials/)

:::note[Start small]
This is a prompt template for a workflow, not a verified case study. Results depend on the site, the page you have open and the model. Review the output before acting on it, and keep anything that changes an account (submit, send, book, buy) for your own hands.
:::

Booking sites know your dates; your calendar knows your meetings. Neither knows about the other until Dassi reads both.

## Before you start

New to Dassi? Follow the [installation guide](/getting-started/installation/) and [model setup guide](/guides/connect-ai-provider/).

Open the booking page in Chrome with the dates you're considering selected. Open your calendar in another tab, showing that month. Open Dassi on the booking tab.

## 1. Find the conflicts

```text
I'm considering travelling [dates] as shown on this page. Look at my calendar tab for those dates plus one day either side, and list every event with its time. Mark which ones conflict with the travel days, which are movable (no other attendees), and which look fixed.
Read only — don't book, hold, or change anything on either tab.
```

## 2. Pick better dates

```text
Given those conflicts, suggest up to 3 alternative date ranges of the same length within [window] that avoid the fixed events. For each, tell me what would still need moving.
```

## Check the result

Open the conflicting events in the calendar yourself; all-day events and events in another timezone are where reading goes wrong. The "movable" judgement is based on attendee count only — you know better. Nothing should be booked; the booking page should still be on the search step.

[Try another use case](/tutorials/)
