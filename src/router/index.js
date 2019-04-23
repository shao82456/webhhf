import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Todolist from '@/Todolist'
import Upload from '@/Upload'
import User from '@/User'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/todolist',
      name: 'Todolist',
      component: Todolist
    },
    {
      path: '/upload',
      name: 'Upload',
      component: Upload
    },{
      path: '/user',
      name: '/User',
      component: User
    }
  ]
})
