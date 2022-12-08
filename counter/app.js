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
const month = months[futureDate.getMonth()];
const date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()];
//console.log(weekday);
giveaway.textContent = `${year}년 ${month} ${date}일 ${weekday} ${hour}:0${minutes}pm`;

// 디데이날짜를 ms로 구한것
const futureTime = futureDate.getTime();
//console.log(futureTime);

// 남은 디데이 날짜, 시간, 분, 초 구하기
function getRemainingTime() {
  //현재 지금의 날짜를 ms로 구한것
  const today = new Date().getTime();

  //미래에서 현재를 빼면, 남은 ms가 나옴
  const t = futureTime - today;
  //console.log(t);
  // 1s = 1000ms
  // im = 60s
  // 1hr = 60min
  // 1day = 24hr

  // 하루 단위를 ms단위로 구하면
  const oneDay = 24 * 60 * 60 * 1000;
  // 24시간 60분 60초 1000
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  let days = t / oneDay;
  // 남은 날구하기
  // ms 단위에서 하루단위로 나누어 나온 값을 정수만 갖게되면 남은날 즉,day가 된다.
  days = Math.floor(days);
  //console.log(days);
  // t의 oneday를 나눈 값의 나머지만 구하면, 날에서 남은 시간을 ms값으로 구할 수있다
  // 여기서 다시 하루의 ms값으로 나누고, 값만 정수로 갖게되면 , 디데이까지 남은 hours가 된다
  let hours = Math.floor((t % oneDay) / oneHour);
  //console.log(hours);
  // 아래도 같은 원리이다
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let secounds = Math.floor((t % oneMinute) / 1000);

  const values = [days, hours, minutes, secounds];

  // 0 이하면, 숫자 앞에 0을 붙이는 함수
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  // h4를 배열에 담아놨는데, 반복문으로 해당 자리에 알맞은 값을 입력해준다.
  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired> D-Day가 지났습니다</h4>`;
  }
}

// 1초 지날때마다, 남은 날짜를 새로고침해서 보여준다.
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();

const memoList = document.querySelector("memo-list");

let memoId = 1;

function Memo(id, title, content) {
  this.id = id;
  this.title = title;
  this.content = content;
}

// 추가 버튼 클릭 이벤트
function eventListenners() {
  document.addEventListener("DOMContentLoaded", displayMemo);
  document.getElementById("add-note-btn").addEventListener("click", addNewMemo);
}

eventListenners();

// local storage
function getDataFromStorage() {
  return localStorage.getItem("memos")
    ? JSON.parse(localStorage.getItem("memos"))
    : [];
}

// 메모 div 만들기

function addNewMemo() {
  const memoTItle = document.getElementById("memo-title");
  const memoContent = document.getElementById("memo-content");
  if (validateInput(memoTItle, memoContent)) {
    let memos = getDataFromStorage();
    let memoItem = new Memo(memoId, memoTItle.value, memoContent.value);
    memoId++;
    memos.push(memoItem);
    createMemo(memoItem);
    // local storge에 저장
    localStorage.setItem("memos", JSON.stringify(memos));
    memoTItle.value = "";
    memoContent.value = "";
  }
}

function validateInput(title, content) {
  if (title.value !== "" && content.value !== "") {
    return true;
  } else {
    if (title.value === "") {
      title.classList.add("warning");
    }
    if (content.value === "") {
      content.classList.add("warning");
    }
  }
  setTimeout(() => {
    title.classList.remove("warning");
    content.classList.remove("warning");
  }, 1600);
}

function createMemo(memoItem) {
  const div = document.createElement("div");
  div.classList.add("memo-item");
  div.setAttribute("data-id", memoItem.id);
  div.innerHTML = `
  <h3>${memoItem.title}</h3>
  <p>${memoItem.content}</p>
  <button type="button" class="btn" id="del-memos-btn">삭제</button>
  `;
  memoList.appendChild(div);
}

function displayMemo() {
  let memos = getDataFromStorage();
  if (memos.length > 0) {
    memoId = memos[memos.length - 1].id;
    memoId++;
  } else {
    memoId = 1;
  }
  memos.forEach((item) => createMemo(item));
}
