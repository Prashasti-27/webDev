// datatypes: 1. Primitive and 2. Non primitive
//Primitive: (call by value):= String,number,boolean,null,undefined,symbol,bigint
//Non Prmitive(refrence type):= Arrays,objects,functions
const score=false;   //javascript me language define nhi krte h
const temp=null;
let user;  //value of "user" is undefined
const id=Symbol('234')
const id1=Symbol('234')
console.log(id ==id1);
const binum=78593622647959n;
const heros=["ram", "shyam","raj"];
let myobj={
    name: "neha",   //object always written in curly braces like this
    age:56,

}

const myFun=function(){
    console.log("helloword");

}
console.log(typeof( myFun));