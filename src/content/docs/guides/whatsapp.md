---
title: Automate WhatsApp Web
description: Use Dassi to read, send, and manage WhatsApp messages directly from your browser.
---

Dassi works with WhatsApp Web, so you can read messages, send replies, search chats, react to messages, and manage group members — all from the sidebar.

## Before you start

Dassi's WhatsApp tools activate automatically when you open [web.whatsapp.com](https://web.whatsapp.com). You need to be logged in to WhatsApp Web — Dassi uses your existing session, so there's nothing extra to configure.

The first time you visit WhatsApp Web in a session, Dassi loads a small integration library into the page. This takes a few seconds. Once it's ready, you can start giving instructions.

## What you can ask Dassi to do

- "What unread messages do I have?"
- "Send a message to Alice saying I'll be 10 minutes late"
- "Find the group chat with the Sales team"
- "React to the last message in the Project chat with 👍"
- "Show me the members of the Marketing group"
- "Read the last 20 messages from Bob"

## Reading chats

Dassi can list your recent chats, search for a contact by name or phone number, and read message history from any chat. It fetches up to 50 messages at a time by default — ask for more if you need them ("read the last 100 messages").

## Sending messages and files

Dassi can send text messages and attach files — images, videos, documents, audio, and stickers. Before sending anything, Dassi will describe what it's about to do and wait for your confirmation.

<!-- TODO: screenshot of send confirmation -->

Reacting to a message and marking a chat as read also ask for confirmation first, since both actions are visible to other participants.

## Group admin tools

If you're an admin of a group, Dassi can also:

- List the group's members and their admin status
- Generate the group's invite link (anyone with the link can join — Dassi confirms before fetching one)
- Add or remove participants

These actions require admin access. Dassi reports an error if you don't have permission.

## Tips

- **Find the chat before sending.** Ask Dassi to "find the chat for Alice" before sending a message — it looks up the right chat ID from the contact name so nothing goes to the wrong person.
- **Paginate long conversations.** Dassi reads 50 messages by default. Specify a count if you need more: "read the last 100 messages."
- **Use a file URL when sending images.** Dassi can send an image from a public URL much more efficiently than pasting a base64 string. If you have a URL, use it.

## A note on WhatsApp's terms of service

WhatsApp's terms of service prohibit unofficial automation for bulk messaging, commercial outreach, and broadcast campaigns. Dassi's WhatsApp tools are designed for personal assistant tasks — acting on your behalf, one action at a time, with your approval before each send.
