<template lang="html">
  <div class="box">
    <nuxt-link to="/">首页</nuxt-link>
    你好啊

    {{a}}
    <button type="button" @click="add()">++</button>

    {{$route.params}}
  </div>
</template>

<script>
export default {
  data(){
    return {
      a: 12
    }
  },
  async created(){
    let {data}=await this.$axios('/a.txt');

    console.log(data);
  },
  methods: {
    add(){
      this.a++;
    }
  }
}
</script>

<style lang="css" scoped>
.box {
  text-align:center;
  font-size:30px;
  color:#666;
}
</style>
