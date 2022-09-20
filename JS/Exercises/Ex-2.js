// snake beats water
// gun beats snake
// water beats gun

let dict = {
    1: "s",
    2: "w",
    3: "g"
}

while(1) {
    let choice = prompt("Enter your choice, Snake(s), Water(w) or Gun(g)");
    let rand_num = Math.floor(Math.random()*3) + 1;
    let cpu = dict[rand_num];

    if(choice == cpu) 
        alert("Tie");
    else if(choice == "s") {
        if(cpu == "w")
            alert("You Won");
        else
            alert("You Lost");
    }
    else if(choice == "w") {
        if(cpu == "g")
            alert("You Won");
        else
            alert("You Lost");
    }
    else {
        if(cpu == "s")
            alert("You Won");
        else
            alert("You Lost");
    }
    let mess = confirm("Do you want to play again?");
    if(mess == false)
        break;
}

alert("Thanks for Playing!");