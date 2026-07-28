# Argos KB v2 — Prototype

A rebuild of the Argos knowledge base from a button-by-button reference manual into a
task-oriented guide, built around the patterns actually seen in support tickets rather
than a screen-by-screen walkthrough of the software.

Built with [Docusaurus](https://docusaurus.io/) and deployed via Netlify — sidebar
navigation by category, full-text search (client-side, no external account needed),
light/dark mode, "edit this page" links back to GitHub, and previous/next article
navigation, all out of the box.

**This is a prototype, not the production KB.** It covers the 7 highest-deflection-opportunity
topics identified from the July 2026 support workshop ticket analysis, as a proof of the new
format and the review workflow below — not a full replacement of all ~810 existing articles.

## Running it locally

```bash
npm install
npm start        # local dev server with hot reload, http://localhost:3000
npm run build    # production build, output in build/
npm run serve    # serve the production build locally to sanity-check it
```

## Deploying

This repo is set up for Netlify: `netlify.toml` sets the build command (`npm run build`)
and publish directory (`build`). Connect the repo in Netlify and it should build with no
further configuration. Note the repo is currently **private** — Netlify will need GitHub
access granted to it during the connect flow, same as any private-repo site.

## Where this came from

- The existing Zoho Desk knowledge base (~810 published articles) — reused wherever the
  underlying procedure is still correct, rewritten around the actual customer problem.
- `argos-support-combined sept 25 to may 26.md` — 968 real support tickets (Aug 2025–May 2026),
  used to ground each article in a real example rather than a hypothetical one.
- Direct visual inspection of the current KB's dialog screenshots (2026-07-27) — these are
  hand-built HTML/CSS mockups rendered inside a cross-origin sandboxed editor frame in Zoho
  Desk, not image files, and not available as attachments either. They've been faithfully
  reproduced as real HTML/CSS (see `src/css/custom.css`, `.vault-mockup` styles) rather than
  pasted as images, since that's not something that could be scripted or exported directly,
  and it's actually how the source KB itself stores them.

## Review workflow

Each article's frontmatter carries a `status`:

| Status | Meaning |
|---|---|
| `draft` | Written, not yet reviewed |
| `sme_review_required` | Specific claims are flagged in `needs_sme_confirmation` — a GitHub Issue exists per article tracking this |
| `ready_to_publish` | SME-reviewed, no open questions |
| `published` | Live in the real KB |

Articles flagged `sme_review_required` or `draft` also show an in-page "Under review" notice
on the published site, so it's visible to anyone reading the prototype, not just in the repo.

Every article with `needs_sme_confirmation` entries has a matching GitHub Issue labelled
`sme-review-required`, quoting the specific things that need a real answer before this goes
live — not "review this," but the exact claims that need confirming and why.

## Article status

| # | Article | Module | Status | Est. deflection |
|---|---|---|---|---|
| 1 | [Setting up a new Argos user](docs/01-new-user-access-setup.md) | Control / Security | 🟡 SME review required | ~16/month — biggest single opportunity |
| 2 | [Getting your GL data out of Argos](docs/02-gl-reporting-export.md) | General Ledger / Reporting | 🟡 SME review required | ~8/month |
| 3 | [Common loan and lease operations](docs/03-loan-lease-operations.md) | Variable Loan / Lease | ⚪ Draft | ~8/month |
| 4 | [Setting up direct debits and curtailment](docs/04-direct-debit-curtailment-setup.md) | Direct Debit / Bailment | 🟡 SME review required | ~5/month |
| 5 | [Diagnosing a GL / Cashbook balance variance](docs/05-balance-variance-diagnosis.md) | General Ledger / Cashbook | 🟢 Ready to publish | ~4/month (highest cost-per-ticket) |
| 6 | [Working out an early termination / payout figure](docs/06-early-termination-process.md) | Variable Loan / Bailment | 🟡 SME review required | ~3/month, high priority |
| 7 | [Running month-end](docs/07-month-end-process.md) | Control / Cashbook / GL | 🟢 Ready to publish | ~2/month direct, high downstream impact |

## What's deliberately not in this prototype

- The other ~800 existing KB articles — untouched, still live in Zoho Desk.
- A real publishing pipeline back into Zoho Desk — this repo is the drafting/review layer only.
- IP whitelisting self-service — flagged in article 1 as a real, confirmed gap (no KB article,
  no self-service option exists today), not solved here.
- Algolia-hosted search — using the local/offline search plugin instead, so there's no external
  account dependency for a prototype at this stage. Worth revisiting for the real thing if the
  article count grows a lot, since local search indexes the whole site into the client bundle.
