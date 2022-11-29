const todoForm = document.querySelector(".input-box");
// form 태그 부분을 가져오기
const todoInput = todoForm.querySelector("input");
// from태그 안에 input
const toDos = document.querySelector(".toDos");
//ul 태그 가져오기

//
function createToDo(event) {
  event.preventDefault();
  //이벤트가 발생해도 페이지가 새로고침되지 않게
  // input부분의 들어가는 값을 todo로 설정해줌
  const toDo = todoInput.value;
  paintToDo(toDo);
  // input창에 받은 값을 paintToDo의 인수로 넘겨주고, 함수 실행
  todoInput.value = "";
  // input창의 값 초기화
}

function paintToDo(toDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  // li태그와 span 태그 생성
  // span태그의 내용으로 매개변수 toDo값을 넣어준다.
  span.innerHTML = toDo;
  // li 태그의 자식으로 span태그를 넣어주고
  // toDos === ul태그
  // ul 태그 자식으로 li태그를 넣어준다.
  li.appendChild(span);
  toDos.appendChild(li);
}

// 제일 먼저 init함수가 실행
// form태그에 submit이 발생하면, createToDo 함수 실행
function init() {
  todoForm.addEventListener("submit", createToDo);
}

// 함수 실행, submit이 발생하게되면, 차례로 함수를 실행시켜준다.
init();
