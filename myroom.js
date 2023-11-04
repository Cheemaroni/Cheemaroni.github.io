const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const doorOpenAudio = document.getElementById("door-open-audio");
const doorCloseAudio = document.getElementById("door-close-audio");

function startGame() {
    startScreen.style.display = "none";
    gameScreen.style.display = "block";

    doorOpenAudio.play(); 

    setTimeout(function () {
        doorOpenAudio.pause();
        doorCloseAudio.play();

        setTimeout(function () {
            gameScreen.style.backgroundImage = "url('wideroom.jpg')";
        }, 5000); 
    }, 5000); 
}
