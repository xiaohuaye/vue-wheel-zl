import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from  './input'
import Row from './row'
import Col from './col'
import Content from './content'
import Footer from './footer'
import Header from './header'
import Layout from './layout'
import Sider from './sider'
import Toast from './toast'
import PluginToast from './plugin-toast'

Vue.component('g-icon',Icon);
Vue.component('g-button',Button);
Vue.component('g-button-group',ButtonGroup);
Vue.component('g-input',Input);
Vue.component('g-row',Row);
Vue.component('g-col',Col);
Vue.component('g-content',Content);
Vue.component('g-footer',Footer);
Vue.component('g-header',Header);
Vue.component('g-layout',Layout);
Vue.component('g-sider',Sider);
Vue.component('g-toast',Toast)
Vue.use(PluginToast)


new Vue({
  el: '#app',
  data:{
    isLoading1: false,
    isLoading2: false,
    isLoading3: false,
    isLoading4: false,
    isLoading5: false,
    message: 'hi'
  },
  created(){
  },
  /**
   *  函数定义
   *  @module function
   */
  methods: {
    showToast(){
      this.$toast('I am toast')
    }
  }
});





