<template lang="html">
  <div>
    {{value}}
    <a-row>
      <a-col :span="12">
        <a-tree-select style="width:100%" v-model="value" :treeData="tree">
        </a-tree-select>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  data(){
    return {
      tree: [
        {value: 'js', title: 'javascript开发'},
        {value: 'java', title: 'Java开发'},
        {value: 'php', title: 'PHP开发'},
      ],
      value: ''
    }
  },
  methods: {
  }
}
</script>

<style>
</style>
