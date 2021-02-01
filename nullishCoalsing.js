// nullish coalsing comes here to replace some functions of  || // && by returning 1st values that arent null or underfined
'use strict';

let chick = 'a';
let newBlank = '';
let chris = 'fire beats';

// show values
console.log(chick ?? newBlank ?? chris);
