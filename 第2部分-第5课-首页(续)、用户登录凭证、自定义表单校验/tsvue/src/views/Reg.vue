<template lang="html">
  <div>
    <SiteNav/>
    <div class="container">
      <header class="reg-header">
        <h1 class="logo">淘宝网</h1>
      </header>

      <div class="steps">
        <Step :steps="['设置用户名', '填写账号信息', '注册成功']" />

        {{form}}

        <button type="button" @click="fn()">按钮</button>

        <!-- 用户名 -->
        <RegForm ref="form1" :rules="[]" :form="form">
          <!-- <FormItem label="手机号" validate="error" validate_msg="手机号填写失败"> -->
          <FormItem label="手机号" prop="mobile">
            <input class="form-control" type="text" placeholder="请输入你的手机号" v-model="form.mobile" />
          </FormItem>
          <!-- <FormItem label="电子邮箱" validate="success"> -->
          <FormItem label="电子邮箱" prop="email">
            <input class="form-control" type="text" placeholder="请输入你的电子邮箱" v-model="form.email" />
          </FormItem>
          <FormItem>
            <button type="button" class="form-control btn-next">下一步</button>
            <button type="button" class="form-control btn-next disabled">下一步</button>
          </FormItem>
        </RegForm>

        <!-- 账号信息 -->
        <RegForm ref="form2" :rules="[]" :form="form">
          <FormItem label="登录名">
            <div>13888888888</div>
          </FormItem>
          <FormItem label="登录密码" prop="password">
            <input class="form-control" type="password" placeholder="请输入你的密码" v-model="form.password" />
          </FormItem>
          <FormItem label="确认密码" prop="password2">
            <input class="form-control" type="password" placeholder="请再次输入你的密码" v-model="form.password2" />
          </FormItem>
          <FormItem>
            <button type="button" class="form-control btn-next">提交</button>
            <button type="button" class="form-control btn-next disabled">提交</button>
          </FormItem>
        </RegForm>

        <!-- 成功 -->
        <div class="success-form">
          <img src="../assets/imgs/reg-success.png" alt=""/>
          <div class="txt">注册成功</div>
          <div class="login-ref-container">
            <a href="#" class="login-ref">立即登录</a>
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
import SiteNav from '@/components/common/SiteNav';
import Step from '@/components/reg/step';
import RegForm from '@/components/reg/RegForm';
import FormItem from '@/components/reg/RegFormItem';
import {Component, Vue} from 'vue-property-decorator';

@Component({
  components: {
    SiteNav,
    Step,
    RegForm,
    FormItem
  }
})
export default class Reg extends Vue {
  private form={};

  private fn(){
    let res=this.$refs.form1.validate();
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
