import chai,{expect,assert} from 'chai';
import {mount, shallowMount} from "@vue/test-utils";
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Vue from 'vue/dist/vue.esm.js'
import Toast from '@/toast'

describe('Toast', () => {
  it('存在.', () => {
    expect(Toast).to.be.exist
  });
  describe('测试prop', () => {
    it('isAutoClose',  (done)=> {
      let div = document.createElement("div");
      let Constructor = Vue.extend(Toast);
      let vm = new Constructor({
        propsData: {
          isAutoClose: 1,
        }}).$mount(div);
      vm.$on('close', () => {
        expect(document.body.contains(vm.$el)).to.eq(false);
        vm.$el.remove();
        vm.$destroy();
        done()
      })
    });
    it('closeButton', function (done) {
      const callback = sinon.spy();
      const wrapper = mount(Toast, {
        propsData: {
          isAutoClose: false,
          closeButton: {
            text: '测试关闭',
            callback
          }
        }
      })
      let element = wrapper.find('.closeToast')
      wrapper.find('.closeToast').trigger('click')
      setTimeout(() => {
        //这里加setTimeout是因为组件中line元素获取wrapper元素的高度是在事件队列之后，立刻触发click会将父元素kill掉，没有办法获得。
        element.trigger('click')
        assert(callback.called);
        done()
      }, 0)
    });
    it('enableHtml', function () {
      let Constructor = Vue.extend(Toast);
      let randomNum = parseInt(Math.random() * 100);
      let vm = new Constructor({
        propsData: {
          enableHtml: true,
        }
      });
      vm.$slots.default = [`<span id="test${randomNum}"></span>`];
      vm.$mount();
      expect(vm.$el.querySelector(`#test${randomNum}`)).to.be.exist
      vm.$el.remove();
      vm.$destroy();
    });
    it('position', function () {
      let Constructor = Vue.extend(Toast);
      let vm = new Constructor({
        propsData: {
          position: 'bottom',
        }
      }).$mount();
      expect(vm.$el.classList.contains('toast-bottom')).to.be.eq(true)
      vm.$el.remove();
      vm.$destroy();
    });
  })
});
