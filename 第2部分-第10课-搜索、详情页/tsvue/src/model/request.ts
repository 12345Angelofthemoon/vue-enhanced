import axios from '@/libs/axios';

export type requestOptions<T>={
  method?: string,
  params?: T,
  headers?: Object,     //TODO
}

export async function request<T>(url:string, params?:T):Promise<any>{
  try{
    let {data: {err, msg, data}}=await axios(url, {params});

    if(err){
      alert(msg);     //TODO
    }else{
      return data;
    }
  }catch(e){
    //...
    alert('网络有错，请刷新重试');     //TODO
  }
}
