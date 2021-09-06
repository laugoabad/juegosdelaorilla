import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vueSmoothScroll from 'vue2-smooth-scroll'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(vueSmoothScroll)
Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
