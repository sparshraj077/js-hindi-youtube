let a= 10 
const b=20
var c =30

// this is called as scope {}
var c =300
// global scope 
if(true)
{
    // block scope
    let a= 10 
    const b=20
    var c =30  
}


// console.log(a);
// console.log(b);
// console.log(c);


function one ()
{
    const username="sparsh rajvanshi"
    function two(){
        const website="youtube"
        console.log(username);
    }
   // console.log(website);
    //two()
}
