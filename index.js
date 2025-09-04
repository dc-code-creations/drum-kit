// add event listener to each button
let buttons = document.querySelectorAll(".drum");
// for (let i = 0; i < buttons.length; i++) {
// console.log(buttons);
buttons.forEach(ele => {
  ele.addEventListener("click", (e) => {
    console.log(e.target);
  });
});