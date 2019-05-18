<template lang="html">
  <div class="box">
    {{msg}}
  </div>
</template>

<script>
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Msg extends Vue {
  @Prop(String) private msg!:string;
}
</script>

<style lang="css" scoped>
.box {position:fixed; width:300px;height:200px;background:#FFF;border:1px solid black; top:100px;left:50%;margin-left:-150px;}
</style>
