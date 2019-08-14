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
      <g-input value="错误提示" error="error"></g-input>`
      }
    }
  }
</script>

<style scoped>

</style>
