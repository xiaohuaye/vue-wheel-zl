<template>
  <div>
    <g-layout class="layout">
      <g-sider class="sider" :visibility="true">sider</g-sider>
      <g-layout class="layout1">
        <g-header class="header">header</g-header>
        <g-content class="content">content</g-content>
        <g-footer class="footer">footer</g-footer>
      </g-layout>
    </g-layout>

    <pre>
      <code>
        {{content}}
      </code>
    </pre>

    <p>这是最简单的左右布局加上下布局的方式，visibility控制sider的按钮是否出现，不传默认是false。点击这个按钮可以让sider消失。
      假如一开始不需要左右布局，那么直接不使用 <code>g-sider</code> 但是请注意，g-layout标签不能缺少</p>

    <div class="items">
      <header>内嵌使用</header>
    </div>
    <div class="items">
      <g-layout class="layout">
        <g-sider class="sider">sider</g-sider>
        <g-layout class="layout1">
          <g-header class="header">header</g-header>
          <g-content class="content">
            <g-layout class="layout2">
              <g-header class="header">header1</g-header>
              <g-content class="content">content1</g-content>
              <g-footer class="footer">footer1</g-footer>
            </g-layout>
          </g-content>
          <g-footer class="footer">footer</g-footer>
        </g-layout>
      </g-layout>
    </div>
    <div class="items">
      这就是内嵌的写法
    </div>
    <pre>
      <code>{{content1}}</code>
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
        content: `<g-layout class="layout">
      <g-sider class="sider" :visibility="true">4444444444444</g-sider>
      <g-layout class="layout1">
      <g-header class="header">111</g-header>
      <g-content class="content">222</g-content>
      <g-footer class="footer">333</g-footer>
      </g-layout>`,
      content1:`<g-layout class="layout">
        <g-sider class="sider">sider</g-sider>
        <g-layout class="layout1">
          <g-header class="header">header</g-header>
          <g-content class="content">
            <g-layout class="layout2">
              <g-header class="header">header1</g-header>
              <g-content class="content">content1</g-content>
              <g-footer class="footer">footer1</g-footer>
            </g-layout>
          </g-content>
          <g-footer class="footer">footer</g-footer>
        </g-layout>
      </g-layout>`
      }
    }
  }
</script>

<style lang="scss" scoped>
  .layout{
    min-height: 100px;
    background: #20c1c8;
    .sider{
      width: 200px;
    }
    .layout1{
      background: #7ec699;
      .header{
        background: #6a8bad;
      }
      .content{
        background: #0095dd;
      }
      .footer{
        background: #999999;
      }
      .layout2{
        background: #5d82a6;
        .header{
          background: #7ec699;
        }
        .content{
          background: #0095dd;
        }
        .footer{
          background: #7ec699;
        }
      }
    }
  }
  .items {
    margin-top: 10px;
  }

  header {
    font-size: 24px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
</style>
