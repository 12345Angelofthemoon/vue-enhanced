<template lang="html">
  <div>
    <header>
      <a href="javascript:;" class="logo fl">logo</a>
      <div class="search-container fr clearfix">
        <input type="text" class="search-input fl" v-model="form.q" placeholder="请输入要搜索的词">
        <button type="button" class="search-btn fr" @click="form.page=1,applyFilter()">搜 索</button>
      </div>
    </header>
    <div class="sortbar clearfix">
      <a href="javascript:;" class="sort-item fl"
        v-for="item in sorts" :key="item.name" :class="{active: item.name==form.sort}"
        @click="form.sort=item.name,form.page=1,applyFilter()"
      >{{item.title}}</a>
      <div class="price-range fl">
        <input type="text" placeholder="￥" v-model="form.min_price">
        -
        <input type="text" placeholder="￥" v-model="form.max_price">
        <a href="javascript:;" class="btn" @click="form.page=1,applyFilter()">确定</a>
      </div>
      <div class="pagination fr">
        <a href="javascript:;" class="prev disabled fl" @click="prev">&lt;</a>
        <span class="page-num fl"><i class="cur">{{form.page}}</i>/{{pagecount}}</span>
        <a href="javascript:;" class="next fl" @click="next">&gt;</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {searchFilters} from '@/types/search';
import {Component, Vue, Prop, Watch} from 'vue-property-decorator';


@Component
export default class SearchHeader extends Vue {
  @Prop(Number) private pagecount!:number;

  private form:searchFilters={
    q: '',                //?
    sort: '',      //?
    page: 1,              //?
    min_price: undefined,
    max_price: undefined
  };

  private sorts=[
    {name: '', title: '综合排序'},
    {name: 'sales', title: '销量'},
    {name: 'rank', title: '信用'},
    {name: 'price', title: '价格'},
  ];

  private applyFilter(){
    this.$emit('searchupdate', this.form);
  }

  private prev(){
    if(this.form.page>1){
      this.form.page--;

      this.applyFilter();
    }
  }

  private next(){
    if(this.form.page<this.pagecount){
      this.form.page++;

      this.applyFilter();
    }
  }
}
</script>

<style scoped>
/*  */
header {width:1070px; height:44px; margin-top:16px;}
header .logo {width:105px;height:43px;background:url(../../assets/imgs/site-icons.png) no-repeat -125px -5px;text-indent:-9999px;}










/*  */
.search-container {width:811px;height:31px;margin-top:4px;border:solid 2px #f50;}
.search-container .search-input {width:726px;height:31px;padding-left:5px;}
.search-container .search-btn {width:80px;height:31px;background:#f50;border:none;color:white;font-size:16px;}

.search-fixed {position:fixed; left:50%; top:100px; margin-left:-675px; width:1350px;height:35px;padding:7px 0;}
.search-fixed .logo {width:80px;height:38px;margin-left:9px;background:url(../../assets/imgs/site-icons.png) no-repeat -95px -124px;text-indent:-9999px;}

.search-fixed .search-container {margin-left:165px;}








/*  */
.sortbar {width:1068px;height:39px;margin-top:10px;border:solid 1px #e8e8e8;background:#f5f5f5;}
.sortbar .sort-item {padding:0 19px;height:39px;line-height:39px;color:#6d6d6d}
.sortbar .sort-item.active {background:#FFF; border-right:1px solid #e5e5e5;color:#f50;}
.sortbar .price-range {padding-left:10px;padding-top:8px;height:23px;}
.sortbar .price-range input {padding:0 4px;border:solid 1px #dfdfdf;width:45px;height:21px;}
.sortbar .price-range .btn {padding:0 10px;height:21px;background:#f40;color:#FFF;border:none;display:inline-block;}
.sortbar .pagination a, .sortbar .pagination span {height:39px;line-height:39px;}
.sortbar .pagination a {width:36px;height:39px;text-align:center;font-weight:bold;color:#3d3d3d;}
.sortbar .pagination a.disabled {color:#ccc;}
.sortbar .pagination .page-num .cur {color:#f40}
.sortbar .pagination {}
.sortbar .pagination {}
</style>
