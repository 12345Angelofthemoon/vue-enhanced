<template lang="html">
  <div>
    <button type="button" @click="fn(12, 5)">按钮</button>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Watch, Emit} from 'vue-property-decorator';

@Component
export default class Cmp extends Vue {
  @Emit()
  fn(a:number, b:number){
    console.log('cmp:', a, b);

    // this.$emit('fn', a, b);
  }
}

</script>

<style lang="css" scoped>
</style>
