<template lang="html">
  <el-dialog title="添加" :visible.sync="visible">
    {{form}}
    <el-form label-width="100px">
      <el-form-item label="标题">
        <el-input v-model="form.title" placeholder="输入店铺标题" />
      </el-form-item>

      <el-form-item label="店铺头像">
        <el-upload
          :action="action"
          :limit="1"
          :on-success="onImgSuccess"
          :on-remove="onImgRemove"
        >
          <el-button type="primary">添加</el-button>
        </el-upload>
      </el-form-item>

      <el-form-item label="banner图">
        <el-upload
          :action="action"
          :limit="1"
          :on-success="onBannerSuccess"
          :on-remove="onBannerRemove"
        >
          <el-button type="primary">添加</el-button>
        </el-upload>
      </el-form-item>

      <el-form-item label="banner颜色">
        <el-input type="color" v-model="form.banner_color" style="width:100px" />
      </el-form-item>

      <el-form-item label="菜单">
        <el-row type="flex" class="menu" v-for="menu,index in form.menus" :key="index">
          <el-col :span="6">
            <el-input v-model="menu.title" placeholder="菜单名称" />
          </el-col>
          <el-col :span="10">
            <el-input v-model="menu.href" placeholder="链接地址" />
          </el-col>
          <el-col>
            <el-button type="text" style="color:red;" @click="form.menus.splice(index, 1)">删除</el-button>
          </el-col>
        </el-row>
        <el-button type="text" @click="form.menus.push({title: '', href: ''})">添加一项</el-button>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submit">提 交</el-button>
        <el-button @click="visible=false">取 消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
export default {
  data(){
    return {
      visible: false,
      action: '',
      form: {
        menus: [
          {title: '', href: ''}
        ]
      }
    }
  },
  watch: {
    visible(){
      if(this.visible==false){
        this.form={
          menus: [
            {title: '', href: ''}
          ]
        };
      }
    }
  },
  created(){
    this.action='http://localhost:9001/taobaov2/tempupload?token='+this.$store.state.token;
  },
  methods: {
    onImgSuccess(res, file, list){
      this.$set(this.form, 'img', res.data[0]);
    },
    onImgRemove(file, list){
      this.$delete(this.form, 'img');
    },
    onBannerSuccess(res, file, list){
      this.$set(this.form, 'banner_img', res.data[0]);
    },
    onBannerRemove(file, list){
      this.form.banner_img=undefined;
      this.$delete(this.form, 'banner_img');
    },
    async submit(){
      let {data}=await this.$axios('/shop/create', {
        method: 'post',
        headers: {
          token: this.$store.state.token,
          'content-type': 'application/json'
        },
        data: this.form
      });

      console.log(data);
    }
  }
}
</script>

<style lang="css" scoped>
.menu {margin:10px auto;}
.menu .el-col {padding:5px;}
</style>
