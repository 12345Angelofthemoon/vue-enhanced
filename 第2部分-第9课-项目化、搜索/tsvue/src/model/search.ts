import {searchFilters, c2cData, shopData, c2cSearchResult, shopSearchResult} from '@/types/search';
import axios from '@/libs/axios';

type requestOptions<T>={
  method?: string,
  params?: T,
  headers?: Object,     //TODO
}

async function request<T>(url:string, filter:T):Promise<any>{
  try{
    let {data: {err, msg, data}}=await axios(`/search`, {params: filter});

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


export async function searchC2C(filter: searchFilters):Promise<c2cSearchResult>{
  filter.type='c2c';

  let data=await request('/search', filter);

  // console.log(data);

  //如果发现数据有错——停掉正在执行的代码
  if(!(data.rows instanceof Array)) throw 'rows is invaild';
  if(typeof data.pagecount!='number') throw 'pagecount is invaild';





  // let result:c2cSearchResult={
  //   rows: data.rows,
  //   pagecount: data.pagecount
  // };

  return data;

  //校验数据  TODO
  // let result:c2cSearchResult={
  //   rows: [],
  //   pagecount: data.pagecount
  // };
  //
  // console.log(data.rows);
  //
  // if(data.rows instanceof Array){
  //   for(let i=0;i<data.length;i++){
  //     let res:c2cData={};
  //
  //     if(typeof data[i].price=='number') res.price=data[i].price;
  //     if(typeof data[i].title=='string') res.title=data[i].title;
  //     //...
  //
  //     result.push(res);
  //   }
  // }else{
  //   alert('数据有误');
  // }

  // return result;
};

export async function searchSsrch(filter: searchFilters):Promise<shopSearchResult>{
  filter.type='ssrch';

  let data=await request('/search', filter);

  return data;
};
