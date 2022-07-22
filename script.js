// buttons
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
// variables
let h = document.querySelector(".h");
let m = document.querySelector(".m");
let s = document.querySelector(".s");

startBtn.addEventListener("click", starter);

function starter() {
  const x = setInterval(() => {
    s.innerHTML++;
    // add a "0" before numbers if they were less than 10
    if (s.innerHTML.length === 1) {
      s.innerHTML = `0${s.innerHTML}`;
    }
    if (m.innerHTML.length === 1) {
      m.innerHTML = `0${m.innerHTML}`;
    }
    if (h.innerHTML.length === 1) {
      h.innerHTML = `0${h.innerHTML}`;
    }
    // handling clock format
    if (s.innerHTML / 60 === 1) {
      s.innerHTML = 0;
      m.innerHTML++;
    }
    if (m.innerHTML / 60 === 1) {
      m.innerHTML = 0;
      h.innerHTML++;
    }
  }, 1000);
  // pause button
  stopBtn.addEventListener("click", stopper);
  function stopper() {
    clearInterval(x);
    startBtn.style.display = "block";
    startBtn.classList.add("animate__animated", "animate__fadeInDown");
  }
  // reset button
  resetBtn.addEventListener("click", reseter);
  function reseter() {
    stopper();
    h.innerHTML = `00`;
    m.innerHTML = `00`;
    s.innerHTML = `00`;
  }
  // disappear start button after click on it
  if (x) {
    startBtn.style.display = "none";
  }
}
