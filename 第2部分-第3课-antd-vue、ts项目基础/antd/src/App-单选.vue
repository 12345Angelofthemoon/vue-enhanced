<template lang="html">
  <div>
    {{job}}
    <a-radio-group v-model="job">
      <a-radio v-for="title,name in jobs" :value="name">{{title}}</a-radio>
    </a-radio-group>
    <a-input v-model="value" v-if="job=='other'" />
  </div>
</template>

<script>
export default {
  data(){
    return {
      job: 'web',
      value: '',
      jobs: {
        'web': '前端开发工程师',
        'java': 'java开发工程师',
        'php': 'PHP开发工程师',
        'other': '其他'
      }
    }
  },
  methods: {
  }
}
</script>

<style>
</style>
