const inputBox = document.getElementById("input-box");

let todoList = [];
//할 일 받을 배열
let id = 0;

const init = () => {
  inputBox.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      appendTodos(e.target.value);
      todoInput.value = "";
      // input 창에서 enter를 하면, appendTodos를 발생 / input창은 빈칸으로
    }
  });
};

// const appendTodos = (text) => {
//   const newId = id++;
//   const newTodos
// };

// init();
