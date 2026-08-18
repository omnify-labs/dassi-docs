---
title: Control Dassi from Telegram
description: Link your Telegram account to send tasks to Dassi from anywhere, and get replies without touching your computer.
---

Telegram remote control lets you message `@dassi_ai_bot` from your phone and have Dassi carry out the task in Chrome on your computer. Your computer does the work; your phone is just the input.

This feature is in **beta**. You'll see a BETA badge on the Gateway tab in Settings.

## Why you'd use it

You're away from your desk and want Dassi to look something up, fill out a form, or run a multi-step task. Instead of waiting until you get back, you send a message from your phone and Dassi replies when it's done.

If you use Dassi on more than one computer, you can move Telegram to whichever one you're at by connecting it there — see [moving Telegram to a different computer](#move-telegram-to-a-different-computer) below.

## Before you start

You need:

- A [Telegram account](https://telegram.org)
- Dassi installed and signed in on the computer that will run tasks

## Connect your Telegram account

1. Open **Settings** (gear icon in the sidebar toolbar).
2. Click the **Gateway** tab.
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
- The Chrome installation paired to that chat, labeled with its OS and browser (something like `macOS Chrome`)
- Whether it's connected to **this** browser or to a different one
- When the device was last active

### Move Telegram to a different computer

Telegram runs in one browser at a time — the browser you most recently connected. If you have Dassi installed on more than one computer or Chrome profile, open Dassi in the one you want to use, go to the Gateway tab, and click **Connect Telegram**. That moves every one of your linked chats to this browser at once; there's no per-chat switch.

### Unlink a connection

Send `/unlink` from inside the `@dassi_ai_bot` chat to disconnect that chat from Dassi entirely.
