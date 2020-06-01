const moment = require('moment-timezone');
const path = require('path');

module.exports = {
  dest: 'dist',
  locales: {
    '/': {
      lang: 'zh-CN', 
      description: '此页面收录简体中文版的开发者文档',
    },
    '/en/': {
      lang: 'en-US',
      description: 'This page contains developer documents in English',
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
      '/': require('./config/default.js'),
      '/en/': require('./config/en.js'),
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
      maxSuggestions: 10,    // how many search suggestions to show on the menu, the default is 10.
      searchHotkeys: ['s'],    // Hot keys to activate the search input, the default is "s" but you can add more.
      searchResultLength: 60,    // the length of the suggestion result text by characters, the default is 60 characters.
      encode: function (str) {
        return str.replace(/[\x00-\x7F]/g, "").split("");
      },
      tokenize: function (str) {
        return str.replace(/[\x00-\x7F]/g, "").split("");
      },
      // resolution: 9,

    },
    '@vuepress/nprogress': true

  },
  enhanceAppFiles: path.resolve(__dirname, 'script.js')
};
