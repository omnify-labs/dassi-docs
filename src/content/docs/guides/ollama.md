---
title: Use Dassi with Ollama
description: Point Dassi at your local Ollama server. Step-by-step, with screenshots, on where the endpoint setting lives and what to put in it.
---

Dassi can run on a model you host yourself. If you already use [Ollama](https://ollama.com), you can point Dassi at `http://localhost:11434` and it will use your local model as the reasoning engine instead of Dassi's managed credits — no cloud provider, no per-token bill, and no page content leaving your computer.

The setting is real but it's buried: it lives behind a collapsed section on the Models page, at the bottom of a long list of providers. This guide shows you exactly where to click.

**On pricing:** running your own model puts you on **Developer** — $10 a month, or $36 for a full year, which works out to ***about 10¢ a day***. You supply the keys, so you're only paying for the extension, and it costs less than any managed-credit tier. The option is hidden until you've connected a provider, so don't go looking for it first: see [Unlock the Developer plan](#unlock-the-developer-plan) below, or [Plans & Billing](/reference/plans-and-billing/) for the full comparison.

## Why you'd use it

<figure>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 300" style="width:100%;height:auto;max-width:720px" role="img" aria-labelledby="costTitle costDesc">
<title id="costTitle">What a run costs, first time versus every time after</title>
<desc id="costDesc">Two bars. The first run is made of three parts: reading everything, working out the site, and doing the actual work. On every run after, the first two shrink to slivers and the rest of the bar is gone; only the actual work stays the same size.</desc>
<style>
.lbl { font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 13px; fill: #1a1a1a; font-weight: 700; }
.seg { font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 12px; fill: #666666; }
.gone{ font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 12px; fill: #999999; }
</style>
<text x="0" y="16" class="lbl">First run</text>
<rect x="0"   y="30" width="250" height="40" fill="#FF5C00"/>
<rect x="250" y="30" width="210" height="40" fill="#FFB088"/>
<rect x="460" y="30" width="180" height="40" fill="#1a1a1a"/>
<text x="0"   y="88" class="seg">Reading everything</text>
<text x="250" y="88" class="seg">Working out the site</text>
<text x="460" y="88" class="seg">The actual work</text>
<text x="0" y="150" class="lbl">Every run after</text>
<rect x="0"  y="164" width="26"  height="40" fill="#FF5C00"/>
<rect x="26" y="164" width="34"  height="40" fill="#FFB088"/>
<rect x="60" y="164" width="180" height="40" fill="#1a1a1a"/>
<rect x="240" y="164" width="400" height="40" fill="none" stroke="#c4c4c4" stroke-width="1" stroke-dasharray="4 4"/>
<text x="252" y="189" class="gone">you no longer pay for this part</text>
<text x="60"  y="222" class="seg">The actual work — same job, same price</text>
<line x1="0" y1="250" x2="720" y2="250" stroke="#e5e5e5" stroke-width="1"/>
<rect x="0" y="266" width="10" height="10" fill="#FF5C00"/>
<text x="18" y="275" class="seg">Context dassi already sent — reused, not reprocessed</text>
<rect x="0" y="286" width="10" height="10" fill="#FFB088"/>
<text x="18" y="295" class="seg">Figuring out the page — replaced by a shortcut dassi wrote itself</text>
</svg>
<figcaption>Illustrative. On your own hardware the reuse comes back as speed rather than a bill — <a href="/reference/cost-and-caching/">why repeat runs cost less</a> explains both parts.</figcaption>
</figure>

<div style="display:flex;flex-direction:column;gap:14px;margin-top:1.25rem"><div style="display:flex;gap:16px;align-items:flex-start;margin:0"><svg style="flex:none" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/><circle cx="12" cy="16.5" r="1.5" fill="#FF5C00" stroke="none"/></svg><div style="margin:0"><strong>Your data stays on your machine.</strong> Page text, screenshots, and prompts go to <code>localhost</code>, not to a model vendor.</div></div><div style="display:flex;gap:16px;align-items:flex-start;margin:0"><svg style="flex:none" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M21 3v5h-5" stroke="#FF5C00"/><path d="M3 21v-5h5" stroke="#FF5C00"/></svg><div style="margin:0"><strong>One of the cheapest ways on the market to run a browser agent.</strong> Dassi’s <a href="/reference/cost-and-caching/">caching</a> keeps the repeated part of a job identical between runs, so it gets reused instead of paid for — or on your own hardware, waited for — again.</div></div><div style="display:flex;gap:16px;align-items:flex-start;margin:0"><svg style="flex:none" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 2v4M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="m9 16 2 2 4-4" stroke="#FF5C00"/></svg><div style="margin:0"><strong>No per-token bill.</strong> You’re spending your own GPU time, not credits — on a <a href="#unlock-the-developer-plan">cheaper flat monthly plan</a>.</div></div><div style="display:flex;gap:16px;align-items:flex-start;margin:0"><svg style="flex:none" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.91a1 1 0 0 0 0-1.83Z" stroke="#FF5C00"/><path d="m22 12.18-8.58 3.91a2 2 0 0 1-1.66 0L2 12.18"/><path d="m22 17.18-8.58 3.91a2 2 0 0 1-1.66 0L2 17.18"/></svg><div style="margin:0"><strong>Your choice of model.</strong> Swap between anything you’ve pulled, straight from the model picker in chat.</div></div></div>


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

Dassi also works to hand your model less to chew on, which matters more on local hardware than anywhere else. It keeps the repeated part of a job byte-identical between runs, so Ollama can reuse what it already processed instead of starting over — that reuse is on by default, but only fires when the prefix matches. And it writes itself shortcuts for sites it has worked before, so a repeat run spends fewer turns reading pages. Both show up as less waiting. [Why repeat runs cost less](/reference/cost-and-caching/) explains them.

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
- [Why repeat runs cost less](/reference/cost-and-caching/) — how Dassi cuts the work a repeat run needs; on local hardware that lands as speed rather than savings
