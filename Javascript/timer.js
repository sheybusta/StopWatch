let countdown;
const hours = document.getElementById("hours");
const mins = document.getElementById("minutes");
const secs = document.getElementById("seconds");

const timer = (seconds) => {
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);

  // every single second we need to display the amount of time left
  countdown = setInterval(() => {
    const secondsLeft = Math.round(then - Date.now()) / 1000;

    // we need to stop the interval when it gets 0
    // we need to store the interval in its own variable, for that we are going to use a universal variable 'countdown'
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
};

const displayTimeLeft = (seconds, hours, milliseconds) => {
  const seconds = Math.floor(1000);
  const minutos = Math.floor(seconds / 60);

  const remainderSeconds = seconds % 60;
  const display = `${minutos}:${
    remainderSeconds < 10 ? "0" : ""
  }${remainderSeconds}`;

  console.log(seconds);
};

const startTimer = document.getElementById("btn-toggle");
startTimer.addEventListener("click", timer);
