import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Content from './content'
import Footer from './footer'
import Header from './header'
import Layout from './layout'
import Sider from './sider'
import PluginToast from './plugin-toast'
import Tabs from "./tabs";
import TabsBody from './tabs-body'
import TabsHead from './tabs-head'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'
import Popover from  './popover'


Vue.component('g-tabs-body',TabsBody);
Vue.component('g-tabs-head',TabsHead);
Vue.component('g-tabs-item',TabsItem);
Vue.component('g-tabs-pane',TabsPane);
Vue.component('g-tabs',Tabs);
Vue.component('g-icon', Icon);
Vue.component('g-button', Button);
Vue.component('g-button-group', ButtonGroup);
Vue.component('g-input', Input);
Vue.component('g-row', Row);
Vue.component('g-col', Col);
Vue.component('g-content', Content);
Vue.component('g-footer', Footer);
Vue.component('g-header', Header);
Vue.component('g-layout', Layout);
Vue.component('g-sider', Sider);
Vue.component('g-popover',Popover)
Vue.use(PluginToast);


new Vue({
  el: '#app',
  data: {
    selected: 'finance'
  },
  mounted() {
  },
  methods: {
  }
});





