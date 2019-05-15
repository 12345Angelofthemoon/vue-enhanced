class HashSet<T>{
  private _datas:T[]=[];

  public add(value:T){
    this._datas.push(value);
  }
  public get(index:number):T{
    return this._datas[index];
  }
}

let set=new HashSet<number>();

set.add(12);
set.add('dfasdf');
