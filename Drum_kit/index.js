//click handler
for (var i = 0; i < document.querySelectorAll("button").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {

        var keyLetter = this.innerHTML;
        playSound(keyLetter);
        Animation(keyLetter);
    });
};
//keypress event
document.addEventListener("keypress", function(event) {
    playSound(event.key);
    Animation(event.key);

});

function playSound(events) {
    switch (events) {
        case 'w':
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case 'w':
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case 'a':
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case 's':
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case 'd':
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case 'j':
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case 'k':
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case 'l':
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        default:
            break;
    }

};

//animation function
function Animation(event) {
    document.querySelector("." + event).classList.add("pressed");
    setTimeout(function() {

        document.querySelector("." + event).classList.remove("pressed");
    }, 300);
};