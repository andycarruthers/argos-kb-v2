---
title: "Setting up a new Argos user (and getting them connecting from day one)"
module: Control / Security
status: sme_review_required
ticket_deflection_estimate: "~16/month — the single largest deflection opportunity in the KB"
supersedes:
  - Staff Code Details
  - Staff Code Browse
  - Staff Group Details
  - Security Roles
  - User Access Security
  - External User Details
related_articles:
  - 04-direct-debit-curtailment-setup.md
needs_sme_confirmation:
  - "IP whitelisting mechanism described below (Azure NSG rule tied to the hosting VM) is inferred from architecture notes and client conversations, not from an existing KB article — no such article currently exists. Please confirm the actual current process (who requests it, who action­s it, expected turnaround) before publishing."
  - "Whether a self-service IP whitelisting option is on any near-term roadmap — if yes, this article should say so and set expectations; if no, it should say clearly why (see 'Why this isn't self-service yet' box)."
  - "Confirm current Preset Privilege Level options (Administrator/Power/Standard/Limited) are still accurate for new dialogs using Security Roles instead."
source_tickets_reviewed:
  - "15228 — 'New user', Sept 2025, routine setup request"
  - "15236 — 'Whitelist IP', Sept 2025, remote-worker access request, resolved same day"
---

# Setting up a new Argos user (and getting them connecting from day one)

New Access / Login tickets are the single biggest category of Argos support requests — around 14% of everything we see. Almost none of them are bugs. They're two separate, ordinary tasks that this article walks through together, because in practice a new starter usually needs both done before their first day: **setting them up inside Vault**, and **getting their machine able to reach it**.

## Part 1 — Create the user inside Vault

A new user needs a **Staff Code** — this is what actually grants them a login, a name, and a security level inside Argos.

**Control | Edit/View Staff Codes**

<div class="vault-mockup">
  <div class="title-bar">Staff Code Details</div>
  <div class="row"><span class="label">Logon Code</span><span class="field required"></span></div>
  <div class="row"><span class="label">Name</span><span class="field required"></span></div>
  <div class="row"><span class="label">Staff Position</span><span class="field lookup"></span></div>
  <div class="row"><span class="label">Supervisor</span><span class="field lookup"></span></div>
  <div class="row"><span class="label">Preset Privilege Level</span><span class="field">(Select) ▾</span></div>
  <div class="row"><span class="label">Active</span><span class="field readonly">☑ Click here</span></div>
  <div class="row"><span class="label">Administrator</span><span class="field readonly">☐ Click here</span></div>
</div>

What actually matters here, in order:

1. **Logon Code and Name** are mandatory (shown in yellow in the live dialog) — pick a logon code convention early and stick to it, since it can't be easily changed later without support's help.
2. **Preset Privilege Level** controls what the user can do with saved report/dialog presets (Administrator, Power, Standard, or Limited) — most staff should be **Standard**, not Administrator, even if they're senior. Administrator here is about *preset management*, not general system access.
3. **Staff Position** is a lookup, not free text — if the position doesn't exist yet, it needs to be created first (Control | Edit/View Staff Positions), or the field will bounce.

### What actually restricts what a user can see

The Staff Code alone doesn't lock a user out of anything. Access is controlled separately, by **Staff Groups** and **Security Roles**:

- If a dialog has no Staff Group restriction added to it, *everyone* can open it — restriction is opt-in, screen by screen.
- If you need someone locked out of, say, the General Ledger Trial Balance or Call/Investment accounts, that's done by adding Staff Groups to that specific dialog and making sure the new user isn't in one of the groups that has access.

If you're setting up someone in a sensitive role (credit, GL, or anyone who shouldn't see certain ledgers), confirm their Staff Group *before* their first login, not after — retrofitting access restrictions once someone has already been using an account for weeks is a much bigger job.

## Part 2 — Get them actually able to log in

This is the part that generates the most tickets, and the part with no dedicated setup screen inside Vault — because it isn't a Vault setting. Argos-hosted clients run on a dedicated Azure VM, reached through a Windows/Remote Desktop gateway app. Two separate things have to line up before a new user can connect:

1. Their **Staff Code** exists and is Active (Part 1, above).
2. Their **network location is allowed to reach the VM** — this is enforced at the network level (an Azure security rule tied to your organisation's VM), completely separate from anything inside Vault itself.

**If a new starter, or someone working from a new location (home, a different office, travelling), can't connect at all** — not a Vault error, just nothing happening, or a connection timeout — this is almost always the second one, not the first.

### Why this isn't self-service yet

Right now, getting a new IP address allowed through requires **raising a support ticket** — there's no self-service option in the client portal for this today. A typical request looks like:

> "Can you please whitelist the following IP for \[name], who is working from home."

These are usually quick to action once we have the IP address, but if your team works from home regularly, changes locations, or is on a residential internet connection without a fixed IP, expect to need this every time that IP changes. If your organisation has staff regularly working remotely, a fixed IP address (many ISPs offer this for a small monthly fee) or a company VPN with a single exit IP will cut this down to a one-time setup rather than a recurring ticket.

**Before raising a ticket, have ready:**
- The exact IP address (have the person check "what's my IP" from the location they're connecting from — not their home router's internal IP)
- Whether this is permanent (new office) or temporary (short-term remote work)
- The Staff Code this is for, if already created

## Common things that go wrong

| Symptom | Usual cause |
|---|---|
| New user has no error, connection just hangs or times out | IP not yet whitelisted for their location |
| User can log in to the VM but Vault says login invalid | Staff Code not yet Active, or logon code typo |
| User can see the system but a whole menu/module is missing | Staff Group restriction on that area — check Security Roles, not a bug |
| Works in the office, not from home | Different IP at home was never whitelisted |
