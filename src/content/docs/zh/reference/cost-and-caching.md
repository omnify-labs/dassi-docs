---
title: 为什么重复运行更便宜
description: 同一个任务第二次运行会更便宜。这里说明什么变了，什么没变。
---

dassi 第一次做一个任务时，付的是全价。之后每一次，大部分成本都已经没了。

<figure>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 300" style="width:100%;height:auto;max-width:720px" role="img" aria-labelledby="costTitle costDesc">
<title id="costTitle">一次运行的成本：第一次 vs 之后每一次</title>
<desc id="costDesc">两根柱子。第一次运行由三部分组成：读取所有内容、摸清网站、做实际工作。之后每次运行，前两部分缩成一小条，柱子其余部分消失；只有实际工作保持同样大小。</desc>
<style>
.lbl { font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 13px; fill: #1a1a1a; font-weight: 700; }
.seg { font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 12px; fill: #666666; }
.gone{ font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 12px; fill: #999999; }
</style>
<text x="0" y="16" class="lbl">第一次运行</text>
<rect x="0"   y="30" width="250" height="40" fill="#FF5C00"/>
<rect x="250" y="30" width="210" height="40" fill="#FFB088"/>
<rect x="460" y="30" width="180" height="40" fill="#1a1a1a"/>
<text x="0"   y="88" class="seg">读取所有内容</text>
<text x="250" y="88" class="seg">摸清网站</text>
<text x="460" y="88" class="seg">实际工作</text>
<text x="0" y="150" class="lbl">之后每一次</text>
<rect x="0"  y="164" width="26"  height="40" fill="#FF5C00"/>
<rect x="26" y="164" width="34"  height="40" fill="#FFB088"/>
<rect x="60" y="164" width="180" height="40" fill="#1a1a1a"/>
<rect x="240" y="164" width="400" height="40" fill="none" stroke="#c4c4c4" stroke-width="1" stroke-dasharray="4 4"/>
<text x="252" y="189" class="gone">这部分你不再需要付费</text>
<text x="60"  y="222" class="seg">实际工作 — 同样的活，同样的价</text>
<line x1="0" y1="250" x2="720" y2="250" stroke="#e5e5e5" stroke-width="1"/>
<rect x="0" y="266" width="10" height="10" fill="#FF5C00"/>
<text x="18" y="275" class="seg">dassi 已经发过的上下文 — 复用，不重新处理</text>
<rect x="0" y="286" width="10" height="10" fill="#FFB088"/>
<text x="18" y="295" class="seg">摸清页面 — 被 dassi 自己写的捷径替代</text>
</svg>
<figcaption>示意图。实际能省多少取决于任务、网站，以及你指向的模型服务商。</figcaption>
</figure>

## 已经发过的内容不会重读

<figure>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 185" style="width:100%;height:auto;max-width:720px" role="img" aria-labelledby="pfxT pfxD">
<title id="pfxT">提示中重复的部分保持完全一致，以便复用</title>
<desc id="pfxD">两次运行并排。每次都是一根柱子，由一大块重复部分和一小块今天的请求组成。第二次运行中重复部分完全相同并标为已复用；只有小块是新的。日期放在小块里，而不是重复部分里。</desc>
<style>
.lbl{font-family:'JetBrains Mono',ui-monospace,monospace;font-size:13px;fill:#1a1a1a;font-weight:700}
.seg{font-family:'JetBrains Mono',ui-monospace,monospace;font-size:12px;fill:#666666}
.on {font-family:'JetBrains Mono',ui-monospace,monospace;font-size:12px;fill:#ffffff;font-weight:700}
.gone{font-family:'JetBrains Mono',ui-monospace,monospace;font-size:12px;fill:#999999}
</style>
<text x="0" y="16" class="lbl">第 1 次</text>
<rect x="0" y="28" width="460" height="40" fill="#FF5C00"/>
<text x="14" y="53" class="on">指令 · 你教它的 · 你的规则</text>
<rect x="468" y="28" width="172" height="40" fill="#1a1a1a"/>
<text x="482" y="53" class="on">今天的请求</text>
<text x="0" y="120" class="lbl">第 2 次</text>
<rect x="0" y="132" width="460" height="40" fill="#FFB088"/>
<text x="14" y="157" class="seg" fill="#7a3a10">字节完全相同 — 复用，不重新处理</text>
<rect x="468" y="132" width="172" height="40" fill="#1a1a1a"/>
<text x="482" y="157" class="on">今天的请求</text>
<text x="170" y="99" class="gone">所有会变的东西 — 包括日期 — 都放在这里 →</text>
</svg>
</figure>

dassi 发送的大部分内容每次运行都一样——指令、你教它的东西、你的规则。任何跑模型的东西都可以复用重复的部分而不是再嚼一遍，条件只有一个：它必须和上次*完全一致*地到达。

所以 dassi 让它保持一致，并把所有会变的内容都放在外面——连日期也是。不管谁在跑模型——大型服务商、你自己的机器、你租的服务器——复用都是同一个技巧。唯一的区别是你拿回什么：账单上的折扣（在 Claude 上，复用部分最高省 90%），或者不用再花的重新处理时间。

## 同一个网站不会摸两次

<figure>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 250" style="width:100%;height:auto;max-width:720px" role="img" aria-labelledby="shT shD">
<title id="shT">第一次访问读取页面并写下捷径；之后的访问调用捷径</title>
<desc id="shD">两行。第一次访问：页面流向读取整页，再流向任务完成，下方写下一个捷径。之后的访问：页面直接经过捷径到任务完成，跳过读取步骤。</desc>
<style>
.lbl{font-family:'JetBrains Mono',ui-monospace,monospace;font-size:13px;fill:#1a1a1a;font-weight:700}
.seg{font-family:'JetBrains Mono',ui-monospace,monospace;font-size:12px;fill:#666666}
.box{fill:#ffffff;stroke:#c4c4c4;stroke-width:1.5}
.hot{fill:#fff3ec;stroke:#FF5C00;stroke-width:1.5}
.arr{stroke:#999999;stroke-width:1.5;fill:none}
</style>
<defs><marker id="m" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#999999"/></marker></defs>
<text x="0" y="16" class="lbl">第一次访问</text>
<rect x="0" y="30" width="120" height="44" rx="6" class="box"/><text x="36" y="56" class="seg">页面</text>
<line x1="120" y1="52" x2="168" y2="52" class="arr" marker-end="url(#m)"/>
<rect x="170" y="30" width="250" height="44" rx="6" class="box"/><text x="230" y="56" class="seg">读取整页</text>
<line x1="420" y1="52" x2="468" y2="52" class="arr" marker-end="url(#m)"/>
<rect x="470" y="30" width="130" height="44" rx="6" class="box"/><text x="505" y="56" class="seg">任务完成</text>
<path d="M295 74 v26" class="arr" marker-end="url(#m)"/>
<rect x="200" y="104" width="190" height="38" rx="19" class="hot"/><text x="250" y="128" class="seg" fill="#FF5C00">写下捷径</text>
<text x="0" y="186" class="lbl">之后每次访问</text>
<rect x="0" y="200" width="120" height="44" rx="6" class="box"/><text x="36" y="226" class="seg">页面</text>
<line x1="120" y1="222" x2="168" y2="222" class="arr" marker-end="url(#m)"/>
<rect x="170" y="200" width="250" height="44" rx="6" class="hot"/><text x="240" y="226" class="seg" fill="#FF5C00">调用捷径</text>
<line x1="420" y1="222" x2="468" y2="222" class="arr" marker-end="url(#m)"/>
<rect x="470" y="200" width="130" height="44" rx="6" class="box"/><text x="505" y="226" class="seg">任务完成</text>
</svg>
</figure>

成本的另一半是摸清页面——哪个按钮才是对的、表格在哪、表单要什么。

dassi 在一个网站上工作时，会给自己写一个捷径：一小段知道东西在哪的代码。下次它直接调用捷径，而不是再读一遍页面。

## 这意味着什么

两者叠加：一个每周跑的任务，复用了大部分发送过的内容，跳过了大部分读过的内容。第一次运行为思考付费；重复运行不应该——所以一个任务保留得越久就越便宜。

## 它不做什么

- **新工作按新工作的价格算。** 这是针对重复的折扣。dassi 从没做过的任务、从没见过的网站，付全价。
- **省多少不一定。** 托管模型把它变成账单上的折扣；你自己的硬件把它变成时间。无论哪种，收益的大小取决于任务里到底有多少是重复的。
- **网站改版会重置捷径。** 网站形态变了，dassi 为它写的捷径可能不再适用，它会回到直接摸清页面的方式，直到学会新版。

## 相关

- [套餐与计费](/zh/reference/plans-and-billing/) — 各套餐包含什么
- [模型与服务商](/zh/guides/connect-ai-provider/) — 包括使用自己的 key
- [技能与上下文](/zh/guides/skills-and-context/) — 教 dassi 一个可复用的流程
