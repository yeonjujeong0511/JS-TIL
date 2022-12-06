const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");
//console.log(items);
console.dir(deadline);
let futureDate = new Date(2022, 11, 24, 20, 0, 0);
// 디데이 날짜
const year = futureDate.getFullYear();
const hour = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];

const date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()];
//console.log(weekday);
giveaway.textContent = `give ends on ${year} ${month} ${date} ${weekday} ${hour}:${minutes}pm`;

// 디데이 ms
const futureTime = futureDate.getTime();
//console.log(futureTime);

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  //console.log(t);
  // 1s = 1000ms
  // im = 60s
  // 1hr = 60min
  // 1day = 24hr

  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  let days = t / oneDay;
  days = Math.floor(days);
  //console.log(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  //console.log(hours);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let secounds = Math.floor((t % oneMinute) / 1000);

  // set values array
  const values = [days, hours, minutes, secounds];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired> D-Day가 지났습니다</h4>`;
  }
}

// countdown
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
