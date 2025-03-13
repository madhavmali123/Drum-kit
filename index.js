var noofDrumbtn = document.querySelectorAll(".drum").length;
for (var i = 0; i < noofDrumbtn; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerhtml = this.innerHTML;
    makeSound(buttonInnerhtml);
    animation(buttonInnerhtml);
  });
}

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  animation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var Crash = new Audio("sounds/crash.mp3");
      Crash.play();
      break;
    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "l":
      var Snare = new Audio("sounds/snare.mp3");
      Snare.play();
      break;

    default:
      alert("you are pressing wrong key  " + key);
  }
}

function animation(currentKey){
    var m = document.querySelector("." + currentKey);
    m.classList.add("pressed");

    setTimeout(function(){
       m.classList.remove("pressed");
    }, 100);
}