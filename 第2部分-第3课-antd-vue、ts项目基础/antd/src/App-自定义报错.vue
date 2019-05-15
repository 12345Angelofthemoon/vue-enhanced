<template lang="html">
  <div>
    {{errors}}
    <a-form
      :form="form"
    >
      <a-form-item
        label="用户名"
        :label-col="{span:5}" :wrapper-col="{span:12}"
        :validate-status="errors.user"
        :help="errors.user_msg"
      >
        <a-input placeholder="请输入用户名"/>
      </a-form-item>

      <a-form-item label="密码" :label-col="{span:5}" :wrapper-col="{span:12}">
        <a-input type="password" placeholder="请输入密码"/>
      </a-form-item>

      <a-form-item :wrapper-col="{span:12,offset:5}">
        <a-button
          type="primary"
          @click="submit"
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
      errors: {

      }
    }
  },
  methods: {
    submit(){
      this.$set(this.errors, 'user', 'error');
      this.$set(this.errors, 'user_msg', '用户名已存在');
    }
  }
}
</script>

<style>
</style>
