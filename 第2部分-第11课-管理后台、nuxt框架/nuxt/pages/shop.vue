<template lang="html">
  <Main>
    <el-form inline>
      <el-form-item>
        <el-button type="primary" @click="$refs.dialog.visible=true">添加</el-button>
      </el-form-item>
    </el-form>

    <Dialog ref="dialog"/>

    <el-table>
    </el-table>
  </Main>
</template>

<script>
import Main from '~/components/Main';
import Dialog from '~/components/ShopDialog';

export default {
  components: {
    Main, Dialog
  },
  data(){
    return {
      shops: [],
      pagecount: 0
    };
  },
  async created(){
    this.$store.dispatch('loadToken');

    if(!this.$store.state.token){
      this.$router.push({name: 'login'});
      return;
    }

    let {data: {err, msg, data}}=await this.$axios('/shop/list', {
      headers: {
        token: this.$store.state.token
      }
    });

    if(err){
      alert(msg);
    }else{
      this.shops=data.rows;
      this.pagecount=data.total;
    }

    // '/shop/list?page=xxx'
  }
}
</script>

<style lang="css" scoped>
</style>
