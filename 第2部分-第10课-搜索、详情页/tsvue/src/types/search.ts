import {url} from '@/types';


export type searchFilters={
  q:string,
  type?:string,
  page?:number,
  sort:string,
  min_price?:number,
  max_price?:number
};

export type c2cData={
  price:    number,
  title:    string,
  href:     url,
  showhref: url,
  shopname: string,
  sales:    number,
  img:      string,
  ww_href:  url,
};

export type product={
  href:   url,
  img:    string,
  price:  number,
};

export type shopData={
  shopID:     string,
  shopHref:   url,
  shopTitle:  string,
  shopImg:    string,
  shopRank:   number,
  owener:     string,
  ww_href:    url,
  mainCat:    string,
  infoSale:   number,
  infoTotal:  number,
  rate:       number,
  products:   product[],
};



export type c2cSearchResult={
  rows: c2cData[],
  pagecount: number,
};
export type shopSearchResult={
  rows: shopData[],
  pagecount: number,
};

export type adData={
  href:   url,
  img:    string,
  price:  number,
  sales:  number,
  title:  string,
}
