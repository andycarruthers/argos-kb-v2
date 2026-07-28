---
title: "Correcting an Interest Rate Loaded With the Wrong Effective Date"
description: "How to fix a rate loaded to an Interest Profile with the wrong effective date, without triggering an unintended recalculation."
module: Variable Loan, Fixed Loan, Lease
status: sme_review_required
ticket_deflection_estimate: "3-4/month"
supersedes:
  - Variable Loan Planned Rate Changes
  - Changing Interest Rates on a Variable Loan
  - Account Interest Details
  - Changing the Override Rate
related_articles: []
needs_sme_confirmation:
  - "Scenario A, Scenario C, and the verification checklist below have not been separately confirmed by an SME — only the Scenario B correction (see next item) has been addressed directly."
  - "The Debit-amount threshold (99,999,999) mentioned in the verification checklist is unconfirmed."
source_tickets_reviewed: []
---

# Correcting an interest rate loaded with the wrong effective date

:::caution Under review
Most of this article is still unconfirmed — see the flagged items below. One factual error (Scenario B) has already been corrected based on direct reviewer feedback.
:::

Use this when a rate was loaded to an Interest Profile with the wrong effective date, and you need to fix it without triggering an unintended recalculation across every account on that profile.

## Before you touch anything: take a backup

**Backdating a rate line deletes any rate changes entered after the backdated date, and recalculates interest from that point forward for every account on the profile.** Vault will warn you before this happens — don't dismiss that warning without understanding what it's telling you. Take a database backup first regardless of which scenario below applies.

## Scenario A — the rate hasn't posted yet

**Accounts | Edit/View Account Interest Profiles** (or press **F2** on the account's Interest Profile field) → locate the incorrectly-dated line → highlight it → **[Edit]** → correct the date → **[Save]**. If the corrected date falls before an existing line, Vault will warn that later lines will be deleted — read that warning carefully before confirming.

## Scenario B — the rate has already posted

A posted rate line (the **Posted** flag is checked) can't be edited directly.

- **Minor error, small impact:** contact Argos Support — a database script may be needed to adjust the posted line without triggering a full recalculation.
- **Significant error, and a recalculation is acceptable:** take a backup, then add a new, correctly-dated rate line (Vault will warn that later lines will be deleted — confirm once you're sure). **The corrected rate applies to every account on that profile as soon as the profile change is saved — there is no separate posting step required.** Accrued interest is adjusted immediately based on the new rate. Review the affected accounts afterward to confirm the correction took effect as expected.

## Scenario C — an Override Rate was loaded with the wrong date

Override rates aren't date-sensitive — changing one backdates to the account's open date, which is rarely what you want. Don't edit the Override Rate field directly. Instead: remove the account's current Interest Profile, create or select a profile carrying the correct rate from the required date, apply that profile to the account, then set Override Rate back to **0.00** so the profile's rate takes over.

## Verification checklist

- The correct rate and date show on the profile.
- The **Posted** flag is unchecked until the next posting run.
- Accrued interest looks right for the account(s) affected.
- The Debit amount on the interest profile line is set high enough (commonly 99,999,999) — interest only calculates up to that threshold.

## If clients were over- or under-charged

An adjustment transaction may be needed. Contact Argos Support to work out the correct adjustment before posting anything yourself.

## Common things that go wrong

| Symptom | Usual cause |
|---|---|
| Later rate lines disappeared after a date correction | Expected behaviour when backdating a rate line — this is why a backup comes first |
| Posted rate line won't accept an edit | Posted lines can't be edited directly — see Scenario B |
| Rate corrected but interest still looks wrong | Check the Debit amount threshold on the profile line, and confirm the Posted flag state |
