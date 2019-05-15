<template lang="html">
  <div class="reg-form">
    <slot/>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component({
  props: {
    rules: {
      type: Array,
      default: []
    },
    form: {
      type: Object,
      default: {}
    }
  },
  components: {
  }
})
export default class RegForm extends Vue {
  public validate(){
    this.$children.forEach(child=>{
      if(child.$attrs.prop){
        if(!this.form[child.$attrs.prop]){
          // child.validate='error';
          // child.validate_msg='不能为空';

          child.validate='error';
          child.validate_msg='不能为空';

          console.log(child.$attrs);
        }
      }
    });
  }
}
</script>


<style scoped>
.reg-form {width:720px;margin:10px auto;padding:50px 0;}
</style>
