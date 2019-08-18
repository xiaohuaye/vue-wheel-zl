<template>
  <div>
    <div class="items">
      <g-button @click="handleClick">点击</g-button>
    </div>
    <div class="items">
      toast组件和其他的组件不太一样，关键不是在html中传值，而是js中代码的处理
    </div>
    <pre>
      <code>{{content}}</code>
    </pre>

    <div class="items">
      <header>toast自动关闭功能</header>
    </div>
    <div class="items">
      <g-button @click="handleClick1">不自动关闭</g-button>
    </div>
    <div class="items">
      设置 <code>isAutoClose</code>是false值时，这个toast出现手动关闭按钮
    </div>
    <pre>
      <code>{{content1}}</code>
    </pre>

    <div class="items">
      <header>toast设置时间关闭</header>
    </div>
    <div class="items">
      <g-button @click="handleClick2">2秒后关闭</g-button>
    </div>
    <div class="items">
      设置 <code>isAutoClose</code>是数字时，这个toast定时关闭
    </div>
    <pre>
      <code>{{content2}}</code>
    </pre>

    <div class="items">
      <header>toast手动关闭时，关闭按钮text可以更改</header>
    </div>
    <div class="items">
      <g-button @click="handleClick3">text</g-button>
    </div>
    <pre>
      <code>{{content3}}</code>
    </pre>

    <div class="items">
      <header>toast手动关闭时，关闭按钮可以触发额外的回调函数</header>
    </div>
    <div class="items">
      <g-button @click="handleClick4">toast</g-button>
    </div>
    <div class="items">
      <code>closeButton</code>需要传一个对象，对象上有两个参数分别是 <code>text</code> 和 <code>callback</code>,不传closeButton时，默认为{text:'关闭'}，当传入callback的时候，请记得加上text的，不然text为空值
    </div>
    <pre>
      <code>{{content4}}</code>
    </pre>

    <div class="items">
      <header>可在message部分添加html，但是需要非常慎重</header>
    </div>
    <div class="items">
      <g-button @click="handleClick5">可用html</g-button>
      <g-button @click="handleClick6">不可用html</g-button>
    </div>
    <div class="items">
      <code>enableHtml</code>默认是false，为true时可在让toast显示html
    </div>
    <pre>
      <code>{{content5}}</code>
    </pre>

    <div class="items">
      <header>position参数决定弹出位置</header>
    </div>
    <div class="items">
      <g-button @click="handleClick10">默认</g-button>
      <g-button @click="handleClick7">顶部</g-button>
      <g-button @click="handleClick8">中间</g-button>
      <g-button @click="handleClick9">底部</g-button>
    </div>
    <div class="items">
      position参数默认为顶部，可设置为 <code>top、middle、bottom</code>
    </div>
    <pre>
      <code>{{content5}}</code>
    </pre>
  </div>
</template>

<script>
  import Button from '../../../src/button'
  import Vue from 'vue'
  import PluginToast from '../../../src/plugin-toast'
  Vue.use(PluginToast);

  export default {
    name: "toast-demos",
    components:{
      'g-button': Button
    },
    data(){
      return {
        content:`<g-button @click="handleClick">点击</g-button>
     ...
     //js
     import Vue from 'vue'
     import PluginToast from '../../../src/plugin-toast'
     Vue.use(PluginToast);
     ...
      methods:{
      handleClick(){
          this.$toast('toast')
      }
    }`,
        content1:`this.$toast('toast',{isAutoClose: false})`,
        content2:`this.$toast('toast',{isAutoClose: 2})`,
        content3:`this.$toast('toast',{isAutoClose: false,closeButton: {text:'text'}})`,
        content4:`this.$toast('toast',{isAutoClose: false,closeButton: {text:'text', callback:()=>{alert('额外的回调函数')}}})`,
        content5:`this.$toast('<input type="number">',{isAutoClose: false,closeButton: {text:'text'},enableHtml: true})
      this.$toast('<input type="number">',{isAutoClose: false,closeButton: {text:'text'},enableHtml: false})`
      }
    },
    methods:{
      handleClick(){
        this.$toast('toast')
      },
      handleClick1(){
        this.$toast('toast',{isAutoClose: false})
      },
      handleClick2(){
        this.$toast('toast',{isAutoClose: 2})
      },
      handleClick3(){
        this.$toast('toast',{isAutoClose: false,closeButton: {text:'text'}})
      },
      handleClick4(){
        this.$toast('toast',{isAutoClose: false,closeButton: {text:'text', callback:()=>{alert('额外的回调函数')}}})
      },
      handleClick5(){
        this.$toast('<input type="number">',{isAutoClose: false,closeButton: {text:'text'},enableHtml: true})
      },
      handleClick6(){
        this.$toast('<input type="number">',{isAutoClose: false,closeButton: {text:'text'},enableHtml: false})
      },
      handleClick7(){
        this.$toast('toast',{position:'top'})
      },
      handleClick8(){
        this.$toast('toast',{position:'middle'})
      },
      handleClick9(){
        this.$toast('toast',{position:'bottom'})
      },
      handleClick10(){
        this.$toast('toast')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .items {
    margin-top: 10px;
  }

  header {
    font-size: 24px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
</style>
