function handleClick(e) {
  console.log(e.target.textContent);
  console.log(this);
  // this.style.color = 'white';

  // let currentButton = e.target.textContent;
  let currentButton = this.textContent;

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
      break;
  }
}


  // add event listener to each button
  let buttons = document.querySelectorAll("button.drum");
  // for (let i = 0; i < buttons.length; i++) {
  // console.log(buttons);
  buttons.forEach(ele => {
    ele.addEventListener("click", handleClick)
  });