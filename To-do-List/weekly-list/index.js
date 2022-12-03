const inputBox = document.getElementById("input-box");
const todoListElem = document.getElementById("todo-list");
console.log(todoListElem);
let todoList = [];
//할 일 받을 배열
let id = 0;

const setTodoList = (newTodoList) => {
  todoList = newTodoList;
  console.log("셋투두리스트");
};
// setTodoList함수가 발생하면, 기존의 todolist가 newtodolist가 된다.

const getAllTodoList = () => {
  console.log("겟올투두리스트");
  return todoList;
};
// getAllTodoList 힘수가 발생하면 기존 todolist를 가져온다.

const appendTodos = (text) => {
  const newId = id++;
  const newTodoList = getAllTodoList().concat({
    id: newId,
    isCompleted: false,
    content: text,
  });
  // 기존의 todolist를 가져온후, 추가된 할일을 새배열인 newtodolist에 저장시킨다.
  setTodoList(newTodoList);
  console.log("어펜드");
  paintToDoList();
  console.log("프린트");
  console.log(newTodoList);
};

const paintToDoList = () => {
  todoListElem.innerHTML = null;
  // ul태그안에 모든 내용 초기화
  const allTodos = getAllTodoList();
  // todolist배열 가져오기

  allTodos.forEach((todo) => {
    const todoItemElem = document.createElement("li");
    todoItemElem.classList.add("todo-item");

    const checkboxElem = document.createElement("input");
    checkboxElem.setAttribute("type", "checkbox");
    checkboxElem.classList.add("checkbox");
    checkboxElem.addEventListener("click", () => {
      completeTodo(todo.id);
    });

    const todoElem = document.createElement("p");
    todoElem.classList.add("todo");
    todoElem.innerText = todo.content;

    const delBtnElem = document.createElement("img");
    delBtnElem.src = "./etc/close.svg";
    delBtnElem.classList.add("delBtn");
    delBtnElem.addEventListener("click", () => {
      deleteTodo(todo);
    });

    if (todo.isCompleted) {
      todoItemElem.classList.add("checked");
      checkboxElem.checked = todo.isCompleted;
      console.log("여기까지가능");
    }
    todoItemElem.appendChild(checkboxElem);
    todoItemElem.appendChild(todoElem);
    todoItemElem.appendChild(delBtnElem);

    todoListElem.appendChild(todoItemElem);
  });
};

const deleteTodo = (todoId) => {
  const newTodos = getAllTodoList().filter((todo) => {
    todo.id !== todoId;
    console.log(todo, todo.id);
  });
  setTodoList(newTodos);
  console.log(newTodos);
  paintToDoList();
};

const completeTodo = (todoId) => {
  const newTodos = getAllTodoList().map((todo) =>
    todo.id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo
  );
  setTodoList(newTodos);
  paintToDoList();
};

const init = () => {
  inputBox.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      appendTodos(e.target.value);
      inputBox.value = "";
      // input 창에서 enter를 하면, appendTodos를 발생 / input창은 빈칸으로
    }
  });
  console.log("init");
};
init();
