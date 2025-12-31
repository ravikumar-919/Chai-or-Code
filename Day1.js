//Data Type in Java Script
/*
 Number - limit upto 2 to power 53
Bigint
string - 
boolean - true/false
null - stand alone value
undefined 
symbol - used for unique
object
NaN- not a number
*/

// how to check datatype in js
let name = "tango"
console.log(typeof(name))

// Type Casting 
let age = "33"
console.log(typeof age)
let umar = Number(age)
console.log(typeof umar)

// ****************** Opreations in js ******************
// arthmetic operators
// + - * / % ++ --

// assignment operators
// = += -= *= /= %=

// comparison operators
// == === != !== > < >= <=

// logical operators
// && || !

// bitwise operators
// & | ^ ~ << >> >>>
// ternary operators

// condition ? true : false

// ****************** Conditional Statements in js ******************   

//premative data types also known as call by value
// 7types: number, bigint, string, boolean, null, undefined, symbol

// non-premative data types also known as call by reference
// object types: array, function, date, regex, custom object

// Types of memory
// stack :(premetive), Heap :(Non-Primitive)

let myEmail = "golusinghrathoure919"

//Strings
const name = "ravi";
const age = 23
const gender = "male"

console.log(name + age + gender) // older method
console.log(`my name is ${name} and my age is ${age} and gender is ${gender}`)

// modern use string interpolation
const city = "  muzaffarpur "
console.log(city.length)
console.log(city.toUpperCase())
console.log(city)
console.log(city.trim()) // trim remove the unwanted spaces

// // Number & Maths
const score = 300
console.log(score)
const balance = new Number(100) // it will take as number
console.log(balance)
console.log(balance.toString())
console.log(typeof (balance))

// ++++++++++ Maths +++++++++++++
console.log(Math);
console.log(Math.abs(-2));
console.log(Math.round(2.9));
console.log(Math.ceil(2.2));
console.log(Math.floor(2.8));
console.log(Math.random()); //It gives value b/w 0 & 1

// Date in JS
let myDate = new Date()
console.log(myDate)
console.log(myDate.toString()) //convert to string
console.log(myDate.toDateString()) //convert to string
console.log(myDate.toLocaleDateString()) //convert to string
console.log(myDate.toISOString()) //convert to string

// Time Stamp
let time = Date.now()
console.log(time)

// Arrays: we can store different type of element and decalear in "[ ]"
const myArray = [1,2,3,4]
console.log(myArray)

// // Arrays method
console.log(myArray.push(5))
console.log(myArray.pop())
console.log(myArray.includes(3))

let petAnimal = ["cow", "goat", "dog","cat"]
let wildAnimal = ["tiger", "hyna", "lion","cheeta"]
allAnimal = (petAnimal + wildAnimal)
console.log(allAnimal)
 const allAnimal = petAnimal.concat(wildAnimal)
console.log(allAnimal) // concate is used for adding two arrays
console.log(typeof allAnimal)

// spread: used to seperate arrays
console.log(...petAnimal,...wildAnimal)

const num = 100
const num2 = 200
const num3 = 300
console.log(Array.of(num,num2,num3))// used for convert variables into arrays

// Objects: key value pair
// we can create nested object
const detail= {
    name : "ravi",
    age: 22,
    city: "muzaffarpur"
}
// How to acces the element of object
console.log(detail.age) //method 1
console.log(detail["name"]) // method 2
// How to change or overwrite an element in object
console.log(detail.name= "ravi singh")
// How to locked element that nobody can change it
Object.freeze(detail)
detail.age = 34 // it cannot be changed because we had freeze it
console.log(detail)
// How to add two object
let pd = {
    name : "ravi",
    age: 22,
    city: "muzaffarpur"
}
let ed = {
    course:"b.tech",
    branch:"cse",
    college:"pimr"
}
console.log(Object.assign(pd, ed)) // 1st method of adding two obj
let newd = console.log({...ed,...pd}) // 2nd method of adding obj
// How to access keys and values of object 
console.log(Object.keys(detail))
console.log(Object.values(detail))

