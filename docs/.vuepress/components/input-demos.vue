<template>
  <div>
    <g-input></g-input>
    <g-input value="初始赋值"></g-input>
    <g-input value="不可用" disabled></g-input>
    <g-input value="可读不可写" readonly></g-input>
    <g-input value="错误提示" error="error"></g-input>
    <pre><code>
      {{content}}
    </code>
    </pre>
    <div>
      <div class="item">
        <g-input></g-input><span>非常光棍的input</span>
      </div>
      <div class="item">
        <g-input value="初始赋值"></g-input><span>初始赋值保持和原生一样的方式</span>
      </div>
      <div class="item">
        <g-input value="不可用" disabled></g-input><span>disabled状态让整个input框都灰掉了</span>
      </div>
      <div class="item">
        <g-input value="可读不可写" readonly></g-input><span>readonly状态不解释</span>
      </div>
      <div class="item">
        <g-input value="错误提示" error="error"></g-input><span>很明确地告诉整个是错误的</span>
      </div>
      <div class="item">
        <header>
          v-model的使用
        </header>
      </div>
      <div class="item">
        <g-input v-model="text"></g-input><span>{{text}}</span>
        <pre><code>{{content1}}</code></pre>
        <p>直接使用v-model即可</p>
      </div>
      <div class="item">
        <header>
          如果需要，可以直接监听chang、blur、focus和input事件
        </header>
      </div>
      <div class="item">
        <g-input @change="text1 = $event" :value="text1"></g-input><span>{{text1}}</span>
        <g-input @blur="text2 = $event" :value="text2"></g-input><span>{{text2}}</span>
        <br>
        <g-input @focus="text3 = $event" :value="text3"></g-input><span>{{text3}}</span>
        <g-input @input="text4 = $event" :value="text4"></g-input><span>{{text4}}</span>
        <pre><code>
        {{content2}}</code></pre>
      </div>

      <div class="item">
        <header>
          输入框内部的清空
        </header>
      </div>
      <div class="item">
        <g-input v-model="text5" clearable @inputclear="text5 = $event.clear"></g-input><span>{{text5}}</span>
        <pre><code>
        {{content3}}</code></pre>
      </div>
      <div class="item">
        如果不监听inputclear当然也能达到ui效果，但是却做不到父级数据的更新。需要做的是写入 <code>clearable</code>
        和监听 <code>inputclear</code>事件，只有 <code>text5</code>需要改成你自己的数据
      </div>
    </div>
  </div>
</template>

<script>
  import Input from '../../../src/input'

  export default {
    name: "input-demos",
    components: {
      'g-input': Input
    },
    data() {
      return {
        content: `<g-input></g-input>
      <g-input value="初始赋值"></g-input>
      <g-input value="不可用" disabled></g-input>
      <g-input value="可读不可写" readonly></g-input>
      <g-input value="错误提示" error="error"></g-input>`,
        content1:`<g-input v-model="text"></g-input>`,
        content2:`<g-input @change="text1 = $event" :value="text1"></g-input>
        <g-input @blur="text2 = $event" :value="text2"></g-input>
        <g-input @focus="text3 = $event" :value="text3"></g-input>
        <g-input @input="text4 = $event" :value="text4"></g-input>`,
        content3:`<g-input v-model="text5" clearable @inputclear="text5 = $event.clear"></g-input><span>{{text5}}</span>`,
        text: '尝试修改input的文字',
        text1: 'change',
        text2: 'blur',
        text3: 'focus',
        text4: 'input',
        text5: 'clear'
      }
    },
    mounted(){
    },
    methods:{

    }
  }
</script>

<style lang="scss" scoped>
  .wrapper{
    margin: 10px;
  }
  .item{
    margin-top: 10px;
  }
  header {
    font-size: 24px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
</style>
