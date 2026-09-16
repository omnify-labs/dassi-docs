---
title: Use Dassi on a Chromebook
description: Dassi is a Chrome extension, so a Chromebook is already set up for it. What's the same, what's different, and where to start.
---

On a Chromebook, Chrome is the whole computer — and Dassi lives inside Chrome. There's nothing else to install: no Linux container, no Play Store app, no Chromebook Plus requirement. You add the extension from the Chrome Web Store and it works the same way it does on a Mac or Windows laptop.

That matters because most AI agents skip Chromebooks entirely. Claude Desktop and Claude Cowork are Mac and Windows apps. ChatGPT Atlas is Mac only. Comet and Dia are separate browsers, which ChromeOS can't install. Gemini in Chrome is [limited to Chromebook Plus models](https://support.google.com/chromebook/answer/16869001), and its Auto Browse feature needs a paid Google AI plan on top. Dassi runs on any Chromebook that can run a current Chrome, including entry-level 4 GB models.

## Install it

Follow the [installation guide](/getting-started/installation/) — it's the same on a Chromebook. Open the Web Store page, click **Add to Chrome**, and pin the extension.

Two Chromebook-specific things can get in the way:

**The Add to Chrome button is missing or greyed out.** That means the Chromebook is managed by a school or company, and the administrator decides which extensions can be installed. Dassi can't work around that. If it's a school device, ask whoever manages it; on a personal Chromebook this doesn't come up.

**The Web Store says your Chrome is too old.** Every Chromebook has an auto-update expiration date, after which it stops receiving new Chrome versions. Check yours at [Google's Auto Update policy page](https://support.google.com/chrome/a/answer/6220366). If your Chromebook is past that date, it can't get the Chrome version Dassi needs, and there's no fix short of a newer device.

## What's different on a Chromebook

Not much, but a few things are worth knowing.

**Memory.** Many Chromebooks have 4 GB of RAM, and Chrome discards background tabs when memory runs low. Dassi works on these machines, but while a task is running, keep the number of other open tabs small. If a task reports that a tab disappeared, close what you don't need and run it again.

**Models.** Dassi uses AI models in the cloud, so the Chromebook only has to run the browser. Managed credits work out of the box; you can also [connect your own API key](/guides/connect-ai-provider/). Running a local model through Ollama, which some people do on a desktop, isn't practical on a Chromebook — it needs more memory than most models have and a Linux container to run in.

**Keyboard.** **Alt+Shift+D** opens the Dassi panel. Chromebooks have no Command key, so anywhere the docs say Cmd, use Ctrl.

**Files.** Dassi works with Google Docs, Sheets, and Gmail in the browser, which is where most Chromebook work already lives. Anything Dassi downloads goes to the Files app like any other Chrome download.

## Where to start

These use cases were written with a Chromebook in mind — everything happens in Google's own apps, and nothing is sent, submitted, or bought without you.

- [Turn rough notes into a formatted Google Doc](/chromebook/notes-to-doc/)
- [Compare a product's price across three stores in a Google Sheet](/chromebook/price-check-sheet/)
- [List what's due this week from Google Classroom](/chromebook/classroom-week/)

Once one of them works for you, [start with one small task](/tutorials/) of your own.
