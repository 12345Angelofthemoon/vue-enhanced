function addA(num:number){
  return function(constructor:Function){
    constructor.prototype.a=num;
  }
}

@addA(12)
class User{
  a:number;
}

@addA(5)
class User2{
  a:number;
}


let obj=new User();
console.log(obj.a);


let obj2=new User2();
console.log(obj2.a);
