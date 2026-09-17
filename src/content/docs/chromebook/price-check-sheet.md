---
title: "Compare a product's price across three stores in a Google Sheet"
description: "Have Dassi look up one product on three shopping sites and record price, shipping, and stock in a sheet you own — without adding anything to a cart."
---

[All use cases](/tutorials/)

:::note[Nothing gets bought]
This prompt is read-only on the store sites: Dassi looks up prices and writes them into your own Google Sheet. It doesn't sign in to stores, add to a cart, or check out. Prices change, so verify against the links before you buy.
:::

You want to buy one specific thing and you'd like to know where it's cheapest once shipping is counted. Doing this by hand means three tabs, three searches, and a mental note that's wrong by the time you've finished. Dassi does the three lookups and writes the answer into a Google Sheet, with a link back to each product page so you can check.

## Before you start

New to Dassi? Follow the [installation guide](/getting-started/installation/) and the [Chromebook guide](/chromebook/).

Create a new, empty Google Sheet and keep it open in Chrome. Open Dassi with `Alt+Shift+D`. Have the product name ready as precisely as you can — a model number beats a description, because the whole point is comparing the same item.

Pick three stores you'd actually buy from. Dassi will open them in new tabs; on a Chromebook with 4 GB of memory, close any tabs you don't need first so those new ones have room.

## Fill the sheet

```text
I want to compare the price of one product: "[exact product name or model number]".

Look it up on these three stores, in new tabs: [store 1], [store 2], [store 3]. On each store, find the listing that matches this exact product — not an accessory, a bundle, or a different size or color. If the store doesn't sell it, say so instead of picking the closest match.

Write the results into the Google Sheet I have open, starting at cell A1, with these columns:
Store | Product title as shown on the site | Price | Shipping cost or "Free" | In stock? | Link to the product page | Notes

One row per store. Copy the price exactly as shown, including currency. If shipping depends on location or a membership, put what the page says in the Notes column rather than guessing a number.

Do not sign in to any store, add anything to a cart, or start a checkout. Do not change anything in the sheet except the cells you write.

When the sheet is filled in, tell me which store is cheapest including shipping, and list anything you couldn't find or weren't sure about. Stop for my review.
```

Replace the bracketed parts. If you already have a link to the product on one store, paste it in — Dassi will use it directly and search only the other two.

## Check the result

Look at the sheet first, then click through each link. Two things are worth checking every time: that each row is genuinely the same product (variants and bundles are the usual way a comparison goes wrong), and that the price is still what the sheet says. Store prices change during the day, and a lookup from an hour ago can already be stale.

If a row says the store doesn't carry the item but you believe it does, run a narrower prompt for that one store with a direct link to the listing. Dassi searched the site's own search box, and some store searches are bad at model numbers.

The sheet is yours, so add a column, sort by price, or keep the tab and reuse it for the next thing you're shopping for.

## Take it further

Once the prompt works for you, three stores can become five, and one product can become a short list — give Dassi a column of product names and ask for a row per product per store. If you're tracking a price over time, ask Dassi to save this as a workflow that runs each morning and appends a row instead of overwriting; see [scheduled tasks](/guides/scheduled-tasks/).

[Try another use case](/tutorials/)
