<template lang="html">
  <div class="login-panel">
    <h2>{{title}}</h2>

    <div class="login-form">
      <div class="login-form-item clearfix">
        <i class="fl icon icon-user"></i>
        <input type="text" v-model="form.name" placeholder="会员名/邮箱/手机号" />
      </div>
      <div class="login-form-item clearfix">
        <i class="fl icon icon-pass"></i>
        <input type="password" v-model="form.password" />
      </div>
      <div class="login-form-item clearfix">
        <button type="button" class="submit-btn" @click="submit">登 录</button>
      </div>
    </div>

    <div class="links">
      <a href="javascript:;" @click="$router.push({name: 'reg'})">注册账号</a>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Prop, Watch} from 'vue-property-decorator';

type LoginForm={
  name: string,
  password: string
};

@Component
export default class Panel extends Vue{
  private axios!:Function;

  @Prop(String) private title!:string;

  private form:LoginForm={
    name: '',
    password: ''
  };

  private async submit(){
    try{
      let {data: {err, msg, data}}=await this.axios('/user/login', {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        data: JSON.stringify(this.form)
      });

      if(err){
        alert(msg);
      }else{
        const {token, token_expires}=data;

        //token存在localStorage里面
        localStorage.token=token;
        localStorage.token_expires=token_expires;

        await this.$store.dispatch('getUserInfo');

        // alert('登录成功');
        this.$router.push({name: 'index'});
      }


    }catch(e){
      alert('网络错误，请刷新重试');
      console.log(e);
    }
  }
}
</script>

<style lang="css" scoped>
.login-panel {
  position:absolute;
  top:120px;right:60px;
  width:300px;height:302px;
  background:#e9e9f2;
  padding:25px 25px 23px;
}

.login-panel h2 {
  margin-top:9px;
  padding-bottom:8px;
  font-weight:700;
  height:18px;
  line-height:18px;
  font-size:16px;
}

.login-form {

}

.login-form-item {
  margin-top:20px;
  width:298px;height:40px;
  border:#ddd;
}

.login-form-item .icon {
  width:40px;height:40px;
}
.login-form-item input {width:248px;height:40px;line-height:40px;padding-left:10px;}

.icon-user {background:url(../../assets/imgs/login-icon-user.png) no-repeat}
.icon-pass {background:url(../../assets/imgs/login-icon-pass.png) no-repeat}

.submit-btn {width:300px;height:42px;background:#F40;border-radius:2px;border:none;color:#FFF;}

.links {margin-top:18px;text-align:right;}
</style>
