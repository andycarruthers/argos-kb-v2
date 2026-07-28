---
title: "Vault Fails to Load on Startup — Troubleshooting Checklist"
description: "Work through these checks in order when Vault won't open at all on a workstation."
module: System Config, AVD / Access
status: sme_review_required
ticket_deflection_estimate: "2/month"
supersedes:
  - Install the Vault Client
  - Troubleshooting
related_articles:
  - update-licence-ip-address
  - update-server-connection-ip
  - avd-first-login
source_tickets_reviewed: []
needs_sme_confirmation:
  - "Greg Beale reviewed this article (Jun 4) and flagged a real content gap: 'This should also cover the error message and fix where a version of Argos is installed that is earlier than the database version (older version of Argos installed by mistake).' Check 6 below has been left as a general version-mismatch check, with the specific older-client-version scenario flagged separately in a callout, since the exact error message and fix for that specific case haven't been confirmed yet."
---

# Vault fails to load on startup — troubleshooting checklist

:::caution Under review
One specific scenario (an installed Vault version older than the database) is a known gap — see the callout in Check 6.
:::

Work through these checks **in order** — stop at the first one that resolves it.

## Check 1 — Nothing happens when you double-click Vault

**Cause:** missing prerequisites (.NET 4.8, C++ redistributables).

**Fix:** run the Argos Prerequisite Installer from the `ArgosApps` folder (or the latest release package), restart the workstation, and try again.

## Check 2 — "Database has been incorrectly selected" or "Cannot connect to database"

**Cause:** the ODBC data source is pointing at the wrong place, or the database hasn't been restored.

**Fix:** open the ODBC Data Source Administrator (64-bit: run `C:\Windows\SysWOW64\odbcad32.exe` directly; 32-bit: Control Panel → Administrative Tools → ODBC Data Sources) → **System DSN** tab → highlight the Argos data source → **Configure** → confirm the server and database → **Test Data Source** must succeed. If it fails, check SQL Server is running, the server name/IP is correct (see [Vault can't connect to the database](update-server-connection-ip)), and the database name matches your ledger.

## Check 3 — A "Select Data Source" dialog appears instead of Vault

**Cause:** the DSN name is missing or misspelled in the shortcut.

**Fix:** right-click the shortcut → Properties → the **Target** field must read `DSN=<ledgername>` (no spaces) after the filename, exactly matching your ODBC connection name.

## Check 4 — Crystal Report error on open

**Cause:** a missing `.rpt` file in the `ArgosApps\AFS` folder — the error message names the missing file and expected path (e.g. `AccSta.rpt` expected at `C:\ArgosApps\AFS`).

**Fix:** confirm the install location is correct, re-run the installer if the file is genuinely missing, and check the shortcut's **Start In** field points to the AFS folder.

## Check 5 — Licence error

**Fix:** if the licence has expired, see **Control | Edit/View Organisation Details** to import a new licence file. If your organisation's IP address has changed, see [Vault won't start — licence error after an IP address change](update-licence-ip-address). Otherwise, contact Argos Support with a screenshot of the exact error.

## Check 6 — Vault opens then immediately closes

**Cause:** a database log error, or a version mismatch between Vault and the server.

**Fix:** check the log file at `C:\Users\<username>\AppData\Local\Argos Financial Systems Limited\Argos Vault\log\AfsSupport.YYYYMMDD.log` for ERROR entries near the time you launched Vault. Confirm your Vault version matches the server and other workstations — an incomplete upgrade across machines is a common cause.

:::note Not yet verified
A specific version of this problem — where the **installed Vault client is an older version than the database** (for example, an outdated installer was used by mistake) — has its own distinct error message and fix that hasn't been documented yet. If you suspect this is what you're seeing, contact Argos Support directly rather than relying on the general steps above.
:::

## Check 7 — AVD users: session doesn't launch, or shows a blank screen

**Cause:** AVD timeout, an MFA issue, or your account isn't assigned to the Argos workspace.

**Fix:** go directly to `https://windows.cloud.microsoft/` (not the general Microsoft MyAccount page). If your device still doesn't appear, your account may not be assigned to the workspace — contact Argos Support. For MFA problems, see [Azure Virtual Desktop — First Login Setup](avd-first-login).

## After a Windows update or network change

Re-run the Prerequisite Installer after major OS updates, and check whether file paths or ODBC settings were affected by a network change.

## Common things that go wrong

| Symptom | Usual cause |
|---|---|
| Vault won't open at all, no error | Missing prerequisites — Check 1 |
| Database connection error | Wrong ODBC target, or database not restored — Check 2 |
| "Select Data Source" prompt | DSN name mismatch in the shortcut — Check 3 |
| Report/Crystal error on open | Missing .rpt file — Check 4 |
| Licence error | Expired licence or IP mismatch — Check 5 |
| Opens then closes immediately | Check the log file — version mismatch is common, see Check 6 |
| AVD session won't launch | Go directly to windows.cloud.microsoft — Check 7 |
