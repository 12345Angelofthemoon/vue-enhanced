class User{
  private name:string;
  age:number;

  constructor(name, age){
    this.name=name;
    this.age=age;
  }
}

let user=new User('blue', 18);

console.log(user.name, user.age);
