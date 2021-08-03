let startstop = 0;

const startStop = () => {
  startstop = startstop + 1;
  if (startstop === 1) {
    startTimer();
    document.getElementById("btn-toggle").innerHTML = "Stop";
  } else if (startstop === 2) {
    document.getElementById("btn-toggle").innerHTML = "Start";
    startstop = 0;
    stopTimer();
  }
};

let ms = 0;
let sec = 0;
let min = 0;
let hr = 0;

//display

const timer = () => {
  ms++;
  if (ms >= 100) {
    sec++;
    ms = 0;
  }
  if (sec === 60) {
    min++;
    sec = 0;
  }

  if (min === 60) {
    hour++;
    min = 0;
  }
  if (hr === 24) {
    ms, sec, min, (hr = 0);
  }

  document.getElementById("milliseconds").innerHTML = ms;
  document.getElementById("seconds").innerHTML = sec;
  document.getElementById("minutes").innerHTML = min;
  document.getElementById("hours").innerHTML = hr;
  // document.getElementById("seconds").innerText = displaysec,
};

let time = 0;

const startTimer = () => {
  time = setInterval(timer, 10);
};

const stopTimer = () => {
  clearInterval(time);
};

const reset = () => {
  ms = 0;
  sec = 0;
  min = 0;
  hr = 0;
};

const startWatch = document.getElementById("btn-toggle");
startWatch.addEventListener("click", startTimer);

//const stopWatch = document.getElementById("btn-stop");
//stopWatch.addEventListener("click", stopTimer, false);

const resetWatch = document.getElementById("btn-reset");
resetWatch.addEventListener("click", reset);
