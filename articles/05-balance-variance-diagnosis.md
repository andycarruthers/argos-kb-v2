---
title: "Diagnosing a GL / Cashbook balance variance"
module: General Ledger / Cashbook
status: ready_to_publish
ticket_deflection_estimate: "~4/month, but these are consistently the most expensive tickets to resolve (highest average turns and resolution time of any category)"
supersedes:
  - GL Cashbook Out Of Balance
  - General Ledger Reconciliation
  - GL Reconciliation Checklist
related_articles:
  - 02-gl-reporting-export.md
  - 07-month-end-process.md
needs_sme_confirmation:
  - "This article is a direct rewrite of the existing 'GL Cashbook Out Of Balance' troubleshooting steps into a task-first order — the underlying diagnostic logic is unchanged from the current published article, so this one is lower-risk than the others in this batch. Still worth a quick SME pass to confirm nothing was lost in the reordering."
source_tickets_reviewed:
  - "15280 — 'Distributor Reconciliation - Grouping transactions', growing variance ($2,323.20 → larger after month-end) that turned out to have no direct report — see the related GL/Reporting article for that specific case"
---

# Diagnosing a GL / Cashbook balance variance

Your General Ledger bank balance and your Cashbook bank balance should always be the same. When they're not, work through these checks **in order** — each one rules out a specific, common cause before you get to the slow, line-by-line comparison at the end. Most variances are resolved in the first three checks; very few actually require the full transaction comparison.

Do this as soon as a discrepancy is spotted, not at the next month-end — the longer a variance sits, the more transactions pile on top of it and the harder it gets to isolate.

## Check 1 — Has month-end actually rolled over for every module you use?

If one module's month-end reset hasn't been run yet while others have, the GL and cashbook will disagree simply because they're at different points in time. Confirm every module you use has completed its End of Month Reset before checking anything else.

## Check 2 — Were next-month transactions entered before this month's trial balance was printed?

This happens when someone starts processing the new month in the Cashbook before the prior month's GL Trial Balance has actually been printed and confirmed.

**Accounts | Print Account Transaction Report**, with the Input Date range set to the *following* month (e.g. reconciling June means checking 1–31 July here).

- **No results found** → this isn't your issue, move to Check 3.
- **Transactions returned** → check whether their total matches the exact difference between your GL and Cashbook balances. If it does, this is a timing difference, not an error — it corrects itself once the following month is also complete, or can be fixed immediately by restoring files to the pre-month-end state if you need it resolved now.

## Check 3 — Has anything been coded directly to the GL Bank Account code?

**Cashbook | Print Transaction Report**, System Indicator order, for the month in question. Scroll to the first General Ledger entry and check whether anything has been coded directly to the bank account's own GL code — it shouldn't be; bank-code entries should only ever arrive via the normal cashbook process.

**If you find one:** post a General Ledger Journal to move the amount from the bank code to whichever account it should have been coded to in the first place.

## Check 4 — Is a manual-input Transaction Type mis-configured?

**Accounts | Edit/View Account Transaction Types** — export the list and check that none of your manual-input Transaction Types are set up posting to the bank account's own GL code (they shouldn't be — that's the same problem as Check 3, but baked into the transaction type's setup rather than a one-off miscoding).

**If you find one:** run an Account Transaction Report for that transaction type to get the total value affected, journal it across to the correct GL code, **and** fix the Transaction Type's GL code so it stops recurring.

## Check 5 — Line-by-line transaction comparison

Only needed if Checks 1–4 didn't find it. This is slower but systematic:

1. **Cashbook | Print Transaction Report** (System Indicator order, Summary Only) for the month — gives you total cash posted per system/GL code.
2. **Accounts | Print Account Monthly Summary Report** for the same month end.
3. Compare the two: the Cashbook Transaction Report's total for a given system should equal that system's Cashbook Input total on the Monthly Summary Report (signs may be opposite — that's fine, the magnitude is what matters).
4. Wherever the two totals disagree, drill into that specific Transaction Type: re-run the Cashbook Transaction Report filtered to just that Transaction Type, and an Account Transactions report for the same date range and type, then compare line by line to find the specific transaction(s) responsible.
5. Repeat for every Transaction Type that came up mismatched in step 3.

If you've been through all five checks and still can't isolate it, that's the point to call Argos rather than keep searching — at that stage it usually needs a database-level look, not another report.

## A pattern worth knowing before you start

If the variance involves an **external system** (a distributor's own figures, an accounting package like Xero, a warehouse funder's numbers) rather than purely internal GL codes, the checks above won't find anything, because the problem isn't inside Argos — it's a difference in how the two systems each record the same event. The most common real-world cause: a transfer or adjustment made on the *other* system's side without an equivalent transaction being entered in Argos (see [Getting your GL data out of Argos](02-gl-reporting-export.md) for more on this). These variances tend to grow steadily rather than appear as a one-off, which is itself a useful diagnostic signal — a variance that's stable is probably a real timing/coding issue (Checks 1–4); one that keeps growing month over month is more likely an external-system gap.

## Common things that go wrong

| Symptom | Usual cause |
|---|---|
| GL and Cashbook agree except for one module | That module's month-end reset hasn't run yet |
| Variance exactly matches a batch of transactions | Next month's transactions were entered early — timing difference |
| Small, one-off variance that doesn't recur | Something coded directly to the bank GL code — check Transaction Types too |
| Variance against an external system that keeps growing | Likely a transfer or adjustment happening outside Argos entirely |
