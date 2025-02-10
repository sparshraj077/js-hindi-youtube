// HIGHER ORDER ARRAY LOOPS 
// ---> FOR OF 
// ---> FOR IN 
// array
const arr=[1,2,3,4,5]
for(const num of arr)
{
    console.log(num);
}
// strings
const greetings="hello world";
for(const great of greetings)
{
console.log(`each character is ${great}`)
}



// maps
/*
The map() method in JavaScript is used to create
 a new array by applying a function to each element
  of an existing array. It does not modify the
   original array; instead, it returns a new one.
 THERE I NO DUPLICATE VALUE EXIST IN MAP
   */
 const map=new Map()
 map.set('IN',"India")
map.set('USA',"UNited States ofAmerica")
map.set('Fr',"FRance");
// console.log(map);

for(const [key,value] of map)
{
    console.log(key,value);
}
