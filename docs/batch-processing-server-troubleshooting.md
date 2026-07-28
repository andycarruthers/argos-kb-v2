---
title: "Argos Batch Processing — Server Paths, Version Checks, and Troubleshooting"
description: "Troubleshooting batch jobs that fail or stop running after a server path change or version upgrade."
module: System Config
status: sme_review_required
ticket_deflection_estimate: "2/month"
supersedes:
  - Argos Server Installation
  - Version Upgrade Instructions
  - Batch Processing Tasks
  - UNC Naming
  - Restoring a Database
related_articles:
  - month-end-process
needs_sme_confirmation:
  - "Greg Beale flagged (Jun 5) that the original title 'How Argos Batch Processing Works' overstates scope — this is really about troubleshooting server-run batch jobs after a path change or version upgrade, and doesn't cover batch processing run manually from a workstation, or the paths used by batch Presets. Retitled here to reflect that narrower, troubleshooting-focused scope; a separate article may be needed for workstation-run batch processing and Preset paths."
  - "Greg questioned (Jun 5) the Problem statement itself ('not sure I understand what this problem means') — the framing below may still need adjustment."
  - "Greg raised (Jun 5) an unverified claim: that users can keep working in Vault while batch jobs process in the background, asking 'is this true and has it been tested?' and what happens if a user attempts a process affected by a running batch job. This is NOT stated as settled fact below — flagged explicitly as needing confirmation."
  - "Greg noted the Control menu's 'Alter File Storage Paths' function can also cause batch processing issues independent of server pathing, if a new path is wrongly specified — not currently covered in this article and should be added."
source_tickets_reviewed: []
---

# Argos Batch Processing — server paths, version checks, and troubleshooting

:::caution Under review
Parts of this article (marked below) are still being confirmed with the Argos team, including one claim not yet verified — see the callout further down.
:::

Use this when batch jobs are failing or not running after a server path change or a version upgrade. This article covers the server-run case specifically — see [Running month-end](month-end-process) for the processes themselves.

## Key rules

- **Vault and the Argos Server must be the same version number.** A mismatch after an upgrade will cause batch jobs to fail.
- **The Argos Server can only be restarted from the server machine itself** — it cannot be restarted remotely from a client workstation.
- **Only one Argos Server can be online at a time.** If a second server starts and detects a higher server ID, it will shut itself down.
- **Files created during batch processing are saved to the server.** Workstations must have the server's file paths mapped (via UNC paths) to access reports and exports.

:::note Not yet verified
The original draft states that "users can continue working in Vault while batch jobs process in the background." This has been questioned internally and is not confirmed — treat it as unverified until checked, particularly what happens if a user attempts an action affected by a batch job that's currently running.
:::

## Server path configuration

The Argos Server requires three file paths to be correctly set:

| Setting | What it controls | Example |
|---|---|---|
| Vault Location on Server | Path to the AfsFin.exe on the server | `C:\ArgosApps\AFS\AfsFin.exe` |
| DSN on Server | ODBC DSN name configured on the server machine | `DEMO_DATABASE` |

1. On the server machine, go to **Control | Argos Server Setup** in Vault.
2. Confirm each path is correct and uses **UNC naming**, not drive letters.
3. The log file directory must exist — create the folder (e.g. `ArgosData\ArgosServerLogFiles`) if it does not exist.

**UNC paths must be used throughout.** Drive letter paths (e.g. `G:\ArgosData`) may not be accessible from the SQL Server when backup or export processes run, causing failures.

**Also worth checking:** the Control menu's **Alter File Storage Paths** function can change paths for a number of standard Argos file links. If this is run and a new path is wrongly specified, it will cause batch processing issues independent of the server path configuration above — worth ruling out if the steps above don't resolve the issue.

## Verifying the server version after an upgrade

1. Log in to Vault on the server machine.
2. Go to **Control | Argos Server** (the server monitor dialog).
3. Check the **Online** column shows **Yes** and the **Status** is not showing Shutdown or Error.
4. If the server is offline after an upgrade, restart the Argos Server application manually on the server: run `C:\ArgosApps\Argos.Server\Argos.Server.exe`.
5. Confirm the server version matches Vault: **Help | About** in Vault will show the version number.

## Post-upgrade checklist

| Task | Notes |
|---|---|
| Read the release notes before upgrading | Release emails often contain mandatory pre- or post-upgrade steps |
| Take a database backup before installing | Restore point in case the upgrade needs to be rolled back |
| Install prerequisites if required | Check the release notes — some upgrades require new C++ redistributables or .NET updates |
| Install on the server machine first | Upgrade the server machine before workstations |

## Common things that go wrong

| Symptom | Usual cause |
|---|---|
| Batch jobs fail immediately after an upgrade | Vault and Argos Server version mismatch |
| Server won't restart from a workstation | Expected — it can only be restarted from the server machine itself |
| Two servers both trying to run | The one with the lower server ID will shut itself down automatically |
| Batch exports/reports missing on a workstation | UNC path not mapped correctly on that workstation |
| Batch issues persist despite correct server paths | Check whether Alter File Storage Paths was run with an incorrect path |
