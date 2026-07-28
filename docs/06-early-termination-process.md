---
title: "Working out an early termination or payout figure"
description: "Terminating a Variable Loan account early, and working out a Bailment dealer's full payout figure."
module: Variable Loan / Bailment
status: sme_review_required
ticket_deflection_estimate: "~3/month, but disproportionately high-priority — payout figures are usually needed against a real external deadline (settlement, dealership closure, refinance)"
supersedes:
  - Variable Loan Early Termination Process
  - Variable Loan Early Termination Enquiry
  - Variable Loan Early Termination Details
  - Fixed Loan Early Termination Enquiry (Process)
  - Creating a Lease Early Termination Quote
  - Early Termination Fee Details
  - Early Termination Fee Browse
  - P&I NPV (FI) Early Termination
related_articles:
  - 05-balance-variance-diagnosis.md
  - transaction-reversal
  - floorplan-rounding-issues
needs_sme_confirmation:
  - "The Bailment/dealer payout section is written up from a single real support ticket (see below) where the steps were given ad hoc by a support agent over email, not from an existing published KB article — no dedicated 'dealer payout figure' article currently exists. Please confirm these are the officially correct/complete steps (not just what worked for that one case) before publishing."
  - "The Fixed Loan and Lease sections below are sourced from a separate draft in Argos's Notion review pipeline (status: Draft, not yet SME-approved). Greg Beale reviewed that source and said: 'Why are VL terminations not included? It assumes a quote has been issued. This may not be the case. Otherwise, not a bad article.' Treat the Fixed Loan/Lease steps and terminology below as unverified until an SME confirms them — and note the source draft itself doesn't cover the case where no formal quote was issued first, which is also not covered here."
  - "A screen recording was flagged as recommended for the Fixed Loan/Lease termination steps in the source draft, but none exists yet."
source_tickets_reviewed:
  - "15462 — 'Dealer Payout Figure', Oct 2025, Priority 1 - Critical — dealership closure, payout figure needed same-day"
---

# Working out an early termination or payout figure

:::caution Under review
Parts of this article (marked below) are still being confirmed with the Argos team before we're fully confident in them.
:::

"What does it cost to end this today" comes up across every account type, but the account type changes exactly which process applies. This article covers the two most common real scenarios: terminating a Variable Loan account, and working out a Bailment dealer's payout figure (e.g. when a dealership is closing and needs a final settlement number).

## Variable Loan early termination

**Variable Loan Browse | Search | Edit | Early Term [U]**

<div class="vault-mockup">
  <div class="title-bar">Early Termination</div>
  <div class="row"><span class="label">Termination Reason</span><span class="field required"></span><span class="label label-inline">Date</span><span class="field readonly">9/02/2025</span></div>
  <div class="row"><span class="label">Early Terminate Date</span><span class="field required">9/02/2025</span><span class="label label-inline">Future Balance</span><span class="field readonly">2938410.02</span></div>
  <div class="row"><span class="label">Write Off Principal</span><span class="field">0.00</span><span class="label label-inline">Accrued Interest</span><span class="field readonly">102884.60</span></div>
  <div class="row"><span class="label">Write Off Interest</span><span class="field">0.00</span><span class="label label-inline">Accrued Facility Fee</span><span class="field readonly">0.00</span></div>
  <div class="row"><span class="label">Facility Fee Write Off</span><span class="field">0.00</span><span class="label label-inline">Current Balance</span><span class="field readonly">0.00</span></div>
  <div class="row"><span class="label">Default Interest Write Off</span><span class="field">0.00</span><span class="label label-inline">Default Interest Accrued</span><span class="field readonly">0.00</span></div>
  <div class="row"><span class="label">Insurance Premium Rebate</span><span class="field">0.00</span><span class="label label-inline">Total Due</span><span class="field readonly">3041294.62</span></div>
  <div class="row"><span class="label">Fees</span><span class="field">0.00</span><span class="btn">Fees [B]</span></div>
</div>

**Timing matters here:** termination should happen *after* the client has paid the amount due and the funds have cleared, not before. Once cleared funds are confirmed, the Current Ledger should show a credit balance exactly equal to the termination amount — if it doesn't, a write-off may be needed rather than something being wrong with the termination itself.

**Key fields:**
- **Termination Reason** — worth taking seriously as a field, not just filling in anything: well-maintained reason codes let you run meaningful reporting on *why* loans terminate early over time, which write-off amounts alone won't show you.
- **Early Terminate Date** defaults to today but can be moved forward up to the next interest posting date — useful if you're preparing a quote for a date that hasn't arrived yet.
- **Total Due** is the actual figure to quote the client — it's Future Balance plus all accrued amounts, net of any write-offs entered above it.

## Fixed Loan and Lease early termination

:::caution Under review
This section is sourced from a draft still marked "Draft" in Argos's internal review pipeline — treat it as unverified until an SME confirms it, and note it doesn't cover terminating an account where no formal quote was issued first.
:::

A few terms come up across every account type:

- **Termination Amount** — future balance, plus arrears, plus accrued default interest, plus GST.
- **Payout Amount** — Lease accounts only: Termination Amount plus Residual Value.
- **Quote vs. actual difference** — a quote is a point-in-time estimate. Interest keeps accruing after it's issued, so always recalculate on the actual termination date rather than reusing an old quote figure — differences usually come from a different termination date, additional transactions posted since the quote, changed arrears, or changed rebate amounts.
- **Write-Off** — requires a Write Off Transaction Type to be configured on the account type before it can be used.

**Fixed Loan:** open the account → Early Termination dialog → complete Termination Details — **Termination Reason** [F2], **Termination Date**, **Rebate**, **Insurance Premium Rebate**, **Insurance Commission Rebate**, **Early Termination Fee** (these should match the original quote if one was issued), plus the **Include GST** / **Include Recurring Charges** checkboxes — then review the calculated Termination Amount. If a write-off is needed, complete **Write Off** / **Default Interest Write Off** (a fully written-off account should show 0.00 after), then confirm the termination.

**Lease:** the calculation method depends on how the lease recognises income — P&I Standard, P&I NPV, Rental Standard, or Rental NPV. Open the Early Termination dialog → **Termination Reason** (mandatory) → **Termination Date** → **Discount Rate** (NPV methods only) → **Add Taxes on** (usually left at the default) → optional **Communication Type** → **Write Off** / **Default Interest Write Off** as needed → review the calculated Termination Amount and Payout Amount — calculate a quote first if you just need a figure, and only confirm the termination once you're actually proceeding.

:::note Not yet verified
The exact dialog and button names for confirming a Fixed Loan or Lease termination haven't been confirmed. A reviewer flagged button-label accuracy as a recurring problem across drafts in this source pipeline, so specific button names are deliberately not stated here until checked — see [Generating a termination quote](settlement-statement-generation).
:::

**If you need to reverse an early termination that was processed in error**, any write-off must be reversed first, then the termination itself — see [Transaction Reversal in Argos](transaction-reversal).

## Bailment: working out a dealer's payout figure

This comes up most often when a dealership is closing or being sold and needs a final settlement figure for their whole floor plan facility — often urgent, since it usually has a real external deadline attached.

**To get the full payout figure for a dealer (all their accounts) as at a specific date:**

1. Run the **Bailment Account Status Report** for that dealer.
2. Check **Show Accrued Interest** on.
3. Enter the payout date in the **Calculate Accruals/ESR to** field.
4. Export the report — this gives you accrued interest and current/future balances as at that exact date across all the dealer's accounts in one place, rather than having to total individual accounts by hand.

If the request is specifically about **fees accrued** at the same time (rather than fees that will be charged separately at month-end), confirm with whoever's asking which they actually need — "the termination amount" and "fees accrued to date" are sometimes assumed to be the same number when they're not, and getting this mismatched is the most common reason a payout figure gets queried after it's already been sent.

## Common things that go wrong

| Symptom | Usual cause |
|---|---|
| Current ledger doesn't show a clean credit balance after termination | Funds not yet cleared, or a write-off is genuinely needed |
| Payout figure disputed after being sent | Fees accrued vs. fees charged separately weren't clarified upfront |
| Need a payout figure across multiple accounts for one dealer | Use the Bailment Account Status Report with Show Accrued Interest, not individual account lookups |
| Fixed Loan/Lease payout figure doesn't match an earlier quote | Expected if time has passed — interest keeps accruing after a quote is issued, so recalculate on the actual termination date rather than reusing the quote |
| Bailment floorplan account shows a small unexplained variance vs. the original order | See [Early termination rounding issues on floorplan assets](floorplan-rounding-issues) |
