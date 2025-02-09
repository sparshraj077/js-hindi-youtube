 const tinderUser1=new Object()
const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="Hari"
tinderUser.isLoggedIn=false

console.log(tinderUser);

const regularUser={
    email:"sparshraj077@gmail.com",
    fullName:{
        userfullname:{
            firstname:"sparsh",
            lastname:"rajvanshi"
        }
    }

}
// console.log(regularUser.fullName.userfullname.firstname);

const obj1 = {1: "a", 2: "b"};
const obj2 = { 2: "c",  3: "d"};

// Merging objects
// const obj3 = Object.assign({},obj1, obj2);
const obj3={...obj1,...obj2}
console.log(obj3);


// when values comde straight frrom the database 
const users=[
    {
        id:1,
        name:"sparsh"
    },
    {
        id:2,
        name:"harsh"

    }
    
]
users[1].name

// if yoy want to access all the keys of the object

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// destructing is possible both for arrays and objects 

const course={
    coursename:"Js in Hindi",
    price:"999",
    courseInstructor:"hitesh"

}

// course.courseInstructor
const {courseInstructor:instructor}=course
// console.log(courseInstructor);
console.log(instructor);

