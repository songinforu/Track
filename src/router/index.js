import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'
import Home from '../views/Home.vue'
import Root from '../views/Root.vue'
import Login from '@/components/Login.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'app',
    component: App,
    //重定向
    redirect: '/root',
    //子路由
    children: [
      {
        path: '/root',
        name: 'root',
        component: Root,
        redirect: '/home',
        children: [
          {
            path: '/home',
            name: 'Home',
            component: Home
          },
          {
            path: '/analytics',
            name: 'Analytics',
            component: () => import('../views/Analytics.vue')
          },
          {
            path: '/events',
            name: 'Events',
            component: () => import('../views/Events.vue')
          },
        ]
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import('@/components/Login.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  //历史模式
  mode: 'history'
})

export default router
