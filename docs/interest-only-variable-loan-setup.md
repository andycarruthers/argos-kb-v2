---
title: "Setting Up an Interest Only Variable Loan With Direct Debit"
description: "Configuring a Variable Loan as Interest Only and setting up direct debit to collect the correct interest amount each period."
module: Variable Loan
status: draft
ticket_deflection_estimate: "3-4/month"
supersedes:
  - Managing Direct Debits
  - Post Direct Debit Details
  - Create Variable Loan Direct Debit Communications
  - Variable Loan Account Details
related_articles:
  - direct-debit-curtailment-setup
needs_sme_confirmation:
  - "Greg Beale reviewed this article (Jun 4) and corrected the direct debit section directly: the Direct Debit dialog fields on the account are updated automatically by the Create DD Communications process — they are not something you visit and re-enter each cycle. That correction is reflected below. Greg also noted Create DD Communications has other options that aren't documented yet ('There are other options within that process that have not been documented. Requires more work.') — those are not covered here and need a follow-up SME session to enumerate."
source_tickets_reviewed: []
---

# Setting up an Interest Only Variable Loan with direct debit

:::caution Under review
The direct debit process below has one confirmed correction applied (see the note above) but hasn't had full SME sign-off, and some Create DD Communications options aren't documented yet.
:::

Use this to configure a Variable Loan as Interest Only — the borrower pays interest each period with no principal reduction — and set up direct debit to collect the correct, varying interest amount each due date.

## Step 1 — Set up the loan account

On **Variable Loan | Edit/View Variable Loan Account Details**:

| Field | Setting |
|---|---|
| Next Instalment | The start date for payments |
| Instalment Frequency | Match your interest frequency |
| Instalment Day | Day of month, if monthly |
| Instalment Amount | **0** |
| Interest Only % | **100** |

## Step 2 — Set up the interest details

| Field | Setting |
|---|---|
| Next Interest Date | First payment date |
| Frequency | Monthly, or as agreed with the client |
| Day | Matching day of month |
| Interest Action | **Transfer Account** — do not set this to Reinvest |
| Transfer Account | The account that receives the interest posting |

## Step 3 — Create Direct Debit Communications

**Variable Loan | Create Direct Debit Communications:**

| Field | Setting |
|---|---|
| Communication Type | Select via **F2** — the direct debit advice type |
| Account Type | Filter via **F2**, or leave blank for all |
| Start/End Date | The direct debit date — standard practice is to set this around 10 days ahead |
| Future Ledger Only | Checked, for interest-only accounts |

This process is what actually calculates the amount due each cycle and populates the account's Direct Debit fields — see Step 4.

## Step 4 — Confirm the Direct Debit dialog on the account (initial setup only)

**The Create DD Communications process (Step 3) updates these fields automatically each cycle — you don't need to open this dialog every time a direct debit is due.** Use it to set up correctly the first time, and to spot-check afterward if something looks wrong:

| Field | Setting |
|---|---|
| Next Date | First direct debit date |
| Next Amount | Leave blank — the system calculates this |
| Standard Date | Same as Next Date |
| Frequency | Match the instalment frequency |
| Day | Day of month |
| Standard Amount | Leave blank for interest-only accounts — the amount varies each period |
| Bank Account | The client's account number |

## Result

Interest posts to the Transfer Account each interest date. Running Create DD Communications calculates the amount due and updates Next Direct Debit Amount on the account. The amount is collected through the normal Post Direct Debit process.

## Common things that go wrong

| Symptom | Usual cause |
|---|---|
| Direct debit amount looks wrong or hasn't updated | Confirm Create DD Communications was run for this cycle — the account's DD fields don't update themselves |
| Loan is reducing principal when it shouldn't | Instalment Amount isn't 0, or Interest Only % isn't 100 |
| Interest posting to the wrong place | Interest Action set to Reinvest instead of Transfer Account |
