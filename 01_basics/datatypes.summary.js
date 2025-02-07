/*
there are two types of datatypes 
// Primitive data type 
7 types: String, Number, Boolean, null, undefined,Symbol, BigInt

// Non primitive data type  or Reference Type 
//Arrays , Objects, Functions
 
*/
const score=100
const scoreValue=100.3
const isLoggedIn=false
const outsideTemp=null
let userEmail;
const id =Symbol('123')
//Symbol is a primitive data type introduced in ES6.
//  It is used to create unique and immutable identifiers. 
const anotherId=Symbol('123')
console.log(id===anotherId)

const bigNumber=65374378563856n
console.log(bigNumber)

// Reference (Non Primitive)

// Array , Objects , Functions

 const heros=["shaktiman","naagraj","doga"]
  let myObj={
    name:"sparsh",
    age:22,
 }

 const myFunction=function(){
    console.log("It's going great")
 }
 console.log(typeof bigNumber);

 /*datatype basically typeof
 undefined->undefined
 Null ->object
 booolean->boolean
 number->number
 String->String 
 null->object
//non -primitive datatype
 // object , functions,array -> function 
 */

 //  +++++++++++++++++++++++++++++++===
 
 
// Stack Memory(primitive)
// Heap Memory(Non-Primitive)-object ,array,functtion goes into  heap bcs it is non- primitive data type 

let myYoutubename = "Daily Motivation";  

let anothername = myYoutubename; // Value is copied (not reference)
anothername = "chaiaurcode"; // Only anothername is changed

console.log(myYoutubename); // "Daily Motivation"
console.log(anothername); // "chaiaurcode"


// heap memory 

let user1 ={
    email:"user@google.com",
    upi:"user@pay"
}
let user2=user1

user2.email="jdishd@gmail.com"
console.log(user2.email);
console.log(user1.email);


//Stack primitive
// let a = 10;
// let b = a; // A COPY of 'a' is created
// b = 20;

// console.log(a); // 10 (original remains unchanged)
// console.log(b); // 20 (separate copy)

// // heap non -primitive
// let obj1 = { name: "Alice" };
// let obj2 = obj1; // obj2 gets a REFERENCE, not a copy

// obj2.name = "Bob"; // Modifies the original object

// console.log(obj1.name); // "Bob" (same object)
// console.log(obj2.name); // "Bob"

