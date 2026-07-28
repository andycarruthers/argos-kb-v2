---
title: "Moving Files Into and Out of Your Argos Vault AVD Session"
description: "How to transfer files between your local computer and your Argos Vault Azure Virtual Desktop session."
module: AVD / Access
status: sme_review_required
ticket_deflection_estimate: "included in AVD first-login deflection estimate"
supersedes: []
related_articles:
  - avd-first-login
  - cannot-connect-avd
needs_sme_confirmation:
  - "This content was originally part of the AVD first-login guide. Greg Beale flagged (Jun 4) that it didn't belong there ('Doesn't rezonate having a section of file transfers within this document when it is a login guide') without disputing the technical accuracy of the steps themselves — moved here as a standalone article in response. Nobody with AVD domain expertise has separately confirmed these steps are still correct."
source_tickets_reviewed: []
---

# Moving files into and out of your Argos Vault AVD session

:::caution Under review
Moved out of the AVD first-login guide after reviewer feedback that it didn't belong there — content itself hasn't had a separate technical confirmation.
:::

## Using the web browser client

**Downloading a file from your session:**

1. Open **File Explorer** inside your session.
2. Go to **This PC → Redirected Drives → Remote Desktop Virtual Drive → RDWebClient**.
3. Copy the file into that folder — your browser will prompt to confirm, then save it to your local Downloads folder.

**Uploading a file to your session:**

1. In the browser client's toolbar, click the **Upload** button (up-arrow icon).
2. Select the file from your local computer. Maximum file size is **255 MB**.

**Use Copy, not Cut.** If your connection drops partway through a Cut-and-paste transfer, the file can be lost entirely. Copy leaves the original in place until you've confirmed the transfer completed.

## Using the Windows App

Standard copy/paste works between your local machine and the session. Local drives may also be directly accessible from within the session if your administrator has enabled drive redirection.

## Common things that go wrong

| Symptom | Usual cause |
|---|---|
| File seems to disappear during transfer | Connection dropped mid-Cut — use Copy instead, and confirm the transfer completed before deleting the original |
| Upload fails with no clear reason | File exceeds the 255 MB limit for the web client — try the Windows App instead, or split the file |
| Can't find the downloaded file | Check This PC → Redirected Drives → Remote Desktop Virtual Drive → RDWebClient, then your local Downloads folder |
