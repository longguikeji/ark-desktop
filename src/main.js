import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Login from './views/Login'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(ElementUI);

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '',
    component: () => import('./views/Desktop.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes // (缩写) 相当于 routes: routes
})

const app = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

Vue.use({
  app
})