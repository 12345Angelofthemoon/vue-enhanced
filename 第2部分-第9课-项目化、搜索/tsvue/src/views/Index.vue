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
import SiteNav from '@/components/common/SiteNav.vue';
import Header from '@/components/index/Header.vue';
import Nav from '@/components/index/Nav.vue';
import ItemList from '@/components/index/ItemList.vue';
import {Component, Vue} from 'vue-property-decorator';

@Component({
  components: {
    SiteNav,
    Header,
    Nav,
    ItemList
  },
})
export default class Index extends Vue {
  private axios!:Function;

  private keywordList=[];
  private itemList=[];

  async created(){
    [
      {data: {data: this.keywordList}},
      {data: {data: this.itemList}},
    ]=await Promise.all([
      this.axios('/index/hot/keywords'),
      this.axios('/index/hot/list')
    ]);
  }
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
