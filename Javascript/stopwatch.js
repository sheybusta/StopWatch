const hours = document.getElementById("hours");

const countDown = () => {
  const countDate = new Date("Jul 29, 2021 00:00:00").getTime();
  console.log(countDate);
  const now = new Date().getTime();
  const gap = countDate - now;
  //   console.log(gap);

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // calculate

  const textDay = Math.floor(gap / day);
  console.log(textDay);
};

const startWatch = document.getElementById("btn-toggle");
startWatch.addEventListener("click", countDown);

// function addZero(x, n) {
//   while (x.toString().length < n) {
//     x = "0" + x;
//   }
//   return x;
// }

// function myFunction() {
//   var d = new Date();
//   var x = document.getElementById("demo");
//   var h = addZero(d.getHours(), 2);
//   var m = addZero(d.getMinutes(), 2);
//   var s = addZero(d.getSeconds(), 2);
//   var ms = addZero(d.getMilliseconds(), 3);
//   x.innerHTML = h + ":" + m + ":" + s + ":" + ms;
// }

// var hurs = document.getElementById("hours");
// var mins = document.getElementById("minutes");
// var secs = document.getElementById("seconds");
// var msecs = document.getElementById("milliseconds");
// var toggleBtn = document.getElementById("btn-toggle");
// var resetBtn = document.getElementById("btn-reset");

// var lHh = "";
// var lMm = "";
// var lSs = "";
// var lMs = "";
// var lapCounter = 0;

// function stopwatch() {
//   var time = 0;
//   var interval;
//   var offset;

//   function update() {
//     if (this.isOn) {
//       time += delta();
//     }
//     var formattedTime = timeFormatter(time);
//     var shortTime = shorttimeFormatter(time);
//     document.title = shortTime + " • Stopwatch.net • Free Online Stopwatch";
//     hurs.innerHTML = timeFormatter(time).hh;
//     mins.innerHTML = timeFormatter(time).mm;
//     secs.innerHTML = timeFormatter(time).ss;
//     msecs.innerHTML = timeFormatter(time).ms;
//     lHh = timeFormatter(time).hh;
//     lMm = timeFormatter(time).mm;
//     lSs = timeFormatter(time).ss;
//     lMs = timeFormatter(time).ms;
//   }

//   function delta() {
//     var now = Date.now();
//     var timePassed = now - offset;
//     offset = now;
//     return timePassed;
//   }

//   function timeFormat() {
//     var formattedTime = timeFormatter(time);
//     var shortTime = shorttimeFormatter(time);
//     console.log(formattedTime);
//   }

//   function timeFormatter(timeinms) {
//     var time = new Date(timeinms);
//     var hours = time.getUTCHours().toString();
//     var minutes = time.getMinutes().toString();
//     var seconds = time.getSeconds().toString();
//     var milliseconds = time.getMilliseconds().toString();

//     if (hours.length < 2) {
//       hours = "0" + hours;
//     }

//     if (minutes.length < 2) {
//       minutes = "0" + minutes;
//     }

//     if (seconds.length < 2) {
//       seconds = "0" + seconds;
//     }

//     while (milliseconds.length < 3) {
//       milliseconds = "0" + milliseconds;
//     }

//     return { hh: hours, mm: minutes, ss: seconds, ms: milliseconds };
//   }

//   function shorttimeFormatter(timeinms) {
//     var time = new Date(timeinms);
//     var minutes = time.getMinutes().toString();
//     var seconds = time.getSeconds().toString();
//     var milliseconds = time.getMilliseconds().toString();

//     if (minutes.length < 2) {
//       minutes = "0" + minutes;
//     }

//     if (seconds.length < 2) {
//       seconds = "0" + seconds;
//     }

//     while (milliseconds.length < 3) {
//       milliseconds = "0" + milliseconds;
//     }

//     return minutes + ":" + seconds;
//   }

//   this.isOn = false;

//   this.start = function () {
//     if (!this.isOn) {
//       interval = setInterval(update.bind(this), 10);
//       offset = Date.now();
//       this.isOn = true;
//     }
//   };

//   this.stop = function () {
//     if (this.isOn) {
//       clearInterval(interval);
//       interval = null;
//       this.isOn = false;
//     }
//   };

//   this.reset = function () {
//     time = 0;
//     lapCounter = 0;
//     update();
//     document.getElementById("laps-list").innerHTML = "";
//     var lapLabel = document.getElementById("lap-info");
//     lapLabel.removeAttribute("style");
//   };
// }

// var watch = new stopwatch();

// toggleBtn.addEventListener("click", function () {
//   if (watch.isOn) {
//     watch.stop();
//     toggleBtn.innerHTML = "Start";
//   } else {
//     watch.start();
//     toggleBtn.innerHTML = "Pause";
//   }
// });

// resetBtn.addEventListener("click", function () {
//   if (watch.isOn) {
//     watch.stop();
//   }
//   watch.reset();
//   toggleBtn.innerHTML = "Start";
// });

// var addLap = document.getElementById("btn-add-lap");

// addLap.addEventListener("click", function () {
//   if (lMs != "" && lMs != "000") {
//     var lapsList = document.getElementById("laps-list");
//     var lapEntry = document.createElement("li");
//     lapCounter += 1;
//     var lapTime = lapCounter + ". " + lHh + ":" + lMm + ":" + lSs + "." + lMs;
//     lapEntry.appendChild(document.createTextNode(lapTime));
//     lapsList.appendChild(lapEntry);
//     var lapLabel = document.getElementById("lap-info");
//     lapLabel.setAttribute("style", "display:none;");
//   }
// });
