<template>
  <div>
    <g-collapse class="collapse" :defaultopen.sync=defaultopen single>
      <g-collapse-item title="111">
        <div>123</div>
      </g-collapse-item>
      <g-collapse-item title="222">
        <div>456</div>
      </g-collapse-item>
      <g-collapse-item title="333">
        <div>789</div>
      </g-collapse-item>
    </g-collapse>
    <pre>
      <code>{{content}}</code>
    </pre>
  </div>
</template>

<script>
  import Collapse from '../../../src/collapse'
  import CollapseItem from '../../../src/collapse-item'

  export default {
    name: "collapse-demos",
    components: {
      'g-collapse': Collapse,
      'g-collapse-item': CollapseItem
    },
    data() {
      return {
        content: `<g-collapse class="collapse" :defaultopen.sync=defaultopen single>
    <g-collapse-item title="111">
      <div>123</div>
    </g-collapse-item>
    <g-collapse-item title="222">
      <div>456</div>
    </g-collapse-item>
    <g-collapse-item title="333">
      <div>789</div>
    </g-collapse-item>
  </g-collapse>`,
        defaultopen: ['111','222'],
      }
    },
    mounted(){
      this.$on('update:defaultopen',(option)=>{
        this.defaultopen = option.openArray
      })
    },
    methods: {}
  }
</script>

<style scoped>

</style>
