var drums = document.querySelectorAll(".drum");

var sounds = ["crash.mp3", "kick-bass.mp3", "snare.mp3", "tom-1.mp3", "tom-2.mp3", "tom-3.mp3", "tom-4.mp3"];

drums[0].addEventListener("click", function() {
  var sound = new Audio("sounds/" + sounds[0])
  sound.play();
});

drums[1].addEventListener("click", function() {
  var sound = new Audio("sounds/" + sounds[1])
  sound.play();
});

drums[2].addEventListener("click", function() {
  var sound = new Audio("sounds/" + sounds[2])
  sound.play();
});

drums[3].addEventListener("click", function() {
  var sound = new Audio("sounds/" + sounds[3])
  sound.play();
});

drums[4].addEventListener("click", function() {
  var sound = new Audio("sounds/" + sounds[4])
  sound.play();
});

drums[5].addEventListener("click", function() {
  var sound = new Audio("sounds/" + sounds[5])
  sound.play();
});

drums[6].addEventListener("click", function() {
  var sound = new Audio("sounds/" + sounds[6])
  sound.play();
});
