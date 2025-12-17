// Primitive ( jitne bhi primitive data type hote h ye call by value hote h matlab jab bhi
//  function me pass kiya jata  h tb inka copy pass hota h )

// 7 types : String , Number , Boolean , null (matlab empty , that's means server pe temp
//  nhi mila to wo 0 show nhi karega wo null show karega),undefined 
// (variable define h but uske andar value define nhi h), Symbol ( kisi bhi value ko 
// unique banane ke liye use krte h), BigInt ( use for very large Integer)

// JavaScript is a dynamically typed language.
// Variable types are checked at runtime 

let x = 10;      // number
// console.log(typeof(x));
x = "hello";    // string
// console.log(typeof(x));
x = true;       // boolean
// console.log(typeof(x));

const id = Symbol('123')
const accountId = Symbol('123')

// console.log(id === accountId) // false 

const bigNumber = 17823475285702875628n;
// console.log(typeof(bigNumber))



// Reference (Non Primitive) ( matlab inke referece ko pass kiya jata h)

// Arrays , Objects , Functions

const heros=["ankur", "Ram " , "Shyam"]
const intro={
    name:'ankur',
    vill:'bangra',
    roll:12345
}
const myFunction = function(){
    console.log("hello world");
}
// myFunction();
/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object        (Important)
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (Primitive ), Heap (Non-Primitive)

let myName = "manoj kumar"
let anotherName=myName
// console.log(anotherName)
anotherName ="Tulsidas khan"

// console.log(myName)
// console.log(anotherName)

let userOne={
    email:"user@gmai.com",
    upi: "abc@ylb"
}
let userTwo = userOne;

// console.log(userOne.email)
// console.log(userTwo.email)

userTwo.email="tulsidaskhan@gmail.com";

// console.log(userOne.email)
// console.log(userTwo.email)