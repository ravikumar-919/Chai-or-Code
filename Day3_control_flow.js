// If: 

let age = 20;

if (age < 18) {
      //console.log("You are a minor.");
} else {
      //console.log("You are an adult.");
}

// Short Hand If(implicit scope) written in single line
let time = 10;
//if (time < 12) console.log("Good morning!");

// Nested if and else if 
let score = 85;
if (score >= 90) {
      //console.log("Grade: A");
} else if (score >= 80) {
      //console.log("Grade: B");
}
else if (score >= 70) {
      //console.log("Grade: C");
} else {
     // console.log("Grade: F");
}

const addhar = true;
const pan = true;

if(addhar && pan){
      //console.log("You are eligible to apply for a loan.");
} else {
     // console.log("You are not eligible to apply for a loan.");
}

if(addhar || pan){
      //console.log("You can apply for open demat acc.");
} else {
      //console.log("You have no valid IDs.");
}

// Switch Case
let day = 3;
switch (day){
   case 1:
      console.log("Monday");
      break;
   case 2:
      console.log("Tuesday");
      break;
   case 3:
     // console.log("Wednesday");
      break;
   default:
      console.log("Invalid day");
}

// Truthy and Falsy values
const userEmail = "xyz@gmail.com";
if(userEmail){
      //console.log("You have entered your email.");
} else {
      //console.log("Please enter your email.");
}

/* Falsy values in JavaScript:
   1. false
   2. 0
   3. "" (empty string)
   4. null
   5. undefined
   6. NaN
*/
/* Truthy values in JavaScript:
   1. "abc" (non-empty string)
   2. 42 (non-zero number) 
   3. [] (empty array)
   4. {} (empty object)
   5. function(){} (non-empty function)
*/

// logical operator: NOT (!), AND (&&), OR (||)
// Nulish Coalescing Operator (??)
let val1;
val1 = 4 ?? 10; 
// console.log(val1); // Output: 4

val1 = null ?? 10;
// console.log(val1); // Output: 10

val1 = undefined ?? 10;
// console.log(val1); // Output: 10

// Ternary Operator : (condition ? expr1 : expr2)
let marks = 75;
let result = (marks >= 40) ? "Pass" : "Fail";
//console.log(result); // Output: Pass

// Looping: also known as iteration
for( let i=0; i<=10; i++){
    //  console.log(i)
}

for(let i=1; i<=5; i++){
      //console.log(`outer loop: ${i}`)
      for(let j=1; j<=10; j++){
            //console.log(`inner loop ${j}`)
      }
}

const num = 3;
let sum = 0;
for(let i=1; i<=10; i++){
      sum = num * i;
      //console.log(`${num} * ${i} = ${sum}`)
}

// WAP to print table of 19
let table = 19;
let pro = 0;
for(i=1; i<=10; i++){
      pro = table * i;
     // console.log(`${table} * ${i} = ${pro}`)
}
// WAP to print the table from 2 to 20
for(let i=1; i<=20; i++){
      for(let j=1; j<=10; j++){
            let product = i * j;
           //console.log(`${i} * ${j} = ${product}`)
      }
}

// break and continue statement
for(let i=1; i<=10; i++){
      if(i ==7){
            //console.log("Breaking the loop at i = 7");
            break; // exits the loop when i is 7
      }
     // console.log(i);
}

for(let i=1; i<=10; i++){
      if(i == 6){
            //console.log("Skipping the iteration at i = 6");
            continue; // skips the iteration when i is 6
      }
      // console.log(i);
}

// While Loop: iterates as long as the condition is true
let count = 1;
while(count <= 5){
     // console.log(`Count is: ${count}`);
      count++;
}

// Do-While Loop: executes the block at least once before checking the condition
let number = 1;
do {
      console.log(`Number is: ${number}`);
      number++;
} while(number <= 5);


