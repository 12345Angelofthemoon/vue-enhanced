<template lang="html">
  <div class="form-item clearfix" :class="validate">
    <label class="form-label">{{label}}</label>
    <slot/>

    <div class="validate-status" v-if="validate">
      <i class="icon"></i>
      <span class="msg">{{validate_msg}}</span>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component({
  data(){
    return {
      validate: '',
      validate_msg: ''
    }
  },

  props: {
    label: {
      type: String,
      default: ''
    },
  }
})
export default class RegFormItem extends Vue {
  mounted(){
    if(this.$slots.default){
      this.$slots.default.filter(child=>child.tag=='input').forEach(child=>{

        // 原生
        child.elm.addEventListener('focus', ()=>{
          this.validate='';
          this.validate_msg='';
        }, false);
        child.elm.addEventListener('blur', async ()=>{
          let errors=await this.validateItem(this);

          if(errors.length>0){
            this.validate='error';
            this.validate_msg=errors[0].rule.message;
          }else{
            this.validate='success';
          }
        }, false);



        // child.$on('focus', ()=>{
        //   alert('a');
        //   this.validate='';
        //   this.validate_msg='';
        // });
      });
    }

  }
}
</script>


<style scoped>
.form-item {padding:10px 0 10px 260px;line-height:36px;position:relative;}
.form-item .form-label {float:left;width:240px;height:37px;margin-left:-260px;text-align:right;font-size:14px;}
.form-item .form-control {float:left;height:34px;border:1px solid #dedede;padding:0 10px;width:200px;}
.form-item .form-control:focus {border-color:#229bf9}

.validate-status {}
.validate-status .icon {display:inline-block;width:16px;height:16px;margin-left:6px;background:url(../../assets/imgs/validate-icon.png) no-repeat;position:relative;top:4px;}

.validate-status .msg {display:inline-block;}
.validate-status .icon {background-position:0 0;}


.error .form-control {border:1px solid #ff3f13;}
.error .msg {color:#ff3f13;}
.error .icon {background-position:0 0;}
.success .icon {background-position:-16px 0;}

.form-item .btn-next {width:222px;color:#999;background:#F40;color:#FFF;border-color:#F40}
.form-item .btn-next.disabled {color:#999;background:#EEE;border-color:#dedede;}
.form-item .btn-next.disabled:focus {outline:none;}
</style>
