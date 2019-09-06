<template>
  <div id="app">
    <div>111</div>
    <g-cascade v-if="source" clearable :data-source="source" :callback="callBack">
    </g-cascade>
    <div>2222</div>
    <g-cascade v-if="source" :data-source="source" :callback="callBack" clearable>
    </g-cascade>
<!--    <div class="appWrapper">-->
<!--      <g-input clearable v-model="num" @inputclear="num = $event.clear"></g-input>-->
<!--    </div>-->
  </div>
</template>

<script>
import Button from './button'
import ButtonGroup from './button-group'
import Cascade from './cascade'
import Col from './col'
import Collapse from './collapse'
import CollapseItem from './collapse-item'
import Content from './content'
import Footer from './footer'
import Header from './header'
import Icon from './icon'
import Input from './input'
import Layout from './layout'
import PluginToast from './plugin-toast'
import Popover from './popover'
import Row from './row'
import Sider from './sider'
import Tabs from './tabs'
import TabsBody from './tabs-body'
import TabsHead from './tabs-head'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'
import Vue from 'vue'
import db from './db'

Vue.component('g-button', Button)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-cascade', Cascade)
Vue.component('g-col', Col)
Vue.component('g-collapse', Collapse)
Vue.component('g-collapse-item', CollapseItem)
Vue.component('g-content', Content)
Vue.component('g-footer', Footer)
Vue.component('g-header', Header)
Vue.component('g-icon', Icon)
Vue.component('g-input', Input)
Vue.component('g-layout', Layout)
Vue.component('g-popover', Popover)
Vue.component('g-row', Row)
Vue.component('g-sider', Sider)
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)
Vue.use(PluginToast)

function ajax(parentId = 0) {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(db.filter((item) => item.parent_id === parentId))
    },300)
  })
}

export default {
  name: 'app',
  data () {
    return {
      source: null,
      callBack: function (obj) {
        return ajax(obj.id)
      },
      num: 'adadawdad'
      // source: [
      //   {
      //     name: '浙江',
      //     children: [
      //       {
      //         name: '杭州',
      //         children: [
      //           { name: '上城',
      //             children:[
      //               {name: '落雨街道',
      //                 children:[
      //                   {name: '分享小区'},
      //                   {name: '萨德小区'}
      //                 ]
      //               },
      //               {name: '太阳街道'}
      //             ]
      //           },
      //           { name: '下城' },
      //           { name: '江干' }
      //         ]
      //       },
      //       { name: '嘉兴',
      //         children: [
      //           { name: '南湖区' },
      //           { name: '秀洲区' }
      //         ]
      //       }
      //     ]
      //   },
      //   {
      //     name: '福建',
      //     children: [
      //       { name: '福州',
      //         children: [
      //           { name: '鼓楼区' },
      //           { name: '将台区' },
      //           { name: '仓山区' }
      //         ] }
      //     ]
      //   },
      //   {
      //     name: '安徽',
      //     children: [
      //       { name: '合肥',
      //         children: [
      //           { name: '瑶海' },
      //           { name: '庐阳' }
      //         ] }
      //     ]
      //   },
      // ]
    }
  },
  mounted () {
    ajax().then((res)=>{
      this.source= res.map((item)=>{
        item.children = []
        return item
      })
    })
  },
  methods: {
  }
}
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .appWrapper{
    margin-top: 100px;
  }
</style>
