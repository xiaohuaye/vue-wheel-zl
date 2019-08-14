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
  Vue.component('g-tabs', Tabs)
  Vue.component('g-tabs-body', TabsBody)
  Vue.component('g-tabs-head', TabsHead)
  Vue.component('g-tabs-item', TabsItem)
  Vue.component('g-tabs-pane', TabsPane)
  Vue.component('g-icon', Icon)
  const div = document.createElement('div')
  document.body.appendChild(div)
  it('验证tab组件传值，item/body组件的展示', () => {
    div.innerHTML = `<g-tabs selected="finance">
    <g-tabs-head>
      <g-tabs-item name="woman">
        <g-icon icon="set"></g-icon>美女
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
    vm.$nextTick(() => {
      const activeDiv = vm.$el.querySelector('.active')
      const activePane = vm.$el.querySelector('.tabs-pane')
      expect(activeDiv.innerText).to.be.eq('财经')
      expect(activePane.innerText).to.be.eq('财经相关资讯')
    })
  })

  it('disabled参数 item/body组件的展示', () => {
    div.innerHTML = `<g-tabs selected="finance">
    <g-tabs-head>
      <g-tabs-item name="woman" disabled>
        <g-icon icon="set"></g-icon>美女
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
    vm.$nextTick(() => {
      const itemsDivs = vm.$el.querySelectorAll('.tabs-item')
      for (let i = 0; i < itemsDivs.length; i++) {
        if (!itemsDivs[i].classList.contains('canIUse')) {
          expect(itemsDivs[i].innerText.trim()).to.be.eq('美女')
          expect(vm.$el.querySelectorAll('.tabs-pane').length).to.be.eq(1)
          if(vm.$el.querySelectorAll('.tabs-pane').length === 1){
            expect(vm.$el.querySelector('.tabs-pane').innerText.trim()).to.be.eq('财经相关资讯')
          }
        }
      }
    })
  })

  it('点击可点击item，触发pane变化', () => {
    div.innerHTML = `<g-tabs selected="sport">
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
    document.body.appendChild(div)
    const vm = new Vue({
      el: div
    })
    vm.$nextTick(() => {
      const itemsDivs = vm.$el.querySelectorAll('.tabs-item')
      for (let i = 0; i < itemsDivs.length; i++) {
        if (itemsDivs[i].innerText.trim() === '美女') {
          expect(vm.$el.querySelector('.tabs-pane').innerText.trim()).to.be.eq('体育相关资讯')
          itemsDivs[i].click()
          setTimeout(()=>{
            expect(vm.$el.querySelector('.tabs-pane').innerText.trim()).to.be.eq('美女相关资讯')
          },100)
        }
      }
    })
  })

  it('disabled参数 item不可点击', () => {
    div.innerHTML = `<g-tabs selected="sport">
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
    document.body.appendChild(div)
    const vm = new Vue({
      el: div
    })
    vm.$nextTick(() => {
      const itemsDivs = vm.$el.querySelectorAll('.tabs-item')
      for (let i = 0; i < itemsDivs.length; i++) {
        if (itemsDivs[i].innerText.trim() === '财经') {
          expect(getComputedStyle(itemsDivs[i]).cursor).to.be.eq('not-allowed')
          expect(vm.$el.querySelector('.tabs-pane').innerText.trim()).to.be.eq('体育相关资讯')
          itemsDivs[i].click()
          setTimeout(()=>{
            expect(vm.$el.querySelector('.tabs-pane').innerText.trim()).to.be.eq('体育相关资讯')
          },100)
        }
      }
    })
  })


})
