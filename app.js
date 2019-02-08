
// Play music by mouse click - using onclick

// Play drum by keyboard press

let clap = document.getElementById("clap");
playClap = () => {
    clap.play();
}

let hihat = document.getElementById("hihat");
playHihat = () => {
    hihat.play();
}

let kick = document.getElementById("kick");
playKick = () => {
    kick.play();
}

let openhat = document.getElementById("openhat");
playOpenhat = () => {
    openhat.play();
}

let boom = document.getElementById("boom");
playBoom = () => {
    boom.play();
}

let ride = document.getElementById("ride");
playRide = () => {
    ride.play();
}

let snare = document.getElementById("snare");
playSnare = () => {
    snare.play();
}

let tom = document.getElementById("tom");
playTom = () => {
    tom.play();
}

let tink = document.getElementById("tink");
playTink = () => {
    tink.play();
}

    
document.addEventListener("keypress", function (){
    let boxes = document.getElementsByClassName("box");
    var key = event.code
    if (key === "KeyA") {
        playClap();
        boxes[0].style.backgroundColor = "#fff";
    } else if (key === "KeyS") {
        playHihat();
        boxes[1].style.backgroundColor = "#fff";
    } else  if (key === "KeyD") {
        playKick();
        boxes[2].style.backgroundColor = "#fff";
    } else if (key === "KeyF") {
        playOpenhat();
        boxes[3].style.backgroundColor = "#fff";
    } else if (key === "KeyG") {
        playBoom();
        boxes[4].style.backgroundColor = "#fff";
    } else if (key === "KeyH") {
        playRide();
        boxes[5].style.backgroundColor = "#fff";
    } else if (key === "KeyJ") {
        playSnare();
        boxes[6].style.backgroundColor = "#fff";
    } else if (key === "KeyK") {
        playTom();
        boxes[7].style.backgroundColor = "#fff";
    } else if (key === "KeyL") {
        playTink();
        boxes[8].style.backgroundColor = "#fff";
    } 

})

document.addEventListener("keyup", function (){
    let boxes = document.getElementsByClassName("box");
    var key = event.code
    if (key === "KeyA") {
        boxes[0].style.backgroundColor = "#C5383D";
    } else if (key === "KeyS") {
        boxes[1].style.backgroundColor = "#C5383D";
    } else  if (key === "KeyD") {
        boxes[2].style.backgroundColor = "#C5383D";
    } else if (key === "KeyF") {
        boxes[3].style.backgroundColor = "#C5383D";
    } else if (key === "KeyG") {
        boxes[4].style.backgroundColor = "#C5383D";
    } else if (key === "KeyH") {
        boxes[5].style.backgroundColor = "#C5383D";
    } else if (key === "KeyJ") {
        boxes[6].style.backgroundColor = "#C5383D";
    } else if (key === "KeyK") {
        boxes[7].style.backgroundColor = "#C5383D";
    } else if (key === "KeyL") {
        boxes[8].style.backgroundColor = "#C5383D";
    } 

})


