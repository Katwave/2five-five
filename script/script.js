// From another folder

let start = document.getElementById("start");
let stop = document.getElementById("stop");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let time = document.getElementById("time");
let textBox = document.getElementById("textBox");
let timerValue = document.getElementById("timerValue");

let aud = new Audio();

let minutesTime = 00;
let secondsTime = 00;

function mins() {
  minutesTime++;
  minutes.innerText = minutesTime;
  if (minutesTime == parseInt(textBox.value)) {
    aud.src = "../aud/1.mp3";
    aud.play();
    clearInterval(mn);
    clearInterval(sc);
    minutes.innerText = minutesTime;
    seconds.innerText = 0;
  }
}

function secs() {
  secondsTime++;
  seconds.innerText = secondsTime;
  if (secondsTime == 60) {
    secondsTime = 0;
    seconds.innerText = secondsTime;
    secondsTime++;
  }
}

start.addEventListener("click", () => {
  if (textBox.value == 5 || textBox.value == 25) {
    mn = setInterval(mins, 60000);
    sc = setInterval(secs, 1000);
    timerValue.innerText = `Time set : ${textBox.value} minutes`;
  }

  //
});

stop.addEventListener("click", () => {
  secondsTime = 0;
  minutesTime = 0;

  time.innerHTML = `0 : 0`;

  clearInterval(mn);
  clearInterval(sc);

  aud.src = "";
  aud.pause();
});
