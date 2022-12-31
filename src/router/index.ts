import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import Layout from '@/layout/index.vue'
import modules from './modules'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    meta: { title: 'WORKBENCHMODULE.TITLE', icon: 'Platform', alwaysShow: true },
    sort: 1,
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: async () => await import('@/views/dashboard/index.vue'),
        meta: { title: 'WORKBENCHMODULE.TITLE', icon: 'Platform', keepAlive: true }
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: async () => await import('@/views/login.vue'),
    hidden: true
  },
  {
    path: '/error',
    name: 'Error',
    component: async () => await import('@/views/error.vue'),
    hidden: true
  },

  ...modules
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
