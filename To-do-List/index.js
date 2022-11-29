const inputData = document.querySelector(".input-todo");
// input 요소를 inputData에 담아준다.
const todoList = document.querySelector(".to-do-list");

let todos = [];
let id = 0;

// js 파일이 실행되자마자 호출되는 함수
// keypress에 대한 이벤트 리스너 등록
// 입력되는 값이 'Enter'라면 appendTodos()함수에  e.target.value를 넘겨주고
// inputData의 value 값을 초기화 시켜준다.
const init = () => {
  inputData.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      appendTodos(e.target.value);
      inputData.value = "";
    }
  });
};

init();

// 배열에 할 일을 추가하는 appendTodos()함수를 만든다.
// 타입은 아래 타입을 가진다.

// {
//   id: number;
//   isCompleted: boolean;
//   content: string;
// }

const setTodos = (newTodos) => {
  todos = newTodos;
};
const getAllTodos = () => {
  return todos;
};

const appendTodos = (text) => {
  const newId = id++;
  const newTodos = getAllTodos().concat({
    id: newId,
    isCompleted: false,
    content: text,
  });
  // 또는 const newTodos = [...getAllTodos(), {id: newId, isCompleted: false, content: text }]
  // 이렇게도 가능하다.
  setTodos(newTodos);
  paintTodos();
};

const paintTodo = () => {
  todoList.innerHTML = null;
  const allTodos = getAllTodos();

  allTodos.forEach((todo) => {
    const todoItem = document.createElement("li");
    todoItem.classList.add("todo-item");

    todoItem.setAttribute("data-id", todo.id);

    const checkbox = document.createElement("div");
    checkbox.classList.add("checkbox");
    checkbox.addEventListener("click", () => {
      completeTodo(todo.id);
    });

    const todoelem = document.createElement("div");
    todoelem.classList.add("todo");
    todoelem.innerText = todo.content;

    const delBtn = document.createElement("button");
    delBtn.classList.add("delBtn");
    delBtn.addEventListener("click", () => {
      deleteTodo(todo.id);
    });
    delBtn.innerHTML = "X";

    if (todo.isCompleted) {
      todoItem.classList.add("checked");
      checkbox.innerText = "✔";
    }
    todoItem.appendChild(checkbox);
    todoItem.appendChild(todoelem);
    todoItem.appendChild(delBtn);
    todoList.appendChild(todoItem);
  });
};
