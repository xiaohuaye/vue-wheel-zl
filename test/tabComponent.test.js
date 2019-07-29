const expect = chai.expect;
import Vue from 'vue'
import Tabs from "../src/tabs";
import TabsBody from '../src/tabs-body'
import TabsHead from '../src/tabs-head'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'
import Icon from '../src/icon'


Vue.config.productionTip = false
Vue.config.devtools = false

describe('tab组件测试', () => {
  it('Tabs存在.', () => {
    expect(Tabs).to.be.ok
  })
  it('TabsBody存在.', () => {
    expect(TabsBody).to.be.ok
  })
  it('TabsHead存在.', () => {
    expect(TabsHead).to.be.ok
  })
  it('TabsItem存在.', () => {
    expect(TabsItem).to.be.ok
  })
  it('TabsPane存在.', () => {
    expect(TabsPane).to.be.ok
  })
  Vue.component('g-tabs',Tabs)
  Vue.component('g-tabs-body',TabsBody)
  Vue.component('g-tabs-head',TabsHead)
  Vue.component('g-tabs-item',TabsItem)
  Vue.component('g-tabs-pane',TabsPane)
  Vue.component('g-icon',Icon)
  const div = document.createElement('div')
  document.body.appendChild(div)
  const ConstructorTabs = Vue.extend(Tabs)
  const ConstructorTabsBody = Vue.extend(TabsBody)
  const ConstructorTabsHead = Vue.extend(TabsHead)
  const ConstructorTabsItem = Vue.extend(TabsItem)
  const ConstructorTabsPane = Vue.extend(TabsPane)
  div.innerHTML = `<g-tabs selected="finance">
    <g-tabs-head>
      <g-tabs-item name="woman">
        <g-icon icon-name="set"></g-icon>美女
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
  </g-tabs>`
  const vm = new Vue({
    el: div
  })
  vm.$nextTick(()=>{
    const activeDiv = vm.$el.querySelector('.active')
    expect(activeDiv.innerText).to.be.eq('财经')
  })

})
