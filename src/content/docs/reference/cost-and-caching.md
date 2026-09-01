---
title: Why repeat runs cost less
description: The same job costs less the second time you run it. Here is what changes, and what doesn't.
---

The first time dassi does a job, it pays full price. Every time after, most of that cost is already gone.

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
<figcaption>Illustrative. How much you actually save depends on the job, the site, and which model provider you're pointed at.</figcaption>
</figure>

Two things shrink.

## It doesn't re-read what it already sent

A lot of what dassi sends is the same on every run: the instructions, what you taught it, the rules you set.

Anything running a model can skip that repeated part instead of chewing through it again — and every one of them has the same condition attached: it has to arrive *identical* to last time. Change one character near the start and the whole thing gets processed from scratch.

So dassi is careful to keep it identical. Anything that varies between runs is kept out of that part, right down to the current date. Put today's date in the wrong place and every run starts cold, once a day, forever.

What you get back for it depends on who's running the model, not on how big they are:

- **Someone else's model** bills the repeated part at a discount — on Claude, up to 90% cheaper.
- **Your own machine or your own server** isn't billing you at all, so it comes back as speed instead. Ollama does this out of the box, and self-hosted servers like vLLM do the same.

## It doesn't work out the same website twice

The other half of the bill is dassi looking at a page and figuring out how it's built — which button is the right button, where the table is, what the form wants.

As it works a site, dassi writes itself a shortcut for that site: a small piece of code that knows where things are. Next time, it calls the shortcut instead of working it out again. The expensive part of the system stops doing work the cheap part can do.

## What this means

The two compound. A job you run every week sends mostly-discounted text *and* skips most of the page-reading it did the first time.

Which means the economics run the right way: a job gets cheaper the longer you keep it, rather than costing the same every time you ask.

## What it doesn't do

- **New work costs what new work costs.** This is a discount on repetition. A job dassi has never done, on a site it has never seen, pays full price.
- **How much it's worth varies.** A hosted model turns it into money off a bill; your own hardware turns it into time. Either way the size of the win tracks how much of the job actually repeats.
- **A redesign resets the shortcut.** When a site changes shape, the shortcut dassi wrote for it can stop fitting, and it goes back to working the page out directly until it has learned the new one.

## Related

- [Plans & Billing](/reference/plans-and-billing/) — what each plan includes
- [AI Models & Providers](/guides/connect-ai-provider/) — including bringing your own key
- [Skills & Context](/guides/skills-and-context/) — teaching dassi a procedure to reuse
