/*

functions are actions that can be called without the need to repeat code

*/

// creation

function sayHi(){
    // sattments go here
}

// local variables

function music(value){
    let taste = value;
    return taste;
}

// default and return values

function musicWithDefault(value = 'Grimme'){
    let taste = value
    return taste;
}
musicWithDefault();

// function expression

let chicken = function(alive){
    return alive;
}

console.log(chicken('Ha'));

// callback function

function counting(a,b){
    return a + b;
}

function names(fn,ln){
    return counting(fn,ln);
}

console.log('Isaac','Kamunya');

//arrow function

let great = (a,b) => 'Hello ' + names(a,b);
console.log(great('Isaac',' node Kamunya'));

// show results
console.log(musicWithDefault());