// for of loop:

const arr = [1,2,3,4,5,6]
for (const num of arr) {
    //console.log(num);
    
}

// Loops on array
const days = ["sunday","monday", "tuesday","wednesday"]
for (const din of days) {
   // console.log(din)   
}

// Loops on string
let greeting = "Hello World !!"
for (word of greeting) { // for off loop
    //console.log(word)
}

// Maps
const map = new Map()
map.set("In","India")
map.set("USA","America")
map.set("UK","Britain")
map.set("PAK","Pakistan")
//console.log(map)

// Looping on object
const detail = {
    name: "Ravi",
    age: 13,
    city:"mfp"
}
for (const key in detail) { // for in loop
  // console.log(key)    
}

for (const key in detail) {
    //console.log(`${key} hai ${detail[key]}`)
    }

// for each loop
const lang = ["js", "java", "python", "c++"]
lang.forEach(function (bhasha){
    //console.log(bhasha)
})

// for each with arrow function
lang.forEach( (bhasha, index) => {
    //console.log(`${index} : ${bhasha}`)
})

function printMe(bhasha){
   // console.log(bhasha)
}
//lang.forEach(printMe)

lang.forEach((bhasha, index, arr) => {
    //console.log(`${index} : ${bhasha} in ${arr}`)
})

const myarr = [
    {
        name: "Ravi",
        age: 13
        
    },
    {
        name: "Amit",
        age: 14 
    },
    {
        name: "Sohan",
        age: 15 
    }
]
myarr.forEach((person) => {
    //console.log(person.name);
})
// for-each never returns anything

//filter method on array
const nums = [1,2,3,4,5,6,7,8,9,10]
 const number= nums.filter((n)=>{
     return n >6

})
//console.log(number)

// map method on array
let ginti =[1,2,3,4,5,6,7,8,9,10]
let num = ginti.map((g) => g + 10 )
//console.log(num);

const Newnums = mynums
.map(num => num *10)
.map(num => num +1)
.filter(num => num > 50)
// console.log(Newnums);

// reduce method
const mytotal = mynums.reduce(function(acc, curval){
    console.log(`acc:${acc} and curval: ${curval}`);
    return acc + curval
    },0)
// console.log(mytotal);
const mytotal2 = mynums.reduce((acc, curval) => acc + curval,0)
console.log(mytotal2);