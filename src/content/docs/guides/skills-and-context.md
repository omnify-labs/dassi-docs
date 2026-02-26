---
title: Skills & Context
description: Teach dassi reusable workflows with skills, give it background knowledge with context files, and save preferences with memory.
---

dassi can learn about you and your workflows through three systems: **skills**, **context files**, and **memory**. All three are managed through natural language — just tell dassi what you want.

## Skills

Skills are reusable instruction sets that dassi saves and can run again later. Think of them as saved prompts with a name.

### Creating a skill

Tell dassi to save a workflow as a skill:

```
Save this as a skill called "weekly-report".
When I ask for a weekly report, read all my open tabs
and summarize the key points into a markdown report
with sections for Highlights, Action Items, and Metrics.
```

dassi will create and store the skill for you.

### Running a skill

Ask dassi to run a skill by name:

```
Run the weekly-report skill
```

Or reference it naturally:

```
Generate my weekly report
```

dassi matches your request to installed skills automatically.

### Managing skills

You can manage skills through conversation:

- **List skills** — "What skills do I have installed?"
- **Read a skill** — "Show me the weekly-report skill"
- **Update a skill** — "Update the weekly-report skill to also include a timeline section"
- **Delete a skill** — "Remove the weekly-report skill"

### Installing skills from a URL

If someone shares a skill file, you can install it:

```
Install the skill from https://example.com/skills/my-skill/SKILL.md
```

### Skill naming

Skills use kebab-case names like `weekly-report`, `pdf-processing`, or `code-review`. dassi handles the naming automatically when you create a skill, but if you want a specific name, just tell it.

## Context files

Context files give dassi background information it can reference during conversations. Unlike skills (which are instructions to follow), context files are knowledge for dassi to draw on.

Good uses for context files:

- Your role and responsibilities
- Company-specific terminology
- Preferred writing style or tone
- Project details and conventions

### Managing context files

Tell dassi to save context:

```
Save this as context: I work at Acme Corp as a product manager.
Our main product is a B2B SaaS platform. We use formal tone
in customer communications and casual tone internally.
```

You can also list, read, update, or delete context files by asking:

```
What context files do I have?
```

```
Update my company context to add that we recently launched a mobile app
```

## Memory

dassi can remember things you tell it across conversations:

```
Remember that I prefer bullet points over paragraphs
```

dassi saves this and applies it in future conversations.

### How memory works

- Memory persists across conversations within your account
- dassi stores memories locally in the extension
- To forget something, tell dassi: "Forget that I prefer bullet points"

### What to save in memory

- Personal preferences (writing tone, formatting style)
- Frequently used information (your name, title, team)
- Workflow preferences (how you like tasks structured)

## Skills vs. context vs. memory

| | Skills | Context files | Memory |
|---|---|---|---|
| **Purpose** | Reusable workflows | Background knowledge | Quick preferences |
| **Example** | "Summarize page in 3 bullets" | "Company info and terminology" | "I prefer formal tone" |
| **Triggered by** | Asking dassi to run it | dassi reads automatically | dassi applies automatically |
| **Best for** | Repeated tasks | Reference material | Evolving preferences |
