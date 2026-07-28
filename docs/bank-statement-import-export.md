---
title: "Bank Statement Import Errors and Export File Setup"
description: "Fixing bank statement import failures, and how Argos generates Direct Debit/Direct Credit export files for your banking software."
module: Cashbook
status: sme_review_required
ticket_deflection_estimate: "2/month"
supersedes:
  - Importing Cashbook Bank Transactions
  - Bank Details
  - Cashbook Statement Reconciliation
  - Managing Direct Debits
  - Post Direct Debit Details
related_articles:
  - balance-variance-diagnosis
needs_sme_confirmation:
  - "Original draft title was 'Bank Statement Export Formatting' but Greg Beale flagged (Jun 23) that the actual problem described is import failures, not export — retitled here accordingly. Confirm this reframing is right, and that the article correctly separates import troubleshooting from export/file-generation setup, which the original draft mixed together."
  - "Greg noted (Jun 23) the export section should be more specific — there are ~15 or so distinct export/output types (e.g. Post Direct Debit Details, Dealer/Insurer Payout, call/savings interest postings, deposit interest and maturity postings, lease DDs). At minimum the Distributor payout must be covered so Bailment clients see themselves reflected. This article currently covers the general pattern only — confirm whether a fuller list of the ~15 output types is needed before publishing."
  - "Greg noted (Jun 23) that a DD or DC file can be manually altered before upload, and that alterations should happen before the file reaches the bank — flagged as 'really due to an error rather than [routine practice]' (comment was cut off). Needs the full context confirmed before this is stated as guidance."
  - "Greg corrected (Jun 23) that reconciling after import is not a 'tidy up' step — it's a normal, mandatory part of the daily process that happens first thing each business day. Reflected below, but worth a final confirmation."
source_tickets_reviewed: []
---

# Bank statement import errors and export file setup

:::caution Under review
Parts of this article (marked below) are still being confirmed with the Argos team before we're fully confident in them.
:::

This covers two related but distinct things: fixing a bank statement that won't import into Argos, and how Argos generates the Direct Debit/Direct Credit files your banking software needs. These are opposite directions of the same daily cash workflow, and it's worth keeping them separate in your head.

## Importing a bank statement into Argos

**Cashbook | Edit/View Bank Details**, select the relevant bank account, and confirm:

| Field | What to check |
|---|---|
| Account Number | Must match exactly the account number in the import file. If in doubt, open the file in Notepad to verify the format — or copy the account number directly from the file rather than retyping it, to avoid transcription errors. |
| Import Format | Must match the file format provided by your bank |
| Transaction Import Filename | Must point to the correct folder where your banking software saves the file |

Then: **Cashbook | Edit/View Electronic Transactions**, select the bank account, click **Import**. If the import fails or the browse remains empty, check the three fields above and re-test.

### Common import errors

| Symptom | Likely cause | Action |
|---|---|---|
| Browse is empty after import | File not in expected location, or account number format mismatch | Open the file in Notepad and compare the account number to Bank Details |
| Import format error | Wrong Import Format selected | Confirm the file format with your bank and update Bank Details |
| Transactions not matching | Bank reference format differs | Review the bank reference setup on Bank Details — see note below |

**Bank reference separators:** the bank reference fields use `/` or `-` as field-break characters — a reference value containing one of these will be read as two separate fields. This is primarily relevant when manually creating a Direct Credit batch to be exported (see below), since the reference format itself is normally set up by the client's bank, not something Argos controls on the import side.

## How the export side works

Argos generates Direct Debit and Direct Credit files for upload to your banking software during various processes (for example, Post Direct Debit Details, and Dealer/Insurer Payout for Bailment clients).

1. Go to **Cashbook | Edit/View Bank Details**.
2. Use the export file path setting on the bank account dialog.
3. Set the file path and filename for each process that generates an export file.

**Files are overwritten each time an export is run.** Load each file to your banking software before running the next export — if a DD or DC file needs to be manually altered, that alteration must happen before the file is uploaded to the bank.

## After importing: reconcile daily, not as a "tidy up"

After importing, reconcile the bank account using **Cashbook | Manual Reconciliation**, and confirm the closing balance matches your bank statement before posting to other systems. This is a normal part of the daily process — not an optional cleanup step — and is expected to happen first thing each business day.

## Common things that go wrong

| Symptom | Usual cause |
|---|---|
| Import browse is empty | Account number or import format mismatch — verify in Notepad |
| Reference values look split into two fields | A `/` or `-` character inside the reference itself |
| Export file doesn't reflect a recent change | Files are overwritten on each export run — re-export after any change, and upload before generating the next one |
| Daily reconciliation skipped | This is a mandatory daily step, not optional cleanup — treat it as part of day-start processing |
