/*
The reduce keyword in JavaScript is used
 with the .reduce() method, which is a powerful
  array function that reduces an array to a single
   value. It processes each element in the array 
   and applies 
a function that accumulates a result.
*/
// const myNums=[1,2,3]
// const myTotal=myNums.reduce(function(acc,currval)
// {
//     return acc+currval
// },0)
// console.log(myTotal);

// 
// const myTotal=myNums.reduce( (acc,curr)=>acc+curr,0)
// console.log(myTotal);

const shoppingCart = [
    { itemName: "js course", price: 2999 },
    { itemName: "py course", price: 999 },
    { itemName: "mobile app course", price: 9999 },
    { itemName: "data science course", price: 99999 }
];

const Total = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(Total);

