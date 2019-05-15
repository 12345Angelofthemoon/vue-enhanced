function repeat<T>(item:T, count:number):T[]{
  let result:T[]=[];

  for(let i=0;i<count;i++){
    result.push(item);
  }

  return result;
}

let arr=repeat(15, 3);
console.log(arr);

let arr2=repeat('aaa', 3);
console.log(arr2);
