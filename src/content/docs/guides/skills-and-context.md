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

If someone shares a skill file, you can install it by asking Dassi:

```
Install the skill from https://example.com/skills/my-skill/SKILL.md
```

You can also import from the Settings UI: open **Settings → Skills**, click **Import Skill**, paste the URL, and click **Import**.

### Importing a skill bundle

Some skills come packaged as a `.zip` bundle — a folder containing `SKILL.md` at the root, plus optional `references/` and `assets/` subdirectories with supporting files. This is useful for skills that need sample documents, templates, or lookup tables to do their job.

To install a bundled skill:

1. Open **Settings** (gear icon in the sidebar toolbar) and go to the **Skills** tab.
2. Click **Import Skill**.
3. Click **Choose .zip file…** and select the bundle.

Dassi validates the archive, installs the skill, and makes the included reference files available for it to read during execution. The bundle must be 10 MB or smaller (compressed), and binary files like images and fonts are skipped automatically — only text files are stored.

### Skill naming

Skills use kebab-case names like `weekly-report`, `pdf-processing`, or `code-review`. dassi handles the naming automatically when you create a skill, but if you want a specific name, just tell it.

## Workflows

Workflows are a special kind of skill: instead of instructions dassi follows step by step, a workflow is a script that replays a site task dassi already figured out — so it doesn't have to look at the page and decide what to click all over again.

### Creating a workflow

dassi decides on its own. After it finishes a task that took several steps on a site — filling out a multi-step form, exporting a table, checking a dashboard — it may offer to save what it did as a workflow. You can also ask directly:

```
Save that as a workflow so it's faster next time.
```

A workflow is scoped to the site it was captured on, so dassi only suggests it there.

### Why replays get faster

Redoing a task from scratch means dassi has to look at the page, decide what to click, and check the result at every step. A workflow skips most of that reasoning by replaying the exact steps as code.

The first couple of runs are treated as unproven, so dassi keeps watching them closely. Once a workflow has succeeded with two different sets of details — for example, searching for two different products — dassi trusts it and starts using it automatically the next time you ask for that task on the same site.

### If a workflow breaks

Sites change. If a saved workflow fails partway through, dassi finishes the task manually from where it broke, then fixes the underlying script before ending the task, so it keeps working next time.

### Managing workflows

Workflows are stored the same way as skills, so the same commands work:

- **List them** — "What skills do I have installed?" (workflows show up alongside regular skills)
- **Remove one** — "Remove the [name] workflow"

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
