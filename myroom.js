const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const doorOpenAudio = document.getElementById("door-open-audio");
const doorCloseAudio = document.getElementById("door-close-audio");
const textContainer = document.getElementById("text");
const text = "You are in my room. I'm not here, but you still sense you aren't alone.";

function startGame() {
    startScreen.style.display = "none";
    gameScreen.style.display = "block";

    doorOpenAudio.play(); 

    setTimeout(function () {
        doorOpenAudio.pause();
        doorCloseAudio.play();

        setTimeout(function () {
            gameScreen.style.backgroundImage = "url('wideroom.jpg')";
            textContainer.style.display = "block";
            displayText();
        }, 5000); // Transition to the room image after 5 seconds
    }, 5000); // Play door close audio after 5 seconds
}
function displayText() {
    let index = 0;
    const interval = setInterval(function () {
        textContainer.innerHTML += text[index];
        index++;
        if (index >= text.length) {
            clearInterval(interval);
        }
    }, 100);
}