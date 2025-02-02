const usermail=[]
if (usermail) {
    console.log("got the email");
    
}
else{
    console.log("ERROR101");
    
}

//Falsy value:
//  false; 0 ; -0; null; undefined; NaN;BigInt; ("")=>empty string

//Truthy value
// "0"; "false"; " "; [];{}; (function(){})=>empty function

if (usermail.length===0) {
    console.log("CHAI");
    
}

const emptyobj={}
if (Object.keys(emptyobj).length===0) {
    console.log("Object is empty");
}

//Nullish Coalescing Operator???: null undefined
// let val1= 5??70

// let val2= null?? 56

let val2= null?? 50?? 67

console.log(val2);

/// TERNARY OPERATOR
// condition? true: false

const teaprice=40
teaprice<=100?console.log("Affordable"): console.log("luxe");
;

