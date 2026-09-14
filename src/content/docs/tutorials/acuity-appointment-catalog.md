---
title: "Add missing Acuity appointment types"
description: "Compare your Acuity catalog with an approved master list and verify newly created appointment types."
---

[All tutorials](/tutorials/)

:::note[Start with a small batch]
This prompt template adapts an observed user workflow. Results depend on your account and the current page. Review the comparison before making changes, and verify saved results on the site.
:::

Use this workflow to compare your existing appointment catalog with an approved master list, then create a small batch of missing appointment types.

## Before you start

New to Dassi? Follow the [installation guide](/getting-started/installation/) and [model setup guide](/guides/connect-ai-provider/).

Open your Acuity Scheduling account in Chrome and Dassi alongside it. Prepare the exact name, duration, price, description, calendar, and visibility for each requested appointment type. Start with three entries for one location. See Acuity's [appointment-type guide](https://help.acuityscheduling.com/hc/en-us/articles/16676922487949-Creating-and-editing-appointment-types) for the platform's settings.

## 1. Find the missing entries

```text
Compare the first three entries in my approved master list with the appointment types in the Acuity account I have open.

Business/location: [location]
Master list: [name, duration, currency and price, description, calendar, and visibility for each entry]

Return a comparison table with exact matches, possible duplicates, missing entries and uncertain matches. Show the current values for any differences. Do not create, edit or delete anything yet. Stop if a required value or calendar assignment is unclear.
```

Review possible duplicates manually. Matching names alone may not identify the same location or calendar.

## 2. Create a reviewed batch

```text
Create only these reviewed missing appointment types: [approved entries with all settings]. Use the exact values provided. Do not modify or delete existing types, bookings or other account settings.
Reopen each created appointment type and compare every requested field with the saved value. Return one row per entry: created and verified / partially completed / not completed, with any differences and the page link where available. Stop after this batch.
```

## 3. Verify the customer-facing setup

Check the saved name, duration, price, description, assigned calendar, and intended visibility. Inspect the relevant scheduling page without placing a real booking. Verify availability separately: a saved appointment type alone does not establish that clients can book the intended times.

Acuity notes that newly created appointment types may also need to be added to applicable packages, gift certificates or subscriptions. Review that separately before calling the service ready for customers.

If interrupted, give Dassi the last result table and ask it to recheck the account before creating anything else. Keep suspected duplicate deletion outside this workflow; reconcile uncertain entries before taking action.

[Try another tutorial](/tutorials/)
