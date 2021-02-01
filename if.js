//(age >= 18) ? console.log : (age > 0 && age < 13 ) ? console.log('Blocked') : console.log(1112);

let me, them, theOthers;
theOthers = 'chicken';

console.log((me || them || theOthers) === them); // irrelevant test
console.log(true || theOthers);
console.log(false || "chic");