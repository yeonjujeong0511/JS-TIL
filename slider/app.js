const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

// 각 div left로 위치 조정
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
  // console.log(slide);
});

let counter = 0;
// 클릭 할때마다, counter값 증감소 및 carousel() 함수 실행
nextBtn.addEventListener("click", function () {
  counter++;
  carousel();
});
prevBtn.addEventListener("click", function () {
  counter--;
  carousel();
});

function carousel() {
  // 버튼 보이고, 안보이고!
  if (counter < slides.length - 1) {
    nextBtn.style.display = "block";
  } else {
    nextBtn.style.display = "none";
  }
  if (counter > 0) {
    prevBtn.style.display = "block";
  } else {
    prevBtn.style.display = "none";
  }

  // 함수 실행될때마다, translateX의 값으로 위치 조정
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
    console.log(slide);
  });
}
prevBtn.style.display = "none";
