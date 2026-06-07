---
title: Using the Sidebar
description: Learn the dassi sidebar interface — chat, history, activity feed, attachments, and more.
---

The dassi sidebar is your main interface for interacting with the AI agent.

## Opening the sidebar

- **Click the dassi icon** in your Chrome toolbar
- **Press `Alt+Shift+D`** to toggle the sidebar open

## Layout

The sidebar has three main areas:

### Toolbar

The top bar includes:

- **Discord** — link to the dassi community
- **History** — browse and restore past conversations (see [Conversation history](#conversation-history) below)
- **Clear chat** — clears the current conversation and starts fresh
- **More menu** (three dots) — access Settings, Skills, and Bug Report

### Chat area

The scrollable middle section shows your conversation. When you first open a session, dassi shows suggested actions based on the current page.

**User messages** — your prompts and instructions.

**Agent responses** — each response includes:
- **Activity steps** — a collapsible header showing how many steps dassi took. Expand it to see each action (navigation, screenshots, page reads, clicks) with icons and details
- **Activity feed** — a live log that appears while dassi is working, showing timestamped updates like "Navigating to google.com..." and "Reading page content..." (see [Activity feed](#activity-feed) below)
- **Response content** — the final answer rendered as Markdown with code blocks, tables, and formatting

### Message composer

The bottom bar is where you type messages:

- **Attach files** — click the paperclip icon to attach images or text files. You can also drag-and-drop or paste images from your clipboard
- **Send** — press `Enter` to send, `Shift+Enter` for a new line
- **Stop** — while dassi is working, the send button becomes a stop button

## Conversations

Each Chrome tab group has its own independent conversation. When dassi opens new tabs during a task, they join the same tab group and share the conversation context.

To start a fresh conversation, click the **trash icon** in the toolbar. This clears the current session's history.

If the sidebar closes or Chrome restarts, your active conversation is preserved. When you reopen the sidebar on the same tab, dassi picks up right where you left off.

## Conversation history

dassi saves your past conversations so you can return to them later.

### Browsing past conversations

1. Click the **clock icon** in the toolbar
2. A list of your previous conversations appears, each with an auto-generated title and a timestamp (for example, "5m ago" or "Yesterday")
3. Click any conversation to restore it

<!-- TODO: screenshot of history browser -->

### How it works

- Each conversation is automatically titled based on what you discussed. The title also appears on the Chrome tab group label.
- When you restore a past conversation, dassi loads the full message history into the sidebar so you can continue where you left off.
- Your current conversation is saved before the restore, so you won't lose any work.

### Tips

- Conversations are listed from most recent to oldest.
- Conversations that are actively open in another tab group won't appear in the history list to avoid conflicts.

## Activity feed

While dassi is working on a task, a live activity feed appears below the collapsible activity steps. It shows a rolling log of what dassi is doing right now, with timestamps counting up from when the task started.

<!-- TODO: screenshot of activity feed -->

Typical entries include:

- **Navigating to example.com...** — dassi is opening a website
- **Reading page content...** — dassi is reading text on the page
- **Clicking element...** — dassi is interacting with a button or link
- **Taking screenshot...** — dassi is capturing what the page looks like
- **Typing...** — dassi is entering text into a form field
- **Running JavaScript...** — dassi is performing an advanced action on the page

The feed shows the most recent actions and disappears once the task finishes.

## Switch away while dassi works

If a task takes more than about 10 seconds, a banner appears in the sidebar:

> "This is taking a while — I'll notify you when done"

Click **Switch Away** to jump to another tab outside the agent's workspace. dassi keeps working in the background, and you'll get a desktop notification when the task is complete.

<!-- TODO: screenshot of switch-away nudge -->

:::tip
To receive notifications when dassi finishes, make sure desktop notifications are enabled in **Settings > Notifications**.
:::

## Plan approval

Before visiting new websites or taking sensitive actions, dassi may present a **plan** for your approval. The plan shows:

- Which domains dassi will visit
- The steps it plans to take

Click **Approve** to proceed or **Reject** to stop. dassi will not act until you approve.

## Visual feedback

When dassi is actively controlling a browser tab:

- A **glowing border** appears around the tab viewport
- A small **banner** at the bottom reads "dassi is controlling your browser"
- A **Stop button** is shown in the banner
- You can also press `Ctrl+Shift+C` (or `Cmd+Shift+C` on Mac) to stop

## Suggestions widget

When the sidebar is closed, a small orange button may appear on the right edge of web pages. Hover over it to see contextual suggestions — things dassi can help with on the current page. Click a suggestion to open the sidebar and send it automatically.

You can disable this widget in **Settings > Features > Page Suggestions**.
