<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div>
    <div class="items">
      <g-popover position="left">
        <g-button>点击左显示</g-button>
      </g-popover>
      <g-popover>
        <g-button>默认展示</g-button>
      </g-popover>
      <g-popover position="top">
        <g-button>点击上展示</g-button>
      </g-popover>
    </div>
    <div class="items">
      <g-popover position="bottom">
        <g-button>点击底展示</g-button>
      </g-popover>
      <g-popover trigger="hover">
        <g-button>hover展示</g-button>
      </g-popover>
      <g-popover position="right">
        <g-button>点击右展示</g-button>
      </g-popover>
    </div>
    <pre>
      <code>
        {{content}}
      </code>
    </pre>

    <div class="items">
      <header>内容pop</header>
    </div>
    <div class="items">
      <g-popover position="bottom">
        <g-button>点击底展示</g-button>
        <template v-slot:popover="">
          <div style="color: red;">popover</div>
        </template>
      </g-popover>
    </div>
    <pre>
      <code>{{content3}}</code>
    </pre>
    <div class="items">
      在pop组件内除了template标签内容,其余都是直接展示到页面之上，template内部的内容则是展示到pop弹出框上
    </div>

    <div class="items">
      <header>position参数决定pop的位置</header>
    </div>
    <div class="items">
      <g-popover position="bottom">
        <g-button>点击底展示</g-button>
      </g-popover>
    </div>
    <pre>
      <code>{{content1}}</code>
    </pre>
    <div class="items">
      position的值默认是top，可传值 <code>top、bottom、left、right</code>
    </div>

    <div class="items">
      <header>trigger参数决定触发事件的方式</header>
    </div>
    <div class="items">
      <g-popover trigger="hover">
        <g-button>hover展示</g-button>
      </g-popover>
    </div>
    <pre>
      <code>{{content2}}</code>
    </pre>
    <div class="items">
      trigger的值默认是click，可传值 <code>hover</code>
    </div>

    <div class="items">
      <header>pop内部按钮关闭</header>
    </div>
    <div class="items">
      <g-popover>
        <g-button>点击</g-button>
        <template v-slot:popover="{ closePop }">
          <div style="color: red;">popover <g-button @click="closePop">关闭</g-button></div>
        </template>
      </g-popover>
    </div>
    <pre>
      <code>{{content4}}</code>
    </pre>
    <div class="items">
      关键在closePop事件已经内置，需要的就是触发它
    </div>
  </div>
</template>

<script>
  import Popover from '../../../src/popover'
  import Button from '../../../src/button'

  export default {
    name: "popover-demos",
    components:{
      'g-popover': Popover,
      'g-button': Button
    },
    data(){
      return {
        content: `<g-popover position="left">
        <g-button>点击左显示</g-button>
      </g-popover>
      <g-popover>
        <g-button>默认展示</g-button>
      </g-popover>
      <g-popover position="top">
        <g-button>点击上展示</g-button>
      </g-popover>
    <g-popover position="bottom">
        <g-button>点击底展示</g-button>
      </g-popover>
      <g-popover trigger="hover">
        <g-button>hover展示</g-button>
      </g-popover>
      <g-popover position="right">
        <g-button>点击右展示</g-button>
      </g-popover>`,
        content1:`<g-popover position="bottom">
        <g-button>点击底展示</g-button>
      </g-popover>`,
        content2:`<g-popover trigger="hover">
        <g-button>hover展示</g-button>
      </g-popover>`,
        content3:`<g-popover position="bottom">
        <g-button>点击底展示</g-button>
        <template v-slot:popover="">
          <div style="color: red;">popover</div>
        </template>
      </g-popover>`,
        content4: `<g-popover>
        <g-button>点击</g-button>
        <template v-slot:popover="{ closePop }">
          <div style="color: red;">popover <g-button @click="closePop">关闭</g-button></div>
        </template>
      </g-popover>`
      }
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper{
    margin-left: 50px;
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
