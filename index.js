const drum = document.getElementsByClassName('drum');


//Detecting button press
for(let i = 0; i < drum.length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    var buttonInnerHTML = this.innerHTML; 
    
    makeSound(buttonInnerHTML);

  })
}

//Detecting keyboard press

document.addEventListener("keydown", function(event) {

  makeSound(event.key)

}) 

function makeSound(key) {
  switch (key) {
    case "w":
      const wAudio = new Audio('sounds/tom-1.mp3');
      wAudio.pause();
      wAudio.currentTime = 0;
      wAudio.volume = .5;
      wAudio.play();
    break;
    case "a":
      const aAudio = new Audio('sounds/tom-2.mp3');
      aAudio.pause();
      aAudio.currentTime = 0;
      aAudio.volume = .5;
      aAudio.play();
    break;
    case "s":
      const sAudio = new Audio('sounds/tom-3.mp3');
      sAudio.pause();
      sAudio.currentTime = 0;
      sAudio.volume = .5;
      sAudio.play();
    break;
    case "d":
      const dAudio = new Audio('sounds/tom-4.mp3');
      dAudio.pause();
      dAudio.currentTime = 0;
      dAudio.volume = .5;
      dAudio.play();
    break;
    case "j":
      const jAudio = new Audio('sounds/snare.mp3');
      jAudio.pause();
      jAudio.currentTime = 0;
      jAudio.volume = .5;
      jAudio.play();
    break;
    case "k":
      const kAudio = new Audio('sounds/crash.mp3');
      kAudio.pause();
      kAudio.currentTime = 0;
      kAudio.volume = .5;
      kAudio.play();
    break;
    case "l":
      const lAudio = new Audio('sounds/kick-bass.mp3');
      lAudio.pause();
      lAudio.currentTime = 0;
      lAudio.volume = .5;
      lAudio.play();
    break;
    case "z":
      const zAudio = new Audio('sounds/pitch0.mp3');
      zAudio.pause();
      zAudio.currentTime = 0;
      zAudio.volume = .5;
      zAudio.play();
    break;
    case "x":
      const xAudio = new Audio('sounds/pitch1.mp3');
      xAudio.pause();
      xAudio.currentTime = 0;
      xAudio.volume = .5;
      xAudio.play();
    break;
    case "c":
      const cAudio = new Audio('sounds/pitch2.mp3');
      cAudio.pause();
      cAudio.currentTime = 0;
      cAudio.volume = .5;
      cAudio.play();
    break;
    case "v":
      const vAudio = new Audio('sounds/pitch3.mp3');
      vAudio.pause();
      vAudio.currentTime = 0;
      vAudio.volume = .5;
      vAudio.play();
    break;
    case "b":
      const bAudio = new Audio('sounds/pitch4.mp3');
      bAudio.pause();
      bAudio.currentTime = 0;
      bAudio.volume = .5;
      bAudio.play();
    break;
    case "n":
      const nAudio = new Audio('sounds/pitch5.mp3');
      nAudio.pause();
      nAudio.currentTime = 0;
      nAudio.volume = .5;
      nAudio.play();
    break;
    default: console.log(buttonInnerHTML)
  }
}






// wAudio.pause();
// wAudio.currentTime = 0;
// wAudio.volume = .5;
// wAudio.play();









// for(let i = 0; i < drum.length; i++) {
//   drum[i].addEventListener("click", () => {
//     console.log(this.innerHTML)
//   })
// }

// for(let i = 0; i < drum.length; i++) {
//   document.getElementsByClassName("drum")[i].addEventListener("click", () => {
//     console.log(this.innerHTML)
//   })
// }



// for(let i = 0; i < drum.length ; i++) {
//   drum[i].addEventListener('click', () => {
//     console.log(this)
//   })
// }














// wAudio.preload = 'auto';
// wAudio.load();
// for(let i = 0; i < drum.length ; i++) {
//   drum[i].addEventListener('click', () => {
//     var click = wAudio.cloneNode();
//     click.play();
//   })
// }
