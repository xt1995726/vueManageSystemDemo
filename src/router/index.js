import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/common/Header'
import Sidebar from '@/components/common/Sidebar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Sidebar',
      component: Sidebar
    }
  ]
})
