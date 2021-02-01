/*
    The body content is read 1st before execution of the loop
    if the condition is true 
    the loop is executed
    otherwise its not
    *********Looking at the for loop**************
*/
for(let index = 0;index < 10;index++){
    console.log(index);  
}

// shortening (3 ways)

let customLoop = 0;

for(; customLoop < 10; customLoop ++ ){
    // the initializer isnt in the loop
    console.log(`${customLoop} method one`);
} 

let customLoopTwo = 0;

for(;customLoopTwo < 5; ){
    // the incriment is not there
    console.log(customLoopTwo++);
}


// continue a loop

for(let we = 10; we < 20; we++){
    if(we%2 == 0){
        continue;
    }else{
        console.log(we);
    }
}

// breaking a loop

for(let music = 1; music < 10; music ++ ){
    if(music%5 == 0){
        break;
    }else{
        console.log('Chicken wings')
    }
}

// labeling a loop
