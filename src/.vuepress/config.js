const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'CS 20',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/mstile-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  plugins: [
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true
      }
    ]
  ],
  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    logo: '/apple-touch-icon.png',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Courses',
        ariaLabel: 'View all courses',
        items: [
          { text: 'Data Structure', link: '/CORE/DS/'}
        ]
      },
      
    ],
    sidebar: {
      '/CORE/DS/': [
        {
          title: 'Data Structure',
          collapsable: false,
          children: [
            '',
            'types',
            'Operations',
            'DataStorage',
            'Array1D',
            'Array2D',
            'String',
            'linkedList'
          ]
        }
      ],
      '/CORE/POA/': [
        {
          title : 'Principle of Accounting',
          collapsable: false,
          children : [
            '',
            'chapter6',
            'chapter10'
          ]
        }

      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
