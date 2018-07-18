import Vue from 'vue'
import Router from 'vue-router'

import seconds from '@/components/seconds'
import Login from '@/components/Login'
import four from '@/components/four'
import info from '@/components/info'
import xq from '@/components/xq'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
routes: [
	{
      path: '/',
      name: 'seconds',
      component: seconds
   },
    {
      path: '/seconds',
      name: 'seconds',
      component: seconds
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/four',
      name: 'four',
      component: four
    },
    {
      path: '/info',
      name: 'info',
      component: info
    },
    {
      path: '/xq',
      name: 'xq',
      component: xq
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    }
]
})
