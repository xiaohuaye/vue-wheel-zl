<template>
  <div>
    <g-collapse :defaultopen.sync=defaultopen single>
      <g-collapse-item title="国内">
        <div>有关机构</div>
      </g-collapse-item>
      <g-collapse-item title="国外">
        <div>中美贸易</div>
      </g-collapse-item>
      <g-collapse-item title="地球外">
        <div>三体入侵</div>
      </g-collapse-item>
    </g-collapse>
    <pre>
      <code>{{content}}</code>
    </pre>

    <div class="items">
      <header>默认打开 defaultopen参数</header>
    </div>
    <div class="items">
      <g-collapse :defaultopen.sync=defaultopen>
        <g-collapse-item title="国内">
          <div>有关机构</div>
        </g-collapse-item>
        <g-collapse-item title="国外">
          <div>中美贸易</div>
        </g-collapse-item>
        <g-collapse-item title="地球外">
          <div>三体入侵</div>
        </g-collapse-item>
      </g-collapse>
    </div>
    <div class="items">
      想初始化打开国内和国外item，需要在 <code>g-collapse</code>上添加参数 <code>:defaultopen.sync=defaultopen</code>
      并且在data中定义 <strong>defaultopen</strong>数组，其中成员是你想默认打开item的title
    </div>
    <pre>
      <code>{{content1}}</code>
    </pre>

    <div class="items">
      <header>在当前页面获取动态获取已经被打开的item</header>
    </div>
    <div class="items">
      <g-collapse :defaultopen.sync=defaultopen1>
        <g-collapse-item title="国内">
          <div>有关机构</div>
        </g-collapse-item>
        <g-collapse-item title="国外">
          <div>中美贸易</div>
        </g-collapse-item>
        <g-collapse-item title="地球外">
          <div>三体入侵</div>
        </g-collapse-item>
      </g-collapse>
      <div>{{defaultopen1}}</div>
    </div>
    <div class="items">
      需要获取实时的打开的item数据，如下监听即可
    </div>
    <pre>
      <code>{{content2}}</code>
    </pre>

    <div class="items">
      <header>只打开一个item，其余的自动关闭</header>
    </div>
    <div class="items">
      <g-collapse :defaultopen.sync=defaultopen1 single>
        <g-collapse-item title="国内">
          <div>有关机构</div>
        </g-collapse-item>
        <g-collapse-item title="国外">
          <div>中美贸易</div>
        </g-collapse-item>
        <g-collapse-item title="地球外">
          <div>三体入侵</div>
        </g-collapse-item>
      </g-collapse>
    </div>
    <div class="items">
      添加single属性在自定义标签上，即可。需要注意初始化打开多个item并不会报错，控制台会warn：“单个item显示开启时不要默认开启多个item”
    </div>
    <pre>
      <code>{{content3}}</code>
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
        content: `<g-collapse :defaultopen.sync=defaultopen single>
      <g-collapse-item title="国内">
        <div>有关机构</div>
      </g-collapse-item>
      <g-collapse-item title="国外">
        <div>中美贸易</div>
      </g-collapse-item>
      <g-collapse-item title="地球外">
        <div>三体入侵</div>
      </g-collapse-item>
    </g-collapse>`,
        content1:`<g-collapse :defaultopen.sync=defaultopen>
    <g-collapse-item title="国内">
      <div>有关机构</div>
    </g-collapse-item>
    <g-collapse-item title="国外">
      <div>中美贸易</div>
    </g-collapse-item>
    <g-collapse-item title="地球外">
      <div>三体入侵</div>
    </g-collapse-item>
  </g-collapse>
  export default {
  ......
  defaultopen: ['国内','国外']
  }`,
        content2:`mounted(){
      this.$on('update:defaultopen',(option)=>{
        this.defaultopen = option.openArray    //this.defaultopen 换成你自己的数组
      })
    }`,
        content3:`<g-collapse :defaultopen.sync=defaultopen single>`,
        defaultopen: ['国内','国外'],
        defaultopen1: ['国内','国外'],
      }
    },
    mounted(){
      this.$on('update:defaultopen',(option)=>{
        this.defaultopen = option.openArray
        this.defaultopen1 = option.openArray
      })
    },
    methods: {}
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
