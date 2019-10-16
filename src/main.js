import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import routes from '@/router'
import vueStore from '@/store'
import App from './App.vue'
import GlobalComponent from '@/components/GlobalComponent'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueRouter)

Vue.component('my-global-component', GlobalComponent)

const router = new VueRouter({
  routes,
  mode: 'history',
})
const store = new Vuex.Store({
  modules: vueStore,
})

new Vue({
  router, // 라우터 등록
  store, // 스토어 등록
  render: h => h(App),
}).$mount('#app')
