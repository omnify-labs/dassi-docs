# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Documentation site for **dassi** — an AI browser agent Chrome extension. Built with Astro + Starlight, hosted on Cloudflare Pages at https://docs.dassi.ai. Main website is https://dassi.ai.


## Commands

```bash
pnpm dev          # Dev server at localhost:4321
pnpm build        # Production build to dist/
pnpm preview      # Preview production build
pnpm typecheck    # Astro type checking (astro check)
pnpm lint         # ESLint with astro plugin
```

## Architecture

- **Framework**: Astro 5 with @astrojs/Starlight for documentation
- **Content**: Markdown files in `src/content/docs/` using Starlight's content collection schema (`src/content.config.ts`)
- **Styling**: Custom brand CSS in `src/styles/custom.css` — light-only theme, JetBrains Mono font, black/white palette
- **Sidebar**: Link-based navigation defined in `astro.config.mjs` (not auto-generated from file structure)
- **Static output**: Fully static site, no server-side rendering or backend

## Content Structure

All docs live in `src/content/docs/`:
- `index.md` — Introduction (home page)
- `getting-started/` — Installation and quick start
- `guides/` — the **Features** section: one page per feature (directory keeps its original name; the sidebar label is "Features")
- `tutorials/` — the **Use cases** section: task-based walkthroughs with practice pages (directory keeps its original name; the sidebar label is "Use cases")
- `chromebook/` — the Chromebook hub (`index.md`, listed under **Features**) and its use cases (listed under **Use cases**). Kept as its own top-level route so the URL leads with the keyword and matches `dassi.ai/chromebook/`; `tutorial-attribution.ts` treats `/chromebook/<id>` as a tutorial.
- `zh/` — Simplified Chinese translations, mirroring the root layout

## Languages

Starlight i18n is on (`locales` in `astro.config.mjs`): English is the `root` locale at `/`, Chinese is `zh` at `/zh/`.
- A Chinese page lives at the same path under `zh/` (`guides/foo.md` ↔ `zh/guides/foo.md`). Same slug = language picker and hreflang link them.
- Root pages with no `zh/` twin are served at `/zh/...` with the English body and a "not translated yet" notice. The reverse is not true: a page that only exists under `zh/` is unreachable from the English sidebar, so always create the root file first.
- The sidebar is one list for both locales. Links are locale-less (`/guides/foo/`, never `/zh/guides/foo/`); give every label a `translations: { 'zh-CN': '…' }`.
- Custom UI strings (header CTAs, search placeholder) live in `src/content/i18n/{en,zh-CN}.json`; new keys must be added to the `extend` schema in `src/content.config.ts`.

## Key Configuration

- **`astro.config.mjs`**: Site URL, sidebar navigation, theme settings, social links, logo, custom CSS import
- **Trailing slashes**: Enforced (`trailingSlash: "always"`)
- **Search**: Built-in Pagefind (comes with Starlight)

## Adding New Pages

1. Create a `.md` file in the appropriate `src/content/docs/` subdirectory (English), and optionally the same path under `zh/`
2. Add frontmatter with `title` and optionally `description`
3. Add a link entry to the sidebar in `astro.config.mjs`, with a `zh-CN` translation of the label
4. For a use case (`tutorials/`): put it in the matching subgroup of the **Use cases** sidebar group, add it to `tutorials/index.md` and `zh/tutorials/index.md`, and give the www page under `dassi_ai/src/content/use-cases/` a `docsUseCase` pointing at it
4. Include relevant screenshots beside the instructions they illustrate.

## Documentation Screenshots

- Always include relevant screenshots in user-facing documentation you add or update.
- Use real screenshots that match the documented UI. Reuse an existing image when it still accurately illustrates the step; keep assets in `public/images/`.
- Place each screenshot beside its related step, with descriptive alt text. Exclude private account details, messages, and credentials.
- Verify images render in the built page. A screenshot placeholder does not satisfy this requirement; if a needed capture is unavailable, report the gap.
