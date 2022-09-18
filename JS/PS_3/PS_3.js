const prompt = require("prompt-sync")();
let obj = {
    "Naman": 98,
    "Ishan": 55,
    "Gauri": 85
};

// for printing using for loop objects
for(let i=0; i<Object.keys(obj).length; i++) {
    console.log(Object.keys(obj)[i]);
    console.log(obj[Object.keys(obj)[i]]);
}
for(let i in obj) {
    console.log(obj[i]);
}

while(1) {
    let user_num = prompt("Enter a number: ");
    if(user_num > 5) {
        console.log("try again");
    }
    else {
        console.log("Correct");
        break;
    }
}

let arr = [4,5,2,3,4];
let sum = 0;
for(let i=0; i<5; i++)  
    sum += arr[i];
console.log(sum/5);


// 2 methods to declare functions
function sum2nums(x,y) {
    return x+y;
}
const sum2nums_2 = (x,y)=> {
    return x+y;
}

console.log(sum2nums(77,83));
console.log(sum2nums_2(77,83));

