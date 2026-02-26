---
title: Privacy & Security
description: How dassi handles your data, what permissions it needs, and how your privacy is protected.
---

## How dassi handles your data

dassi runs entirely as a Chrome extension. It does not have its own backend server that processes your browsing data.

When you send a message, dassi:

1. Reads the current page content (text, structure, and sometimes a screenshot)
2. Sends that content along with your prompt to the AI model you've selected
3. Receives a response and takes action in your browser

**Your data goes directly from your browser to the AI provider.** dassi does not store, log, or forward your browsing data to any other service.

## What dassi does not collect

- Browsing history
- Passwords or saved credentials
- Credit card or banking information
- Data from tabs outside your active conversation
- Content from pages you haven't asked dassi to read

## Permissions

dassi requests the following Chrome permissions:

| Permission | Why it's needed |
|-----------|----------------|
| **Active tab** | Read the content of the tab you're working in |
| **Side panel** | Display the dassi sidebar interface |
| **Scripting** | Take screenshots and interact with page elements |
| **Storage** | Save your settings, conversation history, and memory |
| **Identity** | Sign in with your Google account |

dassi only accesses tab content when you actively send a message or run a skill. It does not passively monitor your browsing.

## AI provider data handling

Your prompts and page content are sent to whichever AI provider you've selected:

- **Managed credits** — requests are routed through a managed API gateway to providers like Anthropic (Claude) and Google (Gemini)
- **BYOK (OpenAI)** — requests go directly to OpenAI using your own API key

Each provider has its own data handling and retention policies. Review the privacy policy of your selected provider for details on how they handle API requests.

## Local storage

dassi stores the following data locally in your browser:

- **Conversation history** — your chat messages and responses
- **Memory** — things you've asked dassi to remember
- **Settings** — your model selection, API keys, and preferences
- **Skills** — custom skills you've created

This data stays in your browser's extension storage. Clearing your browser data or uninstalling dassi removes it.

## Plan approval

Before visiting new domains or taking actions on sensitive pages, dassi presents a plan for your approval. You must explicitly approve before dassi proceeds. This gives you full visibility and control over dassi's actions.

## Stopping dassi

You can stop dassi at any time:

- Press `Ctrl+Shift+C` (or `Cmd+Shift+C` on Mac) from any tab
- Press `Esc` while the sidebar is focused
- Click the **Stop** button in the control banner
- Close the sidebar

dassi immediately stops all browser automation when interrupted.
