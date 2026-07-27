---
title: "Common loan and lease operations: refinancing, extending, and advancing funds"
module: Variable Loan / Lease
status: draft
ticket_deflection_estimate: "~8/month"
supersedes:
  - Refinancing a Variable Loan
  - Extending a Variable Loan
  - Variable Loan Planned Rate Changes
  - Changing Interest Rates on a Variable Loan
  - Purchasing Lease Assets
needs_sme_confirmation:
  - "This article generalises a pattern (capitalise to the future ledger, then clear the current ledger via Transfer Non-Cash) across refinancing and additional-funds-advance scenarios. Confirm this generalisation holds for all account types, not just Variable Loan, before publishing — it may not apply identically to Fixed Loan or Lease."
  - "No specific ticket data was reviewed for this topic in this pass — the support-workshop pre-reading only had this as an aggregate category ('Loan/Lease Operations How-To, ~8/month') without individual ticket detail. Worth grounding this article in real examples before publishing rather than the old KB text alone."
---

# Common loan and lease operations: refinancing, extending, and advancing funds

This covers the operational tasks that come up repeatedly on active Variable Loan accounts — capitalising arrears into a new loan, advancing additional funds, and changing terms — using the same underlying mechanism each time, which is worth understanding once rather than memorising as separate procedures.

## The core mechanism: Finance dialog + Transfer Non-Cash

Refinancing, extending a loan, and advancing extra funds are all variations of the same two-step pattern:

1. **Increase the Future Balance** by the amount involved (the new advance, or the arrears being capitalised), using the account's **Finance** dialog.
2. **Clear the Current Ledger** by the same amount, using **Transfer Non-Cash** against the associated Dealer Account (if there is one) — this keeps both sides of the transaction on the same contra GL code, so nothing goes out of balance.

**Variable Loan Account Browse | Edit | Finance [O]**

<div class="vault-mockup">
  <span class="step-btn">Edit</span> → <span class="step-btn">Finance [O]</span> → increase Loan Advance value → <span class="step-btn">Save</span> the finance dialog and the Account → <span class="step-btn">Save</span> again with the Value Date
</div>

If you're not using the Finance dialog for advancing funds specifically, the same result can be reached with **Transfer Non-Cash** or **Add Manual Transactions** directly — useful if the Finance dialog's assumptions don't fit your scenario.

### Capitalising arrears (refinance)

1. Note the current ledger (arrears) balance on the account before you start — you'll need this figure to confirm the transfer amount.
2. Open **Finance [O]**, increase the Loan Advance value by the amount of arrears, save.
3. Enter the Value Date the arrears should be capitalised from, save.
4. This creates a liability on the associated Dealer Account and correctly shows the arrears now as part of the Future Balance.
5. **Clear the current ledger:** edit the Dealer Account, use **Transfer Non-Cash [G]** to debit the Dealer Account and credit the Variable Loan Account's Current Ledger for the capitalised amount. Once posted, this clears both balances.

### Advancing additional funds

Same pattern — **Finance [O]**, increase the Loan Advance amount by the value of funds being advanced, save, then the transfer step to clear the ledgers correctly.

## What to check before you start any of these

- **Note the balances first.** Every step above depends on knowing the correct starting figure — if you skip this and work it out after the fact, small transaction-order differences can produce a balance that doesn't tie out cleanly.
- **Confirm which ledger (current vs. future) actually needs to move.** The Finance dialog affects the Future Balance; the transfer step affects the Current Ledger. Getting these backwards is the most common way this goes wrong.
- **Check whether a Dealer Account is actually associated with this loan.** If there isn't one, the Transfer Non-Cash step needs a different contra account — don't assume every account has a dealer relationship to clear against.

## Common things that go wrong

| Symptom | Usual cause |
|---|---|
| Future balance updated but current ledger (arrears) still shows the old amount | The Transfer Non-Cash step was missed or posted to the wrong account |
| Transfer won't save / balance doesn't clear | Transfer amount doesn't match what was capitalised in the Finance dialog exactly |
| Unsure which account to transfer against | Confirm the Dealer Account link on the loan account first |
