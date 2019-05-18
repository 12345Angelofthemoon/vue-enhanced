<template lang="html">
  <el-container>
    <el-aside>
      <el-menu default-active="2">
        <el-menu-item index="1">
          店铺管理
        </el-menu-item>
        <el-menu-item index="2">
          商品管理
        </el-menu-item>
        <el-menu-item index="3">
          订单管理
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <slot />
    </el-main>
  </el-container>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
