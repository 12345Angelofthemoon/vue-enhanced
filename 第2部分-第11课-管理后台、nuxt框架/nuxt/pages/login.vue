<template lang="html">
  <el-card class="login">
    {{$store.state.token}}
    <div slot="header">
      登录
    </div>
    <el-form label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="form.name" placeholder="用户名" />
      </el-form-item>
      <el-form-item label="用户名">
        <el-input type="password" v-model="form.password" placeholder="密码" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">登录</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  data(){
    return {
      form: {
        name: '',
        password: '',
      }
    };
  },
  methods: {
    async submit(){
      let {data}=await this.$axios('/user/login', {
        method: 'post',
        data: this.form
      });

      if(data.err){
        alert(data.msg);
      }else{
        this.$store.dispatch('setToken', data.data);

        this.$router.push({name: 'index'});
      }

      // console.log(data);

    }
  }
}
</script>

<style lang="css" scoped>
.login {width:600px;margin:100px auto 0;}
</style>
