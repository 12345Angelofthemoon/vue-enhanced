import Vue from 'vue';
import {mapActions, mapGetters} from 'vuex';

export default function wrap(component){
  return Vue.component('sdfasdgdfs', {
    methods: {
      ...mapActions(['login', 'logout']),
    },
    computed: {
      ...mapGetters(['isLogin', 'curUser']),
    },
    render(createElement){
      return createElement(component, {
        props: {
          login: this.login,
          logout: this.logout,
          isLogin: this.isLogin,
          curUser: this.curUser,
        }
      });
    }
  });
}
