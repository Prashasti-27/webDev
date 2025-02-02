const user={
    username: "Vincenzo",
    price: 99,

welcomemsg: function(){
    console.log(`${this.username} , welcome to website`);
    // console.log(this);
    
    
}
}
// user.welcomemsg()
// user.username= "chan"
// user.welcomemsg()
// console.log(this);
// function chai(){
//     let username= "neha"
//     console.log(this);
    
// }
// chai()

// const chai = function(){
//     let username= "neha"
//     console.log(this.username);
// }


// const chai = () => {          //Arrow function
//     let username= "neha"
//     console.log(this);
// }


// const addtwo= (num1,num2) => {
//     return num1+num2
// }

const addtwo= (num1,num2) => ( num1+num2)



console.log(addtwo(8,9));
