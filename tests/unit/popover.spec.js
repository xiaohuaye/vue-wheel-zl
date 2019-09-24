import chai,{expect} from 'chai';
import {mount, shallowMount} from "@vue/test-utils";
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Vue from 'vue/dist/vue.esm.js'
import Popover from  '@/popover'
import Button from '@/button'

describe('popover组件测试', () => {
  it('popover存在.', () => {
    expect(Popover).to.be.exist
  })
  Vue.component('g-popover',Popover)
  Vue.component('g-button', Button);

  it('测试点击出现popover内容', (done)=>{
    let div = document.createElement('div')
    div.innerHTML = `<g-popover class="popover-wrapper">
    <div>
      <g-button>点击</g-button>
    </div>
    <template v-slot:popover>
      <div style="color: red;">出现测试一popover内容</div>
    </template>
  </g-popover>`
    document.body.appendChild(div)
    const vm = new Vue({
      el: div
    })
    let button = vm.$el.querySelector('.g-button')
    let popoverCom = document.body.querySelector('.popover-content')
    expect(popoverCom).to.be.not.exist;
    button.click()
    vm.$nextTick(()=>{
      let popoverCom = document.body.querySelectorAll('.popover-content')
      popoverCom = Array.prototype.slice.call(popoverCom);
      let isHasThisPop = popoverCom.some((node)=>{
        return node.innerText === '出现测试一popover内容'
      })
      expect(isHasThisPop).to.be.eq(true)
      vm.$el.remove()
      vm.$destroy()
      done()
    })
  })

  it('测试点击出现popover内容的方向',(done)=>{
    let div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `<g-popover class="popover-wrapper" position="right">
    <div>
      <g-button>点击</g-button>
    </div>
    <template v-slot:popover>
      <div style="color: red;">出现测试二popover内容</div>
    </template>
  </g-popover>`
    const vm = new Vue({
      el: div,
      propsData:{
        position: 'right'
      }
    })
    let button = vm.$el.querySelector('.g-button')
    button.click()
    vm.$nextTick(()=>{
      let popoverCom = document.body.querySelectorAll('.popover-content')
      popoverCom = Array.prototype.slice.call(popoverCom);
      let popoverCom1 = null
      popoverCom.map((node)=>{
        if(node.innerText === '出现测试二popover内容'){
          popoverCom1 = node
        }
      })
      expect(popoverCom1.classList.contains('right-position')).to.be.eq(true)
      vm.$el.remove()
      vm.$destroy()
      done()
    })
  })

  it('测试hover出现popover内容',(done)=>{
    let div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `<g-popover class="popover-wrapper" trigger="hover">
    <div>
      <g-button>点击</g-button>
    </div>
    <template v-slot:popover>
      <div style="color: red;">popoverHover</div>
    </template>
  </g-popover>`
    const vm = new Vue({
      el: div,
      propsData:{
        trigger: 'hover'
      }
    })
    let touch = vm.$el.querySelector('.popTouch')
    let event = new Event('mouseenter')
    touch.dispatchEvent(event)
    vm.$nextTick(()=>{
      let popoverCom = document.body.querySelectorAll('.popover-content')
      popoverCom = Array.prototype.slice.call(popoverCom);
      let popoverCom2 = popoverCom.some((node)=>{
        return node.innerText === 'popoverHover'
      })
      expect(popoverCom2).to.be.eq(true)
      vm.$el.remove()
      vm.$destroy()
      done()
    })
  })
})
