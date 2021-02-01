/*

Before using callbacks get to know the structure of the prev function and what it does
Respect the rules of previous functions and the parameters as you can use them to your adv
like bringing in thjose from inner function to outer

*/

// combination
function combination(firstValue,lastValue){
    return firstValue + lastValue;
}

function great(firstName,lastName){
    return 'hello' + combination(firstName,lastName);
}

// show values
console.log(great(' isaac','kamunya'));