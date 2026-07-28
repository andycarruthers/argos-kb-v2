---
title: "Argos Help Centre — Login and Access Troubleshooting"
description: "Fixing login problems with the Argos Help Centre support portal itself, separate from Vault access issues."
module: AVD / Access, General
status: sme_review_required
ticket_deflection_estimate: "2/month"
supersedes:
  - Troubleshooting
related_articles:
  - avd-first-login
  - cannot-connect-avd
  - new-user-access-setup
needs_sme_confirmation:
  - "Greg Beale reviewed this article (Jun 4) and flagged that an earlier draft cited an internal support ticket number and a specific client by name in the customer-facing text — his comment: 'Should an article refer to a ticket? I would think not as clients do not have access to these unless they have initiated them.' That reference has been removed from the version below rather than left flagged, since it's an unambiguous fix — customer-facing articles shouldn't cite internal ticket numbers or other clients' names. Confirm no other internal references remain before publishing."
source_tickets_reviewed: []
---

# Argos Help Centre — login and access troubleshooting

:::caution Under review
Reviewed with one correction already applied (see the note above) — full SME sign-off is still outstanding.
:::

This covers problems logging into or using the **Argos Help Centre** support portal itself — not Argos Vault. If you can't get into Vault, see [Azure Virtual Desktop — First Login Setup](avd-first-login) or [Cannot Connect to Argos Vault via AVD](cannot-connect-avd) instead.

## Can't log in to the Help Centre portal

1. Confirm you're using the correct Help Centre URL — contact Argos Support if you're not sure.
2. The Help Centre uses **separate credentials from Vault** — your Vault username and password won't work here unless it's been specifically set up to.
3. Use the portal's password-reset option. If the reset email doesn't arrive, check your spam/junk folder.
4. Still locked out? Contact Argos Support with your name, organisation, and email address for manual verification and a reset.

## The portal displays incorrectly (blank page, missing navigation, broken layout)

1. Clear your browser's cache and cookies, then refresh.
2. Try a different browser (Chrome, Edge, or Firefox).
3. If the problem persists across browsers, contact Argos Support with a screenshot — this is likely a portal-side display issue rather than something on your end.

## Can't access Argos Vault itself (not the portal)

This article only covers the Help Centre portal. For Vault access problems, see the article matching how you connect:

- AVD-hosted: [Azure Virtual Desktop — First Login Setup](avd-first-login) or [Cannot Connect to Argos Vault via AVD](cannot-connect-avd)
- On-premise install: [Setting up a new Argos user](new-user-access-setup)
- Connection/shortcut errors: [Vault fails to load on startup](vault-fails-to-load-on-startup)

## Common things that go wrong

| Symptom | Usual cause |
|---|---|
| Vault credentials don't work on the Help Centre | Expected — these are separate login systems |
| Password reset email never arrives | Check spam/junk first, then contact Argos Support |
| Portal looks broken in one browser | Try another browser or clear cache before contacting Support |
