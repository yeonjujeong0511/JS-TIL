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
  //console.log(today);

  // dday시간을 산출할 수 있는 값
  const t = ddayTime - today;
  //console.log(t);
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
  //console.log(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  //console.log(hours);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  //console.log(minutes);
  let seconds = Math.floor((t % oneMinute) / 1000);
  // console.log(seconds);

  const values = [days, hours, minutes, seconds];

  items.forEach((item, index) => {
    item.innerHTML = values[index];
  });
}

let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();

const select = {
  links: document.querySelector(".links"),
  nav: document.getElementById("nav"),
  scrollLink: document.querySelectorAll(".scroll-link"),
};

console.log(select.scrollLink);

// nav 고정
window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = select.nav.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    select.nav.classList.add("fixed-nav");
  } else {
    select.nav.classList.remove("fixed-nav");
  }
});

select.scrollLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = select.nav.getBoundingClientRect().height;
    console.log(navHeight);

    const linkHeight = select.links.getBoundingClientRect().height;

    const fixedNav = select.nav.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;
    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + linkHeight;
    }
    window.scrollTo({
      left: 0,
      top: position,
    });
  });
});

// * 메모만들기 * //

const documentMemo = {
  memeTitle: document.getElementById("memo-title"),
  memeContent: document.getElementById("memo-content"),
  memoList: document.getElementById("memo-list"),
  addBtn: document.getElementById("add-btn"),
};

function eventListenners() {
  // 화면이 띄워지면, localstorge에 저장된 메모 보여주기
  document.addEventListener("DOMContentLoaded", displayMemo);

  // 추가 버튼을 입력하면 입력된 메모가 화면에 출력될 수 있게 하였다.
  documentMemo.addBtn.addEventListener("click", createMemo);
  // 삭제버튼 누르면 삭제
  documentMemo.memoList.addEventListener("click", deleteMemo);
}
eventListenners();

function getDataFromStorage() {
  return localStorage.getItem("messages")
    ? JSON.parse(localStorage.getItem("messages"))
    : [];
  // localstorage에 memos가 있으면, 가져오고, 없으면 빈걸 보여준다.
}

let memoId = 1;

// 메모 생성자 함수로 객체화해서 만듬
function Memo(id, title, content) {
  this.id = id;
  this.title = title;
  this.content = content;
}

// 메모 입력하기
// 메모 빈칸여부 확인한후, 각각의 input의 value값을 memoItem에 담아 준 후 페이지에 띄울 수 있게
// 함수 paintMemo로 값을 넘겨준다.
// 함수가 실행될때마다, memoId는 증가
// input value는 다시 빈칸으로
function createMemo() {
  if (validateInput(documentMemo.memeTitle, documentMemo.memeContent)) {
    let messages = getDataFromStorage();
    let memoItem = new Memo(
      memoId,
      documentMemo.memeTitle.value,
      documentMemo.memeContent.value
    );
    memoId++;
    messages.push(memoItem);
    paintMemo(memoItem);
    console.log(memoItem);
    // localstorage에 메모입력값을 저장시킨다
    localStorage.setItem("messages", JSON.stringify(messages));

    documentMemo.memeTitle.value = "";
    documentMemo.memeContent.value = "";
  }
}

// 입력된 메모를 화면에 출력하기위한 함수
// memo-item이라는 클래스이름을 가진 div 태그를 만들어 준다.
// 하위 항목으로, 입력받은 메모를 넣어준다.
// memo-item div는 memolist의 자식으로 넣어준다.
function paintMemo(memoItem) {
  const div = document.createElement("div");
  div.classList.add("memo-item");
  div.setAttribute("data-id", memoItem.id);
  console.log(memoItem);
  div.innerHTML = `
  <h3>${memoItem.title}</h3>
  <p>${memoItem.content}</p>
  <button type="button" class="del-btn">삭제</button>
  `;
  documentMemo.memoList.appendChild(div);
}

// 빈칸방지용
// 빈칸이 아니면, true 리턴
// 빈칸이면 wrning class 추가해서, 해당 스타일링 적용
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

function displayMemo() {
  let messages = getDataFromStorage();
  // localstorage의 데이터 가져오기
  console.log(messages);
  if (messages.length > 0) {
    memoId = messages[messages.length - 1].id;
    memoId++;
  } else {
    memoId = 1;
  }
  messages.forEach((item) => paintMemo(item));
}
// 새로입력 받을 memoId가 기존에 존재하는 id+1되어야 한다.
// localstorege의 데이터가 화면에 출력시킨다.

// 메모 삭제
function deleteMemo(e) {
  // 부모요소를 지우기 위해서 자식클래스의 요소가 있는 지 확인
  if (e.target.classList.contains("del-btn")) {
    e.target.parentElement.remove();
    // 맞으면 부모 요소 지우기
    let divID = e.target.parentElement.dataset.id;
    // localstorage의 데이터도 삭제해야하니까 일단 불러온다.
    let messages = getDataFromStorage();
    let newMemoList = messages.filter((item) => {
      return item.id !== parseInt(divID);
    });
    // 삭제된 아이디를 제외한 데이터를 다시 newMemoList의 담는다.
    localStorage.setItem("messages", JSON.stringify(newMemoList));
    // localstorage에 newMemoList를 다시 저장시켜준다.
  }
}
