---
title: "Add keyboard shortcuts to a web app"
description: "Have Dassi add J/K navigation and safe action keys to a list, queue or table view you use every day."
---

[中文](/zh/tutorials/keyboard-shortcuts-anywhere/) · [All use cases](/tutorials/)

:::note[Start small]
This is a prompt template for a workflow, not a verified case study. Results depend on the site, the page you have open and the model. Review the output before acting on it, and keep anything that changes an account (submit, send, book, buy) for your own hands.
:::

Review queues, ticket lists, admin tables: the same click-scroll-click a hundred times a day. Dassi can add keyboard navigation to the page, and it knows not to bind a key to the red button.

## Before you start

New to Dassi? Follow the [installation guide](/getting-started/installation/) and [model setup guide](/guides/connect-ai-provider/).

Open the list view you use repeatedly in Chrome. Open Dassi alongside it. To keep the shortcuts across visits, ask Dassi to save them as a [persistent script](/guides/user-scripts/) once you're happy.

## 1. Add navigation

```text
This page has a list of [tickets / rows / cards]. Add keyboard navigation: J moves the highlight down, K moves it up, Enter opens the highlighted item. Show me which element you're treating as the list.
Do not bind any key to actions that delete, send, approve or submit.
```

## 2. Add one safe action, then keep it

```text
Also bind Shift+R to open the highlighted item's [notes / details] panel. Then save this as a persistent script for [URL pattern] so it runs every time I open this view.
```

## Check the result

Press J five times and Enter: the right item should open. Try the shortcuts with the cursor in a text field — they should not fire there. Check the saved script's URL pattern is no broader than the view you meant. Ask Dassi to list or delete the script if it misbehaves.

[Try another use case](/tutorials/)
