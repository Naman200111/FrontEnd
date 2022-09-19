const prompt = require("prompt-sync")();
let num = Math.floor(Math.random() * 100) + 1; // to generate a number between 1 to 100
let ct=0, score=100;
while(1) {
    let guess = prompt("Enter your guess: ");
    ct++;
    if(guess == num) {
        score = 100-ct;
        console.log("Correct, Score is: ",score);
        break;
    }
    else if(guess > num) {
        console.log("Guess Lesser");
    }
    else {
        console.log("Guess Larger");
    }
}