---
title: Limitations
description: What dassi cannot do — browser restrictions, content limits, and security boundaries.
---

dassi is powerful, but there are important things it cannot do. Understanding these limitations helps you get the best results.

## Browser restrictions

### Chrome internal pages

dassi cannot interact with Chrome's built-in pages:

- `chrome://settings`
- `chrome://extensions`
- `chrome://flags`
- `chrome://history`
- Any page with a `chrome://` URL

These pages are restricted by Chrome's extension security model.

### Other extension pages

dassi cannot interact with popups or pages from other Chrome extensions. Extension-to-extension communication is blocked by Chrome.

### Chrome version

dassi requires **Chrome 138 or later**. The side panel API and other features dassi depends on are not available in older versions.

## Content limitations

### Page context

dassi reads the page content visible in the current tab. It can scroll to access content below the fold, but there are practical limits to how much content it can process in a single conversation.

### Complex web applications

Some heavily dynamic web applications (like advanced canvas-based editors or games) may be difficult for dassi to interact with reliably, since their content is rendered outside the standard DOM.

### Iframes and embedded content

dassi may have limited ability to interact with content inside cross-origin iframes, depending on the site's security headers.

## Security boundaries

### Passwords and banking

dassi will never enter passwords, credit card numbers, bank account details, or other sensitive financial credentials. If a task requires logging in or entering payment information, dassi will ask you to handle that step yourself.

### CAPTCHAs

dassi respects bot detection systems (CAPTCHAs, human verification challenges) and will not attempt to bypass or solve them. If dassi encounters a CAPTCHA, it will ask you to complete it before continuing.

### Account creation

dassi will not create accounts on your behalf. If a workflow requires signing up for a service, dassi will guide you to the signup page but ask you to complete the registration yourself.

## Scope limitations

### Tab group scoping

Each dassi conversation is tied to a Chrome tab group. dassi can only see and interact with tabs in its current group. It cannot access tabs outside the group or in other windows.

### No background execution

dassi only works while the sidebar is open and you are actively in a conversation. It does not run tasks in the background or on a schedule.

### Single conversation

dassi handles one conversation at a time per tab group. You cannot run multiple parallel conversations in the same group.

## Model limitations

### Context window

AI models have a maximum context window — the amount of text they can process at once. Very long conversations or pages with large amounts of text may cause dassi to lose track of earlier context. Starting a new conversation resets the context.

### Accuracy

dassi uses AI models that can make mistakes. Always review dassi's work before taking action on important tasks. dassi may:

- Misread content on complex pages
- Click the wrong element in dense interfaces
- Generate inaccurate summaries or responses
- Misunderstand ambiguous instructions

### Speed

Response times depend on the AI model you've selected and the complexity of the task. Some models are faster than others — see [AI Models](/guides/ai-providers/) for details.
