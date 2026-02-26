# dassi docs

The official documentation site for [dassi](https://dassi.ai) — an AI browser agent Chrome extension.

**Live at [docs.dassi.ai](https://docs.dassi.ai)**

## Tech Stack

- [Astro](https://astro.build) + [Starlight](https://starlight.astro.build) — documentation framework
- Custom light theme with orange `#FF5C00` accent
- Hosted on [Cloudflare Pages](https://pages.cloudflare.com)

## Local Development

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # production build → dist/
npm run preview    # preview the production build
```

Requires Node.js 18+.

## Project Structure

```
src/
├── content/docs/        # Markdown documentation pages
│   ├── index.md         # Introduction (home)
│   ├── getting-started/ # Installation, quick start
│   └── guides/          # Usage guides
├── components/          # Custom Starlight component overrides
└── styles/              # Custom CSS theming
astro.config.mjs         # Site config, sidebar nav, social links
```

- **Sidebar navigation** is defined manually in `astro.config.mjs` (not auto-generated from file structure).
- **New pages**: create a `.md` file in `src/content/docs/`, then add a sidebar entry in `astro.config.mjs`.

## Contributing

Found a typo or want to improve the docs? PRs are welcome.

1. Fork the repo and create a feature branch
2. Make your changes
3. Open a pull request against `main`

All changes to `main` require a pull request — direct pushes are not allowed.

## License

Content is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
