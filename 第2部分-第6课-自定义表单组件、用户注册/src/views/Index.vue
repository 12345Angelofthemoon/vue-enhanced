<template lang="html">
  <div>
    <SiteNav/>
    <Header/>
    <div class="index-page">
      <Nav/>
      <ItemList :keywordList="keywordList" :itemList="itemList"/>
    </div>

  </div>
</template>

<script lang="ts">
import SiteNav from '@/components/common/SiteNav';
import Header from '@/components/index/Header';
import Nav from '@/components/index/Nav';
import ItemList from '@/components/index/ItemList';
import {Component, Vue} from 'vue-property-decorator';

@Component({
  components: {
    SiteNav,
    Header,
    Nav,
    ItemList
  },
  async created(){
    [
      {data: {data: this.keywordList}},
      {data: {data: this.itemList}},
    ]=await Promise.all([
      this.axios('/index/hot/keywords'),
      this.axios('/index/hot/list')
    ]);

    // this.keywordList=keywordList;
    // this.itemList=itemList;

    // this.keywordList=arr[0].data.data;
  }
  // async created(){
  //   let {data: {data: keywordList}}=await ;
  //   let {data: {data: itemList}}=await ;
  //
  //
  //   this.keywordList=keywordList;
  //   this.itemList=itemList;
  // },
})
export default class Index extends Vue {
  private keywordList=[];
  private itemList=[];
}
</script>

<style scoped>
.index-page {background:#f4f4f4;}
</style>

<style lang="css">
.site-nav-page {
  width:1090px;
  margin:0 auto;
}

.index-page-container {width:1190px;margin:0 auto;}
</style>
