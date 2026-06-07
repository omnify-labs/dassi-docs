---
title: Persistent scripts
description: Ask Dassi to create JavaScript snippets that run automatically on future page visits.
---

User Scripts let you ask Dassi to write small JavaScript snippets that run automatically every time you visit matching sites. Once saved, a script runs without you having to ask Dassi again.

You might use this to auto-dismiss cookie notices, highlight key terms across a site, pre-fill a recurring form, or tweak a layout that bothers you.

## One-time setup

Before Dassi can create user scripts, Chrome needs two things enabled. The first time Dassi tries to create a script, a setup card appears in the chat and walks you through both steps:

1. **Grant the permission** — click **Grant** in the setup card. Chrome asks you to confirm the `userScripts` permission for Dassi.
2. **Enable "Allow User Scripts" in Chrome** — click **Open Chrome settings** in the card. On Dassi's extension details page, turn on the **Allow User Scripts** toggle, then return to the chat.

<!-- TODO: screenshot of the two-step setup card -->

Once both steps are done, the setup card confirms user scripts are ready and invites you to re-send your original request.

## Creating a script

Describe what you want in chat:

> "Every time I visit github.com, collapse the left sidebar automatically"

> "On my team wiki, highlight every mention of 'TODO' in yellow"

> "Pre-fill the search field on our internal tool with my default filter"

Dassi writes the JavaScript, picks the right URL patterns, and registers the script with Chrome. A confirmation card appears in the chat showing the script name, which URLs it matches, and a code preview.

<!-- TODO: screenshot of the confirmation card -->

### Undoing a creation

The confirmation card shows an **Undo** button with a countdown chip. Clicking **Undo** within 10 seconds removes the script immediately. The button stays active after the countdown ends if you change your mind later.

## Managing scripts

Ask Dassi in chat to list, update, or remove scripts:

> "What scripts have you created for me?"

> "Delete the GitHub sidebar script"

> "Update the wiki highlight script to also catch 'FIXME'"

## How scripts run

Scripts run in Chrome's isolated user-script world — they have full access to the page DOM but don't share variables with the page's own JavaScript. By default they run after the page has fully loaded; Dassi can adjust the timing when you ask.

A script only runs on pages that match its URL pattern. For example, a script set to `https://*.github.com/*` runs on every GitHub page; `https://github.com/*/issues/*` covers only issue pages.

## Troubleshooting

**The setup card reappears after I finished setup** — both steps must be active at the same time. Open `chrome://extensions`, click **Details** on the Dassi card, and confirm the **Allow User Scripts** toggle is on.

**A script isn't running on the page I expect** — the URL pattern may not match. Ask Dassi to list your scripts and compare the pattern against the full URL you're visiting.

**Scripts disappeared after a reinstall** — Chrome removes user scripts when an extension is reinstalled or updated. Ask Dassi to recreate any scripts you want back.
