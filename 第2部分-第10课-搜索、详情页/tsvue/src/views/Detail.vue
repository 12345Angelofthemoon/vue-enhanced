<template lang="html">
  <div v-if="loaded">
    <SiteNav />
    <Header :data="detail" />
    <div class="page">
      <Info :data="detail" />
      <DetailInfo :data="detail"/>
    </div>
  </div>
</template>

<script lang="ts">
import {detail} from '@/types/detail';
import {getDetail} from '@/model/detail';

import SiteNav from '@/components/common/SiteNav.vue';
import Header from '@/components/detail/Header.vue';
import Info from '@/components/detail/Info.vue';
import DetailInfo from '@/components/detail/DetailInfo.vue';

import {Component, Vue} from 'vue-property-decorator';

@Component({
  components: {SiteNav, Header, Info, DetailInfo}
})
export default class Index extends Vue {
  private loaded=false;
  private detail:detail={
    shop: {
      menus: []
    },
    goods: {
      sizes: [],
      colors: [],
    },
    magnifier: {
      thumbs: [],
      bigs: [],
      orgs: []
    },
    detail: {
      info: [],
      imgs: []
    },
  };

  async created(){
    this.detail=await getDetail();

    this.loaded=true;
  }
}
</script>

<style scoped>
.page {width:1140px;margin:0 auto;}
</style>

<style lang="css">
.site-nav-page {width:1190px;}
.container-950 {width:950px;margin:0 auto;}
</style>
