import chai,{expect} from 'chai'
import {mount, shallowMount} from "@vue/test-utils";
import Button from "@/button"
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import Vue from "vue";

chai.use(sinonChai)

describe('Button.vue',()=>{
  it('存在.', () => {
    expect(Button).to.be.ok
  })
  it('可以设置icon.', () => {
    const wrapper = mount(Button,{
      propsData: {
        icon: 'set'
      }
    })
    const useElement = wrapper.find('use')
    expect(useElement.attributes('href')).to.equal('#i-set')
  })
  it('可以设置loading.', () => {
    const wrapper = mount(Button,{
      propsData: {
        icon: 'set',
        loading: true
      }
    })
    const useElement = wrapper.find('use')
    expect(useElement.attributes('href')).to.equal('#i-loading')
  })

  it('可以设置icon的位置为左边.', () => {
    const wrapper = mount(Button,{
      propsData: {
        icon: 'set',
        loading: true,
        iconPosition: 'left'
      }
    })
    let vm = wrapper.vm
    let useElement = vm.$el.childNodes
    let index = null
    for(let i = 0;i<useElement.length;i++){
      if(useElement[i].nodeType === 1 || useElement[i].nodeType === 3){
        index = i
        break
      }
    }
    expect(index).to.eq(0)
  })

  it('可以设置icon的位置为右边.', () => {
    const wrapper = mount(Button,{
      propsData: {
        icon: 'set',
        loading: true,
        iconPosition: 'right'
      }
    })
    let vm = wrapper.vm
    let useElement = vm.$el.childNodes
    let index = null
    for(let i = 0;i<useElement.length;i++){
      if(useElement[i].nodeType === 1 || useElement[i].nodeType === 3){
        index = i
        break
      }
    }
    expect(index).to.eq(1)
  })

  it('不设置icon位置则默认是左边.', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'set',
        loading: true
      }
    }).$mount()
    let useElement = vm.$el.childNodes
    let index = null
    for(let i = 0;i<useElement.length;i++){
      if(useElement[i].nodeType === 1 || useElement[i].nodeType === 3){
        index = i
        break
      }
    }
    expect(useElement[index].nodeType).to.eq(1)
    vm.$destroy()
  })

  it('设置icon位置错误则默认是左边.', () => {
    const wrapper = mount(Button,{
      propsData: {
        icon: 'set',
        loading: true,
        iconPosition: 'top'
      }
    })
    let vm = wrapper.vm
    let useElement = vm.$el.childNodes
    let index = null
    for(let i = 0;i<useElement.length;i++){
      if(useElement[i].nodeType === 1 || useElement[i].nodeType === 3){
        index = i
        break
      }
    }
    expect(useElement[index].nodeType).to.eq(1)
  })

  it('点击 button 触发 click 事件', () => {
    const wrapper = mount(Button,{
      propsData: {
        icon: 'set',
      }
    })
    const vm = wrapper.vm
    const callback = sinon.fake();
    vm.$on('click', callback)
    vm.$el.click()
    expect(callback).to.have.been.called

  })
})
