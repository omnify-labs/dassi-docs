---
title: "Check and complete Google Business Profile services"
description: "Compare an approved service list with your profile, review missing entries, and verify a small batch of changes."
---

[All use cases](/tutorials/)

:::note[Start with a small batch]
This prompt template adapts an observed user workflow. Results depend on your account and the current page. Review the comparison before making changes, and verify saved results on the site.
:::

Use this workflow when your business has an approved service list and you want to compare it with your Google Business Profile. Start with five services for one location.

## Before you start

New to Dassi? Follow the [installation guide](/getting-started/installation/) and [model setup guide](/guides/connect-ai-provider/).

Open the correct business profile in Chrome, sign in with permission to manage it, and open Dassi alongside it. Prepare the exact service names and approved descriptions. Confirm the location and existing service category. Google documents the available service-editing controls in [Manage your services](https://support.google.com/business/answer/9455399?hl=en); availability depends on the profile.

## 1. Compare before editing

Paste this prompt after replacing the bracketed inputs:

```text
Review the Google Business Profile I have open for [business and location].
Compare the first five entries in the approved list below with the services currently visible in this profile.

Approved category: [existing category]
Approved service list: [names and approved descriptions]

Return a table: requested service, current entry, exact match / possible duplicate / missing / unable to verify, and proposed change.
Use only the supplied business facts. Do not invent services, prices or descriptions. Do not change any fields yet. If the location or category is ambiguous, stop and ask me.
```

Check that the table refers to the right business and that similar names are not incorrectly treated as missing services.

## 2. Add only the entries you approve

After reviewing the comparison, give Dassi the exact entries you approve:

```text
Add only these approved missing services: [entries]. Use the exact approved wording and existing category. Leave other entries and business settings unchanged.
After each save, reopen the services list and check whether the entry is present. Report Saved and verified, Submitted/pending, or Not completed for each entry. Do not treat a pending change as publicly live. Stop after this batch.
```

## 3. Check the result and continue

Compare each saved entry with your approved list. Keep the result table and provide it on your next run, asking Dassi to recheck the live list before continuing. A previous report alone is not proof that an entry is still present.

If the editor is unavailable, the profile needs verification, or credits run out, keep the completed-item list and resolve that blocker before continuing. This workflow does not promise search-ranking improvements or completion of Google's verification process.

[Try another use case](/tutorials/)
