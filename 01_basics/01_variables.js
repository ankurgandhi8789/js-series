const accountId= 12342
let accountEmail="ankur@gmail.com"
var accountPassword="ankur123"
accountCity="delhi" // JavaScript creates it as a global variable (in non-strict mode)
                    // In "use strict" mode, this line would throw an error
let accountState;

// accountId = 12884 //  updation is not allowed ;


/*
Prefer not to use var
because of issue in block scope and functional scope

var → function-scoped, can be re-declared & re-assigned

let → block-scoped, cannot be re-declared but can be re-assigned

const → block-scoped, cannot be re-declared or re-assigned

*/

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);
console.log(accountState);

console.table([accountId ,accountEmail ,accountPassword,accountCity, accountState ])