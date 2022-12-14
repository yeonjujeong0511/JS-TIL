const months = [
  "1월",
  "2월",
  "3월",
  "4월",
  "5월",
  "6월",
  "7월",
  "8월",
  "9월",
  "10월",
  "11월",
  "12월",
];

const weekdays = [
  "일요일",
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
];

const items = document.querySelectorAll(".dday-items h4");
console.log(items);

let dday = new Date(2023, 5, 16, 0, 0);

console.log(dday);
const year = dday.getFullYear();
console.log(year);
const month = months[dday.getMonth()];
console.log(month);
const date = dday.getDate();
const weekday = weekdays[dday.getDay()];
const hour = dday.getHours();
const minutes = dday.getMinutes();

console.log(`${year}년 ${month} ${date} ${weekday} ${hour}:${minutes}`);

// 디데이를 ms로 구한것
const ddayTime = dday.getTime();
console.log(ddayTime);

function getRemainingTime() {
  const today = new Date().getTime();
  console.log(today);

  // dday시간을 산출할 수 있는 값
  const t = ddayTime - today;
  console.log(t);
  /*
  console.log(t);
  1s = 1000ms
  im = 60s
  1hr = 60min
  1day = 24hr
  */
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let days = t / oneDay;
  days = Math.floor(days);
  console.log(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  console.log(hours);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  console.log(minutes);
  let seconds = Math.floor((t % oneMinute) / 1000);
  console.log(seconds);

  const values = [days, hours, minutes, seconds];

  items.forEach((item, index) => {
    item.innerHTML = values[index];
  });
}

let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
