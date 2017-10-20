import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Editor from '@/components/Editor'
import OrderForm from '@/components/OrderForm'
import Search from '@/components/Search'
import Switchable from '@/components/SwitchableGrid'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [{
          path: 'editor',
          name: 'Editor',
          component: Editor
        },
        {
          path: 'order',
          name: 'OrderForm',
          component: OrderForm
        },
        {
          path: 'search',
          name: 'Search',
          component: Search
        },
        {
          path: 'switchable',
          name: 'Switchable',
          component: Switchable
        }
      ]
    }
  ]
})
