const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
  it('存在.', () => {
    expect(Input).to.be.ok
  })
  describe('测试prop',()=>{
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(()=>{
      vm.$destroy()
    })
    it('接收 value', () => {
       vm = new Constructor({
        propsData: {
          value: '1234'
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.value).to.equal('1234')
    })

    it('接收 disabled', () => {
      const vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.disabled).to.equal(true)
    })

    it('接收 readonly', () => {
      const vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.readOnly).to.equal(true)
    })

    it('接收 error', () => {
      const vm = new Constructor({
        propsData: {
          error: '错了'
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('.icon-error>use')
      const inputElementMessage = vm.$el.querySelector('.error-message')
      expect(inputElement.getAttribute('xlink:href')).to.equal('#i-error')
      expect(inputElementMessage.innerHTML).to.equal('错了')
    })
  })

  describe('事件',()=>{
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(()=>{
      vm.$destroy()
    })

    it('支持 change等 事件',()=>{
      ['change','input','blur','focus'].forEach((value, index)=>{
        vm = new Constructor({}).$mount()
        const callback = sinon.fake();
        vm.$on(value,callback)
        let event = new Event(value);
        Object.defineProperty(
            event,'target',{
              value: {value: 'hi'},enumerable: true
            }

        )
        let inputElement = vm.$el.querySelector('input')
        inputElement.dispatchEvent(event)
        expect(callback).to.have.been.calledWith('hi')
      })
    })
  })
})