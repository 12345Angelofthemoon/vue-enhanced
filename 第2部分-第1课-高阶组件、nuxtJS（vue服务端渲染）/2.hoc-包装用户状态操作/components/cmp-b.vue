<template lang="html">
  <cmpA :a="a" :add="add"/>
</template>

<script>
import cmpA from './cmp-a';

export default {
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
  components: {
    cmpA
  }
}
</script>

<style lang="css" scoped>
</style>
