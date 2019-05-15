<template lang="html">
  <div class="index-header-search">
    <div class="search-bar">
      <div class="search-btns clearfix">
        <a
          href="javascript:;" class="fl"
          v-for="item,index in searchItems"
          :class="{active: search.active==index}" @click="search.active=index"
        >{{item.title}}</a>
      </div>
      <div class="search-wrap clearfix">
        <div class="search-kw-container fl">
          <input type="text" class="search-kw" v-model="search.keyword" @focus="search.focus=true" @blur="search.focus=false">
          <span class="search-mask clearfix" v-if="!search.focus && !search.keyword">
            <i class="search-mask-icon fl"></i>
            <span class="fl">应季水果新鲜 当季</span>
          </span>
          <a href="#" class="search-img">以图搜图</a>
        </div>
        <div class="search-sug" v-if="search.sug && search.sug.length">
          <!-- 普通模式 -->
          <ul class="search-kw-list" :class="{'search-kw-list-left': cursug && cursug.child}">
            <li
              v-for="item,index in search.sug" @mouseover="search.sug_active=index" :class="{active: index==search.sug_active}"
              v-html="item.title+' '+(item.child?'>':'')"
            ></li>
          </ul>
          <div class="search-magic" v-if="cursug && cursug.child">
            <h3>关键字</h3>
            <ul class="search-magic-key">
              <li v-for="item in cursug.child" :class="{hot: item.type=='hot'}">{{item.title}}</li>
            </ul>
          </div>
        </div>

        <a href="#" class="search-btn fl">搜索</a>
      </div>
    </div>
    <div class="search-suggest">
      <a href="#">新款连衣裙</a>
      <a href="#">四件套</a>
      <a href="#" class="hot">潮流T恤</a>
      <a href="#">时尚女鞋</a>
      <a href="#">短裤</a>
      <a href="#">半身裙</a>
      <a href="#">男士外套</a>
      <a href="#">墙纸</a>
      <a href="#">行车记录仪</a>
      <a href="#">新款男鞋</a>
      <a href="#">耳机</a>
      <a href="#">时尚女包</a>
      <a href="#">沙发</a>
    </div>
  </div>
</template>

<script lang="ts">
import {sugDataChild,sugData} from '@/types';

import {Component, Vue, Watch} from 'vue-property-decorator';

type magicData={
  index:number,
  data:sugDataChild[],
};

@Component
export default class HeaderSearch extends Vue {
  private axios!:Function;

  private readonly searchItems=[
    {'title': '宝贝', type: 'c2c'},
    {'title': '天猫', type: 'c2c'},
    {'title': '店铺', type: 'ssrch'},
  ]

  private search:{
    active:number,
    focus:boolean,
    keyword:string,
    sug:sugData[],
    sug_active:number
  }={
    active: 0,
    focus: false,
    keyword: '',
    sug: [],
    sug_active: -1,
  };

  @Watch('search.keyword')
  @Watch('search.active')
  async onKeywordChange(){
    await this.getKeywordList();
  }

  get cursug(){
    return this.search.sug[this.search.sug_active];
  }

  private async getKeywordList(){
    if(!this.search.keyword){
      this.search.sug=[];
      return;
    }

    try{
      let {data: {err, data, msg}}=await this.axios('/search/sug', {
        params: {
          kw: this.search.keyword,
          type: this.searchItems[this.search.active].type
        }
      });

      if(err){
        alert(msg);
      }else{
        let result:[string,string][]=data.result;
        let magic:magicData[]=data.magic;

        let sug:sugData[]=[];

        result.forEach((item,index)=>{
          let title=item[0];

          if(!magic){
            sug.push({title});
          }else{
            let child=magic.find(item=>item.index==index);

            //接口自身
            if(child){
              let result:sugDataChild[]=[];
              child.data.forEach((arr:sugDataChild)=>{
                result=result.concat(arr);
              });
              sug.push({title, child: result});
            }else{
              sug.push({title});
            }
          }
        })

        this.search.sug=sug;
      }
    }catch(e){
      alert('网络故障，请稍后重试');
    }
  }
}
</script>

<style lang="css">
.index-header-search {
  width:630px;height:87px;
  margin-left:258px;
  margin-right:302px;
}
.index-header-search .search-bar {
  width:630px;height:62px;
}
.index-header-search .search-btns {
  width:613px;height:22px;
  margin-left:17px;
}
.index-header-search .search-btns a {
  width:36px;height:22px;margin-right:4px;
  color:#F40;text-align:center;
}
.index-header-search .search-btns a:hover {
  background:#FFEEE5;
}
.index-header-search .search-btns a.active {
  background:linear-gradient(to right,#ff9000 0,#ff5000 100%);
  color:#FFF;border-top-left-radius:6px;border-top-right-radius:6px;font-weight:700;
}
.search-wrap {width:630px;height:40px;position:relative;}
.search-kw-container {
  width:554px;height:36px;
  border:2px solid #ff5000;
  border-right:none;
  border-top-left-radius:20px;
  border-bottom-left-radius:20px;
  overflow:hidden;
  position:relative;
}
.search-kw {
  position:absolute;left:0;top:0;z-index:2;
  padding:6px 0;
  text-indent:10px;
  width:472px;height:24px;line-height:24px;
  background:transparent;color:#000;
  font-size:100%;
}
.search-sug {
  width:552px;
  background:#FFF;
  position:absolute;z-index:99;
  left:3px;top:38px;
  border:1px solid #bebebe;
  overflow:hidden;
}
.search-kw-list {
  width:100%;
}
.search-kw-list-left {
  float:left;
  width:50%;
}
.search-magic {
  padding-left:18px;padding-right:18px;
  width:240px;height:100%;
  background:#f8f8f8;
  position:absolute;
  right:0;top:0;
}
.search-magic h3 {
  padding:8px 0;
  font-size:12px;font-weight:bold;
}
.search-magic-key {
  overflow:hidden;
  padding-left:1px;padding-top:1px;
}
.search-magic-key li {
  float:left;
  width:69px;height:25px;
  border:1px solid #cdcdcd;
  background:#FFF;
  text-align:center;
  line-height:25px;
  margin-left:-1px;
  margin-top:-1px;
}
.search-magic-key li.hot {color:#F40}
.search-kw-list li {height:26px;line-height:26px;padding-left:5px;cursor:pointer;}
.search-kw-list li.active {
  background:#EEE;
}

.search-mask {
  color:#9C9C9C;
  position:absolute;left:10px;top:0;z-index:1;
  width:554px;height:36px;line-height:36px;
}
.search-mask-icon {
  width:16px;height:36px;
  background:url(../../assets/imgs/search-icon.png) no-repeat;
  margin-right:3px;
}
.search-img {
  width:36px;height:36px;
  background:url(../../assets/imgs/search-camera.png) no-repeat;
  text-indent:-9999px;
  position:absolute;z-index:9;
  top:0;right:11px;
}
.search-btn {
  width:74px;height:40px;
  background-color:#FF4200;color:#FFF;
  background-image:linear-gradient(to right,#ff9000 0,#ff5000 100%);
  font-weight:700;font-size:18px;
  line-height:40px;text-align:center;
  border-top-right-radius:20px;
  border-bottom-right-radius:20px;
}

.search-suggest {
  width:589px;height:20px;
  padding-top:5px;padding-right:41px;
}
.search-suggest a:hover {color:#ff5000;}
</style>
