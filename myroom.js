// Define game states
const GameState = {
    START: "start",
    INSIDE_ROOM: "inside_room",
};
let gameState = GameState.START;

function startGame() {
  console.log("Start button clicked.");
    document.getElementById("start-button").style.display = "none";

    var canvas = document.getElementById("game-canvas");
    canvas.style.display = "block";
    canvas.style.backgroundImage = "url('frontdoor.jpg')"; // This line sets the background image to the door image

    var doorOpenAudio = document.getElementById("door-open-audio");
    doorOpenAudio.play();
    
    // Change the game state to INSIDE_ROOM after the door opening sound finishes
    doorOpenAudio.addEventListener("ended", function() {
        gameState = GameState.INSIDE_ROOM;
    });
}

function updateGame() {
    var canvas = document.getElementById("game-canvas");
    var context = canvas.getContext("2d");
    
    if (gameState === GameState.INSIDE_ROOM) {
        var roomImage = new Image();
        roomImage.src = "widroom.jpg";
        roomImage.onload = function() {
            context.drawImage(roomImage, 0, 0, canvas.width, canvas.height);
        }
        
        context.fillStyle = "white";
        context.font = "20px Arial";
        context.fillText("You are in my room. I'm not here, but you still sense you aren't alone.", 50, 450);
    }
}

function gameLoop() {
    updateGame();
    requestAnimationFrame(gameLoop);
}

gameLoop();
