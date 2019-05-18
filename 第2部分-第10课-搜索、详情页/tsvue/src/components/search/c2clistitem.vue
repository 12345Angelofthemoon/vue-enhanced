<template lang="html">
  <div class="goods-item fl">
    <div class="line-1">
      <a :href="data.href">
        <img :src="data.img|imgpath" :alt="data.title">
      </a>
    </div>
    <div class="line-2 clearfix">
      <span class="price fl">{{data.price|currency}}</span>
      <span class="sales fr">{{data.sales|wan}}人付款</span>
    </div>
    <div class="line-3">
      <a :href="data.href">{{data.title}}</a>
    </div>
    <div class="line-4 clearfix">
      <a :href="data.shophref" class="shop fl">{{data.shopname}}</a>
      <span class="location fr">湖北 武汉</span>
    </div>
    <div class="line-5">
      <a class="ww" :href="data.ww_href">旺旺</a>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';

import {c2cData} from '@/types/search';


@Component
export default class ListItem extends Vue {
  @Prop(Object) private readonly data!:c2cData;
}
</script>

<style scoped>
.goods-item {width:250px;height:390px; margin-top:22px; margin-right:20px; border:1px solid #ededed; float:left}
.goods-item:hover {border-color:#f40;transition:.3s all ease;}

.goods-item .line-1, .goods-item .line-1 img {width:250px;height:250px;}
.goods-item .line-2 {height:22px;line-height:22px;margin-top:11px;overflow:hidden;padding:0 10px;}
.goods-item .line-2 .price {font-size:18px;color:#F40;font-family: arial;}
.goods-item .line-2 .sales {color:#888;}
.goods-item .line-3 {margin-top:6px;padding:0 10px; color:#3d3d3d;font:12px/1.5 tahoma,arial,'Hiragino Sans GB','\5b8b\4f53',sans-serif;font-weight:400;}
.goods-item .line-4 {margin-top:5px;padding:0 10px;}
.goods-item .line-4 .shop {color:#888;line-height:22p;}
.goods-item .line-4 .location {color:#888;}
.goods-item .line-5 {margin-top:10px;padding:0 10px;}
.goods-item .line-5 .ww {float:right;background:url(../../assets/imgs/site-icons.png) no-repeat -435px -86px;width:16px;height:16px;text-indent:-99999px;}
</style>
