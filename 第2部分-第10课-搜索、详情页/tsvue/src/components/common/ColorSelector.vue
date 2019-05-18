<template lang="html">
  <ul class="color-select">
    <li v-for="item in data" :key="item.value" @click="$emit('input', item.value)" :class="{active: item.value==value}">
      <img :src="item.img|imgpath" alt="">
    </li>
  </ul>
</template>

<script lang="ts">
import {colorData} from '@/types/detail';

import {Component, Vue, Prop} from 'vue-property-decorator';

@Component
export default class ColorSelector extends Vue {
  @Prop(Array) private data!:colorData[];
  @Prop(String) private value!:string;
}
</script>

<style scoped>
.color-select {overflow:hidden;}
.color-select li {float:left;width:30px;height:30px;margin-right:5px;margin-bottom:10px;border:1px solid #DCDCDC;padding:2px;}
.color-select li.active {border:2px solid #F40;padding:1px;}
</style>

<style lang="css">

</style>
