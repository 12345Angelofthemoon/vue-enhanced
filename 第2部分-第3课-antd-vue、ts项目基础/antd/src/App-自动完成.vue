<template lang="html">
  <div>
    <a-auto-complete
      :dataSource="result"
      @select="select"
      @search="search"
    />
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
    select(val){
      alert('选择了'+val);
    },
    search(val){
      this.result=[
        'aaa', 'bbb', 'ccc'
      ];
    }
  }
}
</script>

<style>
</style>
