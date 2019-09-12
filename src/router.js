import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Controller from './views/Controller'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/vote',
      name: 'vote',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Vote.vue')
    },
    {
      path: '/controller',
      name: 'controller',
      component: Controller
    }
  ]
})
