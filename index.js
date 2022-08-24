var drums = document.querySelectorAll(".drum");

var sounds = ["crash.mp3", "kick-bass.mp3", "snare.mp3", "tom-1.mp3", "tom-2.mp3", "tom-3.mp3", "tom-4.mp3"];

document.addEventListener("keydown", function(event) {
  event.preventDefault();
  bindSoundToKey(event.key);
  animate(event.key);
});

for (var i = 0; i < drums.length; i++) {
  drums[i].addEventListener("click", function() {
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
    }, 100);
  }
}

function bindSoundToKey(key) {
  switch (key) {
    case 'w':
      var crash = new Audio("sounds/crash.mp3")
      crash.play();
      break;
    case 'a':
      var kick = new Audio("sounds/kick-bass.mp3")
      kick.play();
      break;
    case 's':
      var snare = new Audio("sounds/snare.mp3")
      snare.play();
      break;
    case 'd':
      var tom1 = new Audio("sounds/tom-1.mp3")
      tom1.play();
      break;
    case 'j':
      var tom2 = new Audio("sounds/tom-2.mp3")
      tom2.play();
      break;
    case 'k':
      var tom3 = new Audio("sounds/tom-3.mp3")
      tom3.play();
      break;
    case 'l':
      var tom4 = new Audio("sounds/tom-4.mp3")
      tom4.play();
      break;
    default:
      console.log(key);
  }
}
