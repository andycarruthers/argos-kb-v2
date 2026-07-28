---
title: "Running month-end: a checklist that actually matches how the system works"
description: "A daily-habit-first month-end checklist, plus the final reconciliation step against the GL Trial Balance."
module: Control / Cashbook / General Ledger
status: ready_to_publish
ticket_deflection_estimate: "~2/month directly, but month-end problems are a common root cause behind other categories (GL variance, reporting errors) surfacing the following month"
supersedes:
  - Month End Processing Checklist
  - Day Start Processing Checklist
  - General Ledger End of Month Reset
  - Understanding Month End Journals
  - End of Month Reset
related_articles:
  - 05-balance-variance-diagnosis.md
  - 02-gl-reporting-export.md
needs_sme_confirmation:
  - "This is a direct reorganisation of the existing Month End Processing Checklist into daily-vs-monthly sections — content itself is unchanged from the current published checklist, so lower risk than the others in this batch. Confirm the mandatory/IFRS/GL-reconciliation markers (*, **, ***) below still match current practice."
  - "The Insurer and Dealer sections below assume those modules are in use — confirm whether to keep them generic (as here) or split into per-module variants, since not every client licenses every module."
---

# Running month-end: a checklist that actually matches how the system works

Most month-end problems trace back to one of two things: the **daily** processing that should have happened all month didn't, or the month-end reset was run **out of sequence**. This article is split accordingly — get the daily habit right and month-end itself becomes a short confirmation step, not a scramble.

## Every day, all month (this is what makes month-end easy)

Skipping these and trying to catch up at month-end is the single most common cause of a painful close:

- Download bank statements, reconcile, and post cash — every bank account, every day.
- Post instalments, interest, recurring charges, and facility fees up to the current date, not left to accumulate.

If you're consistently doing all four of these daily, month-end is close to just running reports and confirming they agree.

## At month-end

Reports marked `*` should be printed for GL reconciliation. Reports marked `**` are mandatory only if you report under IFRS. Processes marked `***` are mandatory and must be run regardless.

### Cashbook
- Print Unposted Transactions — should show nothing, unless it's a transaction genuinely dated into next month.
- Print Bank Balances.
- **Print Cashbook Reconciliation**` * ` — the statement balance should equal the cashbook balance (allowing for any unpresented items shown on the report), with the statement date set to the month-end date.

### Control
- **Take a pre-month-end backup**` *** ` — independent of your normal daily backup. This is your rollback point if anything goes wrong in the steps below.

### Dealers (if licensed)
- Confirm dealers are fully paid out — current and future balance should both be 0.00 for each, unless a loan has settled but not yet paid out (a normal timing difference, not an error). Make sure offsetting dealer transactions are grouped.
- **Print Account Status Report**` * ` (Account Type order, Summary only) — needed to balance the GL Gross Receivable and Arrears codes.
- **Run End of Month Reset**` *** ` to post dealer transactions to the GL.

### Insurer (if licensed)
- Print Account Status Report with Show Accrued Interest on, Accrued Date set to month-end — useful for GL reconciliation.
- **Run End of Month Reset**` *** ` to post insurer transactions to the GL.

### Statements
- Run Create Statements for each module you use, with the Due Date set to month-end.
- Print module-specific statements with the date range matching your statement cycle (e.g. quarterly statements need a quarter-long date range, not the current month alone).

### Accounts
- Print Account Status Report filtered to credit current balances only — these are accounts that have been overpaid and need either a refund or a transfer to another account. Run separately per company if you operate more than one.
- **Print Account Status Report**` * ` (Account Type order, Summary only) again for the GL Gross Receivable/Arrears reconciliation.
- Print Closed Account Report for the period, and Withholding Tax Summary if applicable.

### Per lending module (Variable Loan, Unit Fund, Lease, etc., as licensed)
- Print Account Status Report with Show Accrued Interest, Accrued Date = month-end — useful for GL reconciliation on each module.
- **Run End of Month Reset**` *** ` per module to post its transactions to the GL.

## The final step, every month

Compare every printed report above to the **General Ledger Trial Balance**.

- **Everything agrees** → proceed to next month's processing.
- **Something doesn't agree, or an account that should be zero isn't** → investigate before moving on. If you can't resolve it yourself, call Argos — you can usually keep processing while the issue is being worked, you don't need to stop and wait.

**Presets** (saved field values for the month-end report dialogs) and **Batch Processing** can automate most of the steps above — worth setting up if you're currently re-entering the same report parameters every single month.

## Common things that go wrong

| Symptom | Usual cause |
|---|---|
| GL and Cashbook don't match right after month-end | See [Diagnosing a GL/Cashbook variance](05-balance-variance-diagnosis.md) — often a timing issue from processing next month too early |
| A module's End of Month Reset was run before another module's | Sequence matters — confirm the Pre Requisites (daily processing) are complete for *every* module before running any resets |
| An account shows a non-zero balance that should be zero | Investigate before rolling forward — don't assume it will fix itself next month |
