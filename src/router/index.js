import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Home'
import Content from '@/components/Content'
import Recos from '@/components/recomendations'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/recos',
      name: 'Recos',
      component: Recos
    },
    {
      path: '/content',
      name: 'Content',
      component: Content
    },

  ]
})
