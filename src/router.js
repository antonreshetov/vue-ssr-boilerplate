import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

Vue.use(Router)
Vue.use(Meta)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: () => import('./components/Home.vue')
      },
      {
        path: '/users',
        component: () => import('./components/Users.vue')
      },
      {
        path: '*',
        redirect: '/'
      }
    ]
  })
}
