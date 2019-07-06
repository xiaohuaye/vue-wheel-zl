import Toast from './toast'

export default {
  install(Vue,options){
    Vue.prototype.$toast = function (message,propsDataOptions) {
      let Constructor = Vue.extend(Toast)
      let toast = new Constructor({
        propsData: {
          closeButton: propsDataOptions
        }
      })
      toast.$slots.default = [message]
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  }
}

