<template>
  <div>
    <cmpA/>
    <cmpC/>
  </div>
</template>

<script>
import cmpA from '@/components/cmp-a';
import cmpC from '@/components/cmp-c';
// import cmpB from '@/components/cmp-b';

import Vue from 'vue';

// import {mapActions, mapGetters} from 'vuex';
//
// function wrap(component){
//   return Vue.component('cmpB', {
//     methods: {
//       ...mapActions(['login', 'logout']),
//     },
//     computed: {
//       ...mapGetters(['isLogin', 'curUser']),
//     },
//     render(createElement){
//       return createElement(cmpA, {
//         props: {
//           login: this.login,
//           logout: this.logout,
//           isLogin: this.isLogin,
//           curUser: this.curUser,
//         }
//       });
//     }
//   });
// }
//
//
// let cmpB=wrap(cmpA);

import userState from '@/lib/userState';


export default {
  components: {
    cmpA: userState(cmpA),
    cmpC: userState(cmpC),
  }
}
</script>

<style lang="less">
</style>
