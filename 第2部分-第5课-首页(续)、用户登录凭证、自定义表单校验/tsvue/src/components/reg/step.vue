<template lang="html">
  <div class="step-container">
    <div class="steps-item" :class="{'steps-active': index<=cur}" v-for="item,index in steps">
      <i class="step-num">{{index+1}}</i>
      <span class="">{{item}}</span>
    </div>
  </div>
</template>

<script lang="ts">
import SiteNav from '@/components/common/SiteNav';
import {Component, Vue} from 'vue-property-decorator';

@Component({
  props: {
    cur: {
      type: Number,
      default: 0
    },
    steps: {
      type: Array,
      required: true
    }
  },
  components: {
    SiteNav
  }
})
export default class Reg extends Vue {
}
</script>

<style scoped>
.step-container {width:540px;overflow:hidden;margin:0 auto;}
.steps-item {
  float:left;
  width:180px;height:46px;
  font-size:16px;
  text-align:center;line-height:46px;
  font-weight:700;
}
.steps-item .step-num {
  display:inline-block;
  background:#CCC;
  width:24px;height:24px;line-height:24px;border-radius:50%;
  color:#FFF;
  margin-right:5px;
}
.steps-item span {
  color:#CCC;
}

.steps-active {
  border-bottom:2px solid #ff4700;
}
.steps-active .step-num {
  background:#F40;
}
.steps-active span {
  color:#000;
}
</style>
