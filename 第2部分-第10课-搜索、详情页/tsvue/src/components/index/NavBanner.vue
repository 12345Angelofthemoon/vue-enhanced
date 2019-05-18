<template lang="html">
  <div class="index-header-banner" ref="banner">
    <a href="#" class="btn btn-prev" v-if="showArrow" @click="prev()">&lt;</a>
    <a href="#" class="btn btn-next" v-if="showArrow" @click="next()">&gt;</a>
    <ul :style="{width: totalWidth+'px', left: curLeft+'px'}">
      <li v-if="data" v-for="item in data">
        <a :href="item.href">
          <img :src="item.img|imgpath" alt="">
        </a>
      </li>
    </ul>
    <div class="nums" v-if="showNums">
      <ol>
        <li v-if="data" v-for="item,index in data" :class="{cur: index==cur}" @click="cur=index"></li>
      </ol>
    </div>
  </div>
</template>

<script lang="ts">
import {banner} from '@/types';

import {Component, Vue, Prop, Watch} from 'vue-property-decorator';

@Component
export default class HeaderSearch extends Vue {
  @Prop({type: Number, default: 0}) private value!:number;
  @Prop({type: Array, required: true}) private data!:banner[];
  @Prop({type: Boolean, default: true}) private showArrow!:boolean;
  @Prop({type: Boolean, default: true}) private showNums!:boolean;
  @Prop({type: Boolean, default: true}) private autoplay!:boolean;
  @Prop({type: Number, default: 2000}) private autoplayInterval!:number;

  private cur=this.value||0;
  private itemWidth:number=0;

  get totalWidth():number{
    return this.data.length*this.itemWidth;
  }
  get curLeft():number{
    return -this.cur*this.itemWidth;
  }

  private mounted():void{
    if(this.$refs.banner instanceof HTMLElement){
      this.itemWidth=this.$refs.banner.offsetWidth;
    }else{
      throw 'banner is not html';
    }


    if(this.autoplay){
      setInterval(this.next.bind(this), this.autoplayInterval);
    }
  }

  private prev():void{
    if(this.cur==0){
      this.cur=this.data.length-1;
    }else{
      this.cur--;
    }
  }

  private next():void{
    if(this.cur==this.data.length-1){
      this.cur=0;
    }else{
      this.cur++;
    }
  }
}
</script>

<style lang="css">
.index-nav-banner-container {width:710px;}
.index-nav-banner-container .banners {
  width:520px;height:512px;
  margin-left:10px;margin-top:10px;
}
.index-nav-banner-container .ads {
  width:160px;height:512px;
  margin-right:10px;margin-top:10px;
}

.index-nav-banner-container .ads .ad1 {
  width:160px;height:280px;
}
.index-nav-banner-container .ads .ad1 img {
  width:160px;height:280px;
}

.index-nav-banner-container .ads .ad2 {
  width:160px;height:230px;
}
.index-nav-banner-container .ads .ad2 h4 {
  padding-top:6px;height:24px;line-height:24px;
  font-size:12px;font-weight:400;
  color:#a1a1a1;background:#f1f1f1;
}
.index-nav-banner-container .ads .ad2 img {
  width:160px;height:200px;
}

/*  */
.index-header-banner {
  position:relative;
  overflow:hidden;
}
.index-header-banner ul {
  height:100%;
  position:absolute;z-index:1;
  left:0;
  transition:.3s all ease;
}
.index-header-banner ul li {
  width:520px;height:100%;
  float:left;
}

.index-header-banner .btn {
  width:20px;height:30px;line-height:30px;text-align:center;
  position:absolute;z-index:2;
  top:50%;margin-top:-15px;
  background:rgba(0,0,0,.3);color:#fff;
  display:none;
}
.index-header-banner .btn-prev {left:0;border-top-right-radius:15px;border-bottom-right-radius:15px;text-indent:-5px;}
.index-header-banner .btn-next {right:0;border-top-left-radius:15px;border-bottom-left-radius:15px;text-indent:5px;}
.index-header-banner .btn:hover {background:rgba(0,0,0,.5)}
.index-header-banner:hover .btn {display:block;}







/* .banner-1 {
  width:520px;height:280px;
}



.banner-2 {
  width:520px;height:198px;
} */




.index-header-banner .nums {
  position:absolute;top:252px;z-index:2;
  width:100%;
  text-align:center;
}
.index-header-banner .nums ol {
  overflow:hidden;
  display:inline-block;
  background:rgba(255,255,255,.3);border-radius:10px;
}
.index-header-banner .nums li {
  width:8px;height:8px;margin:3px;
  background:#FFF;border-radius:50%;
  float:left;
}
.index-header-banner .nums li.cur {
  background:#ff5000
}





</style>
