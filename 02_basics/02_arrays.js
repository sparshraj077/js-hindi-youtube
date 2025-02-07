const marvel_heroes=["thor","ironman","spiderman"]
const dc_heroes =["superman","flash","batman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);

const heroes=marvel_heroes.concat(dc_heroes)
console.log(heroes);

// this is called spread operator 
const all_new_heroes=[...marvel_heroes,...dc_heroes]
console.log(all_new_heroes);
// flat  decouple the conatenated array 
const another_array=[1,2,3,[4,5,6],7,[9,7,6,[9,6,8]]]
const real_another_array=another_array.flat(4)
console.log(real_another_array);

// Check if the value is an array
console.log(Array.isArray("hitesh"));  
// Output: false (because "hitesh" is a string, not an array)

// Convert a string into an array
console.log(Array.from("hitesh"));  
// Output: ['h', 'i', 't', 'e', 's', 'h'] (each character becomes an array element)

// new case 
console.log(Array.from({name:"sparsh"})) 
// you need to tell where you want to apply on keys or on values 


// convert into the array
let score1=100
let score2=200
let score3 =300
console.log(Array.of(score1,score2,score3));

// isArray - check whether it's an array or not return true or false 
//from - convert into the array 
//of convert into thee aray 
