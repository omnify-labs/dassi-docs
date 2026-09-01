---
title: Use Dassi with Ollama
description: Point Dassi at your local Ollama server. Step-by-step, with screenshots, on where the endpoint setting lives and what to put in it.
---

Dassi can run on a model you host yourself. If you already use [Ollama](https://ollama.com), you can point Dassi at `http://localhost:11434` and it will use your local model as the reasoning engine instead of Dassi's managed credits — no cloud provider, no per-token bill, and no page content leaving your computer.

The setting is real but it's buried: it lives behind a collapsed section on the Models page, at the bottom of a long list of providers. This guide shows you exactly where to click.

**On pricing:** running your own model puts you on **Developer**, which costs less than the managed-credit tiers — you supply the keys, so you're only paying for the extension. It's hidden until you've connected a provider, so don't go looking for it first. See [Unlock the Developer plan](#unlock-the-developer-plan) below, or [Plans & Billing](/reference/plans-and-billing/) for the full comparison.

## Why you'd use it

- **Your data stays on your machine.** Page text, screenshots, and prompts go to `localhost`, not to a model vendor.
- **No per-token bill.** You're spending your own GPU time, not credits — on a [cheaper flat monthly plan](#unlock-the-developer-plan).
- **Your choice of model.** Swap between anything you've pulled, straight from the model picker in chat.

The tradeoff is capability. Browser automation is a demanding, long-horizon, tool-calling workload — a 7B model will feel noticeably less reliable than a frontier model at multi-step tasks.

## Before you start

:::caution[Set up Ollama first]
Ollama refuses requests from Chrome extensions until you allow Dassi's origin. If you skip that, the steps below will appear to work and then every task will fail.

Do [Set up Ollama for Dassi](/guides/ollama-server-setup/) first — it takes two commands.
:::

You also need [Dassi installed](/getting-started/installation/) in Chrome.

## 1. Open Dassi's settings

There's no gear icon in the panel toolbar. Settings is behind the **⋮** menu.

![Dassi's side panel with the three-dot menu open. The menu button in the top-right toolbar is outlined and labelled 1; the Settings item at the top of the menu is outlined and labelled 2.](/images/ollama-open-settings.png)

1. Click **⋮** in the top-right of the Dassi side panel.
2. Click **Settings**. Dassi opens its settings page in a new tab.

## 2. Go to Models, then expand API keys

This is the step people miss — **API keys** is collapsed by default, so the provider list isn't visible until you click it.

![Dassi's settings page on the Models tab. Models in the left nav is outlined and labelled 1; the collapsed API KEYS section heading near the bottom is outlined and labelled 2.](/images/ollama-models-api-keys.png)

1. Click **Models** in the left nav, under **Agent**.
2. Click **API KEYS** to expand the section. A long list of providers appears.

## 3. Find the Custom endpoint card

Scroll to the very bottom of that provider list, past Azure OpenAI.

![The bottom of the API keys list. The Custom (OpenAI-compatible) card is outlined and labelled 1, and its Add endpoint button is outlined and labelled 2.](/images/ollama-add-endpoint.png)

1. The **Custom (OpenAI-compatible)** card — its subtitle reads "Azure, LiteLLM, Ollama …". This is the one you want, not Azure OpenAI directly above it.
2. Click **Add endpoint** to open the form.

## 4. Fill in the form

Three fields appear. Only the first one needs anything typed into it:

![The expanded Custom endpoint form with Base URL set to http://localhost:11434 and the Model ID and API Key fields left empty. Each field and the Save button are outlined and numbered.](/images/ollama-endpoint-form.png)

1. **Base URL** — enter `http://localhost:11434`. Include the scheme: a bare `localhost:11434` is rejected as an invalid URL. Dassi normalizes the URL to end in `/v1`, so `http://localhost:11434` and `http://localhost:11434/v1` are equivalent.
2. **Model ID** — **leave it blank.** Dassi reads the model list from your server and lets you pick in chat. (If you'd rather pin one, enter the exact tag from `ollama list`, e.g. `qwen3:8b`. `gpt-4o` is only the placeholder text.)
3. **API Key** — **leave it blank.** Ollama needs no auth, and the key is optional for a custom endpoint. Ignore the `sk-...` placeholder.
4. Click **Save**.

Chrome will ask for permission to access `http://localhost` — approve it. Dassi then calls `http://localhost:11434/v1/models` to verify the connection, and the card shows as verified.

## 5. Pick your model and run a task

Open the model picker at the bottom of the chat window. Every model you've pulled that Dassi supports is listed there — switch to the one you want.

Then try something small first, to confirm the loop works end to end:

> Summarize this page in three bullet points.

If that works, move up to a real task:

> Find the pricing page on this site and tell me what the cheapest paid plan includes.

## Unlock the Developer plan

A local model means you don't need managed credits, so the Starter / Pro / Max tiers aren't what you want. **Developer** ("Dassi for developers") is the track built for this: you supply the keys, and it costs less than any of the managed tiers because you're only paying for the extension.

**It's hidden until you've connected a provider.** If you go looking for it before finishing step 4, it isn't on the Plan page at all — which is why it's easy to miss that this cheaper option exists.

Once your Ollama endpoint verifies, open **Settings → Plan**. The Developer option appears below the Starter / Pro / Max cards, set apart rather than sitting in the grid — it's a different kind of plan, not another credit tier.

![The bottom of Dassi's Plan page. Below the Starter, Pro and Max cards, a separate strip labelled "Dassi for developers" is outlined, showing a monthly price, the line "Bring your own API keys — ChatGPT, Gemini, Claude and more", a dassi CLI link, and a Continue button.](/images/ollama-developer-plan.png)

Checkout is by card. Where managed-credit purchases are paused for your region, a WeChat Pay button appears next to it as well.

It also shows up if you already subscribe to it, or if managed-credit plans are unavailable in your region.

See [Plans & Billing](/reference/plans-and-billing/) for what each plan includes.

## If your model is slow

Local models on modest hardware can take a while to produce the first token, especially on the first request after a model loads. Dassi waits 600 seconds by default, which is also the maximum.

To check or change it, click **Advanced** in the same Custom endpoint form:

![The Advanced section of the Custom endpoint form expanded, showing a Response timeout field set to 600 seconds.](/images/ollama-response-timeout.png)

This is how long Dassi waits for the model to *start* responding before giving up. If you're hitting that ceiling, the fix is on the Ollama side — see [Set up Ollama for Dassi](/guides/ollama-server-setup/#keeping-a-slow-model-responsive).

## Troubleshooting

| What you see | What it means |
|--------------|---------------|
| **"Your local model blocked the request"** after a task starts | `OLLAMA_ORIGINS` isn't set, or doesn't match your extension ID. The connection check passes without it — only the actual model call fails — so this shows up on your first task, not at setup. See [Allow Dassi's extension origin](/guides/ollama-server-setup/#2-allow-dassis-extension-origin). |
| "Enter a valid URL, including the scheme" | You typed `localhost:11434`. Use `http://localhost:11434`. |
| "The endpoint could not be verified" | Ollama isn't running, or isn't on port 11434. Confirm with `curl http://localhost:11434/v1/models`. |
| "Permission to `http://localhost` was denied" | Chrome's host-permission prompt was dismissed. Click **Save** again and approve it. |
| Model isn't in the chat picker | Its ID doesn't match a supported family, or it wasn't pulled. See [Choosing a model](/guides/ollama-server-setup/#choosing-a-model). |
| Dassi replies but never clicks anything | The model doesn't support tool calling. Switch to one that does. |
| Tasks time out before a reply | Raise **Response timeout** under **Advanced**, up to 600 seconds (600 is also the default). |

## What stays local

With Ollama connected, the model calls — prompts, page content, and screenshots Dassi captures — go to your own server and nowhere else. Dassi still talks to its own backend for account and sync features unrelated to inference; see [Privacy & Security](/reference/privacy-and-security/) for the full picture.

## Related

- [Set up Ollama for Dassi](/guides/ollama-server-setup/) — the server side: pulling a model, allowing Dassi's origin, running Ollama on another machine
- [AI Models & Providers](/guides/connect-ai-provider/) — every connection option, including managed credits and other OpenAI-compatible endpoints
- [Your First Task](/guides/first-task/) — what to ask Dassi once it's connected
