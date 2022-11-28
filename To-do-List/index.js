const toToList = document.querySelector(".input-box");
todoInput = toToList.querySelector("input");
todoList = document.querySelector(".to-do-list");

const TODO_LS = "toDos";

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = todoInput.value;
  paintToDo(currentValue);
}

function loadTodos() {
  const toDos = localStorage.getItem(TODO_LS);
  if (toDos === null) {
  }
}
function init() {
  loadToDo();
  toToList.addEventListener("submit", handleSubmit);
}
init();
