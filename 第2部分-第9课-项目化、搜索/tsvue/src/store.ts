import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import axios from './libs/axios';

export default new Vuex.Store({
  state: {
    token: undefined,
    token_expires: 0,
    mobile: undefined,
    email: undefined,

    logined: false,
  },
  mutations: {
    setToken(state, {token, token_expires}){
      state.token=token;
      state.token_expires=token_expires;
    },

    setUserInfo(state, {mobile, email}){
      state.mobile=mobile;
      state.email=email;
    },

    setLogined(state, logined){
      state.logined=logined;
    }
  },
  actions: {
    async getUserInfo({commit}){
      const {token, token_expires}=localStorage;

      if(token && token_expires && token_expires*1000>Date.now()){
        try{
          let {data: {err, msg, data}}=await axios('/user/getinfo', {
            params: {token}
          });

          if(err){
            commit('setToken', {token: undefined, token_expires: undefined});
          }else{
            commit('setToken', {token, token_expires});
            commit('setUserInfo', data);
          }
        }catch(e){
          console.log('获取用户信息失败');
          console.error(e);
        }
      }

      commit('setLogined', true);
    },

    async logout({commit}){
      //1.通知服务器——token销毁（不然会有安全隐患）
      // TODO

      //2.销毁localStorage的token
      delete localStorage.token;
      delete localStorage.token_expires;

      commit('setToken', {token: undefined, token_expires: undefined});
      commit('setUserInfo', {mobile: undefined, email: undefined});
    }
  },
  getters: {
    token(state){
      return state.token;
    },
    nickName(state){
      return state.mobile;
    }
  }
});
