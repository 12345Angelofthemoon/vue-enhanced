import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import Index from '@/views/Index';
import Reg from '@/views/Reg';
import Login from '@/views/Login';

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/reg',
      name: 'reg',
      component: Reg,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
  ],
});
