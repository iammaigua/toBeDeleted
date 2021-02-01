// whats JS

> an oopl created to help frontend developers make the web interactive
> js  together with html and css are the webs building blocks

// what can JS do

> js can : 

* Be used in pc development
* Be used in mobile development
* Be used in backend development 
* Be used for client side development

// some examples of interactivity in web

* media play buttons
* infinite scroll
* like buttons and similar ones
* carousel

// whats client side adn serverside 

> client side is what the user interacts with.
> serverside is anything that deals with communication with the server .

// whats the diffrence between code editors and an ide

> a code editor is lightweight and doen't have packages that it preloads for a project


// connecting JS to the web all 2 ways

<script> 
    in html code
</script>

<script src= "#to JS doc"></script>

// whats:

> A statment : Syntax construct that performs an action
> An operator :  A symbol that is used on two operands
> An operand : Whatever is on the left and right of an operator
> A keyword : Words that have a special meaning in a programming language hence have been reserved
> A programme : its a set of instructions
> A comment : pieces of descriptive code
> 'use strict'; : used to convert previously accepted bad syntax into real errors
> variable : A container that stores value

// list the 8 data types

> string is a charecter or its combination to form a word/s
> number numeric values
> bigint for cryptography and precision timestamps
> null by you
> undefined by pc
> object describes thins or people
> symbol for 'hiding' object data
> boolean true or false

// web interactions (start) with alert, console and prompt

> alert displays a message on screen
> prompt ask for a users input
> confirm asks for the confirmation of input or qn

// conversion basic

> to convert to string you use the ''/""/String()
> to convert to number you use the + or  Number()

// basic math operations

> you can perform all math operation in programming and you could also make your own new ones.
> examples of math operations

* (+) addition
* (-) subtraction
* (*) multiplication
* / division
* % modulus
* ** exponential

// comparison

> when comparing values they are converted to boolean values then a check is made then after the check they are then conerted back to their origina values examples of comparison.

* ( > ) greater than
* < less than
* ( >= ) greaterthan or equal to
* <= less than or equal to
* == equal
* === strictly equal
* != not equal to
* !== strictly not equal to

// coparing null and undefined

> null is == to undefined but null >= 0 and undefined != to anything other than null and itself

// decision making

> decision making is done with if statment and the ? its like the if but wihout texts
> if uses boolean coparison to check values and then converts them back once a truthy or falsey value has been achieved
> sturucture : 

if(){

}

() ? condition one: else 
        OR
() ? condition one : () ? condition two : end condition

// logical operators && || !

> or searches for the first truthy value and returns it
> adn searches for the first falsey value and returns it
> once the value is found execution is stopped

> when used in a chain format they return the or to get the first truthy value from the chain 
> when using a chained and you can get the first falsey value from a chain
> there is an issue that comes uo when comparing to null adn undefined and  ?? comes to soolve that

> when it comes to false  ! before a var makes it false.
> two return the inverse (not not false).

> || = returns 1st truthy value
> && = returns 1st falsey value

// nullish coalesing

> returns the first value thast not null or undefined
> this fixes the issue when || / && awas comparing it in a chain
> ?? = returns 1st defined value
> the ||  can be used in the same way as  ??  just keep in mind theirdiffrences (defined and true value)
> if you wanna use ?? || and && together you cant due to safety reasons unless you have (parenthesis showing presidence) 

// loops

> loops, itterations, recursions they all mean the same thing doing something over and over again.
> loops are syntax structures that help us run though or do a repettitive task a number of times
> there are several types of loops e.g

* for ----- > most commonly used
* do while
* while

> here we run through the for 
> it has 3 key items 
> the initializer, condition ,incriment or decriment then the body

for(let inint = 0; inint < 10; init++){
    // this will incriment from 0 to 9 which will be 10 steps up
}

> breaks make the loop stop executing
> continue skips a part in the loop 
> you can use the decision making tools to facilitate this

// the switch 

> the switch is used in place where you have 5 > if's

switch(condition){
    case : 
        statment;
        break;
    default:
        statment;
        break;
}

> if cases have the same result you group them as shown below

case 1:
case 2:
case 3:
    statment;
    break;

> type maters and case in switches

// functions

> a function is a representation of an action.
> functions are used to write re usable code.

function name(parameters){
    return // if thereturn isnt there value is undefined
}

> to execue code in a function you call it by writting the name and () and you can initialize the parameter vals if there are there.
> variables declared inside functions can't be seen outside them.
> you can have default values in variables by adding them to the parameters

function name(p1 = 'isaac'){
    return p1;
}

> now if p1 value isnt set it will return isaac.
> or have an if function that when the val is undefined it sets the value to sth
> it'll check for undefined as null are usually developer added its best practice
> here also exists function expresiions and callbacks

let person = function(){
    // this is an expression 
    // its values can be seen in a block buut not outside
}

let chicken = () => `this is a arrow function`;

> there exists callback functions thats calling a function within a function to do this you need to understand the function you wanna call and the one your in its parameters how it works everything about it so that there will be no errors while doing the calls
> you can use the function names as vars cause thats what they are at the end of the day