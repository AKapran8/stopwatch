let minutes = 00;
let tens = 00;
let seconds = 00;
let Interval;
const appendTens = document.querySelector("#tens");
const appendSeconds = document.querySelector("#seconds");
const appendMinutes = document.querySelector("#minutes");
const dots = document.querySelector(".dots");
const buttonStart = document.querySelector("#button-start");
const buttonStop = document.querySelector("#button-stop");
const buttonReset = document.querySelector("#button-reset");
const buttonLoop = document.querySelector("#button-loop");
const list = document.querySelector(".list");

buttonStart.addEventListener("click", () => {
  clearInterval(Interval);
  Interval = setInterval(startTimer, 10);
});

buttonStop.addEventListener("click",() => {
  clearInterval(Interval);
});

buttonReset.addEventListener("click",() => {
  clearInterval(Interval);
  tens = "00";
  seconds = "00";
  minutes = "00";
  appendTens.innerHTML = tens;
  appendSeconds.innerHTML = seconds;
  appendMinutes.innerHTML = minutes;
});

buttonLoop.addEventListener("click", () => {
  if (!minutes && !seconds && !tens) {
    return;
  }

  let li = document.createElement("li");
  const newSecond = seconds < 10 ? `0${seconds}` : seconds;
  const newTens = tens < 10 ? `0${tens}` : tens;
  li.innerHTML = `${minutes}:${newSecond}:${newTens}`;
  list.append(li);
  document.body.append(list);
});

const startTimer = () => {
  tens++;
  appendTens.innerHTML = tens < 9 ? "0" + tens : tens;

  if (tens > 99) {
    seconds++;
    tens = 0;
    appendTens.innerHTML = "0" + tens;
  }

  appendSeconds.innerHTML = seconds < 9 ? "0" + seconds : seconds;

  if (seconds > 59) {
    minutes++;
    seconds = 0;
    appendSeconds.innerHTML = "0" + seconds;
   }

  appendMinutes.innerHTML = minutes < 9 ? "0" + minutes : minutes;
}
