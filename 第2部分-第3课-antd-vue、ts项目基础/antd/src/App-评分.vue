<template lang="html">
  <div>
    <a-rate character="啊" v-model="rate" allowHalf /> {{rate}}星
  </div>
</template>

<script>
export default {
  data(){
    return {
      rate: 3
    }
  },
  methods: {
  }
}
</script>

<style>
</style>
