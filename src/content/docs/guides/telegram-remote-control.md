---
title: Control Dassi from Telegram
description: Link your Telegram account to send tasks to Dassi from anywhere, and get replies without touching your computer.
---

Telegram remote control lets you message `@dassi_ai_bot` from your phone and have Dassi carry out the task in Chrome on your computer. Your computer does the work; your phone is just the input.

This feature is in **beta**. You'll see a BETA badge on the Remote control tab in Settings.

## Why you'd use it

You're away from your desk and want Dassi to look something up, fill out a form, or run a multi-step task. Instead of waiting until you get back, you send a message from your phone and Dassi replies when it's done.

It also pairs well with having multiple devices — you can link Dassi on different Chrome profiles and switch between them from the same Telegram chat.

## Before you start

You need:

- A [Telegram account](https://telegram.org)
- Dassi installed and signed in on the computer that will run tasks

## Connect your Telegram account

1. Open **Settings** (gear icon in the sidebar toolbar).
2. Click the **Remote control** tab.
3. Click **Connect Telegram**. Dassi generates a pairing token — it expires in 5 minutes.
4. Do one of the following:
   - Click **Open in Telegram** to jump straight to the `@dassi_ai_bot` chat. On first link, Telegram shows a **Start** button — tap it once. The bot replies "Linked".
   - Click **Copy /link `<token>`** and paste that command into `@dassi_ai_bot` yourself.

<!-- TODO: screenshot of the Gateway tab with pairing token ready -->

Once linked, you'll see the connection listed in the **Linked connections** section below the Connect card.

## Send a task

Message `@dassi_ai_bot` in Telegram with whatever you want done:

> Book a table for 2 at a restaurant near the Space Needle for Saturday evening.

Dassi picks up your message, runs the task in Chrome, and replies in the same Telegram chat when it finishes. Tasks can take up to 10 minutes.

You can attach photos — Dassi will include them as part of the task.

The conversation also appears in Dassi's side panel on your computer, so you can watch the task run live or pick it up later.

## Manage linked connections

The **Linked connections** card in the Gateway tab shows every active pairing. Each row shows:

- The Telegram chat it came from
- The bot it paired through
- Which Chrome installation handles requests from that chat
- When the device was last active

### Switch which computer handles requests

If you have Dassi installed on more than one computer or Chrome profile, you can link all of them to the same Telegram chat. To choose which one handles requests, send this from the `@dassi_ai_bot` chat:

```
/use <label>
```

The label matches the device name shown in the Linked connections list — something like `macOS Chrome` or `My Chrome`.

### Unlink a connection

Send `/unlink` from inside the `@dassi_ai_bot` chat to disconnect that Chrome profile from the chat.

## Choose how you're alerted

[Scheduled tasks](/guides/scheduled-tasks/) that need your attention — approving a step, or answering a question — can reach you two ways. In **Settings → Remote control**, the **Notification channels** section has a toggle for each:

- **Telegram** — actionable alerts you can approve or reply to, right from the chat. Requires connecting Telegram first (see above).
- **Email** — a plain heads-up email linking back to Dassi. It's informational only; you can't reply to resume the task from it.

Both are on by default. Turn either off if you'd rather not be notified that way.

## Dassi can ask you questions mid-task

Scheduled tasks run on their own, but sometimes one needs a human. If Telegram is connected, Dassi pauses the task and messages you instead of guessing or failing:

- **Approval requests** — Dassi asks before a sensitive step and gives you **✅ Approve** and **❌ Skip** buttons right in the chat.
- **Open questions** — Dassi asks something it needs an answer to and waits for you to reply to that message with your answer.

Dassi waits up to 30 minutes for your response. If nothing comes back in time, it gives up on that step rather than waiting indefinitely.

This only applies to scheduled tasks running through Telegram — interactive conversations in the side panel already show plan approval cards directly (see [Plan approval](/guides/using-the-sidebar/#plan-approval)).
