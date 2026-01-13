// Function: It is a block of code which perform a specific task
function addNum(num1, num2){
    console.log(num1 + num2)
}
const sum = addNum(5,4 )
console.log(sum) // it will give undefined because there is no return statement

function addNum2(num1, num2){
    return (num1 + num2)
    console.log("Hello World") // after return statement no code will execute
}   
const sum2 = addNum2(5,4 )
console.log( "result of:",sum2) // it will give 9 because there is return statement

function greet(name){
    return `Good Morning ${name} How are you?`
}
console.log(greet("Ravi"))

function cartPrice(...total){ // rest operator: it will convert all the arguments into array
    return total
}
console.log(cartPrice(100,200,300,400,500)) // it will give array of all arguments

// How to pass object in function
const user = {
    name : "ravi",
    age : 32,
    city: "muzaffarpur"
}
function handleObject(anyobject){
    return `username is ${anyobject.name} and his age is ${anyobject.age}`
}
console.log(handleObject(user))

// How to pass array in function
const arr = [20, 40, 50, 60]
function returnSecondarr(getarr){
    return getarr[2]
}
console.log(arr[2])

// Scope: it is the area where a variable is accessible
let city = "muzaffarpur" // global scope
function testScope(){
    let country = "India" // local scope
    console.log(city) // we can access global variable in local scope 
}   
console.log(country) // we cannot access local variable in global scope

//Nested scope
function outerFunction(){
    let outerVar = "I am outside!"
    function innerFunction(){
        let innerVar = "I am inside!"
        console.log(outerVar) // we can access outer function variable in inner function
    }
    console.log(innerVar) // we cannot access inner function variable in outer function
}
outerFunction()

// This is a special keyword which refers to the current context
const userinfo ={
    username: "Ravi",
    age: 32,
    greetUser: function(){
        console.log (`Hello ${this.username} your age is ${this.age}`) // here this refers to current object 'user'
    }   

}
userinfo.greetUser()

// Arrow Function: it is a shorter syntax of function expression
const chai = () => {
    let username = "ravi kumar"
   return username
}
console.log(chai())

const addstring = (value1, value2) => {
    return value1 + value2
}
console.log(addstring(3,4))

const sum9 = (num1, num2) => (num1 + num2) // It is implicit Return no need of curly bracket
console.log(sum9(12,3))

// Immediately Invoked Function Expression (IIFE)
// it is a function which runs as soon as it is defined

function chai2 (){
   console.log("Chai is great")
}
chai2()
;
(function chai2 (){
   console.log("Chai is great");
})();

// Arrow function IIFE
(() => { // we need to put semicolon in last line to avoid error before IIFE
   console.log("chai is awesome");
})()







