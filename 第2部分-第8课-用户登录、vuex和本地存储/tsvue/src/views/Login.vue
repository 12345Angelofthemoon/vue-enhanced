<template lang="html">
  <div>
    <Header/>

    <div class="content">
      <div class="content-bg"></div>
      <div class="container">

        <Panel title="密码登录"/>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Header from '@/components/login/header.vue';
import Panel from '@/components/login/panel.vue';

import {Component, Vue, Prop, Watch} from 'vue-property-decorator';

@Component({
  components: {Header, Panel}
})
export default class Login extends Vue {

}
</script>

<style>
.container {width:1200px;margin:0 auto;position:relative;}
</style>

<style scoped>
.content {
  height:600px;
  position:relative;
}

.content-bg {
  position:absolute;
  width:2500px;height:600px;
  top:0;left:50%;margin-left:-1250px;
  background:url(../assets/imgs/login_bg.jpg) no-repeat;
}
</style>
