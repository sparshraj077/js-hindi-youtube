// singleton 
// when you use constructur singleton object is created
/// when you make through literals mutiple instance would be created



//Object create
// Object literals 
const mySym=Symbol("key1")
const JsUser= {
    name:"Sparsh",
    "full name":"Sparsh  Rajvanshi",
    age:18,
   [ mySym]:"mykey1",
    location:"jaipur",
    email:"sparshraj077@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
// not a correct syntax 
console.log(JsUser.email)
// correct syntax use square bracke\ets 
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email="sparsh@chatgpt.com"


//  you don't want to do the changes so froze it 
Object.freeze(JsUser);
console.log(JsUser);


