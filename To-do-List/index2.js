const todoForm = document.querySelector(".input-box");
// form 태그 부분을 가져오기
const todoInput = todoForm.querySelector("input");
// from태그 안에 input
const toDos = document.querySelector(".toDos");
//ul 태그 가져오기

const TODOLIST = "toDoList";
// to do 저장 시에 사용할 key값을 위한 TODOLIST 상수를 선언언
let toDoList = [];

function saveToDoList() {
  localStorage.setItem(TODOLIST, JSON.stringify(toDoList));
}
function delToDo(event) {
  console.log(event);
  const { target: button } = event;
  const li = button.parentNode;
  toDos.removeChild(li);
  toDoList = toDoList.filter((toDo) => toDo.id !== Number(li.id));
  saveToDoList();
  // console.log(button);
  //console.log(li);
  // console.log(toDoList);
}

function loadToDoList() {
  const loadedToDoList = localStorage.getItem(TODOLIST);
  if (loadedToDoList !== null) {
    const parseToDoList = JSON.parse(loadedToDoList);
    for (let toDo of parseToDoList) {
      const { text } = toDo;
      paintToDo(text);
      saveToDo(text);
    }
  }
}

// 데이터를 저장해준다.
function saveToDo(toDo) {
  console.log("save");
  const toDoObj = {
    text: toDo,
    id: toDoList.length + 1,
  };
  toDoList.push(toDoObj);
  // to do 객체를 todolist 배열에 넣어준다.
  // 배열을 로컬스토리지에 저장
  console.log("저장");
}

// 새로운 toDo를 추갓하면 기존의 toDo가 없어지고 새로운 toDo가 남는다.
// 한개의 데이터만 저장된다.
// 그래서 배열로 저장해야한다.

function createToDo(event) {
  event.preventDefault();
  //이벤트가 발생해도 페이지가 새로고침되지 않게
  // input부분의 들어가는 값을 todo로 설정해줌
  const toDo = todoInput.value;
  console.log(toDo);
  paintToDo(toDo);
  // input창에 받은 값을 paintToDo의 인수로 넘겨주고, 함수 실행
  saveToDo(toDo);
  todoInput.value = "";
  // input창의 값 초기화
  console.log("성공");
}

function paintToDo(toDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const delButton = document.createElement("button");
  delButton.innerText = "Del";
  delButton.addEventListener("click", delToDo);
  span.innerHTML = toDo;
  // li태그와 span 태그 생성
  // span태그의 내용으로 매개변수 toDo값을 넣어준다.
  span.innerHTML = toDo;
  // li 태그의 자식으로 span태그를 넣어주고
  // toDos === ul태그
  // ul 태그 자식으로 li태그를 넣어준다.
  li.appendChild(span);
  li.appendChild(delButton);
  li.id = toDoList.length + 1;
  toDos.appendChild(li);
}

// 제일 먼저 init함수가 실행
// form태그에 submit이 발생하면, createToDo 함수 실행
function init() {
  loadToDoList(); // 먼저 실행해서 localstorage에 todo가 존재하는지 확인
  todoForm.addEventListener("submit", createToDo);
  console.log("성공");
}

// 함수 실행, submit이 발생하게되면, 차례로 함수를 실행시켜준다.
init();
