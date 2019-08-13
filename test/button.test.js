const expect = chai.expect;
import Vue from 'vue'
import Button from '../src/button'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Button', () => {
  it('存在.', () => {
    expect(Button).to.be.ok
  })
  it('可以设置icon.', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'set'
      }
    }).$mount()
    const useElement = vm.$el.querySelector('use')
    expect(useElement.getAttribute('xlink:href')).to.equal('#i-set')
    vm.$destroy()
  })
  it('可以设置loading.', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'set',
        loading: true
      }
    }).$mount()
    const useElement = vm.$el.querySelector('use')
    expect(useElement.getAttribute('xlink:href')).to.equal('#i-loading')
    vm.$destroy()
  })

  it('可以设置icon的位置为左边.', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'set',
        loading: true,
        iconPosition: 'left'
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
    expect(useElement[index].tagName).to.eq('svg')
    vm.$destroy()
  })

  it('可以设置icon的位置为右边.', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'set',
        loading: true,
        iconPosition: 'right'
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
    expect(useElement[index].nodeType).to.eq(3)
    vm.$destroy()
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
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'set',
        loading: true,
        iconPosition: 'top'
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

  it('点击 button 触发 click 事件', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'set',
      }
    }).$mount()

    const callback = sinon.fake();
    vm.$on('click', callback)
    vm.$el.click()
    expect(callback).to.have.been.called

  })
})
