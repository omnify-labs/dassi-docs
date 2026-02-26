---
title: Browser Automation
description: Everything dassi can do to automate your browser — navigation, clicks, forms, tabs, and more.
---

dassi is a full browser automation agent. It can interact with web pages the same way you do — reading content, clicking elements, filling forms, and navigating between pages.

## What dassi can automate

### Page reading

dassi can read and understand any web page:

- **Full page content** — reads text, headings, links, and structure
- **Interactive elements** — identifies buttons, inputs, dropdowns, and other controls
- **Screenshots** — takes visual snapshots to verify its work and understand complex layouts

### Navigation

- **Open URLs** — navigate to any website
- **Go back/forward** — move through browser history
- **Open new tabs** — dassi can open multiple tabs and switch between them
- **Close tabs** — clean up when done

All tabs dassi opens are grouped into a Chrome tab group, keeping your workspace organized.

### Clicking and interaction

- **Click buttons and links** — dassi identifies elements by their role, text, and position
- **Hover** — trigger dropdown menus and tooltips
- **Right-click** — access context menus
- **Double-click** — for text selection and other double-click actions
- **Drag and drop** — move elements between positions
- **Scroll** — navigate long pages in any direction

### Form filling

- **Text inputs** — type into any text field
- **Dropdowns** — select options from dropdown menus
- **Checkboxes and toggles** — check or uncheck
- **File uploads** — attach files to upload fields
- **Complex forms** — handle multi-step forms across pages

### Keyboard actions

dassi can press keyboard shortcuts just like you:

- Single keys: `Enter`, `Tab`, `Escape`, `Backspace`
- Shortcuts: `Ctrl+A`, `Ctrl+C`, `Ctrl+V`, `Cmd+Z`
- Navigation: arrow keys, `Home`, `End`, `Page Up`, `Page Down`

### JavaScript execution

For advanced tasks, dassi can run JavaScript in the page to:

- Read data that isn't visible in the HTML
- Interact with complex web applications
- Create interactive dashboards and visualizations
- Inject custom tools directly into the page

### Screenshots

dassi takes screenshots throughout its work to:

- Understand visual layouts
- Verify actions completed correctly
- Navigate coordinate-based interfaces
- Show you what it sees

## Multi-tab workflows

dassi can work across multiple tabs simultaneously. For example:

```
Open Amazon, eBay, and Best Buy in separate tabs.
Search for "Sony WH-1000XM5 headphones" on each site
and create a price comparison table.
```

All tabs stay within the same Chrome tab group, and dassi can switch between them as needed.

## Plan approval

Before visiting new domains or taking actions on sensitive pages, dassi presents a plan showing:

- Which websites it will visit
- What steps it will take

You must approve the plan before dassi proceeds. This gives you full control over what dassi does.

## Limitations

dassi cannot automate certain pages:

- **Chrome internal pages** — `chrome://settings`, `chrome://extensions`, and similar built-in Chrome pages cannot be automated
- **Other extensions** — dassi cannot interact with other Chrome extension popups or pages
- **CAPTCHAs** — dassi respects bot detection systems and will not attempt to bypass them
- **Banking credentials** — dassi will never enter passwords, credit card numbers, or banking details on your behalf

For more details, see [Limitations](/reference/limitations/).
