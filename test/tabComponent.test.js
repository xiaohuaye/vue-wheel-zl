const expect = chai.expect;
import Vue from 'vue'
import Tabs from "../src/tabs";
import TabsBody from '../src/tabs-body'
import TabsHead from '../src/tabs-head'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
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
  it('',()=>{
    Vue.component('g-tab',Tabs)
    Vue.component('g-tabs-body',TabsBody)
    Vue.component('g-tabshead',TabsHead)
    Vue.component('g-tab',TabsItem)
    Vue.component('g-tab',TabsPane)
  })

})
