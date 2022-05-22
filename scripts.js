
var greenBox = document.getElementsByClassName("green-box")[0];
var redBox = document.getElementsByClassName("red-box")[0];
var blueBox = document.getElementsByClassName("blue-box")[0];
var yellowBox = document.getElementsByClassName("yellow-box")[0];
var game = document.getElementsByClassName("game")[0];
var mainText = document.getElementById("main-text");

var greenAudio = new Audio("assets/audio/green.mp3");
var redAudio = new Audio("assets/audio/red.mp3");
var blueAudio = new Audio("assets/audio/blue.mp3");
var yellowAudio = new Audio("assets/audio/yellow.mp3");
var wrongAudio = new Audio("assets/audio/wrong.mp3");

var tracker = 0;
var randomBox = 0;
var sequence = [];
var maxLevel = 16;
var level = 0;
var pattern = [];

//Every time game choose a box:
function greenBoxClicked() {
    if (start = true) {
        greenBox.classList.add("active");
        greenAudio.play();
        setTimeout(function () {
            greenBox.classList.remove("active");
        }, 200);
    }
}
function redBoxClicked() {
    if (start = true) {
        redBox.classList.add("active");
        redAudio.play();
        setTimeout(function () {
            redBox.classList.remove("active");
        }, 200);
    }
}
function blueBoxClicked() {
    if (start = true) {
        blueBox.classList.add("active");
        blueAudio.play();
        setTimeout(function () {
            blueBox.classList.remove("active");
        }, 200);
    }
}
function yellowBoxClicked() {
    if (start = true) {
        yellowBox.classList.add("active");
        yellowAudio.play();
        setTimeout(function () {
            yellowBox.classList.remove("active");
        }, 200);
    }
}
function wrongClick() {
    game.classList.add("active-game");
    greenBox.classList.add("active");
    redBox.classList.add("active");
    blueBox.classList.add("active");
    yellowBox.classList.add("active");
    wrongAudio.play();
    setTimeout(function () {
        game.classList.remove("active-game");
        greenBox.classList.remove("active");
        redBox.classList.remove("active");
        blueBox.classList.remove("active");
        yellowBox.classList.remove("active");
    }, 500)
}
