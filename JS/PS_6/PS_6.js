let check = true;
while(check) {
    let age = prompt("Enter your age: ");
    age = Number.parseInt(age);
    if(age<0) {
        console.error("Enter valid age");
        continue;
    }
    
    if(age >= 18) 
        alert("You can Drive :)");
    else
        alert("You cannot Drive :(");

    if(age>4) {
        location.href = "https://www.google.com";
        break;
    }
    
    check = confirm("Do you want to see the prompt again?");
}

let color = prompt("Enter the page background color: ");
document.body.style.background = color;
