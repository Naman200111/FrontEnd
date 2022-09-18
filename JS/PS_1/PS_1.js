console.log("Hello World");
var a = "Javascript";
var b = 45;
var c = a+b;
console.log(c);

console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));


// ANS IS NO
// const p;
// p = 45;
// console.log(p);

// we can add more keys in const object
// we can make changes in keys
const obj = {
    Name: "Naman", 
    Lang: "JS"
}
obj["Age"] = 20;
obj["Lang"] = "C++";

// but we can not assign a new obj or a value to obj
console.log(obj);