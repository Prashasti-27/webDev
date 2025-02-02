let myDate=new Date()
// console.log(myDate.toString());
// console.log(myDate.toString());
// console.log(typeof myDate);


//let create= new Date(2024,0,21)
//let create= new Date(2024,0,21,5,3)
let create= new Date("2024-01-24")
console.log(create.toDateString());

let myTimeStamp= Date.now()
// console.log(create.getTime());
// console.log(Date.now());
// console.log(Math.floor(Date.now()/1000));

let newDate= new Date()
console.log(newDate);
console.log(newDate.getMonth());

newDate.toLocaleString('dafault',{
    weekday: "long",
    
})


