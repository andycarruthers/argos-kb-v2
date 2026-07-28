---
title: "Cannot Connect to Argos Vault via AVD — Self-Service Checklist"
description: "Work through these checks before contacting support if you can't connect to Argos Vault through Azure Virtual Desktop."
module: AVD / Access
status: sme_review_required
ticket_deflection_estimate: "3-4/month"
supersedes:
  - Accessing Argos via Azure Virtual Desktop
related_articles:
  - new-user-access-setup
needs_sme_confirmation:
  - "The exact format of a user's AVD/Entra ID sign-in identity — confirmed by Melissa McLeod as a unique address distinct from the user's normal work email (pattern given as first.lastname@[organisation].[domain]), not their regular work email as originally assumed. Confirm the exact domain/format before publishing, since the source comment's domain spelling was unusual and worth double-checking."
  - "Confirm the escalation path should say 'contact Argos Support' specifically, not 'your internal administrator' — Melissa and Greg agreed on this in review, but double-check wording against current support process."
source_tickets_reviewed: []
---

# Cannot Connect to Argos Vault via AVD — Self-Service Checklist

:::caution Under review
Parts of this article (marked below) are still being confirmed with the Argos team before we're fully confident in them.
:::

You're unable to connect to Argos Vault through Azure Virtual Desktop (AVD). This may show up as a login error, a blank screen, a missing device, frequent disconnections, or the session failing to launch. Work through the steps below in order before contacting support.

## There are two separate logins involved — don't confuse them

This is the single most common source of confusion in AVD connection issues:

1. **Getting into the Virtual Machine / remote session** — this uses your **Entra ID credentials**, which are a unique sign-in identity created specifically for this purpose, separate from your everyday work email login.
2. **Logging into Argos Vault itself, once your session is open** — a separate, second set of credentials, used only after you're already inside the remote session.

If you're stuck at the very first screen (can't get the remote session to open at all), the problem is with your Entra ID credentials, not your Argos Vault login — don't waste time trying Vault passwords at this stage.

## Step 1 — Check your internet connection

1. Open a web browser and confirm you can load an external website (e.g. google.com).
2. If your connection is slow or dropping, restart your modem/router: power it off, wait 30 seconds, then power it back on.
3. Where possible, switch to a wired (ethernet) connection rather than Wi-Fi — this resolves most intermittent disconnection issues.
4. Once reconnected, attempt to log in again before proceeding.

## Step 2 — Confirm you're using the right login method

Argos Vault is accessed via AVD using your **Entra ID credentials** — not an old local VM username and password if you've used Argos for a while.

- If you're unsure of your Entra ID credentials, **contact Argos Support** — there is no "Forgot my password" self-service option for this login. Your organisation's internal IT cannot reset it either; Argos Support administers it.

## Step 3 — Try the browser method first

If the Windows App isn't working, the browser method is a quick way to confirm whether the issue is with your app or your account/connection.

1. Open Chrome, Edge, or Firefox.
2. Go to **https://windows.cloud.microsoft/**
3. Sign in with your Entra ID credentials.
4. Select the Argos Vault remote desktop session.

If this works, the issue is with your Windows App installation — go to Step 5. If this also fails, continue to Step 4.

## Step 4 — Identify your error message

| Error message | What to do |
|---|---|
| "Username or password incorrect" | You're using the wrong credentials. Use your Entra ID login, not an old VM login. Contact Argos Support if you need it reset — there's no self-service reset for this login. |
| "You don't have access to this resource" | Your account hasn't been assigned to the AVD workspace. Contact Argos Support — this requires an admin to fix. |
| "Session disconnects frequently" | Internet connection issue. Return to Step 1 and switch to a wired connection. |
| Redirected to Microsoft MyAccount with no devices showing | Navigate directly to https://windows.cloud.microsoft/ — do not use the MyAccount portal. |
| No Vault device visible after login | Navigate directly to https://windows.cloud.microsoft/ |

## Step 5 — Fix a blank screen in the Windows App

If the Windows App opens but shows a blank screen:

1. Download the **WebView2 Runtime (x64)** from Microsoft's website.
2. Run the installer as Administrator.
3. Restart your computer.
4. Open the Windows App again.

## Step 6 — Reinstall or switch the Windows App

1. Uninstall the Windows App completely.
2. Download the latest version from Microsoft.
3. Open the app, click Subscribe, and sign in with your Entra ID credentials.
4. Select the Argos Vault session.

Alternatively, use the browser method (Step 3) as your primary access method while the app issue is investigated.

## Result

You can successfully access your Virtual Machine/Remote Session. Once that access is successful, remember you'll then need your **separate** Argos Vault credentials to get into Vault itself.

## Before contacting support

If none of the above steps resolve the issue, collect the following — it will speed up diagnosis:

- The exact error message displayed (screenshot if possible)
- Which method you tried (Windows App / browser)
- Whether the issue affects one user or multiple users at your organisation
- Whether a modem restart was attempted

**Contact Argos Support directly** with the above information — this is an Argos-administered environment, so Argos Support (not your internal IT administrator) owns this escalation path.

## Common things that go wrong

| Symptom | Usual cause |
|---|---|
| Stuck at the very first login screen | Using old/wrong credentials — this needs your Entra ID login, a separate thing from your Vault login |
| "Forgot my password" isn't available | Expected — there's no self-service reset for AVD/Entra ID credentials. Contact Argos Support directly. |
| Redirected to a Microsoft account page with nothing to click | Wrong URL — go directly to windows.cloud.microsoft, not the general Microsoft MyAccount portal |
| App opens but screen is blank | Missing or outdated WebView2 Runtime |
