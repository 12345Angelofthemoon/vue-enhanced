import {detail} from '@/types/detail';
import {request} from './request';

export async function getDetail():Promise<detail>{
  let data=await request('/item');

  //TODO校验
  if(!data.shop) throw 'data is invaild: no shop';
  if(!data.goods) throw 'data is invaild: no shop';

  return data;
};
