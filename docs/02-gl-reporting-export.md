---
title: "Getting your GL data out of Argos and matching it to your books"
description: "Exporting the GL Trial Balance and reconciling it against Xero, distributor statements, or your own ledger."
module: General Ledger / Reporting
status: sme_review_required
ticket_deflection_estimate: "~8/month"
supersedes:
  - How to Print a Report
  - Export General Ledger Trial Balance
  - General Ledger Trial Balance
  - Custom Report Setup
  - SQL Runner
  - Common Report Parameters
related_articles:
  - 05-balance-variance-diagnosis.md
  - 07-month-end-process.md
needs_sme_confirmation:
  - "Confirm whether 'Export Report Data' (raw CSV, separate from formatted exports) is available on the GL Trial Balance export specifically, or only on some report types — the old KB articles are inconsistent about which reports have it."
  - "Confirm current supported Export Formats (Tab Delimited, CSV, Excel 5/2007+, Crystal, Dev Express) are still accurate post-modernisation work — this may have changed."
  - "The 'no built-in distributor/remittance reconciliation report' gap noted below is based on a real, months-long support ticket. Confirm this is still true today before publishing, in case it's since been built."
source_tickets_reviewed:
  - "15207 — 'Unposted Transactions Report not working', Aug 2025 — turned out to be a login/access issue, not a report bug"
  - "15280 — 'Distributor Reconciliation - Grouping transactions', Sept–Oct 2025, ~5 week resolution — client needed to match a distributor's own remittance figures against Argos, no report existed to do this directly"
---

# Getting your GL data out of Argos and matching it to your books

:::caution Under review
Parts of this article (marked below) are still being confirmed with the Argos team before we're fully confident in them.
:::

Reporting and GL export tickets are usually not "how do I print a report" — they're "I need to prove these two numbers match, and I don't know which report shows me that." This article covers both: how to actually run and export the GL Trial Balance, and how to think about matching it to an external system (Xero, your own ledger, a distributor's numbers) when the two don't line up on the first try.

## Exporting the GL Trial Balance

**General Ledger | Export GL Trial Balance**

<div class="vault-mockup">
  <div class="title-bar">Export General Ledger Trial Balance</div>
  <div class="row"><span class="label">Month Ending</span><span class="field required">30/09/2013</span></div>
  <div class="row"><span class="label">Print Zero Balances</span><span class="field readonly">☐ Click here</span></div>
  <div class="row"><span class="label">Currency</span><span class="field lookup"></span></div>
  <div class="row"><span class="label">Company</span><span class="field lookup"></span></div>
  <div class="section-label">Export Options</div>
  <div class="row"><span class="label">Export Format</span><span class="field">Tab Delimited (*.tab) ▾</span></div>
  <div class="row"><span class="label">File Folder</span><span class="field lookup"></span></div>
  <div class="row"><span class="label">Filename Prefix</span><span class="field"></span></div>
  <div class="row"><span class="label">Filename Date</span><span class="field"></span></div>
  <div class="row"><span class="label">Date Format</span><span class="field">DDMMYY ▾</span></div>
  <div class="row"><span class="label">Resulting Filename</span><span class="field readonly"></span></div>
  <div class="row"><span class="btn">Export [B]</span></div>
</div>

**Two settings decide most of what you get:**
- **Print Zero Balances on** → every active GL code exports, even ones with nothing posted. Off → only codes with actual movement in the last two years. If you're reconciling and a code you expect is missing, this is usually why.
- **Export Format** — pick whatever your accounting system or Excel can open cleanly. Tab-delimited is the safest default if you're not sure; CSV can silently break on any GL code name or description that contains a comma.

## Matching Argos to an external system (Xero, distributor statements, anything else)

This is where most of the real tickets are, and where there usually *isn't* a single button. A few patterns worth knowing before you start:

- **The GL Trial Balance export is a snapshot at month-end, not a live feed.** If your external system posts transactions on a different cadence (e.g. daily bank imports vs. Argos's month-end GL post), don't expect the two to match mid-month — compare month-end to month-end.
- **Transfers matter.** If a value moves between two ledgers or two systems, how it got there changes whether it reconciles. A transfer done through Argos's own Transfer / Transfer Non-Cash function keeps both sides in the same GL journal. A transfer done *outside* Argos (e.g. moved on the bank/cash side in your external accounting system, bypassing Argos entirely) will not show up on the Argos side at all — this is one of the most common causes of a growing, unexplained variance between Argos and an external ledger, and it compounds every month it's not corrected.
- **There is currently no single built-in report that reconciles a distributor's own remittance figures against Argos automatically.** If you need to match a distributor's numbers against yours, the current path is to open each Remittance Advice communication for that distributor and total the transactions manually — there's no "distributor reconciliation" report today. If this is a recurring need for your business, raise it with your Argos contact; the workaround is real but time-consuming, and it's worth flagging as a feature request rather than repeating it every month.

### If a report looks broken rather than just "doesn't match"

Before assuming a report itself is faulty: the most common real cause behind a "report not working" ticket is an access or login issue upstream of the report entirely (see [Setting up a new Argos user](01-new-user-access-setup.md)) — the report dialog opens but returns nothing because the session or permissions aren't what they should be, not because the report logic is wrong. Worth ruling this out first, since it's a faster fix than anything on the reporting side.

## Common things that go wrong

| Symptom | Usual cause |
|---|---|
| A GL code I expect isn't in the export | "Print Zero Balances" was off and the code has no recent movement |
| Numbers don't match my external accounting system | Check whether every transfer between the two went through Argos's Transfer function, or partly happened outside Argos |
| A distributor's own figures don't match ours | No automatic reconciliation report exists yet — see workaround above |
| Report dialog is empty / "not working" | Check access/login first — often not a report bug |
