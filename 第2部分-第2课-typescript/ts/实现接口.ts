interface serializeable {
  tostring():string;
  fromString(string):void;
}

interface userdata {
  getUsername():string;
  getUserage():number;
}





class UserData implements serializeable,userdata {
  name:string;
  age:number;

  constructor(name:string,age:number){
    this.name=name;
    this.age=age;
  }

  public tostring():string{
    return JSON.stringify({
      name: this.name,
      age: this.age
    });
  }

  public fromString(str:string):void{
    let data=JSON.parse(str);

    this.name=data.name;
    this.age=data.age;
  }

  public getUsername():string{
    return this.name;
  }

  public getUserage():number{
    return this.age;
  }
}

class UserData2{

}

function sendToServer(obj:serializeable){
}

sendToServer(new UserData2());
