export function state(){
  return {
    token: '',
    token_expires: 0,
  };
}

export const mutations={
  setToken(state, {token, token_expires}){
    state.token=token;
    state.token_expires=token_expires;

    sessionStorage.token=token;
    sessionStorage.token_expires=token_expires;
  }
};

export const actions={
  setToken({commit}, obj){
    commit('setToken', obj);
  },

  loadToken({commit}, obj){
    if(sessionStorage.token&&sessionStorage.token_expires){
      commit('setToken', {
        token: sessionStorage.token,
        token_expires: sessionStorage.token_expires
      });
    }
  }
};
