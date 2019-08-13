module.exports = {
  base: '/vue-wheel-zl/',
  title: '小花UI',
  description: '真香',
  plugins: [
    '@goy/svg-icons'
  ],
  themeConfig: {
    sidebar: [
      {
        title: '入门',
        children: ['/install/', '/get-start/',]
      },
      {
        title: '组件',
        children: ['/components/button'],
      }
    ]
  },

}
