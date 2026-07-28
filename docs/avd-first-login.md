---
title: "Azure Virtual Desktop — First Login Setup"
description: "Setting up the Windows App or browser access to Argos Vault via AVD for the first time, including MFA setup."
module: AVD / Access
status: sme_review_required
ticket_deflection_estimate: "2-3/month"
supersedes:
  - Azure Virtual Desktop – First Login and Troubleshooting Guide
  - Accessing Argos via Azure Virtual Desktop
related_articles:
  - cannot-connect-avd
  - avd-file-transfer
needs_sme_confirmation:
  - "Greg Beale reviewed this content (Jun 4) and said: 'I don't have the domain knowledge to comment on accuracy.' Nobody with AVD/Entra ID domain expertise has confirmed the Windows App and MFA setup steps below — treat them as the best available draft, not a verified procedure."
  - "Greg also flagged that file transfer steps didn't belong bundled into a first-login guide ('Doesn't resonate having a section of file transfers within this document when it is a login guide.') — acted on directly by moving that content to its own article, see below."
source_tickets_reviewed: []
---

# Azure Virtual Desktop — first login setup

:::caution Under review
Nobody with AVD/Entra ID expertise has confirmed the accuracy of the steps below yet.
:::

Use this the first time you (or a new team member) connect to Argos Vault through Azure Virtual Desktop. If you've done this before and are now having trouble connecting, see [Cannot Connect to Argos Vault via AVD](cannot-connect-avd) instead.

## Option 1 — Windows App (recommended)

Microsoft has discontinued the old Remote Desktop app — use the **Windows App** instead.

1. Download the Windows App for your OS (Windows or Mac).
2. Open it and click **Subscribe**.
3. Sign in with your **Entra ID** username and password (this is a separate identity from your regular work email login — see [Cannot Connect to Argos Vault via AVD](cannot-connect-avd) for more on this distinction).
4. On first login, you'll be prompted to change your password and set up multi-factor authentication (MFA), typically using an authenticator app such as Microsoft Authenticator.
5. Select the Argos Vault remote session from the list. It opens with full Vault access.

## Option 2 — Web browser

1. Open Chrome, Edge, or Firefox.
2. Go to **https://windows.cloud.microsoft/**
3. Sign in with your Entra ID credentials.
4. On first login: change your password and register MFA as above.
5. Click the Argos Vault session to launch it in a new tab. If prompted, set **Enable high DPI** to On for a sharper display.

## Troubleshooting your first login

| Problem | Cause | Fix |
|---|---|---|
| No Vault device visible after signing in | Redirected to the general Microsoft MyAccount page instead of AVD | Go directly to `https://windows.cloud.microsoft/` |
| "Username or password incorrect" | Using old local VM credentials instead of Entra ID | Use your Entra ID login (organisation email + password) |
| "You don't have access to this resource" | Your Entra ID account hasn't been assigned to the AVD workspace yet | Contact Argos Support |
| Session disconnects frequently | Network instability | Switch to a wired connection where possible |
| MFA prompt never arrives | Authenticator app not set up correctly | Use a backup authentication method, or contact Support to reset MFA |
| Can't complete MFA setup — no smartphone available | No device to install an authenticator app on | Contact Argos Support **before** your first login attempt to arrange an alternative MFA method |

## Common things that go wrong

| Symptom | Usual cause |
|---|---|
| Nothing happens after signing in | Redirected to the wrong Microsoft portal — use windows.cloud.microsoft directly |
| Stuck on a password/MFA prompt with no way forward | Contact Argos Support rather than repeatedly retrying |
| Works on browser but not Windows App, or vice versa | Try the other method — see [Cannot Connect to Argos Vault via AVD](cannot-connect-avd) for deeper troubleshooting |
