import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import Index from '@/views/Index.vue';
import Reg from '@/views/Reg.vue';
import Login from '@/views/Login.vue';
import Search from '@/views/Search.vue';
import Detail from '@/views/Detail.vue';

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path: '/', name: 'index', component: Index},
    {path: '/reg', name: 'reg', component: Reg},
    {path: '/login', name: 'login', component: Login},
    {path: '/search/:keyword/:page?', name: 'search', component: Search},
    {path: '/item', name: 'item', component: Detail},
  ],
});
