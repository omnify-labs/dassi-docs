---
title: What's New
description: Release notes and recent updates to dassi.
---

Stay up to date with the latest dassi features, improvements, and fixes.

---

## v0.26.0

### Redesigned Plan & Billing tab

The **Settings > Plan** tab now has dedicated sections for **Managed Plans** and **BYOK**, so you can browse and subscribe to each independently. A **Current Plan** card at the top shows all active subscriptions at a glance. Each active subscription has its own **Manage** button that opens the Stripe billing portal scoped to just that subscription. [Learn more](/reference/plans-and-billing/)

### BYOK and Managed plans can now run together

You can now subscribe to both a BYOK plan and a Managed plan at the same time. The Current Plan card shows both, and managing one subscription doesn't affect the other. [Learn more](/reference/plans-and-billing/#running-byok-and-a-managed-plan-together)

### BYOK annual billing

BYOK is now available as an annual subscription for $12/year — a 90% saving compared to the monthly rate. The BYOK section shows both Monthly and Annual cards so you can pick the interval that works for you.

### Starter repriced to $25/month

The Starter managed plan dropped from $30/month to $25/month. Everything included in Starter stays the same.

### Bug fixes

- The dassi sidebar now reliably refreshes state from the correct storage area, fixing edge cases where plan or provider changes weren't reflected until the extension reloaded.

---

## v0.23.0

### Conversation history

You can now browse and restore past conversations. Click the **clock icon** in the sidebar toolbar to see a list of previous sessions, each with an auto-generated title and timestamp. Click any entry to pick up where you left off. [Learn more](/guides/using-the-sidebar/#conversation-history)

<!-- TODO: screenshot of history browser -->

### Live activity feed

A new activity feed appears in the sidebar while dassi is working. It shows a rolling, timestamped log of each action — navigating to a site, reading a page, clicking a button, and more — so you always know what's happening. [Learn more](/guides/using-the-sidebar/#activity-feed)

<!-- TODO: screenshot of activity feed -->

### Switch away while dassi works

When a task takes longer than about 10 seconds, a banner appears offering to let you browse freely while dassi finishes. Click **Switch Away** to jump to another tab. You'll get a desktop notification when the task is complete. [Learn more](/guides/using-the-sidebar/#switch-away-while-dassi-works)

### Automatic tab cleanup

After completing a task, dassi now closes intermediate tabs it opened during research (like search results and reference pages), keeping only the tabs with your final results. [Learn more](/guides/browser-automation/#automatic-tab-cleanup)

### Smarter desktop notifications

Desktop notifications now include the name of your task (shown as the tab group title) so you can tell which task just finished — especially useful when running multiple tasks at once.

### Bug fixes

- Restoring a past conversation no longer causes the original session to disappear from history.
- The "Switch Away" banner no longer appears immediately at the start of subsequent tasks.
- Error and budget-limit screens now properly reset the activity feed.
- Reconnecting after a Chrome restart preserves your active conversation instead of starting a blank session.
