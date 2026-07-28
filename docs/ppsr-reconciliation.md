---
title: "PPSR Reconciliation — Comparing Argos Records Against the PPSR Register"
description: "Checking Argos's security registration records against the PPSR register, and resolving invalid Collateral ID errors."
module: System Config
status: sme_review_required
ticket_deflection_estimate: "2/month"
supersedes:
  - Security Financial Statement Details
  - Post Security (PPSR) Registrations
  - Secured Party Details
  - Security Financial Statement Browse
related_articles: []
needs_sme_confirmation:
  - "IMPORTANT — Greg Beale reviewed this article (Jun 5) and raised a load-bearing concern: '[Refresh from PPSR] - I am not aware of this button or functionality on the Financing Statement. We do have [Sync Ver]. Is this what is being referred to? Katie will be best to review this in detail as she has had far more to do with PPSR than I have.' The button name used throughout this article's main procedure (Refresh from PPSR) may be wrong, or may be a different name for [Sync Ver]. Do NOT publish this article until Katie Curry (GM), who Greg named as the actual PPSR subject matter expert, has confirmed the correct button name and reviewed the procedure. This is flagged directly in the steps below rather than silently corrected, since the two functions may not be identical."
  - "Confirm the Invalid Collateral ID error-resolution steps against whatever the correct refresh/sync mechanism turns out to be — the manual PPSR-website cross-check steps should still hold regardless, but any step referencing the disputed button needs re-checking once Katie confirms."
source_tickets_reviewed: []
---

# PPSR reconciliation — comparing Argos records against the PPSR register

:::caution Under review
A key button name used in this article has not been confirmed — see the callout in Part A before following these steps. Katie Curry's review is needed before this is treated as accurate.
:::

Use this when a Financing Statement in Argos looks out of step with what's actually registered on the PPSR (Personal Property Securities Register), or when you're seeing Invalid Collateral ID errors after posting PPSR registrations.

## Part A — Comparing Argos records against the PPSR register

**Security | Amend Security Financial Statements**, search for and highlight the Financing Statement you want to check.

:::note Not yet verified
The next step refers to a **[Refresh from PPSR]** button. Greg Beale has flagged that he isn't aware of a button with this name on the Financing Statement dialog, and that Argos has a **[Sync Ver]** function instead — these may be the same thing under different names, or may be different. Confirm which is correct before relying on this step.
:::

1. Click **[Refresh from PPSR]** (or **[Sync Ver]** — see note above) to pull the currently registered details from the PPSR website, including the current version number.
2. Check: **Status** shows Registered, the **Register ID** matches, the **Version** number (this increments each time the registration is amended), and the **Expiry Date**.
3. From **Security Financial Statement Browse**, use **[Search PPSR]** to print a comparison report, and check collateral, debtor, and secured-party details line by line against the Argos record.
4. If a recent **Post PPSR Registrations** run produced errors, print the **Registry Error Report** and cross-check against Part B below.

## Part B — Resolving Invalid Collateral ID errors

This happens when the Collateral ID stored in Argos no longer matches what's on the PPSR website — usually because someone edited the registration directly on the PPSR site rather than through Argos.

1. Refresh the Financing Statement (see the note in Part A) and check the **Reg ID** column on the Collateral Details tab.
2. If it's still wrong after refreshing, log in to the PPSR register directly (ppsr.companiesoffice.govt.nz for NZ registrations) and compare Collateral IDs manually. If a database-level correction is needed, contact Argos Support rather than editing the PPSR record again.
3. Once resolved, re-post via **Security | Post PPSR Link** — press **F2** to select a specific Secured Party, or leave it blank to post for all.

### Other errors you may see

| Error | Likely cause |
|---|---|
| Invalid Collateral ID | Argos's stored ID no longer matches the PPSR register — see steps above |
| Invalid Subscription/Bearer Token | Known issue, reference fix AD-I912 — contact Argos Support if you hit this |
| No valid refresh token | The refresh token has a 14-day validity window and has expired — contact Argos Support to re-authenticate |
| Registration fails with no error message shown | Contact Argos Support with the Financing Statement reference — this needs investigation, not a self-service fix |

## Keeping registrations current

Financing Statements expire after 5 years. Use **[Renew]** from **Security Financial Statement Browse** before expiry to keep the registration active.

## Common things that go wrong

| Symptom | Usual cause |
|---|---|
| Argos details don't match the PPSR website | Run the refresh/sync step in Part A, then compare via Search PPSR |
| Invalid Collateral ID after a manual PPSR-site edit | See Part B — cross-check manually, involve Argos Support for a database fix |
| Registration expired unexpectedly | Financing Statements expire after 5 years — renew before expiry, not after |
