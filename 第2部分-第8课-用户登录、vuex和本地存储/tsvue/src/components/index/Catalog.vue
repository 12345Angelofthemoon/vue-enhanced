<template lang="html">
  <div>
    <ul class="catalog-list fl">
      <li v-for="item,index in catalog.list"
        :class="{on: index==catalog.active}"
        @mouseover="catalog.active=index" @mouseout="catalog.active=-1"
      >
        <template v-for="json,index in item">
          <a :href="json.href">{{json.title}}</a>
          {{index!=item.length-1?'/':''}}
        </template>
      </li>
    </ul>
    <div class="catalog-sub-list clearfix" v-if="catalog.active!=-1">
      <span v-if="sub_catalog.panels.length==0">loading...</span>
      <div class="catalog-sub-list-links fl" v-else>
        <div class="service-panel" v-for="panel in sub_catalog.panels">
          <h3>
            {{panel.title}}
            <a href="javascript:;" class="more">更多</a>
          </h3>
          <div class="links">
            <a href="link.href" :class="{hot: link.hot}" v-for="link in panel.links">{{link.title}}</a>
          </div>
        </div>
      </div>
      <div class="catalog-sub-list-ad fr">
        <h3>猜你喜欢</h3>
        <div class="catalog-ad-list">
          <a :href="rmd.href" v-for="rmd in sub_catalog.rmds">
            <img :src="rmd.img|imgpath" alt="">
            <span>{{rmd.title}}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from 'vue-property-decorator';

type link={hot:boolean, title:string, href:string};
type panel={title: string, links: link[]};
type rmd={href:string, img:string, title:string};

@Component
export default class Catalog extends Vue {
  private axios!:Function;

  private catalog={
    list: [],
    active: -1
  };
  private sub_catalog:{
    panels: panel[],
    rmds: rmd[]
  }={
    panels: [],
    rmds: []
  };

  @Watch('catalog.active')
  async onActiveChange(){
    if(this.catalog.active==-1){
      this.sub_catalog={
        panels: [],
        rmds: []
      };
    }else{
      let url=`/catalog/detail/${this.catalog.active}`;

      //读取缓存
      if(sessionStorage[url]){
        try{
          //xxxstorage都是字符串
          this.sub_catalog=JSON.parse(sessionStorage[url]);
          return;
        }catch(e){}
      }

      try{
        let {data: {err, msg, data}}=await this.axios(url);

        if(err){
          alert(msg);
        }else{
          this.sub_catalog=data;

          //放到缓存当中
          sessionStorage[url]=JSON.stringify(data);
        }
      }catch(e){
        alert('网络有问题');
      }
    }
  }

  async created(){
    try{
      let {data: {err, msg, data}}=await this.axios('/catalog/list');

      if(err){
        alert(msg);
      }else{
        this.catalog.list=data;
      }
    }catch(e){
      alert('网络错误');
    }
  }

}
</script>

<style lang="css">
/*  */
.catalog-list {
  width:188px;height:512px;
  padding-top:5px;padding-bottom:3px;
  border:1px solid #ff5000;
  border-top:none;
  background:#FFF;
}
.catalog-list li {
  padding-left:25px;
  padding-right:19px;
  width:145px;height:32px;line-height:32px;
  font-size:14px;font-weight:400;
  position:relative;
}
.catalog-list li.on {
  background:#ffe4dc;
}
.catalog-list li.on a {
  color:#FF5000;
}
.catalog-list li a {
  font-size:14px;font-weight:400;
}
.catalog-list li a:hover {text-decoration:underline;}
.catalog-list li:after{
  content:'>';
  position:absolute;
  right:10px;
  font-size:12px;
  height:32px;line-height:32px;
  color:#666;
}


.catalog-sub-list {
  position:absolute;
  z-index:2;
  left:188px;top:0;
  padding:0 0 0 18px;
  border:2px solid #F94A14;
  box-shadow:2px 2px 0 #dcdadb;
  background:#FFF;
  width:692px;height:518px;
}

.catalog-sub-list-links {
  padding:10px;
  padding-right:12px;
  padding-bottom:0;
  width:415px;height:490px;
}
.catalog-sub-list-ad {
  border-left:1px solid #f4f4f4;
  width:253px;height:498px;
  padding-top:20px;
}
.catalog-sub-list-links .service-panel {
  margin-bottom:5px;
  height:173px;overflow:hidden;
}
.catalog-sub-list-links .service-panel h3 {
  width:415px;height:36px;line-height:36px;
  font-size:16px;color:#3C3C3C;font-weight:bold;
  position:relative;
}
.catalog-sub-list-links .service-panel .more {
  position:absolute;
  right:0;top:0;
  height:36px;line-height:36px;
  font-size:12px;font-weight:400;
}
.catalog-sub-list-links .service-panel .links {
  width:415px;height:104px;padding-bottom:33px;
  overflow:hidden;
}
.catalog-sub-list-links .service-panel .links a {
  display:inline-block;
  margin-right:12px;
  color:#666;
  white-space:nowrap;
  font-size:12px;line-height:26px;
}
.catalog-sub-list-links .service-panel .links a:hover {
  color:#ff5000;
}


.catalog-sub-list-ad h3 {
  color:#333;
  font-size:14px;font-weight:400;
  line-height:18px;text-align:center;
}
.catalog-sub-list-ad .catalog-ad-list {
  width:253px;height:459px;
}
.catalog-sub-list-ad .catalog-ad-list a {
  float:left;
  width:97px;height:143px;
  padding-left:20px;padding-top:10px;
}
.catalog-sub-list-ad .catalog-ad-list img {
  width:97px;height:97px;
}
.catalog-sub-list-ad .catalog-ad-list span {
  display:block;
  width:97px;height:26px;
  overflow:hidden;
  font-size:12px;line-height:26px;
  color:#999;font-weight:400;
}
.catalog-sub-list-ad .catalog-ad-list span:hover {
  color:#ff5000;
}
</style>
