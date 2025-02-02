//ways to declare the new object

//const tinderuser=new Object();
const tinderuser={}
tinderuser.name="ram";
tinderuser.id="123abc";
//console.log(tinderuser);

const regularuser={
    email: "some@gmail.com",
    fullname: {
        firstname: "Nancy",
        lastname: "Priya"
    }
}
console.log(regularuser.fullname.firstname);

const obj1= {1:"a",2:"b"}
const obj2={3:"c", 4:"d"}
const obj4={5:"c", 6:"d"}
//const obj3= {obj1,obj2}
//console.log(obj3);
// obj3= Object.assign({}, obj1,obj2,obj4)
// const obj3= {...obj1,...obj2}

// console.log(obj3);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty(isloggedin));
