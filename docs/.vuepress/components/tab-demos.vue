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

    <div class="items">
      <header>默认选中</header>
    </div>
    <div class="items">
      <g-tabs selected="sport">
        <g-tabs-head>
          <g-tabs-item name="woman">
            美女
          </g-tabs-item>
          <g-tabs-item name="finance">
            财经
          </g-tabs-item>
          <g-tabs-item name="sport">
            体育
          </g-tabs-item>
        </g-tabs-head>
        <g-tabs-body>
          <g-tabs-pane name="woman">美女相关资讯</g-tabs-pane>
          <g-tabs-pane name="finance">财经相关资讯</g-tabs-pane>
          <g-tabs-pane name="sport">体育相关资讯</g-tabs-pane>
        </g-tabs-body>
      </g-tabs>

    </div>
    <div class="items">
      <code>g-tabs-item</code>上需要添加唯一的name，
      默认选中sport，在 <code>g-tabs</code>上添加 <code>selected="sport"</code>
    </div>
    <pre>
      <code>{{content1}}</code>
    </pre>

    <div class="items">
      <header>不可用disabled</header>
    </div>
    <div class="items">
      <g-tabs selected="sport">
        <g-tabs-head>
          <g-tabs-item name="woman">
            美女
          </g-tabs-item>
          <g-tabs-item name="finance" disabled>
            财经
          </g-tabs-item>
          <g-tabs-item name="sport">
            体育
          </g-tabs-item>
        </g-tabs-head>
        <g-tabs-body>
          <g-tabs-pane name="woman">美女相关资讯</g-tabs-pane>
          <g-tabs-pane name="finance">财经相关资讯</g-tabs-pane>
          <g-tabs-pane name="sport">体育相关资讯</g-tabs-pane>
        </g-tabs-body>
      </g-tabs>

    </div>
    <div class="items">
      <code>g-tabs-item</code>上需要添加唯一的name，
      在 <code>g-tabs-item</code>上添加 <code>disabled</code>
    </div>
    <pre>
      <code>{{content2}}</code>
    </pre>

    <div class="items">
      <header>需要在head上增加其他元素的</header>
    </div>
    <div class="items">
      <g-tabs selected="sport">
        <g-tabs-head>
          <g-tabs-item name="woman">
            美女
          </g-tabs-item>
          <g-tabs-item name="finance">
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

    </div>
    <div class="items">
      <code>g-tabs-item</code>上需要添加唯一的name，
      在 <code>g-tabs-head</code>上添加 <code>插槽内容</code>
    </div>
    <pre>
      <code>{{content3}}</code>
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
  </g-tabs>`,
      content1:`<g-tabs selected="sport">
        <g-tabs-head>
          <g-tabs-item name="woman">
            美女
          </g-tabs-item>
          <g-tabs-item name="finance">
            财经
          </g-tabs-item>
          <g-tabs-item name="sport">
            体育
          </g-tabs-item>
        </g-tabs-head>
        <g-tabs-body>
          <g-tabs-pane name="woman">美女相关资讯</g-tabs-pane>
          <g-tabs-pane name="finance">财经相关资讯</g-tabs-pane>
          <g-tabs-pane name="sport">体育相关资讯</g-tabs-pane>
        </g-tabs-body>
      </g-tabs>`,
        content2:`<g-tabs-item name="finance" disabled>`,
        content3:`<g-tabs selected="sport">
        <g-tabs-head>
          <g-tabs-item name="woman">
            美女
          </g-tabs-item>
          <g-tabs-item name="finance">
            财经
          </g-tabs-item>
          <g-tabs-item name="sport">
            体育
          </g-tabs-item>
          <template v-slot:other>
            <button>其他骚操作</button> //你要的骚操作
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
