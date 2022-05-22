
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
