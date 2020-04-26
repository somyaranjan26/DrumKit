
var NumberOfDrumButton = document.querySelectorAll(".drum").length;



for (var i = 0; i < NumberOfDrumButton; i++) {

    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var buttonInnerHTMl = this.innerHTML;
        makeSound(buttonInnerHTMl);
        buttonAnimation(buttonInnerHTMl);
    });
}

document.addEventListener("keypress", function(event) {
    
    makeSound(event.key);

    buttonAnimation(event.key);
});

function makeSound(key) {
    switch(key) {
        case "w":
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
            break;
        
        case "a":
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
            break;
        
        case "s":
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
            break;

        case "d":
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
            break;
        
        case "j":
                var audio = new Audio("sounds/snare.mp3");
                audio.play();
            break;
        
        case "k":
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
            break;
        
        case "l":
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
            break;
        
        default: 
                console.log(buttonInnerHTMl);
    }
        
}

function buttonAnimation(currentKey)    {

    var activeBotton = document.querySelector("." + currentKey);

    activeBotton.classList.add("pressed");

    setTimeout(function () {
        activeBotton.classList.remove("pressed");
    }, 100);
}