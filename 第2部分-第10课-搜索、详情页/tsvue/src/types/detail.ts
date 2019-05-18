import {url, color} from './';

export type menu={
  title: string,
  href:  url
};
export type banner={
  color:  color,
  img:    string
};
export type infoData=[string, string];



export type shop={
  banner: banner,
  menus:  menu[],
};

export type size={
  title:      string,
  value:      string,
};
export type colorData={
  img:      string,
  value:    string,
};

export type goods={
  title:          string,
  price:          number,
  true_price:     number,
  offer:          number,
  sizes:          size[],
  colors:         colorData[],
};

export type magnifier={
  thumbs:   string[],
  bigs:     string[],
  orgs:     string[],
}

export type detailData={
  info:       infoData[],
  imgs:       string[],
};




export type detail={
  shop: shop,
  goods: goods,
  magnifier: magnifier,
  detail: detailData,
};
