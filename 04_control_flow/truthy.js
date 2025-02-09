// falsy values 

// false, 0, -0, BigInt, 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}

/*falselse ==0
false==''
0==''

all returns true*/

// Nullish Coalescing Operator(??): null undefined 

let val1;
val1=5 ?? 10
console.log(val1);

// Terinary operator
// ?
const iceTea=100
iceTea>=80? console.log("less than 80"):console.log("more than 80")