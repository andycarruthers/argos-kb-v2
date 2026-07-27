---
title: "Setting up direct debits and curtailment schedules"
module: Direct Debit / Bailment
status: sme_review_required
ticket_deflection_estimate: "~5/month"
supersedes:
  - Direct Debit Details
  - Scheduled Direct Debit Browse
  - Scheduled Direct Debit Details
  - Direct Debit Report
  - Direct Debit Dishonour Codes
  - Payment Cycle Browse
  - Payment Cycle Details
  - Create Curtailments Wizard
related_articles:
  - 03-loan-lease-operations.md
needs_sme_confirmation:
  - "Confirm the Direct Debit Report 'pre-dated entries' behaviour described below — I've inferred the likely cause (Standard Date vs. Next Date confusion, or a schedule not aligned to the processing date) from the ticket subject line alone; I did not have the full ticket resolution to confirm the actual root cause. This needs a real answer before publishing, not an inferred one."
  - "Confirm the Curtailment Wizard's 'Distributor' field behaviour (blank = all due-in-full accounts) is still accurate."
source_tickets_reviewed:
  - "15209 — 'Direct Debit Report Showing Pre-Dated Entries', Aug 2025, Negative sentiment — full resolution not reviewed in this pass, flagged above for confirmation"
---

# Setting up direct debits and curtailment schedules

Direct debit tickets cluster around two different questions: "how do I set one up" (straightforward), and "why is this direct debit doing something I didn't expect" (where the real support time goes). This article covers setup, then the specific behaviours worth understanding before they surprise you.

## Setting up a Direct Debit on an account

Direct Debit Details are held **at the account level**, so a different bank account can be used for direct debiting different loans for the same client.

**Access:** from Quote (Add Quote), or from an existing Fixed Loan, Lease, or Variable Loan account (Edit → D.Debit).

<div class="vault-mockup">
  <div class="title-bar">Direct Debit Details</div>
  <div class="row"><span class="label">Next Date</span><span class="field required">26/02/2015</span></div>
  <div class="row"><span class="label">Next Amount</span><span class="field">0.00</span></div>
  <div class="row"><span class="label">Use Instalment Schedule</span><span class="field readonly">☐ Click here</span></div>
  <div class="row"><span class="label">Standard Date</span><span class="field required">26/02/2015</span></div>
  <div class="row"><span class="label">Frequency</span><span class="field">Weekly ▾</span></div>
  <div class="row"><span class="label">Standard Amount</span><span class="field">0.00</span></div>
  <div class="row"><span class="label">Bank Account</span><span class="field required"></span></div>
  <div class="row"><span class="label">Suspend Direct Debit</span><span class="field readonly">☐ Click here</span></div>
</div>

**Two fields are the ones worth understanding properly, because getting them wrong is what produces "why did this direct debit happen on the wrong date/amount" tickets:**

- **Next Date / Next Amount** vs. **Standard Date / Standard Amount** — Next is a one-off override for the very next debit only; Standard is the ongoing recurring value the schedule reverts to afterwards. If a client asks for a one-time change to a single payment, that's Next Date/Amount — changing Standard Date/Amount changes every future payment, not just the next one.
- **Use Instalment Schedule** (Lease and Fixed Loan only) — when checked, the Payment Date is forced to match the Instalment Date, and everything from Standard Date to Standard Amount is disabled because those values now come from the instalment schedule instead. If this is checked and someone tries to edit Standard Amount directly expecting it to take effect, it won't — that's the schedule, not a bug.

### If a direct debit report shows dates that don't look right

Before assuming the report is wrong, check which of the two date pairs above actually drove the entry — a "pre-dated" or unexpected-looking entry is usually explained by Next Date being set independently of Standard Date, not by a calculation error. [needs confirming — see frontmatter]

## Setting up curtailments in bulk (Bailment)

The Curtailment Wizard puts a batch of accounts "Under Arrangement" and creates a repayment schedule for each one, rather than doing it account-by-account.

**Bailment | Processes | Create Curtailment**

<div class="vault-mockup">
  <div class="title-bar">Create Curtailments Process</div>
  <div style="margin: 6px 0 10px; color:#1c3f7c; font-weight:600;">Curtailment Candidates</div>
  <div class="row"><span class="label">Processing Date:</span><span class="field">11/04/2019 ▾</span></div>
  <div class="row"><span class="label">Distributor:</span><span class="field lookup"></span></div>
  <table class="grid" style="margin-top:12px;">
    <tr><th></th><th>Account</th><th>Original Asset Amount</th><th>DIF Date</th><th>Curtailment Date</th><th>Day</th></tr>
    <tr><td>☑</td><td></td><td></td><td>13/02/2019</td><td>14/02/2019</td><td></td></tr>
    <tr><td>☑</td><td></td><td></td><td>15/02/2019</td><td>16/02/2019</td><td></td></tr>
  </table>
</div>

- **Processing Date** defaults to today but can be moved forward within the current month period, so you can run this at any point through the month rather than only on day one.
- **Distributor** left blank processes **every** account currently due in full, across all distributors — narrow this deliberately if you only want one distributor's book actioned, since leaving it blank on a large portfolio will put a lot of accounts under arrangement at once.

## Common things that go wrong

| Symptom | Usual cause |
|---|---|
| One-off payment change affected all future payments too | Standard Date/Amount was edited instead of Next Date/Amount |
| Editing Standard Amount on a Lease/Fixed Loan account has no effect | Use Instalment Schedule is checked — the schedule drives the amount instead |
| Curtailment wizard put more accounts under arrangement than expected | Distributor field was left blank, processing the whole due-in-full book |
