const name="Ram"
const repoCount=20

// console.log(name + repoCount +"value");

//string interpulation 
console.log(`Hello my name is ${name} and my repo count ${repoCount}`)

// using this method to create string we use some more feature of string 
const gameName = new String('suresh kumar')

// console.log(name)
// console.log(gameName)

// console.log(name[0])
// console.log(name.length)
// console.log(name.charAt(2))
// console.log(name.indexOf('a'))

const newString = gameName.substring(0,4);
console.log(newString)
const anotherName = gameName.slice(-5,gameName.length);
console.log(anotherName)

const newStringOne="   ankur   "
console.log(newStringOne)
console.log(newStringOne.trim())

const replaceNew = newStringOne.replace('ankur','gandhi').trim()
console.log(replaceNew)

console.log()