const user ={
    username:"sparsh",
    price:999,
    
    // This keyword:this keyword refers to the object that is executing the current file 
   // it value depend on how and where the function is called 
    welcomeMessage:function()
    {
        // console.log(`${this.username} ,welcome to website `);
        // console.log(this);
    }
}
// user.welcomeMessage()
// user.username="harsh"
// user.welcomeMessage()
// console.log(this);

// function chai()
// {
//     let username="sparsh"
//     console.log(this.username);
// }
// chai()

// const chai= ()=>{
//     let username="Prathamesh"
//     console.log(this.username);

// }
// chai()

// basic arrow function 
const addTwo=(num1,num2)=>{
    return num1+num2
}
console.log(addTwo(3,4));

// implicit return 
const addThree=(num1,num2)=> ( num1+num2)

console.log(addThree(3,4));

const obj=(num1,num2)=>({username:"heheheh"});