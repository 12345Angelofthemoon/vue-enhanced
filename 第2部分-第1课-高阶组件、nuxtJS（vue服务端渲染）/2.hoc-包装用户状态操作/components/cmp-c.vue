<template lang="html">
  <div class="">
    {{isLogin?'已登录':'未登录'}}
  </div>
</template>

<script>
export default {
  props: ['isLogin']
}
</script>
