<template lang="html">
  <ul class="size-select" v-if="data">
    <li v-for="item in data" :key="item.value" @click="$emit('input', item.value)" :class="{active: item.value==value}">{{item.title}}</li>
  </ul>
</template>

<script lang="ts">
import {size} from '@/types/detail';
import {Component, Vue, Prop} from 'vue-property-decorator';

@Component
export default class SizeSelector extends Vue {
  @Prop(Array) private data!:size[];
  @Prop(String) private value!:string;
}
</script>

<style scoped>
.size-select {overflow:hidden;}
.size-select li {float:left;padding:3px 6px;border:1px solid #DCDCDC;margin-right:5px;margin-bottom:10px;cursor:pointer;}
.size-select li.active {border:2px solid #F40;padding:2px 5px;color:#F40;}
</style>

<style lang="css">

</style>
