<template lang="html">
  <div>
    {{value}}
    <a-row>
      <a-col :span="12">
        <a-tree-select style="width:100%" v-model="value">
          <a-tree-select-node value="js" title="javascript开发">
            <a-tree-select-node value="vue" title="vue.js开发"></a-tree-select-node>
            <a-tree-select-node value="react" title="react.js开发"></a-tree-select-node>
          </a-tree-select-node>
        </a-tree-select>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  data(){
    return {
      value: ''
    }
  },
  methods: {
  }
}
</script>

<style>
</style>
