<template lang="html">
  <div>
    <SiteNav/>
    <div class="container">
      <header class="reg-header">
        <h1 class="logo" @click="$router.push({name: 'index'})">淘宝网</h1>
      </header>

      <div class="steps">
        <Step :steps="['设置用户名', '填写账号信息', '注册成功']" :cur="step" />

        <!-- 用户名 -->
        <RegForm ref="form" :rules="rules1" :form="form" v-if="step==0" :key="0">
          <!-- <FormItem label="手机号" validate="error" validate_msg="手机号填写失败"> -->
          <FormItem label="手机号" prop="mobile">
            <input class="form-control" type="text" placeholder="请输入你的手机号" v-model="form.mobile" />
          </FormItem>
          <!-- <FormItem label="电子邮箱" validate="success"> -->
          <FormItem label="电子邮箱" prop="email">
            <input class="form-control" type="text" placeholder="请输入你的电子邮箱" v-model="form.email" />
          </FormItem>
          <FormItem>
            <button type="button" class="form-control btn-next" :class="{disabled: !allOk}" @click="next">下一步</button>
          </FormItem>
        </RegForm>

        <!-- 账号信息 -->
        <RegForm ref="form" :rules="rules2" :form="form" v-if="step==1" :key="1">
          <FormItem label="登录名">
            <div>{{form.mobile}}</div>
          </FormItem>
          <FormItem label="登录密码" prop="password">
            <input class="form-control" type="password" placeholder="请输入你的密码" v-model="form.password"
              @focus="passCheckShow1=true,$refs"
              @blur="passCheckShow1=false"
            />
            <PasswordCheck ref="passCheck1" v-if="passCheckShow1" :check="form.password" />
          </FormItem>
          <FormItem label="确认密码" prop="password2">
            <input class="form-control" type="password" placeholder="请再次输入你的密码" v-model="form.password2"
              @focus="passCheckShow2=true"
              @blur="passCheckShow2=false"
            />
            <PasswordCheck ref="passCheck2" v-if="passCheckShow2" :check="form.password2" />
          </FormItem>
          <FormItem>
            <button type="button" class="form-control btn-next" :class="{disabled: !allOk}" @click="submit()">提交</button>
          </FormItem>
        </RegForm>

        <!-- 成功 -->
        <div class="success-form" v-if="step==2" :key="2">
          <img src="../assets/imgs/reg-success.png" alt=""/>
          <div class="txt">注册成功</div>
          <div class="login-ref-container">
            <a href="javascript:;" class="login-ref" @click="$router.push({name: 'login'})">立即登录</a>
          </div>
        </div>
      </div>
    </div>



    <!-- <div class="dialog reg-agreement" style="display:none;">
      <h3 class="dialog-title">
        注册协议
        <a href="javascript:;" class="dialog-close-btn fr">x</a>
      </h3>
      <div class="content">
        <p>【审慎阅读】您在申请注册流程中点击同意前，应当认真阅读以下协议。请您务必审慎阅读、充分理解协议中相关条款内容，其中包括：</p>

        <p>1、与您约定免除或限制责任的条款；</p>
        <p>2、与您约定法律适用和管辖的条款；</p>
        <p>3、其他以粗体下划线标识的重要条款。</p>
        <p>如您对协议有任何疑问，可向平台客服咨询。</p>
        <p>【特别提示】当您按照注册页面提示填写信息、阅读并同意协议且完成全部注册程序后，即表示您已充分阅读、理解并接受协议的全部内容。如您因平台服务与淘宝发生争议的，适用《淘宝平台服务协议》处理。如您在使用平台服务过程中与其他用户发生争议的，依您与其他用户达成的协议处理。</p>
        <p>阅读协议的过程中，如果您不同意相关协议或其中任何条款约定，您应立即停止注册程序。</p>
        <p>淘宝平台服务协议</p>
        <p>隐私权政策</p>
        <p>法律声明</p>
        <p>支付宝及客户端服务协议</p>
        <button type="button" class="btn-agreement">同意协议</button>
      </div>
    </div> -->
  </div>
</template>

<script lang="ts">
import SiteNav from '@/components/common/SiteNav.vue';
import Step from '@/components/reg/step.vue';
import RegForm from '@/components/reg/RegForm.vue';
import FormItem from '@/components/reg/RegFormItem.vue';
import PasswordCheck from '@/components/reg/PasswordCheck.vue';

import {Component, Vue} from 'vue-property-decorator';

import {FormRule} from '@/types/index';

import {RegFormData} from '@/types';



@Component({
  components: {
    SiteNav,
    Step,
    RegForm,
    FormItem,
    PasswordCheck
  },
})
export default class Reg extends Vue {
  private axios!:Function;

  private allOk=false;
  private step:number=0;
  // private axios!:Axios;

  async mounted(){
    this.$watch('form', this.checkAll, {
      deep: true,
      immediate: true
    })
    // await this.checkAll();
  }

  private form:RegFormData={
    email: '',
    mobile: '',
    password: '',
    password2: ''
  };

  private rules1:{[index:string]: FormRule[]}={
    mobile: [
      {required: true, message: '手机号是必填的'},
      {reg: /^(13\d{9}|15[0-35-9]\d{8}|18\d{9}|145\d{8}|17[06-8]\d{8}|147\d{8})$/, message: '你填写的手机号有误'},
      // {check: async ()=>{}, message: '此手机已被占用'}
    ],
    email: [
      {required: true, message: '邮箱是必填的'},
      {reg: /^\w+@[a-z0-9\-]+(\.[a-z]{2,6}){1,2}$/, message: '邮箱有错'},
    ]
  };

  private rules2:{[index:string]: FormRule[]}={
    password: [
      {required: true, message: '密码必须填'},
      {reg: /^[0-9a-z\-\+\_\=\%\.\<\>\,\?\$]{6,}$/i, message: '密码至少六位'},
    ],
    password2: [
      {required: true, message: '确认密码必须填'},
      {reg: /^[0-9a-z\-\+\_\=\%\.\<\>\,\?\$]{6,}$/i, message: '确认密码至少六位'},
      {check: ()=>{
        return this.form.password==this.form.password2;
      }, message: '两次密码必须一致'}
    ]
  };

  private passCheckShow1=false;
  private passCheckShow2=false;

  private async checkAll(){
    if(this.$refs.form instanceof RegForm){
      this.allOk=await this.$refs.form.validate(false);
    }
  }

  private async next(){
    // let form:Validate=<RegForm>this.$refs.form;

    if(this.$refs.form instanceof RegForm){
      let res=await this.$refs.form.validate(false);

      if(res){
        this.step++;
      }
    }

  }

  private async submit(){
    let {data: {err, msg, data}}=await this.axios('/user/reg', {
      method: 'post',
      //提交json
      headers: {
        'content-type': 'application/json'
      },
      //提交json——转成字符串
      data: JSON.stringify({
        mobile: this.form.mobile,
        email: this.form.email,
        password: this.form.password
      })
    });

    if(err){
      alert(msg);
    }else{
      console.log(data);

      this.step++;
    }
  }
}
</script>

<style lang="css">
.site-nav-page {
  width:1190px;
  margin:0 auto;
}
</style>

<style scoped>
.container {width:1190px; margin:0 auto;}

/*  */
.reg-header {
  height:43px;padding:20px 0;
}
.logo {width:109px;height:43px;background:url(../assets/imgs/login_logo.png) no-repeat;text-indent:-9999px;}

/*  */
.steps {height:46px;border-bottom:2px solid #e6e6e6}

/*  */



/*  */
.success-form {width:720px;margin:10px auto;text-align:center;}
.success-form .txt {
  font-size:26px;color:#AAA;
}
.success-form .login-ref-container {
  margin-top:20px;
}

/*  */
.dialog {
  padding:20px;border:2px solid #dedede;border-top:2px solid #ff4a00;
  position:absolute;left:50%;top:230px;margin-left:-350px;
  z-index:99;
  background:#FFF;
}
.dialog-title {font-size:16px;height:24px;font-weight:bold;}
.dialog-close-btn {font-size:30px;line-height:16px;color:#CCC;}

/*  */
.reg-agreement {
  width:680px;height:420px;
}

.reg-agreement .content p {
  font-size:14px; margin:4px 0;
}

.btn-agreement {
  width:140px;height:36px;padding:0 20px;
  background:#ff4001;
  color:#FFF;
  font-size:12px;font-weight:700px;
  border:none;
  position:absolute;
  left:50%;bottom:20px;margin-left:-70px;
}
</style>
