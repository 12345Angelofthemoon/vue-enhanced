<template>
  <div>
    aaaa {{a}} <button type="button" @click="add()">++</button>
  </div>
</template>

<script>
export default {
  props: ['a', 'add'],
}
</script>
