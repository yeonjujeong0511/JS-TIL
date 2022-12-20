const projects = document.querySelectorAll(".project");
console.log(projects);

projects.forEach(function (project) {
  // console.log(projects);
  const btn = project.querySelector(".btn");
  console.log(btn);
  // 버튼을 클릭하면, class에 project만 존재하면, show-text 클래스 추가해서 화면에 내용을 함께 출력해주고
  // class에 project와 show-text가 함께 있으면, 클래스를 지워줌으로써 다시 화면에서 사리지게 한다.

  btn.addEventListener("click", function () {
    projects.forEach(function (item) {
      console.log(item);
      if (item !== project) {
        item.classList.remove("show-text");
      }
    });
    project.classList.toggle("show-text");
  });
});

// ! 위 아래 btn에 클릭 이벤트를 주어, proejct라는 클래스를 가진 것에 클래스를 추가하여 핸들링 하는 것
// ! 위에서 아래로 가져가느냐, 아래에서 위로 올려주느냐 차이인 듯!

// const btns = document.querySelectorAll(".btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const project = e.currentTarget.parentElement.parentElement;
//     project.classList.toggle("show-text");
//   });
// });
