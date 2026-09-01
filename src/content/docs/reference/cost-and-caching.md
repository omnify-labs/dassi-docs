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

## It doesn't re-read what it already sent

<figure>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 185" style="width:100%;height:auto;max-width:720px" role="img" aria-labelledby="pfxT pfxD">
<title id="pfxT">The repeated part of the prompt is kept identical so it can be reused</title>
<desc id="pfxD">Two runs side by side. Each is a bar made of a large repeated part and a small part for today's request. In run two the repeated part is identical and marked reused; only the small part is new. The date is shown living in the small part, not the repeated part.</desc>
<style>
.lbl{font-family:'JetBrains Mono',ui-monospace,monospace;font-size:13px;fill:#1a1a1a;font-weight:700}
.seg{font-family:'JetBrains Mono',ui-monospace,monospace;font-size:12px;fill:#666666}
.on {font-family:'JetBrains Mono',ui-monospace,monospace;font-size:12px;fill:#ffffff;font-weight:700}
.gone{font-family:'JetBrains Mono',ui-monospace,monospace;font-size:12px;fill:#999999}
</style>
<text x="0" y="16" class="lbl">Run 1</text>
<rect x="0" y="28" width="460" height="40" fill="#FF5C00"/>
<text x="14" y="53" class="on">instructions · what you taught it · your rules</text>
<rect x="468" y="28" width="172" height="40" fill="#1a1a1a"/>
<text x="482" y="53" class="on">today's request</text>
<text x="0" y="120" class="lbl">Run 2</text>
<rect x="0" y="132" width="460" height="40" fill="#FFB088"/>
<text x="14" y="157" class="seg" fill="#7a3a10">same bytes — reused, not reprocessed</text>
<rect x="468" y="132" width="172" height="40" fill="#1a1a1a"/>
<text x="482" y="157" class="on">today's request</text>
<text x="170" y="99" class="gone">anything that changes — even the date — lives here →</text>
</svg>
</figure>

Most of what dassi sends is the same on every run — the instructions, what you taught it, your rules. Anything that runs a model can reuse a repeated part instead of chewing through it again, on one condition: it has to arrive *identical* to last time.

So dassi keeps it identical, and keeps everything that varies out of it — right down to the date. Whoever runs the model — a big provider, your own machine, a server you rent — the reuse is the same trick. The only difference is what you get back: money off the bill (on Claude, up to 90% off the reused part), or the time not spent reprocessing.

## It doesn't work out the same website twice

<figure>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 250" style="width:100%;height:auto;max-width:720px" role="img" aria-labelledby="shT shD">
<title id="shT">First visit reads the page and writes a shortcut; later visits call the shortcut</title>
<desc id="shD">Two rows. First visit: the page flows to reading the whole page, which flows to the job done, and a shortcut is written below. Later visits: the page flows straight through the shortcut to the job done, skipping the reading step.</desc>
<style>
.lbl{font-family:'JetBrains Mono',ui-monospace,monospace;font-size:13px;fill:#1a1a1a;font-weight:700}
.seg{font-family:'JetBrains Mono',ui-monospace,monospace;font-size:12px;fill:#666666}
.box{fill:#ffffff;stroke:#c4c4c4;stroke-width:1.5}
.hot{fill:#fff3ec;stroke:#FF5C00;stroke-width:1.5}
.arr{stroke:#999999;stroke-width:1.5;fill:none}
</style>
<defs><marker id="m" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#999999"/></marker></defs>
<text x="0" y="16" class="lbl">First visit</text>
<rect x="0" y="30" width="120" height="44" rx="6" class="box"/><text x="26" y="56" class="seg">the page</text>
<line x1="120" y1="52" x2="168" y2="52" class="arr" marker-end="url(#m)"/>
<rect x="170" y="30" width="250" height="44" rx="6" class="box"/><text x="192" y="56" class="seg">read the whole page</text>
<line x1="420" y1="52" x2="468" y2="52" class="arr" marker-end="url(#m)"/>
<rect x="470" y="30" width="130" height="44" rx="6" class="box"/><text x="496" y="56" class="seg">job done</text>
<path d="M295 74 v26" class="arr" marker-end="url(#m)"/>
<rect x="200" y="104" width="190" height="38" rx="19" class="hot"/><text x="222" y="128" class="seg" fill="#FF5C00">writes a shortcut</text>
<text x="0" y="186" class="lbl">Every visit after</text>
<rect x="0" y="200" width="120" height="44" rx="6" class="box"/><text x="26" y="226" class="seg">the page</text>
<line x1="120" y1="222" x2="168" y2="222" class="arr" marker-end="url(#m)"/>
<rect x="170" y="200" width="250" height="44" rx="6" class="hot"/><text x="204" y="226" class="seg" fill="#FF5C00">calls the shortcut</text>
<line x1="420" y1="222" x2="468" y2="222" class="arr" marker-end="url(#m)"/>
<rect x="470" y="200" width="130" height="44" rx="6" class="box"/><text x="496" y="226" class="seg">job done</text>
</svg>
</figure>

The other half of the cost is figuring out the page — which button is the right button, where the table is, what the form wants.

As dassi works a site, it writes itself a shortcut: a small piece of code that knows where things are. Next time, it calls the shortcut instead of reading the page again.

## What this means

The two compound: a weekly job reuses most of what it sent and skips most of what it read. The first run pays for the thinking; repeats shouldn't — so a job gets cheaper the longer you keep it.

## What it doesn't do

- **New work costs what new work costs.** This is a discount on repetition. A job dassi has never done, on a site it has never seen, pays full price.
- **How much it's worth varies.** A hosted model turns it into money off a bill; your own hardware turns it into time. Either way the size of the win tracks how much of the job actually repeats.
- **A redesign resets the shortcut.** When a site changes shape, the shortcut dassi wrote for it can stop fitting, and it goes back to working the page out directly until it has learned the new one.

## Related

- [Plans & Billing](/reference/plans-and-billing/) — what each plan includes
- [AI Models & Providers](/guides/connect-ai-provider/) — including bringing your own key
- [Skills & Context](/guides/skills-and-context/) — teaching dassi a procedure to reuse
