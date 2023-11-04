const doorOpenAudio = document.getElementById("door-open-audio");
const doorCloseAudio = document.getElementById("door-close-audio");
const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const textOverlay = document.getElementById("text-overlay");

function startGame() {
    doorOpenAudio.play();
    startScreen.style.display = "none";
    gameScreen.style.display = "block";

    setTimeout(function() {
        doorOpenAudio.pause();
        setTimeout(function() {
            gameScreen.style.backgroundColor = "black";
            doorCloseAudio.play();
            gameScreen.style.backgroundImage = "url('widroom.jpg')";
            textOverlay.style.display = "block";
        }, 5000);
    }, 5000);
}
