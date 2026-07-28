---
title: "Vault Won't Start — Licence Error After an IP Address Change"
description: "What to do when Vault shows a licence validation error, and how to get a new licence issued for a changed IP address."
module: System Config
status: sme_review_required
ticket_deflection_estimate: "8-10/month"
supersedes:
  - Annual Licence Renewal
  - Organisation Details
  - Install the Vault Client
  - Troubleshooting
related_articles:
  - update-server-connection-ip
needs_sme_confirmation:
  - "Greg Beale reviewed this article (Jun 5) and said: 'This is outside my domain knowledge. I didn't know there was an issue with licences and IP addresses.' This is a significant flag — the only reviewer so far has no visibility into whether this is a real, current problem, and nobody has confirmed the premise of the article. Do not treat anything below as settled until someone who owns licensing (not general product) has reviewed it."
  - "Whether IP whitelisting for licensing is submitted by emailing support@argos.co.nz, through a self-service Help Centre form, or some other mechanism — both are described as possibilities below but neither is confirmed."
  - "Whether this is genuinely distinct from the server-connection IP issue covered in [Updating a server connection IP address](update-server-connection-ip) — the two articles were drafted with the same ticket-deflection estimate (8-10/month) and overlapping related-article lists, which suggests support tickets about 'IP problems' may not clearly distinguish which of the two is actually happening. A short triage note or landing page may be needed so customers pick the right one."
source_tickets_reviewed: []
---

# Vault won't start — licence error after an IP address change

:::caution Under review
This entire article is unconfirmed. The one reviewer so far said this problem area is outside their knowledge — see the note below before relying on anything here.
:::

If Vault refuses to start and shows a licence validation error, and nothing else about your setup has changed recently, the most common cause is that your organisation's public IP address has changed since your licence was last issued. Argos licences are tied to a registered IP address, and a mismatch will block login for every user at your site until it's corrected.

:::note Not yet verified
Whether this is currently a real, common cause of login failures has not been confirmed by an Argos subject matter expert. Treat the steps below as a starting hypothesis, not a confirmed fix, until support tells you otherwise.
:::

## Step 1 — Confirm your current public IP address

From the affected site, check your current public IP (search "what's my IP" in a browser, or use a site like whatismyip.com). This is the address your internet connection presents to the outside world — not any internal/local network address.

## Step 2 — Get the new IP address registered with Argos

Contact Argos Support with:
- Your organisation name
- The new public IP address from Step 1
- Confirmation of whether this is a permanent change (new office, new ISP) or temporary

## Step 3 — Apply a new licence file, if one is issued

If Argos Support issues a new licence file:

1. Save the file (named something like `<YourOrgName>_<date>_Licence.xml`) somewhere accessible.
2. In Vault: **Control | Edit/View Organisation Details**.
3. Use the licence import option on that dialog and select the file.
4. Confirm the new expiry date shown matches what support told you.
5. Close and reopen Vault for all users, and confirm login works again.

## If your organisation's IP changes often

If your internet connection doesn't have a fixed IP (common on residential/ADSL-style connections, less common on business fibre), ask your ISP about a static IP option, or use a company VPN with a single exit IP. Either will mean you only need to go through this process once, rather than every time your address changes.

## Common things that go wrong

| Symptom | Usual cause |
|---|---|
| Vault won't start, shows a licence error, nothing else changed | IP address likely changed since the licence was issued |
| Licence import in Organisation Details doesn't seem to do anything | Confirm you're using the file support actually sent, and that it hasn't already been applied |
| Problem recurs every few weeks | Dynamic/residential IP — consider a static IP or VPN |
