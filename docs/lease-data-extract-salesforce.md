---
title: "Lease Data Extract for Salesforce"
description: "What's currently confirmed about extracting Lease account data from Argos for use in Salesforce."
module: Lease
status: draft
ticket_deflection_estimate: "2/month"
supersedes: []
related_articles: []
needs_sme_confirmation:
  - "This topic is NOT ready to write up as a full how-to article. Greg Beale reviewed the original draft (Jun 4) and said plainly: 'I don't think it should be published.' He corrected two specific factual claims (see below), but also said he doesn't have enough context on what the Salesforce integration actually needs from Argos to judge the rest, and the original draft's whole multi-report, VLOOKUP-merge approach is not something he endorsed."
  - "The two corrections applied below (single report, and the GST rule) are Greg's direct statements and can be treated as reliable. Everything else about this integration — why it's needed, what Salesforce actually consumes, and whether any client-side Tag setup is still required — needs a proper scoping conversation with whoever owns the Salesforce integration before this becomes a real article."
source_tickets_reviewed: []
---

# Lease data extract for Salesforce

:::caution Under review
This is deliberately a short, cautious stub, not a full procedure. The original longer draft for this topic was reviewed and explicitly rejected by an SME — see below before using or expanding this.
:::

Two things are confirmed so far, both direct corrections from Greg Beale's review (2026-06-04) of an earlier, more elaborate draft:

## Only one report is needed

Run the **Lease Account Status Report**, with both **Include Asset Details** and **Include Client Details** checked on. An earlier draft of this article recommended combining several separate reports (a Cashflow report, a Client Tag Export, an Earned Interest report) — Greg was explicit that this is wrong: **"The only report required is the Lease Account Status Report with the Include Asset Details and Include Client Details checked on. The other reports should not be used!"**

The Client Tag Export approach in particular depends on Tags being set up accurately for every client, which Greg flagged as an existing pain point for the small number of clients currently using it — another reason not to build a process around it.

## The GST rule

**All values are ex-GST except the arrears balance.** GST is added to each instalment as it posts, which is what makes the arrears balance inclusive of GST. (An earlier draft claimed the Lease Cashflow Report shows GST separately — that report isn't part of this process at all, per the correction above, so that claim doesn't apply here.)

## What isn't confirmed yet

Everything else about this integration — what Salesforce needs the extracted fields for, whether the single report above is genuinely sufficient on its own, and whether any export-format or automation setup is needed — hasn't been scoped. Greg's own words on the earlier draft: **"I don't understand enough about what is to be achieved with this item."** Don't build a client-facing procedure from this stub without that scoping conversation happening first.

## If you need this today

Contact Argos Support directly rather than following any older documentation for this — the previous guidance for this task has been withdrawn pending the review above.
