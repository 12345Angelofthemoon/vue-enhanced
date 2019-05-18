<template lang="html">
  <div class="detail-imgs">
    <img v-for="img in data.imgs" :src="img|imgpath" alt="">
  </div>
</template>

<script lang="ts">
import {detailData} from '@/types/detail';
import {Component, Vue, Prop} from 'vue-property-decorator';

@Component
export default class Index extends Vue {
  @Prop(Object) private data!:detailData;
}
</script>

<style scoped>
.detail-imgs {width:100%;padding-top:30px;}
.detail-imgs img {display:block;width:100%;}
</style>

<style lang="css">

</style>
