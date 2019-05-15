<template>
  <div>
    {{$store.getters.getItemByIndex(0)}}
    <div v-if="isLogin">
      欢迎，{{curUser.name}} <a href="javascript:;" @click="logout()">退出</a>
    </div>
    <div v-else>
      请登录 <button type="button" @click="login({username: 'blue', password: '123456'})">登录</button>
    </div>
  </div>
</template>

<script>
// import {mapActions, mapGetters} from 'vuex';

export default {
  props: ['isLogin', 'curUser', 'login', 'logout']
  // methods: {
  //   ...mapActions(['login', 'logout']),
  // },
  // computed: {
  //   ...mapGetters(['isLogin', 'curUser']),
  // }
}
</script>
