//singleton : apne trh ka ak hi object h 
//object literals 
//Object.create

const myS= Symbol("key1" )
const user={
    name: "Neha",
    "full name": "Nancy priya",
    [myS]: "mykey1",
    age: 12,
    location:"Bihar",
    islogged : false,
    email: "nehu9@gmail.com",
}
//Access object
//console.log(user.email);
//console.log(user["email"])
//console.log(user[myS]);

user.email= "nehu987@gmail.com"
//Object.freeze(user)
user.email="nehu987@google.com"
//console.log(user);

user.greeting=function(){
    console.log("Hello JS user"); 
}
user.greetingtwo=function(){
    console.log(`Hello JS user, ${this.name}`); 
}
console.log(user.greeting());
console.log(user.greetingtwo());