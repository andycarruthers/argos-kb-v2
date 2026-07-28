---
title: "Vault Can't Connect to the Database — Updating the Server IP or Name"
description: "Reconnecting Vault to your database server after the server itself has moved to a new IP address or machine name."
module: System Config
status: sme_review_required
ticket_deflection_estimate: "8-10/month"
supersedes:
  - Install the Vault Client
  - Argos Server Installation
  - Troubleshooting
related_articles:
  - update-licence-ip-address
  - batch-processing-server-troubleshooting
needs_sme_confirmation:
  - "Greg Beale reviewed this article (Jun 5) and said it 'needs to be checked by someone with more technical expertise, otherwise seems to be a good article' — no specific step was flagged as wrong, but a technical sign-off is still outstanding."
  - "Confirm this is genuinely distinct from the licence/IP whitelisting issue in [Vault won't start — licence error after an IP address change](update-licence-ip-address). This article is the client-side ODBC connection fix for when your database server itself has moved; that one is the licence-side fix for when your organisation's outbound IP has changed. Support tickets reporting 'IP problems' may not distinguish these — worth a short triage note pointing to both if that keeps coming up."
source_tickets_reviewed: []
---

# Vault can't connect to the database — updating the server IP or name

:::caution Under review
This article is believed to be broadly correct but has not yet had a technical sign-off — see the note below.
:::

If Vault can't reach its database at all (rather than a licence error — see [Vault won't start — licence error after an IP address change](update-licence-ip-address) if that's what you're seeing), and your database server has recently moved to a new IP address or machine name, every workstation's connection settings need to be pointed at the new location.

This is a per-workstation fix — you'll need to repeat it on each machine that connects to Vault.

## Step 1 — Open the ODBC Data Source Administrator

- **32-bit systems:** Control Panel → Administrative Tools → ODBC Data Sources
- **64-bit systems:** run `C:\Windows\SysWOW64\odbcad32.exe` directly (the standard 64-bit ODBC admin tool will not show the correct driver list for Argos)

## Step 2 — Update the existing Argos data source

1. Go to the **System DSN** tab.
2. Highlight the existing Argos data source and click **Configure**.
3. Update the server field to the new server name or IP address.
4. Step through the remaining screens without changing anything else.
5. Click **Test Data Source** to confirm the connection succeeds before saving.
6. Click **OK** to save.

## Step 3 — Repeat on every workstation

Every machine that runs Vault needs this same update. If your site also runs the Argos Server application (for batch processing — see [Argos Batch Processing troubleshooting](batch-processing-server-troubleshooting)), that server machine needs its DSN updated too, via **Control | Argos Server Setup** inside Vault on the server itself.

## If a "select data source" prompt appears after updating

Check the shortcut used to launch Vault — its Target field may reference a `DSN=` value that no longer matches the data source name you just updated. Update the shortcut to match, or rename the data source back to what the shortcut expects.

## Common things that go wrong

| Symptom | Usual cause |
|---|---|
| Vault can't connect on some machines but not others | ODBC update was only applied to some workstations — repeat Step 2 on the rest |
| "Select data source" dialog appears unexpectedly | Shortcut's DSN= value doesn't match the current data source name |
| Batch processing fails after the update, but Vault itself connects fine | Argos Server machine's own DSN wasn't updated — see [Argos Batch Processing troubleshooting](batch-processing-server-troubleshooting) |
| Test Data Source fails in Step 2 | New server address is wrong, or the server isn't reachable from this workstation's network — confirm with whoever moved the server |
