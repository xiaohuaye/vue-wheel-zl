module.exports = {
  base: '/vue-wheel-zl/',
  title: '小花UI',
  description: '真香',
  plugins: [
    '@goy/svg-icons'
  ],
  themeConfig: {
    nav: [
      {text: '主页', link: '/'},
      {text: '文档', link: '/guide/'},
      {text: '交流', link: 'https://google.com'},
    ],
    sidebar: [
      {
        title: '入门',
        collapsable: false,
        children: ['/install/', '/get-start/',]
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          '/components/button',
          '/components/input',
          '/components/col&&row',
          '/components/layout',
          '/components/collapse',
          '/components/popover',
          '/components/tab',
          '/components/toast',
          '/components/cascade',
        ],
      }
    ]
  },

}
