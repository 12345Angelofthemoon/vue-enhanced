<template lang="html">
  <div>
    <a-row>
      <a-col :span="12">
        <a-input-search @search="search" v-model="value" />
      </a-col>
    </a-row>
    <ul>
      <li v-for="item in result">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      value: '',
      result: []
    }
  },
  methods: {
    search(val){
      alert(val);

      this.result=['aaa', 'bbb', 'ccc'];
    }
  }
}
</script>

<style>
</style>
