function addA(num:number){
  return function<T extends {new(...arg:any[]):{}}>(constructor:T){
    return class extends constructor{
      json:{a:number}={a: num};
    }
  }
}

@addA(12)
class User{
  json:{a:number};
}


let user1=new User();
let user2=new User();

user1.json.a=55;
console.log(user1.json);

console.log(user2.json);
