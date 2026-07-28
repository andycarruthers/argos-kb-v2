---
title: "Early Termination Rounding Issues on Floorplan Assets"
description: "Why a Bailment account's inc-GST figure can differ slightly from the ex-GST value entered on the original order, and how to prevent it."
module: Bailment
status: ready_to_publish
ticket_deflection_estimate: "2/month"
supersedes:
  - Bailment Account Details
  - Bailment Auto Account Creator
related_articles:
  - 06-early-termination-process.md
needs_sme_confirmation:
  - "Greg Beale reviewed this article (Jun 4) and called it clear and good, with one small caveat: 'May need to check the button label' — confirm the exact field/checkbox name below (Gross Value) still matches the live product before publishing."
source_tickets_reviewed: []
---

# Early termination rounding issues on floorplan assets

## The problem

When a Bailment Account is created from a Bailment Order that was entered as an **ex-GST** value, a small rounding discrepancy can appear between the Order's ex-GST figure and the Account's inc-GST figure — which can cause reconciliation headaches, especially at termination or payout.

## Why it happens

Argos's method for calculating the inc-GST figure from an ex-GST value differs slightly from the reverse calculation used on the original Order. This was identified and fixed in release **AD-I1239** for new data, but the underlying rounding difference can still occur if orders are entered the older way.

## How to prevent it on new orders

When entering a Bailment Order, check the **Gross Value** field/checkbox — this tells the system the amount you've entered is already inclusive of GST, so it calculates the ex-GST reserved-credit figure using the same method the Account will use later, eliminating the mismatch.

:::note Not yet verified
Confirm the exact current field/checkbox label for this before relying on the name above — it's flagged as needing a final check against the live product.
:::

## If you already have an affected account

Contact Argos Support. Remediation of historical discrepancies requires a database script — this isn't something to attempt to fix manually on the account itself.

## If you process a high volume of floorplan orders

Consider making Gross Value entry your standard practice for new orders going forward, rather than only using it when a discrepancy has already appeared.

## Common things that go wrong

| Symptom | Usual cause |
|---|---|
| Small unexplained variance between a Bailment Order and its Account at termination | Order was entered ex-GST without the Gross Value option — see above |
| Discrepancy persists after checking Gross Value | This only prevents the issue on new orders — an existing affected account needs a database correction, contact Argos Support |
