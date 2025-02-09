// Imeediately Invoked Function Expression (IIFE)
/*
Two benefits 
-> Get executed Immediately 
-> save from global scope bcs og that local get polluted  
it saves us from the global scope pollution  to remove that pollution we usee iife()()
*/
(function chai(){
    // named iifi
   console.log("db connected");
})();
 
((name)=>{
    // simple unnamed iifi
    console.log(`db is connected ${name}`)
})('sparsh ji' )