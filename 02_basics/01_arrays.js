const myArr=[0,1,2,3,4,5]
const myHeroes=["shaktiman","naagraj"]
console.log(myArr[0]);

// Array methods 
//push
myArr.push(6)
console.log(myArr);
//pop
myArr.pop()
console.log(myArr);
// unshift -->add the value at the zero th index 
myArr.unshift(9)
console.log(myArr);
// shift -->remove the first element from the array 
console.log(myArr); 
// includes -> to check whether element is there or not 
console.log(myArr.includes(9));
// index -> position of an element 
console.log(myArr.indexOf(19));
// join -> convert into the string 
const newArr=myArr.join();
console.log(myArr);
console.log(typeof newArr);

slice , splice 
slice 
console.log("A",myArr);
const myn1=myArr.slice(1,3);
console.log(myn1);
console.log("b",myArr);

//note 
//splice include the last index but slice doesn't include the last index 
splice 
console.log("A",myArr);
const myn2=myArr.splice(1,3);
console.log(myn2);
console.log("b",myArr);


