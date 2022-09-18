const prompt = require("prompt-sync")();

let Age = prompt("Enter your Age: ");
console.log(typeof Age);
if(Age >= 10 && Age <= 20) {
    console.log("True");
}
else {
    console.log("False")
}

switch(Age) {
    case '10':
        console.log("Age is 10");
        break;
    case '18':
        console.log("Age is 18");
        break;
    default:
        console.log("Age is 20"); 
}

let num = prompt("Enter a number: ");
num = Number.parseInt(num);
if(num%2 == 0 && num%3 == 0)
    console.log("True");
else
    console.log("False");

if(num%2 == 0 || num%3 == 0)
    console.log("True");
else
    console.log("False");

console.log("You Can", Age>=18 ? "Drive":"Not Drive");