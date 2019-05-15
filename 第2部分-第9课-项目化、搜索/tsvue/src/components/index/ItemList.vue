<template lang="html">
  <div class="index-page-container">
    <div class="index-page-inner">
      <h3>热卖单品</h3>
      <div class="sale-hd" v-if="keywordList">
        <div class="sale-hd-inner">
          <a :href="item.href" v-for="item in keywordList">{{item.title}}</a>
        </div>
      </div>
      <ul class="sale-bd clearfix">
        <li v-for="item,index in itemList" :class="{item1: index==0}">
          <a :href="item.href">
            <img :src="item.img|imgpath" :alt="item.title">
          </a>
          <a :href="item.href" class="line1">{{item.title}}</a>
          <div class="line2">
            <a href="#">评价{{item.comment}}</a>
            <a href="#">收藏{{item.fav}}</a>
          </div>
          <div class="line3 clearfix">
            <a href="#" class="price fl"><i>￥</i>{{item.price}}</a>
            <a href="#" class="saled fr">月销{{item.sales}}笔</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import {sugData,hotGoods} from '@/types';
import {Component, Vue, Prop} from 'vue-property-decorator';

@Component
export default class ItemList extends Vue {
  @Prop(Array) private keywordList!:sugData[];
  @Prop({type:Array, required:true}) private itemList!:hotGoods[];
}
</script>

<style scoped>
/*  */
.index-page-inner {
  margin-top:10px;
  background:#FFF;
  overflow:hidden;
}
.index-page-inner h3 {
  height:22px;line-height:22px;
  margin:17px 18px;
  font-size:20px;color:#ff242d;
  font-weight:bold;
}
.index-page-inner h3::before {
  content:'';
  float:left;
  position:relative;
  top:2px;
  width:4px;height:16px;
  margin-right:7px;
  background:linear-gradient(to bottom, #ff7436, #ff0000);
}

.sale-hd {
  width:1172px;height:20px;
  padding:0 0 13px 18px;
  overflow:hidden;
}
.sale-hd-inner {
  max-width:1110px;height:20px;line-height:20px;
}
.sale-hd-inner a {
  float:left;margin-bottom:10px;padding-right:15px;
  color:#999;
  height:14px;line-height:14px;
  font-size:12px;
}
.sale-hd-inner a:hover {color:#ff5000}

.sale-bd {
  padding-left:3px;
}
.sale-bd li.item1 {border-left:1px solid #fff;}
.sale-bd li {
  float:left;
  border:1px solid #f4f4f4;
  width:196px;height:310px;
  padding:20px;margin:-1px 0 0 -1px;
  position:relative;z-index:1;
}
.sale-bd li:hover, .sale-bd li.item1:hover {
  border:1px solid #ff5000;
  z-index:2;
}

.sale-bd li .line1 {
  display:block;
  width:197px;height:40px;line-height:20px;
  overflow:hidden;
  margin:8px 0;
  font-size:14px;color:#666;
}
.sale-bd li .line2 {
  width:197px;height:18px;
  margin-bottom:17px;
}
.sale-bd li .line2 a {
  margin-right:10px;
  color:#999;
}
.sale-bd li .line3 {
  width:197px;height:22px;
}
.sale-bd .price {
  font-size:22px;
  color:#ff5000;
}
.sale-bd .price i {
  font-size:12px;
}
.sale-bd .org-price {
  height:22px;line-height:22px;
  margin-top:8px;
  font-size:12px;color:#999;
  text-decoration:line-through;
}
.sale-bd .saled {
  color:#999;
  margin-top:8px;
  line-height:22px;
}
.sale-bd .title-img {width:200px;height:200px;display:block;}
.sale-bd .title-img img {width:100%;height:100%;}
</style>
