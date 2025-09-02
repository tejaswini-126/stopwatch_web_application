let timer;
let seconds = 0, minutes = 0, hours = 0;
let isRunning = false;

function updateDisplay() {
  let time = 
    (hours < 10 ? "0" + hours : hours) + ":" +
    (minutes < 10 ? "0" + minutes : minutes) + ":" +
    (seconds < 10 ? "0" + seconds : seconds);
  document.getElementById("time").innerText = time;
}

function start() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      seconds++;
      if (seconds === 60) { seconds = 0; minutes++; }
      if (minutes === 60) { minutes = 0; hours++; }
      updateDisplay();
    }, 1000);
  }
}

function pause() {
  clearInterval(timer);
  isRunning = false;
}

function reset() {
  clearInterval(timer);
  isRunning = false;
  seconds = 0; minutes = 0; hours = 0;
  updateDisplay();
  document.getElementById("laps").innerHTML = "";
}

function lap() {
  if (isRunning) {
    let lapTime = document.getElementById("time").innerText;
    let li = document.createElement("li");
    li.innerText = "Lap: " + lapTime;
    document.getElementById("laps").appendChild(li);
  }
}
updateDisplay();
