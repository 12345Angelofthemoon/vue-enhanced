<template>
  <div>
    <cmpA/>
    <cmpB/>
  </div>
</template>

<script>
import cmpA from '@/components/cmp-a';
// import cmpB from '@/components/cmp-b';

import Vue from 'vue';

function wrap(component){
  return Vue.component('cmpB', {
    data(){
      return {
        a: 10
      }
    },
    methods: {
      add(){
        this.a++;
      }
    },
    render(createElement){
      return createElement(cmpA, {
        props: {
          a: this.a,
          add: this.add
        }
      });
    }
  });
}


let cmpB=wrap(cmpA);




export default {
  components: {
    cmpA,
    cmpB
  }
}
</script>

<style lang="less">
</style>
