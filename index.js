var drums = document.querySelectorAll(".drum");

let currentAudio = new Audio();

document.addEventListener("keydown", function(event) {
  event.preventDefault();
  bindSoundToKey(event.key);
  animate(event.key);
});

for (var i = 0; i < drums.length; i++) {
  drums[i].addEventListener("click", function(event) {
    event.preventDefault();
    var key = this.innerHTML;
    bindSoundToKey(key);
    animate(key);
  });
}

function animate(key) {
  var selected = document.querySelector("."+key)
  if(selected !== null) {
    selected.classList.add("pressed");
    setTimeout(function() {
      selected.classList.remove("pressed");
    }, 10);
  }
}

function stopThenPlay(newAudio) {
  currentAudio.pause();
  currentAudio.currentTime = 0;
  currentAudio = new Audio(newAudio);
  currentAudio.play();
}

function bindSoundToKey(key) {
  switch (key) {
    case 'w':
      var crash = new Audio("sounds/crash.mp3")
      // crash.play();
      stopThenPlay(crash);
      break;
    case 'a':
      var kick = new Audio("sounds/kick-bass.mp3")
      // kick.play();
      stopThenPlay(kick);
      break;
    case 's':
      var snare = new Audio("sounds/snare.mp3")
      // snare.play();
      stopThenPlay(snare);
      break;
    case 'd':
      var tom1 = new Audio("sounds/tom-1.mp3")
      // tom1.play();
      stopThenPlay(tom1);
      break;
    case 'j':
      var tom2 = new Audio("sounds/tom-2.mp3")
      // tom2.play();
      stopThenPlay(tom2);
      break;
    case 'k':
      var tom3 = new Audio("sounds/tom-3.mp3")
      // tom3.play();
      stopThenPlay(tom3);
      break;
    case 'l':
      var tom4 = new Audio("sounds/tom-4.mp3")
      // tom4.play();
      stopThenPlay(tom4);
      break;
    default:
      console.log(key);
  }
}
