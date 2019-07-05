const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
  it('Row存在.', () => {
    expect(Row).to.be.ok
  })
  it('Col存在.', () => {
    expect(Col).to.be.ok
  })
  it('Row接收gutter属性',(done)=>{
    Vue.component('g-row',Row)
    Vue.component('g-col',Col)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
        <g-row gutter="20">
          <g-col span="12"></g-col>
          <g-col span="12"></g-col>
        </g-row>
      `
    const vm = new Vue({
      el: div
    })
    setTimeout(()=>{
      const cols = vm.$el.querySelectorAll('.col')
      const row = vm.$el.querySelector('.row')
      expect(getComputedStyle(cols[0]).paddingLeft).eq('10px')
      expect(getComputedStyle(cols[0]).paddingRight).eq('10px')
      expect(getComputedStyle(row).marginLeft).eq('-10px')
      expect(getComputedStyle(row).marginRight).eq('-10px')
      done()
      vm.$el.remove()
      vm.$destroy()
    })
  })
  it('Row接收 align 参数', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Row)
    const vm = new Constructor({
      propsData: {
        align: 'center'
      }
    }).$mount(div)
    const rowElement = vm.$el
    expect(getComputedStyle(rowElement).justifyContent).to.equal('center')
    vm.$el.remove()
    vm.$destroy()
  })
  it('Col接收 span 参数', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        span: '1'
      }
    }).$mount(div)
    const colElement = vm.$el;
    expect(colElement.classList.contains('col-1')).to.equal(true)
    vm.$el.remove()
    vm.$destroy()
  })
  it('Col接收 offset 参数', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        offset: '1'
      }
    }).$mount(div)
    const colElement = vm.$el;
    expect(colElement.classList.contains('offset-1')).to.equal(true)
    vm.$el.remove()
    vm.$destroy()
  })
  it('Col接收 iPad 参数', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        iPad: {span: '1',offset:'2'}
      }
    }).$mount(div)
    const colElement = vm.$el;
    expect(colElement.classList.contains('col-iPad-1')).to.equal(true)
    expect(colElement.classList.contains('offset-iPad-2')).to.equal(true)
    vm.$el.remove()
    vm.$destroy()
  })
  it('Col接收 narrowPC 参数', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        narrowPC: {span: '2',offset: '4'}
      }
    }).$mount(div)
    const colElement = vm.$el;
    expect(colElement.classList.contains('col-narrowPC-2')).to.equal(true)
    expect(colElement.classList.contains('offset-narrowPC-4')).to.equal(true)
    vm.$el.remove()
    vm.$destroy()
  })
  it('Col接收 pc 参数', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        pc: {span: '2',offset: '4'}
      }
    }).$mount(div)
    const colElement = vm.$el;
    expect(colElement.classList.contains('col-pc-2')).to.equal(true)
    expect(colElement.classList.contains('offset-pc-4')).to.equal(true)
    vm.$el.remove()
    vm.$destroy()
  })
  it('Col接收 widePC 参数', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        widePC: {span: '2',offset: '4'}
      }
    }).$mount(div)
    const colElement = vm.$el;
    expect(colElement.classList.contains('col-widePC-2')).to.equal(true)
    expect(colElement.classList.contains('offset-widePC-4')).to.equal(true)
    vm.$el.remove()
    vm.$destroy()
  })

})
