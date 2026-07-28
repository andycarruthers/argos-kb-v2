// @ts-check
const { themes: prismThemes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Argos Knowledge Base',
  tagline: 'How to use Vault and Bailment — not just what the buttons do',
  favicon: 'img/logo.svg',

  url: 'https://argos-kb-v2.netlify.app',
  baseUrl: '/',

  organizationName: 'andycarruthers',
  projectName: 'argos-kb-v2',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // serve docs at the site root, this IS the whole site
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/andycarruthers/argos-kb-v2/edit/main/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} */
      ({
        hashed: true,
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        docsRouteBasePath: '/',
        highlightSearchTermsOnTargetPage: true,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Argos Knowledge Base',
        logo: {
          alt: 'Argos Solutions',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'kbSidebar',
            position: 'left',
            label: 'Browse articles',
          },
          {
            href: 'https://github.com/andycarruthers/argos-kb-v2',
            label: 'Prototype source',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Argos Solutions',
            items: [
              { label: 'argos.co.nz', href: 'https://argos.co.nz' },
              { label: 'Support', href: 'mailto:support@argos.co.nz' },
            ],
          },
          {
            title: 'This prototype',
            items: [
              { label: 'Review workflow & status', to: '/' },
              {
                label: 'Source on GitHub',
                href: 'https://github.com/andycarruthers/argos-kb-v2',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Argos Financial Systems Limited. Prototype knowledge base — not the production KB.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: false,
        },
      },
    }),
};

module.exports = config;
