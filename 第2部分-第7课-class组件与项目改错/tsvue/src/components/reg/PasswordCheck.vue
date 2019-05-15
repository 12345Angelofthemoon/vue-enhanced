<template lang="html">
  <div class="password-strength">
    <div class="title clearfix" :class="{weak: score<=1, middle: score==2, strong: score==3}">
    <!-- <div class="title weak clearfix"> -->
    <!-- <div class="title middle clearfix"> -->
    <!-- <div class="title strong clearfix"> -->
      <span class="label fl">强度：</span>
      <div class="index fl">
        <div class="index-item fl" v-for="i,index in 3" :class="{active: index<score}"></div>
      </div>
      <div class="txt fl">{{
        ['', '弱', '中', '强'][score]
      }}</div>
    </div>
    <div class="rules">
      <div class="rule-item clearfix">
        <i class="rule-icon success fl" v-if="rules[0]">√</i>
        <i class="rule-icon fl" v-else>?</i>
        <span class="rule-txt fl">6~20个字符</span>
      </div>
      <div class="rule-item clearfix">
        <i class="rule-icon success fl" v-if="rules[1]">√</i>
        <i class="rule-icon fl" v-else>?</i>
        <span class="rule-txt fl">只能包含字母、数字以及标点符号</span>
      </div>
      <div class="rule-item clearfix">
        <i class="rule-icon success fl" v-if="rules[2]">√</i>
        <i class="rule-icon fl" v-else>?</i>
        <span class="rule-txt fl">字母、数字和标点符号至少包含2种</span>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component({
  props: ['check'],
  computed: {
    rules(){
      return this._check(this.check);
    },
    score(){
      return this.rules.filter(item=>item).length;
    }
  }
})
export default class PasswordCheck extends Vue {
  // private score=0;
  // private rules=[false, false, false];

  public _check(str=''){
    let rules=[false, false, false];

    //1.6~20
    if(str.length>=6 && str.length<=20) rules[0]=true;

    //2.只能用数字、字母、标点符号

    if(/^[0-9a-z\-\+\_\=\%\.\<\>\,\?\$]+$/i.test(str)) rules[1]=true;

    //3.数字、字母、标点至少两种
    let types=0;
    if(str.search(/[a-z]/i)!=-1) types++;
    if(str.search(/\d/)!=-1) types++;
    if(str.search(/[\-\+\_\=\%\.\<\>\,\?\$]/)!=-1) types++;
    rules[2]=types>=2;

    //
    // this.score=rules.filter(item=>item).length;
    // this.rules=rules;

    return rules;
  }

}
</script>


<style scoped>
.password-strength {width:210px;height:88px;position:absolute;background:#EEE;right:2px;top:-10px; padding:10px;}
.password-strength .title {}
.password-strength .title .label {width:60px;}
.password-strength .title .index {margin-top:11px;}
.password-strength .title .index-item {width:30px;height:14px;background:#DCDCDC;border:1px solid #FFF;margin-left:-1px;}
.password-strength .title .txt {}
.password-strength {}

.password-strength .weak .txt {color:#F33;}
.password-strength .weak .active {background:#F33;}

.password-strength .middle .txt {color:#F93;}
.password-strength .middle .active {background:#F93;}

.password-strength .strong .txt {color:#0A0;}
.password-strength .strong .active {background:#0A0;}

.password-strength .rules {}
.password-strength .rule-item {line-height:18px;}
.password-strength .rule-icon {width:14px;text-align:center;color:#AAA;}
.password-strength .success {color:#0C0;}
.password-strength .rule-txt {font-size:12px;}
</style>
