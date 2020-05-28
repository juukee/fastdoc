const moment = require('moment-timezone');
const path = require('path');
const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  dest: 'dist',
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
      description: '此页面收录简体中文版的开发者文档',
    },
    '/en/': {
      lang: 'en-US',
      description: 'This page contains developer documents in simplified Chinese',
    },
  },
  title: 'Fastdoc',
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/logo.png', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  themeConfig: {
    locales: {
      '/': {
        // 多语言下拉菜单的标题
        selectText: '语言切换',
        // 该语言在下拉菜单中的标签
        label: '简体中文',
        // 编辑链接文字
        editLinkText: '帮助我们完善文档',
        // 最后更新的描述
        lastUpdated: '文档更新于',
        // Service Worker 的配置
        serviceWorker: {
          updatePopup: {
            message: '发现新内容可用.',
            buttonText: '刷新',
          },
        },
        nav: [
          { text: '配置指南', link: '/zh/guide/' },
          { text: '支持我们', link: '/zh/contribute/' },
          { text: '查看源码', link: 'https://github.com/juukee/fastdoc' },
        ],
      },
      '/en/': {
        repoLabel: 'find code',
        selectText: 'Languages',
        label: 'English',
        ariaLabel: 'Languages',
        editLinkText: 'Edit this docs',
        lastUpdated: 'Last Updated',
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh',
          },
        },
        nav: [
          { text: 'Guide', link: '/en/guide/' },
          { text: 'Contribute', link: '/en/contribute/' },
          { text: 'Github', link: 'https://github.com/juukee/fastdoc' },
        ],
      },
    },
    sidebar: 'auto',
    // 假如你的文档仓库和项目本身不在一个仓库：
    // docsRepo: 'juukee/fastdoc',
    // // 假如文档不是放在仓库的根目录下：
    // docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'source',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // algolia: {
    //   appId: 'O6KPG8ROHF',
    //   apiKey: '0c392cf5b536ddb441c288f385588834',
    //   indexName: 'docs'
    // },
    // search: false,
    // searchMaxSuggestions: 10
  },
  // 显示行号
  markdown: {
    lineNumbers: true
  },
  // 启用页面滚动效果
  smoothScroll: true,

  evergreen: true,
  plugins: {
    '@vuepress/last-updated': {
      transformer: (timestamp, lang) => {
        if (lang === 'zh-CN') {
          return moment(timestamp).tz('Asia/Shanghai').locale(lang).format('YYYY-MM-DD HH:mm:ss')
        } else {
          return moment(timestamp).utc().locale(lang).format('YYYY-MM-DD HH:mm:ss')
        }
      },
    },
    'sitemap': {
      hostname: 'https://fastdoc.cn/',
      dateFormatter: time => new moment(time, 'YYYY-MM-DD HH:mm:ss').toISOString(),
    },
    '@vuepress/back-to-top': true,
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: true
    },
    'flexsearch': {
      /*
        Plugin custom options
      */
      maxSuggestions: 10,    // how many search suggestions to show on the menu, the default is 10.
    },
  },
  // postcss: {
  //   plugins: [
  //     require('autoprefixer'),
  //     purgecss({
  //         content: ['./dist/**/*.html']
  //       }),
  //   ]
  // },
  enhanceAppFiles: path.resolve(__dirname, 'script.js')
};
