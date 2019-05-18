import {searchFilters, c2cData, shopData, c2cSearchResult, shopSearchResult, adData} from '@/types/search';
import {request} from './request';


export async function searchC2C(filter: searchFilters):Promise<c2cSearchResult>{
  filter.type='c2c';

  if(filter.min_price==undefined){
    delete filter.min_price;
  }
  if(filter.max_price==undefined){
    delete filter.max_price;
  }

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

export async function searchAd(filter: searchFilters):Promise<adData[]>{
  let data=await request('/ad', {
    type: 'search'
  });

  //如果发现数据有错——停掉正在执行的代码
  // if(!(data.rows instanceof Array)) throw 'rows is invaild';
  // if(typeof data.pagecount!='number') throw 'pagecount is invaild';

  return data;
};

export async function searchSsrch(filter: searchFilters):Promise<shopSearchResult>{
  filter.type='ssrch';

  let data=await request('/search', filter);

  return data;
};
