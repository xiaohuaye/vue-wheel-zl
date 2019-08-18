<template>
  <div>
    <g-button>默认按钮</g-button>
    <g-button icon="set">带icon的按钮</g-button>
    <g-button disabled>默认按钮</g-button>
    <g-button icon="loading">loading状态中的按钮</g-button>

    <pre>
      <code>{{content}}</code>
    </pre>
    <div class="items">
      <g-button>默认按钮</g-button>
      默认按钮(非常光棍的按钮)
    </div>
    <div class="items">
      <g-button icon="set">带icon的按钮</g-button>
      icon按钮,icon现在只内置了set，以后再添加其他的icon咯
    </div>
    <div class="items">
      <g-button disabled>不可使用按钮</g-button>
      按钮不可用状态
    </div>
    <div class="items">
      <g-button icon="loading">loading状态中的按钮</g-button>
      在请求状态中的button，注意这是一种过渡状态的按钮，不要直接使用
    </div>

    <div class="items">
      <header>过渡状态按钮的使用</header>
    </div>
    <div class="items">
      <g-button icon="set" @click="loading=!loading" :loading="loading">试下点击下</g-button>
    </div>
    <pre>
      <code>{{content1}}</code>
    </pre>
    <div class="items">
      因为button内置了<code>$emit('click')</code>所以你需要做的是在<code>g-button</code>自定义标签上添加 <code>@click=</code>+你的事件，在事件内部改变loading的值
    </div>

    <div class="items">
      <header>icon可改变位置</header>
    </div>
    <div class="items">
      <g-button icon="set" icon-position="left">icon在左边</g-button>
      <g-button icon="set" icon-position="right">icon在右边</g-button>
    </div>
    <div class="items">
      <code>icon-position</code>可以选择在左边和右边，默认在左边。但是如果选择一个‘left’or'right'之外的值，控制台会提示值是错误的，同时默认为左边
    </div>
    <pre>
      <code>{{content2}}</code>
    </pre>

    <div class="items">
      <header>按钮组</header>
    </div>
    <div class="items">
      <g-button-group>
        <g-button>按钮1</g-button>
        <g-button>按钮2</g-button>
        <g-button>按钮3</g-button>
      </g-button-group>
    </div>
    <div class="items">
      按钮组有时候是我们需要的,但是颜色太难看了，回头调整一波
    </div>
    <pre>
      <code>{{content3}}</code>
    </pre>
  </div>
</template>

<script>
  import Button from '../../../src/button'
  import ButtonGroup from '../../../src/button-group'
  export default {
    components: {
      'g-button': Button,
      'g-button-group': ButtonGroup
    },
    data() {
      return {
        content: `<g-button>默认按钮</g-button>
      <g-button icon="set">默认按钮</g-button>
      <g-button icon="loading">默认按钮</g-button>
      <g-button disabled>默认按钮</g-button>`,
        content1: `<g-button icon="set" @click="loading=!loading" :loading="loading">试下点击下</g-button>`,
        content2:`<g-button icon="set" icon-position="left">icon在左边</g-button>
      <g-button icon="set" icon-position="right">icon在右边</g-button>
      //会有控制台警告提示
      <g-button icon="set" icon-position="top">icon在左边</g-button>`,
        content3:`<g-button-group>
        <g-button>按钮1</g-button>
        <g-button>按钮2</g-button>
        <g-button>按钮3</g-button>
      </g-button-group>`,
        loading: false
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
