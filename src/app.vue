<template>
  <div>
    <g-cascade :data-source="source"></g-cascade>
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
  import Tabs from "./tabs";
  import TabsBody from './tabs-body'
  import TabsHead from './tabs-head'
  import TabsItem from './tabs-item'
  import TabsPane from './tabs-pane'
  import Vue from 'vue'


  Vue.component('g-button', Button);
  Vue.component('g-button-group', ButtonGroup);
  Vue.component('g-cascade', Cascade)
  Vue.component('g-col', Col);
  Vue.component('g-collapse', Collapse)
  Vue.component('g-collapse-item', CollapseItem)
  Vue.component('g-content', Content);
  Vue.component('g-footer', Footer);
  Vue.component('g-header', Header);
  Vue.component('g-icon', Icon);
  Vue.component('g-input', Input);
  Vue.component('g-layout', Layout);
  Vue.component('g-popover', Popover)
  Vue.component('g-row', Row);
  Vue.component('g-sider', Sider);
  Vue.component('g-tabs', Tabs);
  Vue.component('g-tabs-body', TabsBody);
  Vue.component('g-tabs-head', TabsHead);
  Vue.component('g-tabs-item', TabsItem);
  Vue.component('g-tabs-pane', TabsPane);
  Vue.use(PluginToast);
  export default{
    name: "app",
    el: '#app',
    data(){
      return {
        source: [
          {
            name: '浙江',
            children: [
              {
                name: '杭州',
                children: [
                  {name: '上城'},
                  {name: '下城'},
                  {name: '江干'},
                ]
              },
              {name: '嘉兴',
                children:[
                  {name: '南湖区'},
                  {name: '秀洲区'},
                ]
              },
            ]
          },
          {
            name: '福建',
            children: [
              {name: '福州',
                children:[
                  {name: '鼓楼区'},
                  {name: '将台区'},
                  {name: '仓山区'},
                ]},
            ]
          },
          {
            name: '安徽',
            children: [
              {name: '合肥',
                children:[
                  {name: '瑶海'},
                  {name: '庐阳'},
                ]},
            ]
          }
        ]
      }
    },
    mounted() {
    },
    methods: {}
  };
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
