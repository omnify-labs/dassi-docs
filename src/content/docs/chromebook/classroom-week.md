---
title: "List what's due this week from Google Classroom"
description: "Have Dassi read your Google Classroom to-do list and turn it into a dated checklist, without submitting or changing anything."
---

[All use cases](/tutorials/)

:::note[Read-only on Classroom]
This prompt reads your Classroom to-do list and writes a checklist. It doesn't submit work, mark anything done, or touch class settings. It works on a Chromebook where you're signed in to your school Google account and can install extensions — on a school-managed device, the administrator controls that.
:::

Google Classroom shows what's due, but across several classes it's a lot of scrolling, and it doesn't tell you what to do first. Dassi reads your to-do list, pulls out every assignment with its class and due date, and writes a checklist ordered by when things are due — so Monday starts with a plan rather than a scroll.

## Before you start

New to Dassi? Follow the [installation guide](/getting-started/installation/) and the [Chromebook guide](/chromebook/).

Open Google Classroom and go to the **To-do** page (from the menu at the top left, or open [classroom.google.com/a/not-turned-in/all](https://classroom.google.com/a/not-turned-in/all)). Make sure you're signed in with the account that's enrolled in your classes. Open Dassi with `Alt+Shift+D`.

Decide where you want the checklist: in the chat, or in a new Google Doc you can keep open all week. The prompt below asks for both.

## Build the checklist

```text
I have my Google Classroom To-do page open. Read the whole list, including the "Assigned", "Missing", and "Done" sections if they're shown, and any items below the fold.

For each assignment that is not yet turned in, record: the class name, the assignment title, the due date and time (or "no due date"), the points if shown, and whether Classroom marks it as missing.

Then write a checklist ordered by due date, earliest first, grouping items under a heading for each day. Put anything already marked missing at the top under its own heading. Use the assignment titles exactly as Classroom shows them.

Create a NEW Google Doc titled "Week of [date]" with that checklist, and also show it to me here in the chat.

Do not open, submit, mark as done, or unsubmit any assignment. Do not change anything in Classroom. Do not open the assignment pages themselves — the To-do list has what you need.

When the doc is saved, give me its link and tell me how many assignments you found in total. Stop for my review.
```

If you only care about one class, add a line: "Only include assignments from [class name]." If your school uses Canvas or another system instead of Classroom, the same prompt works with that system's to-do or assignments page open — change the first sentence to name it.

## Check the result

Compare the count Dassi gives you against the To-do page. Classroom loads items as you scroll, and a long list can end before Dassi reaches the bottom; if the numbers don't match, scroll the page to the end yourself and run the prompt again.

Then open the checklist and check the due dates. Classroom sometimes shows a due date without a time, or a time in a different time zone from your device, and the checklist copies what the page says. Anything that looks wrong is worth clicking through to the assignment itself — which Dassi deliberately didn't do.

The checklist is a document you own, so tick things off in it as you go. Nothing in Classroom changes until you actually submit.

## Take it further

Ask Dassi to save this as a workflow that runs every Sunday evening and creates the week's doc for you; see [scheduled tasks](/guides/scheduled-tasks/). If you'd rather have the list in Google Keep or Tasks, say so in the prompt — the checklist is just text, and Dassi can put it wherever you keep your lists.

[Try another use case](/tutorials/)
