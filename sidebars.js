/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  kbSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Access & Security',
      collapsed: false,
      items: [
        'new-user-access-setup',
        'cannot-connect-avd',
        'avd-first-login',
        'avd-file-transfer',
        'help-centre-login-troubleshooting',
        'vault-fails-to-load-on-startup',
      ],
    },
    {
      type: 'category',
      label: 'Reporting & General Ledger',
      collapsed: false,
      items: ['gl-reporting-export', 'balance-variance-diagnosis'],
    },
    {
      type: 'category',
      label: 'Cashbook & Banking',
      collapsed: false,
      items: ['bank-statement-import-export'],
    },
    {
      type: 'category',
      label: 'Loans, Leases & Bailment',
      collapsed: false,
      items: [
        'loan-lease-operations',
        'direct-debit-curtailment-setup',
        'early-termination-process',
        'variable-loan-instalment-ledger-posting',
        'interest-rate-loading-correction',
        'interest-only-variable-loan-setup',
        'settlement-statement-generation',
        'floorplan-rounding-issues',
        'transaction-reversal',
        'lease-data-extract-salesforce',
      ],
    },
    {
      type: 'category',
      label: 'System Config & Connectivity',
      collapsed: false,
      items: [
        'batch-processing-server-troubleshooting',
        'update-licence-ip-address',
        'update-server-connection-ip',
        'ppsr-reconciliation',
      ],
    },
    {
      type: 'category',
      label: 'Month-End',
      collapsed: false,
      items: ['month-end-process'],
    },
  ],
};

module.exports = sidebars;
