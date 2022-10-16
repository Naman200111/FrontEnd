let leftcount = 0;
let rightcount = 0;
function plus1L(){
    leftcount = leftcount + 1;
    let oldtext = document.getElementById("s1");
    oldtext.innerText = leftcount;
}
function plus2L(){
    leftcount = leftcount + 2;
    let oldtext = document.getElementById("s1");
    oldtext.innerText = leftcount;
}
function plus3L(){
    leftcount = leftcount + 3;
    let oldtext = document.getElementById("s1");
    oldtext.innerText = leftcount;
}
function plus1R(){
    rightcount = rightcount + 1;
    let oldtext = document.getElementById("s2");
    oldtext.innerText = rightcount;
}
function plus2R(){
    rightcount = rightcount + 2;
    let oldtext = document.getElementById("s2");
    oldtext.innerText = rightcount;
}

function plus3R(){
    rightcount = rightcount + 3;
    let oldtext = document.getElementById("s2");
    oldtext.innerText = rightcount;
}

function reset() {
    leftcount = 0;
    rightcount = 0;
    document.getElementById("s1").innerText = leftcount;
    document.getElementById("s2").innerText = rightcount;
}