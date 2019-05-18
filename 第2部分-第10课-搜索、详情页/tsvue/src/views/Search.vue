<template lang="html">
  <div>
    <SiteNav/>
    <div class="page">
      <SearchHeader @searchupdate="onSearchUpdate" :pagecount="pagecount" />

      <C2CList :list="list" />
      <ADList :list="adlist" />

    </div>
  </div>
</template>

<script lang="ts">
import {searchFilters, c2cData, shopData,c2cSearchResult, adData} from '@/types/search';
import {searchC2C, searchSsrch, searchAd} from '@/model/search';
import {Component, Vue, Watch} from 'vue-property-decorator';

import SearchHeader from '@/components/search/header.vue';
import SiteNav from '@/components/common/SiteNav.vue';
import C2CList from '@/components/search/c2clist.vue';
import ADList from '@/components/search/adlist.vue';


@Component({
  components: {
    SearchHeader,
    SiteNav,
    C2CList,
    ADList
  },
})
export default class Search extends Vue {
  private list:c2cData[]=[];
  private filter!:searchFilters;
  private pagecount:number=0;
  private adlist:adData[]=[];

  async onSearchUpdate(filter:searchFilters){
    //结果列表
    let result=await searchC2C(filter);
    if(result.rows.length==0){
      alert('没有相应数据');
    }

    this.list=result.rows;
    this.pagecount=result.pagecount;

    //广告列表
    this.adlist=await searchAd();
  }
}
</script>

<style>
.site-nav-page {width:1350px;margin:0 auto;position:relative;}
</style>

<style scoped>
.page {width:1350px; margin:0 auto;position:relative;}
</style>
