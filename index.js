// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
    noOfButtons = document.querySelectorAll('.drum').length
    for (var i=0; i<noOfButtons; i++) {
    var button = document.querySelectorAll('.drum');
    // Add a click event listener to the button
    button[i].addEventListener("click", function(event) {
        key = event.target.innerHTML;
        playSound(key);
    });
}
});


document.addEventListener("keypress", function(event) {
    playSound(event.key)
});



function playSound(key) {

    switch (key) {
        case 'w':
            var audio = new Audio('/sounds/crash.mp3');
            audio.play();
            break;

        case 'a':
            var audio = new Audio('/sounds/kick-bass.mp3');
            audio.play();
            break;

        case 's':
            var audio = new Audio('/sounds/snare.mp3');
            audio.play();
            break;

        case 'd':
            var audio = new Audio('/sounds/tom-1.mp3');
            audio.play();
            break;

        case 'j':
            var audio = new Audio('/sounds/tom-2.mp3');
            audio.play();
            break;

        case 'k':
            var audio = new Audio('/sounds/tom-3.mp3');
            audio.play();
            break;

        case 'l':
            var audio = new Audio('/sounds/tom-4.mp3');
            audio.play();
            break;

        default:
            console.log('Please press or hit the required Key');
    }
}

function buttonAnimation(key) {
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add('pressed');

      // Setting a timeout to remove the class after 100 milliseconds
      setTimeout(function() {
        activeButton.classList.remove('pressed');
    }, 100);

}