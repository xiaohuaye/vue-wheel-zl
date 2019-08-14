<template>
  <div>
    <g-popover>
      <g-button>点击</g-button>
    </g-popover>
    <g-popover position="top">
      <g-button>点击</g-button>
    </g-popover>
    <g-popover position="left">
      <g-button>点击</g-button>
    </g-popover>
    <g-popover position="right">
      <g-button>点击</g-button>
    </g-popover>
    <g-popover position="bottom">
      <g-button>点击</g-button>
    </g-popover>
    <g-popover trigger="hover">
      <g-button>点击</g-button>
    </g-popover>
    <pre>
      <code>
        {{content}}
      </code>
    </pre>
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
        content: `<g-popover>
      <g-button>点击</g-button>
    </g-popover>
    <g-popover position="top">
      <g-button>点击</g-button>
    </g-popover>
    <g-popover position="left">
      <g-button>点击</g-button>
    </g-popover>
    <g-popover position="right">
      <g-button>点击</g-button>
    </g-popover>
    <g-popover position="bottom">
      <g-button>点击</g-button>
    </g-popover>
    <g-popover trigger="hover">
      <g-button>点击</g-button>
    </g-popover>`
      }
    }
  }
</script>

<style scoped>

</style>
