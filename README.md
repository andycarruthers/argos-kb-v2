# Argos KB v2 — Prototype

A rebuild of the Argos knowledge base from a button-by-button reference manual into a
task-oriented guide, built around the patterns actually seen in support tickets rather
than a screen-by-screen walkthrough of the software.

Built with [Docusaurus](https://docusaurus.io/) and deployed via Netlify — sidebar
navigation by category, full-text search (client-side, no external account needed),
light/dark mode, "edit this page" links back to GitHub, and previous/next article
navigation, all out of the box.

**This is a prototype, not the production KB.** It covers 24 topics — the 7
highest-deflection-opportunity topics identified from the July 2026 support workshop ticket
analysis, plus the complete 20-article set from Argos's live "Argos KB — Article Pipeline"
editorial review in Notion (with real SME corrections from Greg Beale folded in — three
pipeline articles were merged into existing ones rather than published separately, and one was
split into two where a reviewer felt the original scope was wrong) — as a proof of the new
format and the review workflow below, not a full replacement of all ~810 existing articles.

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
- Argos's live "Argos KB — Article Pipeline" database in Notion — a 20-article editorial
  review under way internally, with every one of its Subject Matter Expert comments (all from
  Greg Beale in this batch) read and carried into the article content below, not silently
  applied. Where a comment directly corrected a fact (a wrong button/field name, a wrong
  process step), the correction was made directly. Where a comment raised something genuinely
  unresolved (a disputed premise, a missing scoping conversation, an unconfirmed UI label),
  that's flagged in the article's `needs_sme_confirmation` list and in an in-page callout,
  not guessed at.

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
| 8 | [Cannot connect to Argos Vault via AVD](docs/cannot-connect-avd.md) | AVD / Access | 🟡 SME review required | 3-4/month |
| 9 | [Bank statement import errors and export file setup](docs/bank-statement-import-export.md) | Cashbook | 🟡 SME review required | ~2/month |
| 10 | [Argos Batch Processing — server paths, version checks, troubleshooting](docs/batch-processing-server-troubleshooting.md) | System Config | 🟡 SME review required | ~2/month |
| 11 | [Azure Virtual Desktop — first login setup](docs/avd-first-login.md) | AVD / Access | 🟡 SME review required | 2-3/month |
| 12 | [Moving files into and out of your AVD session](docs/avd-file-transfer.md) | AVD / Access | 🟡 SME review required | included in #11 |
| 13 | [Argos Help Centre — login and access troubleshooting](docs/help-centre-login-troubleshooting.md) | AVD / Access, General | 🟡 SME review required | ~2/month |
| 14 | [Vault fails to load on startup](docs/vault-fails-to-load-on-startup.md) | System Config, AVD / Access | 🟡 SME review required | ~2/month |
| 15 | [Vault won't start — licence error after an IP address change](docs/update-licence-ip-address.md) | System Config | 🟡 SME review required — premise itself unconfirmed | 8-10/month |
| 16 | [Vault can't connect to the database — updating the server IP or name](docs/update-server-connection-ip.md) | System Config | 🟡 SME review required | 8-10/month |
| 17 | [PPSR reconciliation](docs/ppsr-reconciliation.md) | System Config | 🟡 SME review required — key button name disputed | ~2/month |
| 18 | [Variable Loan instalments — dates, ledger posting, missed instalments](docs/variable-loan-instalment-ledger-posting.md) | Variable Loan | ⚪ Draft — scope itself questioned | ~2/month |
| 19 | [Correcting an interest rate loaded with the wrong effective date](docs/interest-rate-loading-correction.md) | Variable Loan, Fixed Loan, Lease | 🟡 SME review required | 3-4/month |
| 20 | [Setting up an Interest Only Variable Loan with direct debit](docs/interest-only-variable-loan-setup.md) | Variable Loan | ⚪ Draft | 3-4/month |
| 21 | [Generating a termination quote ("settlement statement")](docs/settlement-statement-generation.md) | Variable Loan, Fixed Loan, Lease | 🟡 SME review required — button names unconfirmed | 3-4/month |
| 22 | [Early termination rounding issues on floorplan assets](docs/floorplan-rounding-issues.md) | Bailment | 🟢 Ready to publish | ~2/month |
| 23 | [Reversing a transaction in Argos](docs/transaction-reversal.md) | Variable Loan, Fixed Loan, Lease, Bailment, Cashbook | 🟡 SME review required — FL/VL termination reversal not yet covered | 2-3/month |
| 24 | [Lease data extract for Salesforce](docs/lease-data-extract-salesforce.md) | Lease | ⚪ Draft — SME said the fuller version shouldn't be published as drafted | ~2/month |

Four further pipeline articles — "New User Provisioning Checklist," "New User Provisioning —
End-to-End Guide," "Early Termination Step-by-Step," and "Month-End Checklist" — were merged
into articles 1, 6, and 7 above rather than published as standalone pages, since they covered
the same ground as an existing article. Article 11's original source also covered file
transfer, which was split out into article 12 after a reviewer felt it didn't belong in a
login guide.

## What's deliberately not in this prototype

- The other ~800 existing KB articles — untouched, still live in Zoho Desk.
- A real publishing pipeline back into Zoho Desk — this repo is the drafting/review layer only.
- IP whitelisting self-service — flagged in article 1 as a real, confirmed gap (no KB article,
  no self-service option exists today), not solved here.
- Algolia-hosted search — using the local/offline search plugin instead, so there's no external
  account dependency for a prototype at this stage. Worth revisiting for the real thing if the
  article count grows a lot, since local search indexes the whole site into the client bundle.
