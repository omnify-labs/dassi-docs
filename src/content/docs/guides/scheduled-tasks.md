---
title: Scheduled tasks
description: Set up recurring tasks that Dassi runs for you automatically — even when you're not watching.
---

Scheduled tasks let you tell Dassi to do something on a recurring schedule, on a specific site, on your behalf. Once you've confirmed a task, it runs whether or not the side panel is open.

## Why use scheduled tasks

Scheduled tasks are for things you'd normally do manually at a predictable time every day:

- Wish LinkedIn connections a happy birthday every morning at 9:00
- Get a summary of your unread Gmail at 8:30
- Check your X home timeline and engage with posts each evening

Dassi handles the repetition. You just review the results.

## Create a scheduled task

Open the Dassi side panel and describe the task you want to repeat. Include three things: **a time**, **a site**, and **what to do**.

```
Every morning at 9:00, open LinkedIn and wish a happy birthday to any connections celebrating today.
```

```
Daily at 8:30, open Gmail and summarize my unread emails from today.
```

```
Each evening at 18:00, open my X home timeline and like the top 3 posts.
```

Dassi will prepare the task and show you a consent card before activating it.

### Recurrence options

By default a task runs daily, but you can ask for other patterns too:

```
Every other day at 08:30, check my flight status and text me if it changed.
```

```
Every weekday at 09:00, post our team's GitHub activity summary to Slack.
```

```
On the 1st of every month, open our expense tracker and email me last month's total.
```

Dassi understands "every N days," specific weekdays (including "weekdays" and "weekends"), and a day of the month (including "the last day of the month," which adjusts for shorter months). The consent card and the Schedules tab both show a plain-language label for the schedule you set, like "Every Friday at 09:00" or "Monthly on the last day at 18:00," so you can confirm it's right before it runs.

To change a schedule's recurrence or time later, delete it and create a new one — there's no in-place edit, so the consent card appears again for the new version.

## Confirm the task

After you describe the task, a consent card appears in the side panel. It shows the target site, the time and timezone, and the exact instruction that will run.

Read it carefully. The card explains that Dassi will act on your account every day at that time, even when the panel is closed, as long as Chrome is open.

Click **Enable daily task** to activate it. Click **Cancel** to discard it without saving.

<!-- TODO: screenshot of consent card -->

## Manage your schedules

Open the Dassi **Options** page (the gear icon in the toolbar) and go to the **Schedules** tab. You'll see all your scheduled tasks listed with their site, time, and current status.

From the list you can:

- **Enable** — confirm a task you created but haven't activated yet
- **Pause** — stop a task from running without deleting it
- **Resume** — restart a paused task
- **Delete** — permanently remove the task

The list refreshes automatically when you return to the tab, so changes you make from the side panel always show up here.

<!-- TODO: screenshot of Schedules tab -->

## What happens when a task runs

Dassi opens the target site in a new tab and works through your instruction, the same way it handles any task you'd run manually. If you have the side panel open at that moment, you'll see the activity feed update in real time.

Once the task finishes, Dassi sends a desktop notification.

If a task fails three times in a row, Dassi pauses it automatically and marks it as **Error** in the Schedules tab. Check the task description, fix whatever caused the failure (for example, being logged out of the site), then click **Resume** to restart it.

## Limitations

- **Chrome must be open.** Scheduled tasks don't run if Chrome isn't running. If Chrome was closed when a task was due, Dassi runs it shortly after you reopen Chrome.
- **Runs on your device.** Tasks run in your browser using your logged-in sessions and cookies — Dassi isn't hosted in the cloud. If you're logged out of a site, the task will fail.
- **Once a day, at most.** A schedule fires at most once a day, at the time and recurrence pattern you set. Per-minute or per-hour scheduling isn't supported.
- **Timezone required.** Specify a timezone in your prompt ("9:00 Eastern", "17:00 Europe/London") so Dassi schedules the task correctly. If you don't, Dassi infers it from your browser's local timezone.
