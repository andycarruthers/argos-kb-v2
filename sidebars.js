/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  kbSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Access & Security',
      collapsed: false,
      items: ['new-user-access-setup', 'cannot-connect-avd'],
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
      ],
    },
    {
      type: 'category',
      label: 'Month-End & System Config',
      collapsed: false,
      items: ['month-end-process', 'batch-processing-server-troubleshooting'],
    },
  ],
};

module.exports = sidebars;
