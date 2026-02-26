---
title: Skills & Context
description: Teach dassi about yourself and extend its capabilities with skills, context files, and memory.
---

dassi can learn about you and your workflows through three systems: **skills**, **context files**, and **memory**.

## Skills

Skills are reusable prompts that run as shortcuts. They let you trigger complex workflows with a single command.

### Built-in skills

dassi comes with built-in skills for common tasks. You can browse and run them from the **Skills** section in the sidebar.

### Custom skills

You can create your own skills:

1. Open **Settings** (gear icon in the sidebar toolbar)
2. Go to the **Skills** section
3. Click **Create Skill**
4. Give your skill a name, command, and prompt

For example, you could create a skill called "summarize" that runs:

```
Read this page and give me a 3-bullet summary focused on key takeaways
```

Then trigger it by typing `/summarize` in the chat.

### Skill options

Each skill can include:
- **Name** — a display name
- **Command** — the shortcut trigger (e.g., `/summarize`)
- **Description** — what the skill does
- **Prompt** — the full instructions dassi follows when the skill runs

## Context files

Context files let you give dassi background information it can reference during conversations. This is useful for:

- Your role and responsibilities
- Company-specific terminology
- Preferred writing style or tone
- Project details and conventions

### Adding context

1. Open **Settings**
2. Go to the **Context** section
3. Add text files containing information you want dassi to know

dassi reads context files at the start of each conversation, so the information is always available.

## Memory

dassi can remember things you tell it across conversations. When you say something like:

```
Remember that I prefer formal email tone
```

dassi saves this to its memory and applies it in future conversations.

### How memory works

- Memory persists across conversations within your account
- dassi stores memories locally in the extension
- You can view and manage saved memories in **Settings > Memory**
- To forget something, tell dassi: "Forget that I prefer formal email tone"

### What to save in memory

- Personal preferences (writing tone, formatting style)
- Frequently used information (your name, title, team)
- Workflow preferences (how you like tasks structured)
- Context that applies across many tasks

## Tips

- **Skills for repeated tasks** — if you find yourself typing the same prompt often, create a skill
- **Context for background** — use context files for information dassi should always know
- **Memory for preferences** — use memory for things that evolve over time
