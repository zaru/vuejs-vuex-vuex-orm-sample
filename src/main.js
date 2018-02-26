import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'

import App from './App.vue'
import UserList from './components/UserList.vue'
import HelloWorld from './components/HelloWorld.vue'

Vue.use(VueRouter)

Vue.config.productionTip = false


const routes = [
  { path: '/', component: HelloWorld },
  { path: '/user-list', component: UserList }
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  render: (h) => h(App),
  store: store,
  router: router,
})
