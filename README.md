# Argos KB v2 — Prototype

A rebuild of the Argos knowledge base from a button-by-button reference manual into a
task-oriented guide, built around the patterns actually seen in support tickets rather
than a screen-by-screen walkthrough of the software.

**This is a prototype, not the production KB.** It covers the 7 highest-deflection-opportunity
topics identified from the July 2026 support workshop ticket analysis, as a proof of the new
format and the review workflow below — not a full replacement of all ~810 existing articles.

## Where this came from

- The existing Zoho Desk knowledge base (~810 published articles) — reused wherever the
  underlying procedure is still correct, rewritten around the actual customer problem.
- `argos-support-combined sept 25 to may 26.md` — 968 real support tickets (Aug 2025–May 2026),
  used to ground each article in a real example rather than a hypothetical one.
- Direct visual inspection of the current KB's dialog screenshots (2026-07-27) — these are
  hand-built HTML/CSS mockups rendered inside a cross-origin sandboxed editor frame in Zoho
  Desk, not image files, and not available as attachments either. They've been faithfully
  reproduced as real HTML/CSS (see `assets/styles/vault-mockup.css`) rather than pasted as
  images, since that's not something that could be scripted or exported directly, and it's
  actually how the source KB itself stores them.

## Review workflow

Each article's frontmatter carries a `status`:

| Status | Meaning |
|---|---|
| `draft` | Written, not yet reviewed |
| `sme_review_required` | Specific claims are flagged in `needs_sme_confirmation` — a GitHub Issue exists per article tracking this |
| `ready_to_publish` | SME-reviewed, no open questions |
| `published` | Live in the real KB |

Every article with `needs_sme_confirmation` entries has a matching GitHub Issue labelled
`sme-review-required`, quoting the specific things that need a real answer before this goes
live — not "review this," but the exact claims that need confirming and why.

## Article status

| # | Article | Module | Status | Est. deflection |
|---|---|---|---|---|
| 1 | [Setting up a new Argos user](articles/01-new-user-access-setup.md) | Control / Security | 🟡 SME review required | ~16/month — biggest single opportunity |
| 2 | [Getting your GL data out of Argos](articles/02-gl-reporting-export.md) | General Ledger / Reporting | 🟡 SME review required | ~8/month |
| 3 | [Common loan and lease operations](articles/03-loan-lease-operations.md) | Variable Loan / Lease | ⚪ Draft | ~8/month |
| 4 | [Setting up direct debits and curtailment](articles/04-direct-debit-curtailment-setup.md) | Direct Debit / Bailment | 🟡 SME review required | ~5/month |
| 5 | [Diagnosing a GL / Cashbook balance variance](articles/05-balance-variance-diagnosis.md) | General Ledger / Cashbook | 🟢 Ready to publish | ~4/month (highest cost-per-ticket) |
| 6 | [Working out an early termination / payout figure](articles/06-early-termination-process.md) | Variable Loan / Bailment | 🟡 SME review required | ~3/month, high priority |
| 7 | [Running month-end](articles/07-month-end-process.md) | Control / Cashbook / GL | 🟢 Ready to publish | ~2/month direct, high downstream impact |

## What's deliberately not in this prototype

- The other ~800 existing KB articles — untouched, still live in Zoho Desk.
- A real publishing pipeline back into Zoho Desk — this repo is the drafting/review layer only.
- IP whitelisting self-service — flagged in article 1 as a real, confirmed gap (no KB article,
  no self-service option exists today), not solved here.
