import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import FastClick from 'fastclick'
import Loading from './plugins/Loading'

// import 'reset.css'
import 'normalize.css'
import 'assets/css/base.css'

Vue.config.productionTip = false

FastClick.attach(document.body)

Vue.use(Loading)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
