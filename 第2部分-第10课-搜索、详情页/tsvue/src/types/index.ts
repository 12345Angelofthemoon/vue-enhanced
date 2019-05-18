import Vue from 'vue';

export type url=string;
export type color=string;



export type FormRule={
  required?:boolean,
  message:string,
  reg?:RegExp,
  check?:()=>boolean
}

export type RegFormData={mobile: string, email: string, password: string, password2: string};

export type banner={
  href: url,
  img: string,
};


export type sugDataChild={title: string, type?: string};
export type sugData={
  title: string,
  child?: sugDataChild[]
};

export type hotGoods={
  href:url,
  title:string,
  img:string,
  comment:number,
  fav:number,
  price:number,
  sales:number,
};
