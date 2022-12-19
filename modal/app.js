const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

// 오픈 모달 버튼 클릭시, 모달창이 보이는 스타일링값 클래스 추가
modalBtn.addEventListener("click", function () {
  modal.classList.add("open-modal");
});

// 닫기 버튼 클릭시 , 모달창 보이는 스타일링 값 클래스 삭제
closeBtn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});
