import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Home'
import Content from '@/components/Content'
import Recos from '@/components/recomendations'

// import { MdButton } from 'vue-material/dist/components'
// import 'vue-material/dist/vue-material.min.css'

// Vue.use(MdButton)

 
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/filters/:filter',
      name: 'Filters',
      component: Home
    },
    {
      path: '/tips/:hash',
      name: 'Tips',
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

