---
title: Why repeat runs cost less
description: The two things a browser agent's bill is made of, and what dassi does about each — prompt caching and learned site skills.
---

A browser agent's bill is mostly two things:

1. **Re-reading context it has already read.** The system prompt, your skills, the run history — sent again on every turn.
2. **Working out how a site is put together.** Screenshotting a page, reading its DOM, finding the right selector — repeated from scratch on every run.

dassi is built to stop paying full price for either. Neither is a setting you turn on; both are how the agent is put together.

## Prompt caching

Every major provider will bill a repeated prompt prefix at a steep discount — on Claude, cached input tokens are up to 90% cheaper than fresh ones. The catch is that the discount only applies to a prefix that is **byte-for-byte identical** to the previous request. One character earlier in the prompt and the cache misses.

So dassi is careful about what goes where.

### Stable content first, mutable content after

The system prompt is assembled in a fixed order: the cacheable base prefix first, then per-run skill and site-workflow sections, then session context. Anything that can change between runs is appended *after* the part the provider caches.

### The date isn't in the system prompt

An obvious way to break your own cache is to bake the current date into the system prompt — it changes daily, so every run starts cold. dassi puts the timestamp in a per-turn user-message reminder instead. The model still knows what day it is; the cached prefix doesn't move.

### Big results are stored by reference

Tool output and screenshots are written to IndexedDB and referenced by a deterministic id rather than inlined into the conversation. A replayed tool call resolves to the same id, so the prefix stays byte-identical across turns instead of drifting every time a large result lands.

### The prompt is re-derived, not rebuilt

On each run dassi re-derives the system prompt and compares it. If it's byte-identical, nothing is written and the provider's cache stays warm. It only changes when something real changed — a skill installed or edited, a site workflow captured, a model's knowledge cutoff moving.

## Learned site skills

Caching handles context you've already sent. It does nothing about the second cost: figuring out a website again on every run.

As dassi works a site, it can write itself a small JavaScript library for that site — a set of functions that wrap the fiddly parts, attached to `window`. The library is matched to the site by domain and path patterns, and injected before every JavaScript call dassi makes on a matching page.

The agent is told, in its own system prompt, to prefer them:

> The following URL-matched JavaScript libraries are injected before each `browserjs()` call. They define APIs on window; use those APIs instead of re-deriving DOM selectors.

So the second time through a job, the expensive part of the stack isn't squinting at a screenshot to find a button — the cheap part is calling a function that already knows where it is.

## What this adds up to

The two compound. A job you run weekly sends a mostly-cached prompt *and* skips most of the page-comprehension work it did the first time. The first run pays for the thinking; repeats shouldn't.

It also means the economics improve the longer you keep a job, rather than staying flat — the opposite of paying per message.

## What it doesn't do

Worth being clear about the limits:

- **New work still costs what new work costs.** Caching discounts repetition. A task dassi has never seen, on a site it has never touched, pays full price.
- **The discount is the provider's, not ours.** How much you save depends on who you're pointed at — Claude's cached-read pricing is the 90% figure quoted above; other providers differ, and a few don't offer prompt caching at all.
- **A site that changes breaks its own shortcut.** When a site ships a redesign, the learned library for it can stop matching and dassi goes back to working it out directly.

## Related

- [Plans & Billing](/reference/plans-and-billing/) — what each plan includes
- [AI Models & Providers](/guides/connect-ai-provider/) — including bringing your own key
- [Skills & Context](/guides/skills-and-context/) — teaching dassi a procedure to reuse
