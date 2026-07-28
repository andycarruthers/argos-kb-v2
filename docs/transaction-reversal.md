---
title: "Reversing a Transaction in Argos"
description: "Which reversal method to use depending on how the original transaction was created, and how to reverse a Lease early termination."
module: Variable Loan, Fixed Loan, Lease, Bailment, Cashbook
status: sme_review_required
ticket_deflection_estimate: "2-3/month"
supersedes:
  - "[Reverse] Account Transaction Details"
  - Reversing Fees
  - Reversing Lease Early Terminations
  - Reversing Lease Early Termination Write Offs
  - Cashbook Statement Reconciliation
related_articles:
  - 06-early-termination-process.md
needs_sme_confirmation:
  - "Greg Beale reviewed this article (Jun 4) and said: 'Needs more work. Some sections are not clear enough. Covers lease ET reversals, why not FL and VL as well? Should ET reversals be a separate article to transaction reversals on an account. There are implications to setting a transaction type to reversible control that should be detailed... This raises the question about the structure of these articles, how they are linked and what should be covered in each.' Fixed Loan and Variable Loan early-termination reversal are NOT covered below — only Lease is, and only because that's what the source draft covered. This is a real content gap, not just a missing cross-reference."
  - "Whether early-termination reversal should live in this article at all, or be split into its own article, is an open structural question Greg raised and did not resolve — treat the current placement as provisional."
  - "The implications of setting a Transaction Type's input method to 'Reversible Control' are not detailed below — Greg flagged this as a real risk area that needs its own explanation, possibly as part of a separate transaction-type-setup article rather than this one."
source_tickets_reviewed: []
---

# Reversing a transaction in Argos

:::caution Under review
Fixed Loan and Variable Loan early-termination reversal are not yet covered here — only Lease is. See the notes above before assuming this article is complete for your account type.
:::

Which method you use to reverse something depends on how the original transaction was created — using the wrong one will usually just produce an error rather than the wrong result, but it's worth knowing which applies before you start.

## Which method to use

| If the original transaction was... | Use this |
|---|---|
| A fee, manual charge, or other reversible-control transaction | **[Reverse]** on Account Transaction Browse |
| A dishonour fee, overdue letter fee, or maintenance fee | Same — **[Reverse]** button |
| Created from the Cashbook | Reverse it **in the Cashbook**, not on the account |
| A non-cash transfer (Control Input not set to reversible) | Use the **Transfer Non Cash** function instead |
| A Lease early termination | See "Reversing a Lease early termination" below |

## Reversing a fee or manual transaction

1. Open the account → **Transactions**.
2. Highlight the transaction → **[Reverse]**.
3. The reversal dialog pre-populates from the original — confirm the Transaction Type is unchanged. The Amount field is display-only and shows the opposite sign automatically.
4. Optionally edit the description (defaults to "REVERSE" plus the original description).
5. **[Save]**.
6. **Group** the original and the reversal together so they net to zero on the client's statement rather than showing as two separate lines.

### If you get an error

- **"Control Input Transactions" error** — this transaction type isn't set up as Reversible Control/Manual Input. Use Transfer Non Cash instead, or have an administrator change the type's input method (see the caution below about what that involves).
- **"Cashbook Input Transactions" error** — this transaction came from the Cashbook and must be reversed from **Cashbook | Edit/View Statement Transactions**, not from the account.

:::caution Under review
Changing a Transaction Type's input method to "Reversible Control" has consequences beyond just enabling the [Reverse] button — these aren't documented yet. If you're considering changing a Transaction Type's setup rather than just reversing a single transaction, check with Argos Support first.
:::

## Reversing a Lease early termination

If a write-off was posted as part of the termination, it must be reversed **before** the termination itself:

1. **[Reverse Write Off]**, if applicable.
2. **[Reverse Termination]** — Vault finds every transaction referenced against the termination and reverses them, returning the account to its pre-termination state.

:::note Not yet verified
Fixed Loan and Variable Loan early-termination reversal are not covered here — this section only describes the Lease process, which is what the source material covered. If you need to reverse a Fixed Loan or Variable Loan termination, contact Argos Support rather than assuming the Lease steps apply.
:::

## Result

A reversal posts as a negative-value transaction equal to the original. Grouping the pair nets them to zero, with no lasting impact on the statement or balance.

## Common things that go wrong

| Symptom | Usual cause |
|---|---|
| "Control Input Transactions" error on [Reverse] | Transaction Type isn't set up as reversible — see above |
| "Cashbook Input Transactions" error on [Reverse] | Reverse it from the Cashbook instead of the account |
| Original and reversal both showing on the client statement | Forgot to Group them after reversing |
| Need to reverse a Fixed Loan or Variable Loan early termination | Not yet documented here — contact Argos Support |
