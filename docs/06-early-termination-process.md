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
needs_sme_confirmation:
  - "The Bailment/dealer payout section is written up from a single real support ticket (see below) where the steps were given ad hoc by a support agent over email, not from an existing published KB article — no dedicated 'dealer payout figure' article currently exists. Please confirm these are the officially correct/complete steps (not just what worked for that one case) before publishing."
  - "Confirm current Fixed Loan and Lease early termination processes still match the older KB articles being superseded here — those weren't re-verified in this pass, only Variable Loan and the Bailment dealer payout case were."
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
