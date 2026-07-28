---
title: "Generating a Termination Quote (\"Settlement Statement\")"
description: "What clients and brokers mean by a settlement statement, and how to generate a termination quote for Variable Loan and Lease accounts."
module: Variable Loan, Fixed Loan, Lease
status: sme_review_required
ticket_deflection_estimate: "3-4/month"
supersedes:
  - Variable Loan Early Termination Details
  - Lease Early Termination Details
  - Fixed Loan Early Termination
  - Create Account Communication Details
related_articles:
  - 06-early-termination-process.md
needs_sme_confirmation:
  - "Greg Beale reviewed this article (Jun 4) and made three separate points. First, on terminology: 'The word settlement applies in two instances in finance. The first instance... is when a loan is approved and the account created. The loan has been settled. The second is on termination when an amount is provided for the account to be settled or paid out. We changed the terminology to Termination to make it clear that was the process.' Reflected in the title and framing below."
  - "Second — a systemic issue Greg flagged applies directly to this article: 'Button labels are incorrect. This is an issue with many of these documents. Nowhere do we have buttons [Post] or [Terminate].' The exact dialog and button names for the Variable Loan and Lease early termination screens have NOT been confirmed, and are deliberately not stated below to avoid publishing wrong UI labels again — a screen recording is flagged as recommended for exactly this reason. Do not add specific button names to this article without confirming them first."
  - "Third — Greg noted the Lease termination-method coverage is thin and unverified, and that Fixed Loans have no documented process here at all. The Fixed Loan section below is a placeholder for that reason."
source_tickets_reviewed: []
---

# Generating a termination quote ("settlement statement")

:::caution Under review
The exact dialog and button names below are unconfirmed — see the note above. This article should not be treated as ready until a screen recording or SME walkthrough replaces the generic wording used here.
:::

## A note on terminology

If a client or broker asks for a "settlement statement," they almost always mean a **termination quote** — the amount to pay out the loan or lease account in full as at a given date. In Argos terminology, "settlement" properly refers to a loan being funded and the account created — the payout/close-out process is deliberately called **Termination** instead, to keep the two apart. Use "termination quote" internally even if the client used the word "settlement" when asking.

## Variable Loan

Open the account and go to the early termination dialog (see [Working out an early termination or payout figure](06-early-termination-process.md) for the dialog itself). Enter the proposed settlement date — the system calculates the payout figure, including accrued interest and fees, without terminating the account. Note or print the resulting termination amount as the settlement figure. A communication/letter can usually be generated from the same screen if the client needs it in writing.

**Do not confirm or finalise the termination** unless you're actually terminating the account, not just quoting it.

## Lease

Open the account and go to the applicable early termination method (this differs depending on how the lease recognises income — see [Working out an early termination or payout figure](06-early-termination-process.md)). Enter the settlement date and review the calculated termination amount (future balance, arrears, accrued default interest, and applicable GST). A communication can usually be generated from the same screen.

As above, **don't finalise the termination** unless that's actually what's being done.

## Fixed Loan

:::note Not yet verified
No confirmed process exists yet for generating a Fixed Loan termination quote specifically — this needs an SME walkthrough before it can be documented here.
:::

## Because the figure is date-sensitive

A termination/settlement quote is only accurate as at the date it was calculated. If the client doesn't settle on that exact date, recalculate — accrued interest changes daily, so an old quote will be slightly wrong by the time it's actually paid.

## Common things that go wrong

| Symptom | Usual cause |
|---|---|
| Client disputes the figure they were quoted | Time has passed since the quote — recalculate on the actual payment date rather than reusing the original figure |
| Account was accidentally terminated while just trying to get a quote | Confirm you're only entering the date and reviewing the figure, not confirming/finalising the termination |
| Fixed Loan settlement figure needed | No confirmed process yet — contact Argos Support |
