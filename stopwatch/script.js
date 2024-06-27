let timer;
let second = 0;
let minutes = 0;
let hours = 0;

const updateDisplay = () => {
  document.getElementById("display").innerHTML = `${hours
    .toString()
    .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${second
    .toString()
    .padStart(2, "0")}`
}

const startTimer = () => {
  timer = setInterval(() => {
    second++
    if (second === 60) {
      second = 0
      minutes++
    }
    if (minutes === 60) {
      minutes = 0
      hours++
    }
    updateDisplay()
  }, 1000)
}

const stopTimer = () => {
  clearInterval(timer)
}

const resetTimer = () => {
  clearInterval(timer)
  second = 0
  minutes = 0
  hours = 0
  updateDisplay()
}

document.getElementById("startbtn").addEventListener("click", startTimer)
document.getElementById("stopbtn").addEventListener("click", stopTimer)
document.getElementById("resetbtn").addEventListener("click", resetTimer)
