<template lang="html">
  <div>
    <a-form
      :form="form"
      @submit.prevent="fnSubmit"
    >
      <a-form-item label="用户名" :label-col="{span:5}" :wrapper-col="{span:12}">
        <a-input placeholder="请输入用户名" v-decorator="formDecrorator.user"/>
      </a-form-item>

      <a-form-item label="密码" :label-col="{span:5}" :wrapper-col="{span:12}">
        <a-input type="password" placeholder="请输入密码" v-decorator="['password', {
          rules: [
            {required: true, message: '必须填写密码'}
          ]
          }]"/>
      </a-form-item>

      <a-form-item :wrapper-col="{span:12,offset:5}">
        <a-button
          type="primary"
          html-type="submit"
        >
          提交
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  data(){
    return {
      form: this.$form.createForm(this),
      formDecrorator: {
        user: ['user', {
          rules: [
            {required: true, message: '必须填写用户名'}
          ]
        }]
      }
    }
  },
  methods: {
    fnSubmit(){
      // ev.preventDefault();

      // alert('提交');

      this.form.validateFields((err, data)=>{
        console.log(err, data);
      });
    }
  }
}
</script>

<style>
</style>
