// dates 
// date datatype is object 

let myDate=new Date()
console.log(myDate.toString());

console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(typeof myDate);

// create your own datee
// let myCreateDate=new Date(2023,0,23)
// console.log(myCreateDate.toDateString());

let myCreateDate=new Date(2023,0,23,5,3)
console.log(myCreateDate.toLocaleString());

let newDate= new Date("01-01-2023")
console.log(newDate.toString());

// tmestamp
let myTimestamp=Date.now()
console.log(myTimestamp);
console.log(Math.floor(Date.now()/1000));


console.log(newDate.getDay()+1);


// 