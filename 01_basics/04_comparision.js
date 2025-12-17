// console.log(2>1)
// console.log(2<1)
// console.log(1==1)
// console.log(2 != 1)

// console.log("2" > 1) // false

// console.log(null>0) // false
// console.log(null == 0) // false;
// console.log(null >= 0) // true;

/*
the reason is that an equality == and comparisons > < >= <= 
work differently
comparisions convert null to a number , treation it as 0.
that's why (3) null >= 0 is true and (1) null > 0 is false.

null → converted to 0 in comparisons

undefined → converted to NaN and (NaN is not equal to anything, even itself)
*/

// console.log(undefined >= 0) //false
// console.log(undefined > 0)  //false
// console.log(undefined == 0) //false

// console.log(null == undefined) // true

// ***************************************** 

// === strick check and == loose check

console.log("2" === 2)