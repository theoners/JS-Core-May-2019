let a =[{
    name:1,
    age:2,
    no:3
}];
let b = a.find(x=>x.name===1);
b.name=4;
console.log(a.find(x=>x.name===4));