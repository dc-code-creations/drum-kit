function handleClick(e) {
  console.log(e.target.textContent);
  console.log(this);
  // this.style.color = 'white';

  // let currentButton = e.target.textContent;
  let currentButton = this.textContent;
  buttonAnimation(currentButton);

  let keySound = new Audio('');
  switch (currentButton) {
    case 'w':
      keySound = new Audio('sounds/tom-1.mp3');
      keySound.play();
      break;
    case 'a':
      keySound = new Audio('sounds/tom-2.mp3');
      keySound.play();
      break;
    case 's':
      keySound = new Audio('sounds/tom-3.mp3');
      keySound.play();
      break;
    case 'd':
      keySound = new Audio('sounds/tom-4.mp3');
      keySound.play();
      break;
    case 'j':
      keySound = new Audio('sounds/snare.mp3');
      keySound.play();
      break;
    case 'k':
      keySound = new Audio('sounds/crash.mp3');
      keySound.play();
      break;
    case 'l':
      keySound = new Audio('sounds/kick-bass.mp3');
      keySound.play();
      break;
  
    default:
      console.log("Wrong button:", currentButton);
      break;
  }
}

function handleKeydown(e) {
  // console.log(e);
  // console.log(this);
  let currentButton = e.key;
  buttonAnimation(currentButton);

  let keySound = new Audio('');
  switch (currentButton) {
    case 'w':
      keySound = new Audio('sounds/tom-1.mp3');
      keySound.play();
      break;
    case 'a':
      keySound = new Audio('sounds/tom-2.mp3');
      keySound.play();
      break;
    case 's':
      keySound = new Audio('sounds/tom-3.mp3');
      keySound.play();
      break;
    case 'd':
      keySound = new Audio('sounds/tom-4.mp3');
      keySound.play();
      break;
    case 'j':
      keySound = new Audio('sounds/snare.mp3');
      keySound.play();
      break;
    case 'k':
      keySound = new Audio('sounds/crash.mp3');
      keySound.play();
      break;
    case 'l':
      keySound = new Audio('sounds/kick-bass.mp3');
      keySound.play();
      break;
  
    default:
      console.log("Wrong button:", currentButton);
      break;
  }
}

// add event listener to each button
let buttons = document.querySelectorAll("button.drum");
// console.log(buttons);

// listeners for buttons can be added to each individual button because there is a physical button to press
buttons.forEach(ele => {
  ele.addEventListener("click", handleClick);
});

// listeners for key strokes must be added to document so that the key stroke can be heard
document.addEventListener("keydown", handleKeydown);

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);

  // set animation size/duration/effect for the active button
  activeButton.classList.add("pressed"); 
  setTimeout(function () {
    activeButton.classList.remove("pressed")
  }, 100);

  
}