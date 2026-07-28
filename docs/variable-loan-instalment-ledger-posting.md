---
title: "Variable Loan Instalments — Dates, Ledger Posting, and Why an Instalment Didn't Post"
description: "How instalment date fields drive posting on a Variable Loan account, and a checklist for diagnosing a missed instalment."
module: Variable Loan
status: draft
ticket_deflection_estimate: "2/month"
supersedes:
  - Variable Loan Account Details
  - Variable Loan Control Details
  - Post Variable Loan Instalments Due
  - Day Start Processing Checklist
  - Managing Direct Debits
related_articles:
  - loan-lease-operations
needs_sme_confirmation:
  - "Greg Beale reviewed this article (Jun 5) and questioned its scope and justification directly: 'Not sure why this article is for VL only? Which ticket gave rise to this as an issue? Is it really an issue?' Nobody has confirmed the originating support ticket, whether this mechanism is genuinely Variable-Loan-specific or applies the same way to Fixed Loan and Lease accounts, or whether this should be broadened, narrowed, or dropped. Unlike the other flagged articles, no specific technical detail below has been disputed — but the reason for the article existing at all is unconfirmed."
source_tickets_reviewed: []
---

# Variable Loan instalments — dates, ledger posting, and why an instalment didn't post

:::caution Under review
The scope of this article hasn't been confirmed — see the note below before treating it as settled that this is Variable-Loan-specific.
:::

:::note Not yet verified
This article was drafted for Variable Loan accounts specifically, but a reviewer has questioned whether the same mechanics apply to Fixed Loan and Lease accounts too, and whether there's a confirmed real-world case behind it. Treat the field/ledger mechanics below as a working explanation, not a finished answer, until that's resolved.
:::

## How the instalment date fields work

On **Variable Loan | Edit/View Variable Loan Account Details**:

| Field | What it controls |
|---|---|
| Next Instalment Date | The date the next instalment posts. Set to the first payment date when the account is opened. |
| Instalment Frequency | Weekly, fortnightly, monthly, etc. |
| Instalment Day | Day-of-month used for monthly/quarterly frequencies — set to 31 to always land on month-end regardless of the month's actual length. |
| Instalment Amount | The fixed repayment amount. Must be greater than zero for a principal-and-interest loan; zero for Interest Only. |
| Interest Only % | 100 for Interest Only, 0 for standard principal-and-interest, or a percentage for a Hybrid loan (that percentage of the payment is transferred to the current ledger as interest). |

## How posting works — two ledgers, not one

An instalment posting moves value between two ledgers:

- **Future Ledger** — holds the outstanding principal. New advances post here. Each instalment reduces it.
- **Current Ledger** — holds the amount currently due. An instalment posting is a credit to the future ledger and a debit to the current ledger; when the client pays, that payment reduces the current ledger.

This requires two Transaction Types to be set up correctly on **Variable Loan | Edit/View Variable Loan Control Details**:

<div class="vault-mockup">
  <div class="title-bar">Variable Loan Control Details</div>
  <div class="row"><span class="label">Instalment Future Account Transaction Type</span><span class="field lookup"></span></div>
  <div class="row"><span class="label">Instalment Current Account Transaction Type</span><span class="field lookup"></span></div>
</div>

Both Transaction Types need **Ledger** set correctly (Future / Current to match) and **Post Interest & Year End Report** set to **None**.

## Checking why an instalment didn't post

Work through these in order:

1. **Next Instalment Date** — is it on or before the date used when running Post Variable Loan Instalments Due?
2. **Instalment Amount** — is it greater than zero (or is Interest Only % set to 100)?
3. **Has the account been early-terminated?** — early termination clears the Next Instalment Date, so a terminated account will never post another instalment.
4. **Transaction Type setup** — confirm both Transaction Types on Variable Loan Control Details are configured as above.
5. **The date used to run the batch** — Post Variable Loan Instalments Due defaults to processing instalments due as of *yesterday*. If it's run using today's date instead, instalments due today will be skipped that run and picked up the next time it's run correctly.

## Common things that go wrong

| Symptom | Usual cause |
|---|---|
| Instalment silently didn't post | Work through the checklist above in order — date, amount, termination status, Transaction Type setup, then the batch run date |
| Instalment posts to the wrong ledger, or doesn't reduce the current ledger correctly | Transaction Type ledger assignment on Variable Loan Control Details is wrong |
| Instalments consistently one day late | Post Variable Loan Instalments Due was run with today's date instead of yesterday's |
