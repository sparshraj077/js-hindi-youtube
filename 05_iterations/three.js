const coding =["js","ruby","java","python"]

// coding.forEach(function(val){
//     console.log(val);
// })
coding.forEach((item)=>{
    console.log(item);
}) 

const myCoding=[
    {
        languageName:"javascript",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    },
    {
        languageName:"cpp",
        languageFileName:"c++"
    },
]

myCoding.forEach( (item)=>{
    console.log(item.languageName);
}   )
