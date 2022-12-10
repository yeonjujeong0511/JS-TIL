const inputBox = document.getElementById("input-box");
const todoListElem = document.getElementById("todo-list");

let todoList = [];
//할 일 받을 배열

const TODOLIST = todoList;

const loadTodo = (todo) => {
  const loadedTodoList = localStorage.getItem(TODOLIST, todo);
  if (loadedTodoList !== null) {
    console.log(JSON.parse(loadedTodoList));
    setTodoList(JSON.parse(loadedTodoList));
    paintToDoList();
  }
};

const setTodoList = (newTodoList) => {
  todoList = newTodoList;
};
// setTodoList함수가 발생하면, 기존의 todolist가 newtodolist가 된다.

const getAllTodoList = () => {
  return todoList;
};
// getAllTodoList 힘수가 발생하면 기존 todolist를 가져온다.

const appendTodos = (text) => {
  const newTodoList = getAllTodoList().concat({
    id: getAllTodoList().length,
    isCompleted: false,
    content: text,
  });
  // 기존의 todolist를 가져온후, 추가된 할일을 새배열인 newtodolist에 저장시킨다.
  localStorage.setItem(TODOLIST, JSON.stringify(newTodoList));
  setTodoList(newTodoList);
  paintToDoList();
};

const deleteTodo = (todoId) => {
  console.log(todoId);
  const newTodos = getAllTodoList().filter((todo) => todo.id !== todoId);
  //   const newTodos = getAllTodoList().filter((todo) => {todo.id !== todo});
  // 중괄호로 묶어버려서 계속 빈배열이 나왔다.
  // 중괄호로 묶으려면 return값을 줬어야했는데ㅠㅠ
  console.log(newTodos);
  setTodoList(newTodos);
  localStorage.setItem(TODOLIST, JSON.stringify(newTodos));
  paintToDoList();
};

const completeTodo = (todoId) => {
  const newTodos = getAllTodoList().map((todo) =>
    todo.id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo
  );
  setTodoList(newTodos);
  paintToDoList();
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
      deleteTodo(todo.id);
    });

    if (todo.isCompleted) {
      todoItemElem.classList.add("checked");
      checkboxElem.checked = todo.isCompleted;
    }
    todoItemElem.appendChild(checkboxElem);
    todoItemElem.appendChild(todoElem);
    todoItemElem.appendChild(delBtnElem);

    todoListElem.appendChild(todoItemElem);
  });
};

const init = () => {
  loadTodo();
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
