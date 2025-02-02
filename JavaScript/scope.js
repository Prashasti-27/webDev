//let, const, var


// generally curly braces are the scope of the given function 
// let a=300
// if(true){
//     let a= 10
//     const b= 30  //kisi scope ke andr jo value define h wo whi tk rhegi jaise curly braces khtm waise hi a,b,c ka value khtm
//     console.log("INNER: ", a);
    
// }

// console.log(a);
// console.log(b);
// console.log(c);  //"var " ko jadatr log avoid hi krte h 

// function one() {
//     const username= "Vincenzo"
//     console.log(username);
    
//     function two(){
//         const website= "BuJus"
//         console.log(website);
//     }
//     // console.log(website);
//     two()
// // }

// one()


//************************************* */
function addone(num){
    return num+1
}
console.log(addone(5));

addtwo(8)
const addtwo= function(num){   //jab funtion ko declare krneke sath agr variable me holdkro to
                                 //functon likhne se phle usko call nhi kr skte 
    return num +2
}




