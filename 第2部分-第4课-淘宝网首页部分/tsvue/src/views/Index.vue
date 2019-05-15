<template lang="html">
  <div>
    <SiteNav/>
    <Header/>
    <div class="index-page">
      <Nav/>
    </div>
  </div>
</template>

<script lang="ts">
import SiteNav from '@/components/common/SiteNav';
import Header from '@/components/index/Header';
import Nav from '@/components/index/Nav';
import {Component, Vue} from 'vue-property-decorator';

@Component({
  components: {
    SiteNav,
    Header,
    Nav
  }
})
export default class Index extends Vue {

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
