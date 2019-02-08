// Play drum by keyboard press

// document.body.addEventListener ('keypress', 
    
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

let a = document.getElementById("a");
    
function sound(event) {
    var key = event.code
    if (key === "KeyA") {
        playClap();
    } else if (key === "KeyS") {
        playHihat();
    } else  if (key === "KeyD") {
        playKick();
    } else if (key === "KeyF") {
        playOpenhat();
    } else if (key === "KeyG") {
        playBoom();
    } else if (key === "KeyH") {
        playRide();
    } else if (key === "KeyJ") {
        playSnare();
    } else if (key === "KeyK") {
        playTom();
    } else if (key === "KeyL") {
        playTink();
    }
}

document.addEventListener("keypress", sound)


// if (sound(event) === 'true') {
//     box.style.backgroundColour = "#fffff"
// }


// Play music by mouse click