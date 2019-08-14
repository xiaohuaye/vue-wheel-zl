<template>
  <div>
    <g-layout>
      <g-header>111</g-header>
      <g-content>222</g-content>
      <g-footer>333</g-footer>
      <g-sider>444</g-sider>
    </g-layout>

    <pre>
      <code>
        {{content}}
      </code>
    </pre>
  </div>
</template>

<script>
  import Layout from '../../../src/layout'
  import Content from '../../../src/content'
  import Footer from '../../../src/footer'
  import Header from '../../../src/header'
  import Sider from '../../../src/sider'

  export default {
    name: "layout-demos",
    components:{
      'g-layout':Layout,
      'g-content': Content,
      'g-footer': Footer,
      'g-header': Header,
      'g-sider': Sider
    },
    data(){
      return {
        content: `<g-layout>
      <g-header></g-header>
      <g-content></g-content>
      <g-footer></g-footer>
      <g-sider></g-sider>
    </g-layout>`
      }
    }
  }
</script>

<style scoped>

</style>
