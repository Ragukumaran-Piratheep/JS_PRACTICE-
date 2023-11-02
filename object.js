//  01
// const empty = { };
// console.log(empty);

//  02 Write a JavaScript program to create an object with properties and methods.Create an object called "person" with properties "name" and "age." and also create a function into that object call IntrouduceYou take a person object as a parameter and logs a massage to the console.
// let person = {
//     name: 'Piratheep',
//     age: 21,
    
//     introduceOfYou: function() {
//         console.log("Hello, My name is "+this.name);
//     }
        
//     };
//     person.introduceOfYou();

//  03 

    
// var student = {
    
//     greetStudent:function (student) {
//         console.log(`Hello ${student.stname} Welcome to the Coding School`);

//              return 'Hello '+this.stname+' Welcome to the Coding School'

// }
// };
// student.greetStudent({stname:'Piratheep'});

//  04

// console.log(person.age);
// console.log(person["age"]);

//  05 

// person.email='john@gamil.com';
// console.log(person);

//  06

// delete person.email;
// console.log(person);

//  07 

// console.log(person.hasOwnProperty('age'));

//  08

// var student = {stname:'kajan'};
// var course = {coname:'fullstack'};

// var studentCourse = {...student,...course} ;
// // var studentCourse = Object.assign(student,course);


// console.log(studentCourse);

//  09 

// student.hasOwnProperty('address') ? console.log('Address is there'):
// console.log('Address not found');


//  10

// var book = {

//     title:"untitled",
//     author:"kajan",
//     year:2023
// };

// var examp = JSON.stringify(book);
// console.log(examp);

//  11

// var students = [
//     {
//      name:"one",
//      age:1,
//      gpa:0
//     },
//     {
//      name:"two",
//      age:2,
//      gpa:0
//     },
//     {
//      name:"three",
//      age:3,
//      gpa:0
//     }
 
//  ];
//  console.log(students);