module.exports = {
  baseUrl: '/jest-a11y/',
  favicon: '/img/logo.svg',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: 'docs/sidebars.js',
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: 'docs/css/custom.css',
        },
      },
    ],
  ],
  tagline: 'Dinosaurs are cool',
  themeConfig: {
    announcementBar: {
      id: 'support_us',
      content: '✋ This project does not guarantee what you build is accessible.',
      backgroundColor: '#fafbfc',
      textColor: '#091E42',
      isCloseable: false,
    },
    footer: {
      copyright: `Copyright &copy; ${new Date().getFullYear()} Veronica Carrillo Marquez`,
      logo: {
        alt: 'jest-a11y logo',
        href: 'https://github.com/veiko/jest-a11y',
        src: '/img/logo.svg',
        width: 100,
      },
    },
    navbar: {
      items: [
        {
          type: 'doc',
          docId: 'getting-started',
          label: 'Getting Started',
        },
        {
          type: 'doc',
          docId: 'matchers/index',
          label: 'Matchers',
        },
      ],
      logo: {
        src: '/img/logo.svg',
        target: '_self',
      },
      title: 'jest-a11y',
    },
  },
  title: 'jest-a11y',
  url: 'https://veiko.github.io',
}
