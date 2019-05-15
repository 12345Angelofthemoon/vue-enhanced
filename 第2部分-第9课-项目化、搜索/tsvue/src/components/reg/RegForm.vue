<template lang="html">
  <div class="reg-form">
    <slot/>
  </div>
</template>

<script lang="ts">
import RegFormItem from './RegFormItem.vue';

import {Component, Vue, Prop} from 'vue-property-decorator';
import {FormRule} from '@/types/index';

import {RegFormData} from '@/types';

type ValidateError={prop:string, child: RegFormItem, rule: FormRule};

@Component
export default class RegForm extends Vue {
  @Prop({type: Object, default: {}}) private rules!:{[index:string]: FormRule[]};
  @Prop({type: Object, default: {}}) private form!:RegFormData;

  mounted(){
    this.$children.forEach(child=>{
      if(child instanceof RegFormItem){
        child.validateItem=this.validateItem;
      }
    })
  }

  public async validateItem(child:RegFormItem):Promise<ValidateError[]>{
    let errors:ValidateError[]=[];

    const prop=child.prop;
    const form=this.form;

    if(prop && this.rules[prop]){
      let rules:FormRule[]=this.rules[prop];

      for(let i=0;i<rules.length;i++){
        const rule:FormRule=rules[i];

        function addError(){
          errors.push({prop, child, rule});
        }

        if(rule.required){    //要求：必填项
          if(!form[prop]){    //空的
            addError();
          }
        }else if(rule.reg){ //要求：正则校验
          if(!rule.reg.test(form[prop])){   //错的
            addError();
          }
        // }else if(rule.length){  //要求：长度
        //   if(!form[prop] || form[prop].length!=rule.length){   //长度不对
        //     addError();
        //   }
        }else if(rule.check){   //要求：自定义校验
          let res=await rule.check();

          if(!res){             //自定义校验没通过
            addError();
          }
        }
      }
    }

    return errors;
  }

  public async validate(showError=true){
    let errors:ValidateError[]=[];

    for(let i=0;i<this.$children.length;i++){
      const child=this.$children[i];

      if(child instanceof RegFormItem){
        let arr:ValidateError[]=await this.validateItem(child);
        errors=errors.concat(arr);
      }

    }

    if(showError){
      //所有的子级的校验状态清除
      this.$children.forEach(child=>{
        // console.log(child instanceof RegFormItem);

        if(child instanceof RegFormItem){
          child.validate='success';
          child.validate_msg='';
        }
      });

      console.log(errors);

      //错误加上
      errors.forEach(error=>{
        if(!error.child.validate){
          error.child.validate='error';
          error.child.validate_msg=error.rule.message;
        }
      });
    }

    return errors.length==0;
  }
}
</script>


<style scoped>
.reg-form {width:720px;margin:10px auto;padding:50px 0;}
</style>
