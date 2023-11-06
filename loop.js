//  01 Create a for loop to print “Hi John” 5 times in the console.

// for (let i = 0; i < 5; i++) {
    
//    console.log('Hi John!');
    
// }


//  02 Use While loop to print 0-10 in console.
// let i = 0;
// while (i <= 10) {

//     console.log(i);

//     i++;
// }

//  03 Find the Square Number from 1-10 

// let x = 1;
// while (x <= 10) {

//     console.log(x**2);

//     x++;
// }

// 04 Use for loop to iterate from 0 to 100 and print only even numbers
// for (let j=0; j<=100;j++){
//     if(j%2===0){
//         console.log(j);
//         }
//         }


//  05 Use for loop to iterate from 0 to 100 and print the sum of all numbers.
// Output: The sum of all numbers is 5050.
// let n = 0;
// let s = 0;
// for (n=0 ; n<=100 ; n++){
//     s+=n;
//     }
//     console.log("The sum of all numbers is "+s+".")

//  06 Find Odd number between two numbers m,n
// function oddBetweenTwoNumbers(m,n){
//     let result=[];
//     while(m<n){
//         if(m % 2 !== 0){
//             result.push(m);
//             }
//             m++
//             }
//             return result;
//             }
//             console.log(oddBetweenTwoNumbers(1,10));


//  07 Define the Array fruit and add your four favourite fruits and print its value only
// let fruit = ["apple", "banana", "orange", "grape"];
//  console.log(fruit);


//  08 Define the string “learn JavaScript” and separate every letter using comma (,)
// let str = "learn JavaScript";
// console.log(str.split(' '));



    /* 09 Write a loop that makes seven calls to console.log to output the following triangle:

    #
    ##
    ###
    ####
    #####
    ######
    #######
 */

// let k = 1;
// for (k=1; k<=7; k++) {
//     let str = '';
//     while (str.length < k) {
//         str += '#';
//         }
//         console.log(str);
//         }

/*  10 Iterate through all numbers from 1 to 45. Print the following:
For multiples of 3, print "Puppy.”
For multiples of 5, print "Pet.”
For multiples of 3 and 5, print "PuppyPet.”
  */
//   for (let i = 1; i <= 45; i++){
//          if (i%3 === 0 && i%5 === 0){
//              console.log("PuppyPet.");
//          } else if (i%3 === 0){
//              console.log("Puppy.");
//              }else if (i%5 === 0){
//                  console.log("Pet.");
//                  }
//                  }

