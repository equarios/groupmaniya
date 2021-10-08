import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/components/Home'
import login from '@/components/Login'
import signup from '@/components/Signup'
import forgotpassword from '@/components/Forgotpassword'


Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: home
          }, 
      {
        path: '/Home',
        name: 'Home',
        component: home
      },
      {
        path: '/Login',
        name: 'Login',
        component: login
      },
      {
        path: '/Signup',
        name: 'Signup',
        component: signup
      },
      {
        path: '/Forgotpassword',
        name: 'Forgotpassword',
        component: forgotpassword
      }
    ]
  })
