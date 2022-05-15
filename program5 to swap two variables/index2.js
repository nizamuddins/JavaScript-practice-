// Swapping using es6 destructuring assignment

let a = +prompt("enter the value of a");
let b = +prompt("enter the value of b");


[a ,b] = [b ,a];

console.log(`value of a after Swapping is ${a} `);
console.log(`value of b after Swapping is ${b} `)
