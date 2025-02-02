const accountId = 1226734
let accountEmail= "pi34@gmail.com"
var accountPassword = "1234pr"
accountCity = "bgp"  //we can declare variable without using "var" or "let"
let accountState;
//Prefer not to use "var" because due to block scope
// accountId=2 //not allowed
console.log(accountId )
console.table([accountId,accountEmail,accountCity, accountPassword,accountState])
