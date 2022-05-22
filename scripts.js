
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

//Every time game chooses and Add a new level
function chooseRandomly() {
    sequence = [];
    level++;

    if (level < maxLevel) {
        mainText.innerHTML = "Level " + `${level}`;
        randomBox = Math.floor(Math.random() * 4) + 1;
        if (randomBox == 1) {
            greenBoxClicked();
        }
        else if (randomBox == 2) {
            redBoxClicked();
        }
        else if (randomBox == 3) {
            blueBoxClicked();
        }
        else {
            yellowBoxClicked();
        }
        pattern.push(randomBox);
    }
    else {
        mainText.innerHTML = "YOU WIN!!"
        setTimeout(function () {
            window.location.reload();
        }, 2000)
    }

    tracker = 0;
}
greenBox.addEventListener('click', checkGreen);
redBox.addEventListener('click', checkRed);
blueBox.addEventListener('click', checkBlue);
yellowBox.addEventListener('click', checkYellow);
document.addEventListener('keypress', chooseRandomly);

//when player clicks check the pattern and the player sequence
function checkGreen() {
    greenBoxClicked();
    sequence.push(1);
    for (var i = 0; i < sequence.length; i++) {
        var y = 0;
        if (sequence[i] != pattern[i]) {
            mainText.innerHTML = "YOU LOST!";
            wrongClick();
            setTimeout(function () { location.reload(); }, 500)
            y++;
            return
        }
    }
    tracker++;
    if (tracker == level) {
        setTimeout(function () {
            chooseRandomly();
        }, 1000)
    }
}
function checkRed() {
    redBoxClicked();
    sequence.push(2);
    for (var i = 0; i < sequence.length; i++) {
        if (sequence[i] != pattern[i]) {
            mainText.innerHTML = "YOU LOST!";
            wrongClick();
            setTimeout(function () { location.reload(); }, 500)
            return
        }
    }
    tracker++;
    if (tracker == level) {
        setTimeout(function () {
            chooseRandomly();
        }, 1000)
    }
    console.log("count with click" + count);
}
function checkBlue() {
    blueBoxClicked();
    sequence.push(3);
    for (var i = 0; i < sequence.length; i++) {
        if (sequence[i] != pattern[i]) {
            mainText.innerHTML = "YOU LOST!";
            wrongClick();
            setTimeout(function () { location.reload(); }, 500)
            return
        }
    }
    tracker++;
    if (tracker == level) {
        setTimeout(function () {
            chooseRandomly();
        }, 1000)
    }
}
function checkYellow() {
    yellowBoxClicked();
    sequence.push(4);
    for (var i = 0; i < sequence.length; i++) {
        if (sequence[i] != pattern[i]) {
            mainText.innerHTML = "YOU LOST!";
            wrongClick();
            setTimeout(function () { location.reload(); }, 500)
            return
        }
    }
    tracker++;
    if (tracker == level) {
        setTimeout(function () {
            chooseRandomly();
        }, 1000)
    }
}

