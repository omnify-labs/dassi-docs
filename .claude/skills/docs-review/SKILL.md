---
name: docs-review
description: Review documentation changes (src/content/docs/**) for compliance with Dassi's documentation writing style. Use when reviewing pull requests or diffs that touch docs markdown/MDX.
allowed-tools: Read, Grep, Glob, Bash
---

# Dassi documentation review

Review doc changes against Dassi's writing style. This is the review companion to
the `docs-write` skill that generates these docs (in the dassi repo). Same rules,
applied as a reviewer.

> Style adapted from Metabase's docs-review skill, tuned for Dassi product docs.

## Review process

1. Read the changed files once to understand intent before flagging anything.
2. Flag only issues that materially hurt the reader or clearly violate the style
   below. Skip nitpicks that won't change the reader's experience.
3. Number every issue sequentially (Issue 1, Issue 2, …) with the file + line and a
   concrete suggested fix.
4. If the docs read well and follow the style, say so explicitly — don't invent
   issues.

## Style checklist

**Voice & tone**

- Conversational, not formal. Contractions are good ("can't", not "cannot").
- "people"/"companies", not "users", where it reads naturally.
- "Dassi" or "it" for product behavior — not "we".
- No corporate jargon: "utilize", "offerings", "seamless", "actionable insights".
- Don't call anything "easy" or "simple" — the reader's context is unknown.
- No stacked exclamation points.

**Structure**

- Headings state the point ("Connect your provider before your first task"), not
  just a topic ("Provider configuration"); sentence case, no trailing punctuation
  except question marks.
- Lead with the action, then the explanation. Steps in execution order.
- Explanations in prose; lists only for genuine sequences or sets.
- Feature pages cover: what it is → why you'd use it → how to use it → tips.

**Formatting**

- **Bold** for UI elements/labels; `backticks` for code, paths, params only —
  never backticks for UI.
- Descriptive link text — never "click here".
- American spelling, serial commas.
- No hard-coded numbers that will go stale (prices, limits) — link to the source
  of truth instead.

**Correctness**

- Steps and commands actually work and match the current product.
- New pages are added to `astro.config.mjs` sidebar nav.
- `<!-- TODO: screenshot -->` placeholders are acceptable; flag if a critical step
  clearly needs a visual and has none.

## Output

Post one cohesive PR review comment. If you find nothing worth changing, post:
"LGTM — docs-review found no style issues."
