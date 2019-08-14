<template>
  <div>
    <g-row>
      <g-col></g-col>
    </g-row>
    <pre>
    <code>{{content}}</code>
  </pre>
  </div>
</template>

<script>
  import Col from '../../../src/col'
  import Row from '../../../src/row'
  export default {
    name: "grid-demos",
    components:{
      'g-col': Col,
      'g-row': Row
    },
    data(){
      return {
        content: `<g-row>
      <g-col></g-col>
      </g-row>`
      }
    }
  }
</script>

<style scoped>

</style>
