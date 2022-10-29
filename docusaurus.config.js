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
        },
        blog: false,
        theme: {
          customCss: 'docs/css/custom.css',
        },
      },
    ],
  ],
  tagline: 'jest-a11y',
  themeConfig: {
    announcementBar: {
      id: 'support_us',
      content: '✋ This project does not guarantee what you build is accessible.',
      backgroundColor: '#fafbfc',
      textColor: '#091E42',
      isCloseable: false,
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
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
          docId: 'welcome',
          label: 'Welcome',
        },
        {
          type: 'doc',
          docId: 'matchers/index',
          label: 'Matchers',
        },
        {
          href: 'https://github.com/veiko/jest-a11y',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
      logo: {
        src: '/img/logo.svg',
        target: '_self',
      },
      title: 'jest-a11y',
    },
    prism: {
      theme: require('prism-react-renderer/themes/oceanicNext'),
      magicComments: [
        {
          className: 'code-block-comment-pass',
          line: 'comment-pass',
        },
        {
          className: 'code-block-comment-fail',
          line: 'comment-fail',
        },
        // Remember to extend the default highlight class name as well!
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: { start: 'highlight-start', end: 'highlight-end' },
        },
        {
          className: 'code-block-error-line',
          line: 'error-next-line',
        },
        {
          className: 'code-block-success-line',
          line: 'success-next-line',
        },
        {
          className: 'code-block-test-caution',
          line: 'test-caution',
        },
        {
          className: 'code-block-test-pass',
          line: 'test-pass',
        },
      ],
    },
  },
  title: 'jest-a11y',
  url: 'https://veiko.github.io',
}
