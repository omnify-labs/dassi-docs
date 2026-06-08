---
title: File references
description: Give Dassi persistent access to local files and folders so it can read, browse, and write your content during tasks.
---

File references let you connect local files and folders on your computer to Dassi so the agent can read them during conversations. Once you add a reference, it's available across all your sessions — you don't need to re-attach files every time.

## Why you'd use this

Some tasks only make sense when Dassi can see your actual content:

- Summarize or review documents you store locally
- Scan a folder of CSVs and answer questions about the data
- Write a script that processes files in a project directory
- Read a local PDF and compare it to something on the web

## Add a file or folder reference

References are managed in the **References** tab in settings:

1. Open the dassi side panel and click the **More menu** (three dots) → **Settings**
2. Click the **References** tab
3. Click **+ File** to add a single file, or **+ Folder** to add an entire directory

Your browser will open a native file picker. After you select a file or folder, give it a name and an optional description — the description helps Dassi understand what the reference contains without having to read it first.

**Drag and drop shortcut** — You can also drag a folder directly from your file manager into the dassi side panel. Dassi will prompt you to save it as a reference.

<!-- TODO: screenshot of References tab -->

### Enable and disable references

Each reference has a toggle. Disabling a reference keeps it in your list without making it available to the agent — useful for references you only need sometimes.

### Edit or remove references

Click the edit icon on a reference card to rename it or update its description. Use the delete icon to remove it permanently.

## Choose which references to share in a conversation

Saving a reference doesn't automatically give every conversation access to it. You pick which ones to share per session using the folder button in the message composer.

1. Look for the **folder icon** at the bottom-left of the message composer (it only appears when you have at least one enabled reference)
2. Click it to open the reference picker
3. Check each reference you want Dassi to use in this conversation

A badge on the folder button shows how many references are currently pinned. Dassi keeps your selections for the lifetime of that session.

<!-- TODO: screenshot of reference pin dropdown -->

## What Dassi can do with your references

Once a reference is pinned to a conversation, Dassi can:

- **List available references** — see what's connected and what kind of content it holds
- **Browse a folder** — navigate the directory tree, list files and their sizes
- **Read a file** — read text files, code files, PDFs, and other documents
- **Write a file** — create or overwrite a file within a reference (for example, write a Python script you can then run locally)

Dassi decides when to use these capabilities based on your request. You can also ask explicitly: "Read the invoices folder and summarize last month's totals."

## What Dassi can't access

- Files outside a reference's root folder — Dassi stays within the boundary you defined
- References that aren't pinned to the current conversation
- References that are disabled in settings

## Privacy

When Dassi reads a file, its content is sent to your configured AI provider (the same model handling your conversation). File content isn't stored on Dassi's servers. See [Privacy & Security](/reference/privacy-and-security/) for more.
