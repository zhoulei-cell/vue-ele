import Vue from 'vue'
import VueRouter from 'vue-router'

import login from './login'
import mine from './mine'
import msite from './msite'
import order from './order'
import search from './search'

Vue.use(VueRouter)

const routes = [
  login,
  mine,
  msite,
  order,
  search,
  {
    path: '/',
    redirect: '/msite'
  }
]

const router = new VueRouter({
  routes
})

export default router
