---
title: "Turn rough notes into a formatted Google Doc"
description: "Give Dassi a page of messy notes and get back a new Google Doc with headings, lists, and action items — your original untouched."
---

[All use cases](/tutorials/)

:::note[Works in your own Google account]
This prompt template is written for a Chromebook, where Google Docs is the natural place for writing. Results depend on the notes and on the current Docs interface. Review the new document before you share it or delete the original.
:::

You have notes — from a lecture, a meeting, a phone call — typed fast and out of order. You want a document someone else could read. Dassi reads the notes, works out the structure, and writes a new Google Doc with headings, bullet lists, and a list of action items at the end. The original doc stays as it is.

## Before you start

New to Dassi? Follow the [installation guide](/getting-started/installation/) and the [Chromebook guide](/chromebook/).

Open the Google Doc that holds your notes in Chrome, then open Dassi alongside it with `Alt+Shift+D`. If the notes are somewhere else — a text file, an email — paste them into a new Google Doc first so Dassi has one page to read.

Decide two things before you run the prompt: who the finished document is for, and roughly how long it should be. Both change how Dassi organizes the material.

## Write the document

```text
The Google Doc I have open contains my rough notes. Read the whole document, including anything below the fold.

Create a NEW Google Doc in the same account titled "[title]". Do not edit, reorder, or delete anything in the original notes.

In the new doc, organize the notes for [who will read it], about [length: one page / two pages / as long as it needs]. Use:
- a short title and a one-paragraph summary at the top
- headings for each main topic, in a sensible order (not necessarily the order I wrote them)
- bullet lists for details under each heading
- a final "Action items" heading listing every task, decision, or follow-up in the notes, each on its own line with the owner if I named one

Keep my wording where it's clear; fix obvious typos. Do not add facts, dates, names, or conclusions that aren't in the notes. If something in the notes is ambiguous, keep it as written and add "(unclear)" after it rather than guessing.

When the new doc is written, confirm it's saved, give me its link, and list anything you marked as unclear. Stop for my review.
```

Replace the bracketed parts before you send it. If your notes use shorthand only you understand — initials, project nicknames — add a line explaining them so Dassi doesn't have to guess.

## Check the result

Open the new document from the link Dassi gives you. Read it once against the original notes with three questions in mind: is anything missing, is anything there that wasn't in the notes, and did every task make it into the action items list. Dassi is told not to invent details, but a summary can still drop something you cared about, so this read is the point of the workflow — not an optional step.

Formatting is the most likely thing to come out imperfect. Google Docs applies heading styles through its own menus, and if a heading came through as bold text instead, ask Dassi to fix it: "Apply the Heading 2 style to each section heading in the new doc." Fixing formatting after the content is right is quicker than trying to get both at once.

The original notes doc is untouched, so if you'd rather start over with a different length or audience, just run the prompt again with the changes.

## Take it further

The same prompt works for a page of notes you didn't write — a shared meeting doc, a classmate's study notes — as long as you have permission to read it. And if you do this every week for the same kind of notes, ask Dassi to save the prompt as a workflow so you don't paste it each time; see [scheduled tasks](/guides/scheduled-tasks/).

[Try another use case](/tutorials/)
