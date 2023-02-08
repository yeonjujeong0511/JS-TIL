const slides2 = document.querySelector('.slides'); //전체 슬라이드 컨테이너
const slideImg = document.querySelectorAll('.slides div'); //모든 슬라이드들


const img = [
  "https://images2.imgbox.com/bb/3a/pZztdzIm_o.jpg",
  "https://images2.imgbox.com/44/86/hMJJ6sU8_o.jpg",
  "https://images2.imgbox.com/b0/d0/cw2u0N8x_o.jpg",
  "https://images2.imgbox.com/dd/03/YzW4JToz_o.jpg",
  "https://images2.imgbox.com/a9/b6/kyfHF5Zb_o.jpg",
  "https://images2.imgbox.com/92/e8/7B0bjZEg_o.jpg",
  "https://images2.imgbox.com/34/be/mD8qfbmU_o.jpg",
]


function imgbox(imgsrc) {
  const imgBox = document.createElement("div");
  const img = document.createElement("img");
  imgBox.append(img);
  img.src = imgsrc;
  return imgBox;
}

for (let i = 0; i < img.length; i++) {
  slides2.append(imgbox(img[i]));
}

let currentIdx = 0; //현재 슬라이드 index
const slideCount = slideImg.length; // 슬라이드 개수
const prev = document.querySelector('.prev'); //이전 버튼
const next = document.querySelector('.next'); //다음 버튼
const slideWidth = 300; //한개의 슬라이드 넓이
const slideMargin = 100; //슬라이드간의 margin 값

//전체 슬라이드 컨테이너 넓이 설정
// slides2.style.width = (slideWidth + slideMargin) * slideCount + 'px';

function moveSlide(num) {
  slides2.style.left = -num * 400 + 'px';
  currentIdx = num;
}

prev.addEventListener('click', function () {
  /*첫 번째 슬라이드로 표시 됐을때는 
  이전 버튼 눌러도 아무런 반응 없게 하기 위해 
  currentIdx !==0일때만 moveSlide 함수 불러옴 */

  if (currentIdx !== 0) moveSlide(currentIdx - 1);
});

next.addEventListener('click', function () {
  /* 마지막 슬라이드로 표시 됐을때는 
  다음 버튼 눌러도 아무런 반응 없게 하기 위해
  currentIdx !==slideCount - 1 일때만 
  moveSlide 함수 불러옴 */
  if (currentIdx !== slideCount - 1) {
    moveSlide(currentIdx + 1);
  }
});

