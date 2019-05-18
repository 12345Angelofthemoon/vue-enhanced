<template lang="html">
  <div class="header">
    <div class="container">
      <h1 class="logo" @click="$router.push({name: 'index'})">淘宝</h1>
    </div>
  </div>
</template>

<style lang="css" scoped>
.header {
  padding:22px 0;
  height:44px;
}
h1.logo {
  width:109px;height:43px;
  background:url(../../assets/imgs/login_logo.png) no-repeat;
  text-indent:-9999px;
}
</style>
