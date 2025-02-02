//memory ko reserve krna or free krna dono user ka kaam h 
// Memory: 1.Stack memory(primitive) 
// 2.Heap memory (non primitive)
// let name="dreamy"
// let anothername=name;
// anothername="-pie"

// console.log(name)
// console.log(anothername)

let user={
    email:"abc@gmail.com",    //heap
    upi: "123@ybl"

}

let user2={
    email:"abc@gmail.com",    //heap
    upi: "123@ybl"

}
user2.email= "xyz@gmail.com"
console.log(user);
console.log(user2);