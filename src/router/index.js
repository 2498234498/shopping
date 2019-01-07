import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/view/Home')
    },
    {
      path: '/class',
      name: 'class',
      component: () => import('@/view/Class')
    },
    {
      path: '/find',
      name: 'find',
      component: () => import('@/view/Find')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/view/Cart')
    },
    {
      path: '/person',
      name: 'person',
      component: () => import('@/view/Person')
    },
    {
      // 路由输入错误,去默认的页面(重定向路由)
      path: '*',
      redirect: '/home'
    }
  ]
})
