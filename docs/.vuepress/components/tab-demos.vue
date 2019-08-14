<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div>
    <g-tabs selected="sport">
      <g-tabs-head>
        <g-tabs-item name="woman">
          <g-icon icon="set"></g-icon>美女
        </g-tabs-item>
        <g-tabs-item name="finance" disabled>
          财经
        </g-tabs-item>
        <g-tabs-item name="sport">
          体育
        </g-tabs-item>
        <template v-slot:other>
          <button>其他骚操作</button>
        </template>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="woman">美女相关资讯</g-tabs-pane>
        <g-tabs-pane name="finance">财经相关资讯</g-tabs-pane>
        <g-tabs-pane name="sport">体育相关资讯</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>

    <pre>
      <code>
        {{content}}
      </code>
    </pre>
  </div>
</template>

<script>
  import Tabs from '../../../src/tabs'
  import TabsBody from '../../../src/tabs-body'
  import TabsHead from '../../../src/tabs-head'
  import TabsItem from '../../../src/tabs-item'
  import TabsPane from '../../../src/tabs-pane'
  import Icon from '../../../src/icon'

  export default {
    name: "tab-demos",
    components:{
      'g-tabs': Tabs,
      'g-tabs-body': TabsBody,
      'g-tabs-head': TabsHead,
      'g-tabs-item': TabsItem,
      'g-tabs-pane': TabsPane,
      'g-icon': Icon
    },
    data(){
      return {
        content: `<g-tabs selected="sport">
    <g-tabs-head>
      <g-tabs-item name="woman">
        <g-icon icon="set"></g-icon>美女
      </g-tabs-item>
      <g-tabs-item name="finance" disabled>
        财经
      </g-tabs-item>
      <g-tabs-item name="sport">
        体育
      </g-tabs-item>
      <template v-slot:other>
        <button>其他骚操作</button>
      </template>
    </g-tabs-head>
    <g-tabs-body>
      <g-tabs-pane name="woman">美女相关资讯</g-tabs-pane>
      <g-tabs-pane name="finance">财经相关资讯</g-tabs-pane>
      <g-tabs-pane name="sport">体育相关资讯</g-tabs-pane>
    </g-tabs-body>
  </g-tabs>`
      }
    }
  }
</script>

<style scoped>

</style>
