---
title: Using the Sidebar
description: Learn the dassi sidebar interface — chat, activity steps, attachments, and more.
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
- **Settings** — opens the options page for account, billing, and model settings
- **Clear chat** — clears the current conversation and starts fresh

### Chat area

The scrollable middle section shows your conversation. When you first open a session, dassi shows suggested actions based on the current page.

**User messages** — your prompts and instructions.

**Agent responses** — each response includes:
- **Activity steps** — a collapsible header showing how many steps dassi took. Expand it to see each action (navigation, screenshots, page reads, clicks) with icons and details
- **Response content** — the final answer rendered as Markdown with code blocks, tables, and formatting

### Message composer

The bottom bar is where you type messages:

- **Attach files** — click the paperclip icon to attach images or text files. You can also drag-and-drop or paste images from your clipboard
- **Send** — press `Enter` to send, `Shift+Enter` for a new line
- **Stop** — while dassi is working, the send button becomes a stop button

## Conversations

Each Chrome tab group has its own independent conversation. When dassi opens new tabs during a task, they join the same tab group and share the conversation context.

To start a fresh conversation, click the **trash icon** in the toolbar. This clears the current session's history.

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
