/*
OR gets the first true value then returns it 
(boolean conversions happen but the vals are converted to their initial values)

The  || gets the first true value and returns it this is its second use
The first is boolean search

*/

//first value

let personOneAge = 18;
let personTwoAge = 17;

if (personOneAge >=18 ){
    console.log('Buy liqour');
}else{
    console.log('Your too young');
}

if(personTwoAge >= 18){
    console.log('Yeah you can buy land');
}else{
    console.log('You need a national ID card')
}


// second use getting the first truthy values

let chick = '';
let newBlank = '';
let chris = 'fire beats';

// show results
console.log(chick || newBlank || chris); 