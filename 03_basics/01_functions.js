// function sum(a,b)
// // a,b are called parameters
// {
//     console.log(a+b);

    
// }
// function sum(a,b)

// {
//     let result=a+b
//     return result

//     // return a+b

    
// }
// const result=sum(3,4)
// console.log(result);
// // 3,4 are argumments
// function loginUserMessage(username){
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("avenger "))


// ... also knows as rest operator as well as spread operator

function calculateCartPrice(...num1){

    return num1
}
console.log(calculateCartPrice(200,400,500))


const user={
    username:"sparsh",
    price:199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

}
handleObject(user)

const myNewArray=[200,400,100,600]

function returnSecondValue(getarray){
    return getarray[0,1,2,3]
}
console.log(returnSecondValue(myNewArray))