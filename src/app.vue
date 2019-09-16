<template>
  <div id="app">
    <g-swipe :selected="select" loop @activeIndex="activeIndex" reverse>
      <g-swipe-item class='box'>1</g-swipe-item>
      <g-swipe-item class='box'>2</g-swipe-item>
      <g-swipe-item class='box'>3</g-swipe-item>
      <g-swipe-item class='box'>4</g-swipe-item>
      <g-swipe-item class='box'>5</g-swipe-item>
      <g-swipe-item class='box'>6</g-swipe-item>
    </g-swipe>
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
import Swipe from './swipe'
import SwipeItem from './swipe-item'
import db from './db'

Vue.component('g-swipe-item',SwipeItem)
Vue.component('g-swipe',Swipe)
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

export default {
  name: 'app',
  data () {
    return {
      select: 1
    }
  },
  mounted () {

  },
  methods: {
    activeIndex($event){

    }
  }
}
</script>

<style lang="scss" scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .appWrapper{
    margin-top: 100px;
  }
  .box{
    width: 400px;
    height: 150px;
    background: #ddd;
    border: 1px solid red;
  }
</style>
