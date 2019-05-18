import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

import axios from './libs/axios';
Vue.prototype.axios=axios;

// import Msg from '@/components/msg';
// Vue.prototype.$message=function (str){
//   let msg=new Msg({
//     propsData: {
//       msg: str
//     }
//   });
//
//   let oDiv=document.createElement('div');
//   document.body.appendChild(oDiv);
//
//   msg.$mount(oDiv);
// };

Vue.filter('imgpath', function (value:string):string{
  return 'http://api.zhinengshe.com/study/taobao/'+value;
});
Vue.filter('currency', function (value:number):string{
  return '￥'+value.toFixed(2);
});
Vue.filter('wan', function (value:number):string{
  if(value>=10000){
    return (value/10000).toFixed(1)+'万+';
  }else{
    return value+'';
  }
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
