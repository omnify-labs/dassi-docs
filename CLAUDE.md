# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Documentation site for **dassi** — an AI browser agent Chrome extension. Built with Astro + Starlight, hosted on Cloudflare Pages at https://docs.dassi.ai. Main website is https://dassi.ai.


## Commands

```bash
pnpm dev          # Dev server at localhost:4321
pnpm build        # Production build to dist/
pnpm preview      # Preview production build
```

No test or lint commands are configured.

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
- `guides/` — Usage guides (AI provider setup, first task, sidebar)

## Key Configuration

- **`astro.config.mjs`**: Site URL, sidebar navigation, theme settings, social links, logo, custom CSS import
- **Trailing slashes**: Enforced (`trailingSlash: "always"`)
- **Search**: Built-in Pagefind (comes with Starlight)

## Adding New Pages

1. Create a `.md` file in the appropriate `src/content/docs/` subdirectory
2. Add frontmatter with `title` and optionally `description`
3. Add a link entry to the sidebar in `astro.config.mjs`
