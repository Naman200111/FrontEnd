const prompt = require("prompt-sync")();
let arr = [2,4,5,10,15,20];
let a = prompt("Enter a number: ");
a = Number.parseInt(a);
arr.push(a);
console.log(arr);

while(1) {
    let num = prompt("Enter a number: ");
    num = Number.parseInt(num);
    if(num == 0) {
        arr.push(num);
        break;
    }
    arr.push(num);
}

console.log(arr);

let narr = arr.filter((ele)=>{
    return ele%10 == 0;
});
console.log(arr);
console.log(narr);

let sqarr = narr.map((ele)=>{
    return ele*ele;
})

console.log(sqarr);

let carr = [1,2,3,4,5];
let farr = carr.reduce((ele1, ele2)=>{
    return ele1*ele2;
});
console.log(carr);
console.log(farr);
