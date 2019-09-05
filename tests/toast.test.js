const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast'

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Toast', () => {
  it('存在.', () => {
    expect(Toast).to.be.exist
  });
  describe('测试prop', () => {
    it('isAutoClose', function (done) {
      let div = document.createElement("div");
      let Constructor = Vue.extend(Toast);
      let vm = new Constructor({
        propsData: {
          isAutoClose: 1,
        }
      }).$mount(div);
      vm.$on('close', () => {
        expect(document.body.contains(vm.$el)).to.eq(false);
        vm.$destroy();
        done()
      })
    });
    it('closeButton', function (done) {
      const callback = sinon.fake();
      let Constructor = Vue.extend(Toast);
      let vm = new Constructor({
        propsData: {
          isAutoClose: false,
          closeButton: {
            text: '测试关闭',
            callback
          }
        }
      }).$mount();
      let closeBtn = vm.$el.querySelector('.closeToast');
      expect(closeBtn.innerText).to.eq('测试关闭')
      setTimeout(() => {
        //这里加setTimeout是因为组件中line元素获取wrapper元素的高度是在事件队列之后，立刻触发click会将父元素kill掉，没有办法获得。
        closeBtn.click();
        expect(callback).to.have.been.called;
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
    });
    it('position', function () {
      let Constructor = Vue.extend(Toast);
      let vm = new Constructor({
        propsData: {
          position: 'bottom',
        }
      }).$mount();
      expect(vm.$el.classList.contains('toast-bottom')).to.be.eq(true)
    });
  })
});
