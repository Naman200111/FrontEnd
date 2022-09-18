console.log("nam\"".length);

let names = "NAMan";
console.log(names.toLowerCase());
console.log(names.toUpperCase());

// slice(a,b) from index a to index b, b not included
let string = "Please give me Rs 1000";
console.log(string.slice(15,22));

console.log(string.slice(4));

console.log(string.replace("Rs 1000", "$ 100"));

let name1 = "Naman";
let name2 = " Agrawal";

//ādd all in sequence
console.log(name1.concat(name2," hi"," naman"," agrawal"));

let name3 = "   teena    ";
console.log(name3);
console.log(name3.trim());

if(name2.includes("gra"))
    console.log("Found");
else
    console.log("Not Found");

if(name2.includes("pra"))
    console.log("Found");
else
    console.log("Not Found");

if(name2.startsWith(" Agra"))
    console.log("True");
else
    console.log("False");

if(name2.endsWith("wala"))
    console.log("True");
else
    console.log("False");



// immutable
let change = "Money";
change[2] = "P";
console.log(change);