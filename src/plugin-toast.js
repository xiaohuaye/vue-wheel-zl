import Toast from './toast'

let currentToast = null
export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (message, propsDataOptions) {
      if (currentToast) {
        currentToast.close()
      }
      currentToast = createToast(
          {
            Vue,
            message,
            propsData: propsDataOptions,
            havenClosed: () => {
              currentToast = null
            }
          });
    }
  }
}

function createToast({Vue, message, propsData, havenClosed}) {
  /**
   * 创建toast组件
   * @method createToast
   * @param {Object} Vue - 工程项目中引入的Vue实例
   * @param {String} message - toast的message
   * @param {Object} propsData - 用户传入的options
   * @return {Object} toast - 组件
   * @date: 2019/7/7
   */

  let Constructor = Vue.extend(Toast)
  let toast = new Constructor({propsData})
  toast.$slots.default = [message]
  toast.$mount()
  toast.$on('close', havenClosed)
  document.body.appendChild(toast.$el)
  return toast
}
