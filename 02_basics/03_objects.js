// singleton 
// when you use constructur singleton object is created
/// when you make through literals mutiple instance would be created

// object literals 

//Object create
// Object literals 
const mySym=Symbol("key1")
const JsUser= {
    name:"Sparsh",
    "full name":"sparsh",
    age:18,
   [ mySym]:"mykey1",
    location:"jaipur",
    email:"sparshraj077@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
// not a correct syntax 
// console.log(JsUser.email)
// correct syntax use square bracke\ets 
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// JsUser.email="sparsh@chatgpt.com"

// console.log(JsUser);
//  you don't want to do the changes so froze it 
// Object.freeze(JsUser);
// console.log(JsUser);

JsUser.greeting=function(){
    console.log("hello js user");
}
console.log(JsUser.greeting());


JsUser.greetingtwo=function(){
    console.log(`hello sir,${this.name}`);
}
        console.log(JsUser.greetingtwo())