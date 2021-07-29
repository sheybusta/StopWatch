const hurs = document.getElementById("hours");
var mins = document.getElementById("minutes");
var secs = document.getElementById("seconds");
var msecs = document.getElementById("milliseconds");
var toggleBtn = document.getElementById("btn-toggle");
var resetBtn = document.getElementById("btn-reset");

var setBtn = document.getElementById("set");

setBtn.addEventListener("click", function () {
  i_hh = parseInt(document.getElementById("input_hh").value);
  i_mm = parseInt(document.getElementById("input_mm").value);
  i_ss = parseInt(document.getElementById("input_ss").value);
});

var requestContainer = document.getElementById("notif-permission");
var requestBtn = document.getElementById("request-notification");

if (Push.Permission.has() == false) {
  requestContainer.style.display = "block";
}

function onGranted() {
  requestContainer.style.display = "none";
}

function onDenied() {
  requestContainer.style.display = "block";
}

requestBtn.addEventListener("click", function () {
  Push.Permission.request(onGranted, onDenied);
});

function stopwatch() {
  var time = 0;
  var interval;
  var offset;

  function update() {
    if (this.isOn) {
      time += delta();
    }
    var formattedTime = timeFormatter(time);
    var shortTime = shorttimeFormatter(time);
    document.title = shortTime + " • Stopwatch.net • Free Online Stopwatch";
    hurs.innerHTML = timeFormatter(time).hh;
    mins.innerHTML = timeFormatter(time).mm;
    secs.innerHTML = timeFormatter(time).ss;
    if (this.isOn & (time < 10)) {
      this.stop();
      time = 0;
      update();
      Push.create("Time is up!", {
        body: "Your timer has ran out.",
        icon: "../img/bell.png",
        onClick: function () {
          window.focus();
          this.close();
        },
      });
      toggleBtn.innerHTML = "Start";
    }
  }

  function delta() {
    var now = Date.now();
    var timePassed = offset - now;
    offset = now;
    return timePassed;
  }

  function timeFormat() {
    var formattedTime = timeFormatter(time);
    var shortTime = shorttimeFormatter(time);
  }

  function timeFormatter(timeinms) {
    var time = new Date(timeinms);
    var hours = time.getUTCHours().toString();
    var minutes = time.getMinutes().toString();
    var seconds = time.getSeconds().toString();
    var milliseconds = time.getMilliseconds().toString();

    if (hours.length < 2) {
      hours = "0" + hours;
    }

    if (minutes.length < 2) {
      minutes = "0" + minutes;
    }

    if (seconds.length < 2) {
      seconds = "0" + seconds;
    }

    while (milliseconds.length < 3) {
      milliseconds = "0" + milliseconds;
    }

    return { hh: hours, mm: minutes, ss: seconds, ms: milliseconds };
  }

  function shorttimeFormatter(timeinms) {
    var time = new Date(timeinms);
    var minutes = time.getMinutes().toString();
    var seconds = time.getSeconds().toString();
    var milliseconds = time.getMilliseconds().toString();

    if (minutes.length < 2) {
      minutes = "0" + minutes;
    }

    if (seconds.length < 2) {
      seconds = "0" + seconds;
    }

    while (milliseconds.length < 3) {
      milliseconds = "0" + milliseconds;
    }

    return minutes + ":" + seconds;
  }

  this.isOn = false;

  this.start = function () {
    if (!this.isOn) {
      interval = setInterval(update.bind(this), 10);
      offset = Date.now();
      this.isOn = true;
    }
  };

  this.set = function () {
    var i_hh = parseInt(document.getElementById("input_hh").value) | 0;
    var i_mm = parseInt(document.getElementById("input_mm").value) | 0;
    var i_ss = parseInt(document.getElementById("input_ss").value) | 0;
    time = (i_hh * 3600 + i_mm * 60 + i_ss) * 1000;
  };

  this.stop = function () {
    if (this.isOn) {
      clearInterval(interval);
      interval = null;
      this.isOn = false;
    }
  };

  this.reset = function () {
    time = 0;
    update();
    toggleBtn.innerHTML = "Start";
  };
}

var watch = new stopwatch();

setBtn.addEventListener("click", function () {
  watch.stop();
  watch.set();
  var h = i_hh.toString();
  var m = i_mm.toString();
  var s = i_ss.toString();

  if (h.length < 2) {
    hurs.innerHTML = "0" + i_hh || 0;
  } else {
    hurs.innerHTML = i_hh || 0;
  }

  if (m.length < 2) {
    mins.innerHTML = "0" + i_mm || 0;
  } else {
    mins.innerHTML = i_mm || 0;
  }

  if (s.length < 2) {
    secs.innerHTML = "0" + i_ss || 0;
  } else {
    secs.innerHTML = i_ss || 0;
  }
});

toggleBtn.addEventListener("click", function () {
  if (watch.isOn) {
    watch.stop();
    toggleBtn.innerHTML = "Start";
  } else {
    watch.start();
    toggleBtn.innerHTML = "Pause";
  }
});

resetBtn.addEventListener("click", function () {
  if (watch.isOn) {
    watch.stop();
  }
  watch.reset();
  toggleBtn.innerHTML = "Start";
});
