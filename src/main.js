import App from './app.vue'
import Vue from 'vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
