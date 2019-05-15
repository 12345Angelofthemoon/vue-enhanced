import Vue from 'vue';

export class VueAxios extends Vue{
  protected axios!:Function;
}

export type FormRule={
  required?:boolean,
  message:string,
  reg?:RegExp,
  check?:()=>boolean
}
