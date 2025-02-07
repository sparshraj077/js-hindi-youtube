const accountId=12345
let accountEmail="sparshraj077@gmail.com"
var accountPassword=909090
accountCity="jaipur"

// accountId=2 not allowed its an constant 
console.log(accountId);

accountEmail="abc@gmail.com"
accountPassword=808080
accountCity="bengaluru"
let accountState

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/*
Prefer not to use var 
because of issue in block scope and functional scope 

*/ 
