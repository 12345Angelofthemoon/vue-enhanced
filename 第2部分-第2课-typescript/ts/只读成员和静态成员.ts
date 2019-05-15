class User{
  readonly name:string;
  age:number;

  static a:number=12;

  constructor(name, age){
    this.name=name;
    this.age=age;
  }
}

console.log(User.a);
