import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/moment'
import './plugins/element.js'
import './assets/style.css'
import './assets/global.css'
import './filters/index'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
