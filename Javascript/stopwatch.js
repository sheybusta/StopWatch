const milliseconds = document.getElementById("milliseconds");
const seconds = document.getElementById("seconds");
const minutes = document.getElementById("minutes");
const hours = document.getElementById("hours");

// const countDown = () => {
//   const countDate = new Date("Jul 29, 2021 00:00:00").getTime();
//   //   console.log(countDate);
//   const now = new Date().getTime();
//   const gap = countDate - now;
//   //   console.log(gap);

//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // calculate

//   const textDay = Math.floor(gap / day);
//   console.log(textDay);
// };

const startWatch = document.getElementById("btn-toggle");
startWatch.addEventListener("click", countDown);
