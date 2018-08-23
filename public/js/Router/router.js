import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from '../components/login/Login'
//import Signup from '../components/login/Signup'
//import Home from '../components/homepage/Home'
//import Logout from '../components/login/logout'


const routes = [
    { path: '/login', component: Login },
    //{ path: '/signup', component: Signup },
    //{ path: '/logout', component: Logout },
    //{ path: '/homepage', component: Home, name:'homepage'}
    
  
]



const router = new VueRouter({
routes, // short for `routes: routes`,
hashbang : false,
mode : 'history'
})


export default router