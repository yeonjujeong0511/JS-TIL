const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  // console.log(questions);
  const btn = question.querySelector(".btn");
  console.log(btn);
  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      console.log(item);
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});

// const btns = document.querySelectorAll(".btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text");
//   });
// });
