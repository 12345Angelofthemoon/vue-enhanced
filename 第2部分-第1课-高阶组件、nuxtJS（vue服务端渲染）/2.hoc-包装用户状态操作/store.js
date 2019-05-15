import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '',
    userID: 0,
    items: ['aaa', 'bbb', 'ccc']
  },
  mutations: {
    setUsername(state, username){
      state.username=username;
    },
    setUserID(state, userID){
      state.userID=userID;
    }
  },
  actions: {
    async login({commit}, {username, password}){
      if(username=='blue' && password=='123456'){
        commit('setUsername', 'blue');
        commit('setUserID', 1);
      }else{
        alert('登录失败');
      }
    },
    async logout({commit}){
      commit('setUsername', '');
      commit('setUserID', 0);
    }
  },
  getters: {
    isLogin(state){
      return state.userID!=0;
    },
    curUser(state){
      return {
        ID: state.userID,
        name: state.username
      }
    },
    getItemByIndex(state){
      return function (index){
        return state.items[index];
      };
    }
  }
})
