//  reference of all button in js

const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");

//  reference of counter

const counter = document.getElementById("counter");

// declare  a variable

let counterValue = 0;

// update on screen function

const counterValueDisplayOnScreen = () => {
  counter.textContent = counterValue;
};

// increase function
const increase = () => {
  counterValue++;
  counterValueDisplayOnScreen();
};
// decrease function

const decrease = () => {
  if (counterValue > 0) {
    counterValue--;
    counterValueDisplayOnScreen();
  }
};
// reset function

const reset = () => {
  counterValue = 0;
  counterValueDisplayOnScreen();
};

// event listeners

increaseBtn.addEventListener("click", () => {
  increase();
});

decreaseBtn.addEventListener("click", () => {
  decrease();
});
resetBtn.addEventListener("click", () => {
  reset();
});
