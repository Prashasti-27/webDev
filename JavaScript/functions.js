
// function myname(){
//     console.log("H");
//     console.log("A");
//     console.log("R");
//     console.log("R");
//     console.log("Y");
// }



// function add(num1, num2){
//  console.log(num1+num2)
// }
function add(num1, num2){
    // let result=num1+num2
    // console.log("vincenzo");
    
    // return result
    return (num1+num2)
   }

// const result= add(3,null)
// // console.log("Result: ", result);

function message(username){
    if(username=== undefined){
         console.log("Please Enter a username..");
         return
    }
    return `${username} just logged in.. `;

}

//console.log(message("Vincenzo Cassano"));
//console.log(message());

// Shopping cart concept
function calculatecartprice(...num1){    //{...=> it is the rest operator}
    return num1
}
console.log(calculatecartprice(22,67,468,90));

const user={
    username: "Vincenzo",
    price: 6000
}

function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`);
    
}

handleobject(user)
handleobject(user)

const array= [200,788,567,3556]
function value(getArray){
   return getArray[2] 
}
console.log(value(array));