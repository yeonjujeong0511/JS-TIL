const menu = [
  {
    id: 1,
    title: "탄탄면공방",
    category: "중식",
    price: "9900",
    img: "https://ldb-phinf.pstatic.net/20211018_153/1634546452631evE5F_JPEG/ACnjC9EIorThJmKQXBl6UPL_.jpg",
    desc: "기본 탄탄면부터 존맛탱,땅콩향이 가득가득 고소한 탄탄면~!",
  },
  {
    id: 2,
    title: "토미야",
    category: "일식",
    price: "8500",
    img: "https://mp-seoul-image-production-s3.mangoplate.com/573545_1594446229880774.jpg",
    desc: "냉우동 맛집, 무조건 돈까스랑 가라야게를 같이 시켜서 먹어야한다",
  },
  {
    id: 3,
    title: "소바노하나",
    category: "일식",
    price: "8500",
    img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA5MjlfMTMg%2FMDAxNjAxMzY1MjExNzYw.-qB5zMNMgOSdMmphKxMlwRSaSPHDazRa8vTmC3jepfMg.nMdxfKPCAUTOWv3jlSB5ttm2Y4dGDkYiKtgy3LgNT-Ag.JPEG.wldp0911%2Foutput_2625406956.jpg",
    desc: "소바랑 우동맛집, 개인적으로는 김치우동 굿굿! 돈까스가 아주 맛있다",
  },
  {
    id: 4,
    title: "담양애떡갈비",
    category: "한식",
    price: "13000",
    img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA1MTRfMTMx%2FMDAxNTI2MjMxMjEyODEw.vKAy88o6EBRlHlTzdKDm_JHsic4q5ohFH75QSA7FzD4g.NmYJbRI07sO2GL5B4MQGHULW1PC7AU9ynctffcqM8qMg.JPEG.ggusdng%2FIMG_1328.jpg",
    desc: "고기가 산처럼 쌓아서 나오는데, 아주 맛있음. 무조건 예약 예약 안하면 못 먹음",
  },
  {
    id: 5,
    title: "오렌지블루스",
    category: "양식",
    price: "20000",
    img: "https://ldb-phinf.pstatic.net/20221018_87/1666064162918uuXhF_JPEG/IMG_5315.jpg",
    desc: "스테이크 진짜루 맛있음..파스타도 뇸뇸 굿",
  },
  {
    id: 6,
    title: "왕손곱창",
    category: "한식",
    price: "30000",
    img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTExMjFfNzkg%2FMDAxNTc0MzM4MTE1MDM3.mw688RHT471y7kytSV8w2sunC9F5JB546XOjAuc1n9Qg.q_HOqcKaZQ7ZSZKbrNuPD70T8R7qdD3-SNAtXzX_cakg.JPEG.hyevely_u%2F1574338113713.jpg",
    desc: "여기는 진짜 최소 3인 이상 방문 추천,, 염통구이 1인분 시키고, 곱창전골 소 먹고 마지막으로 볶음밥 2인분 뿌셔야한다..",
  },
];

const menuSection = document.querySelector(".menu-section");
const container = document.querySelector(".btn-container");

// 화면 로딩시, 메뉴 목록과 버튼목록 나올 수 있도록 함
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItem(menu);
  displayMenuButtons();
});

// 메뉴 리스트가 생성 될때마다, map 함수 돌려서
// 화면에 띄울 수 있게 해준다.
function displayMenuItem(menuItem) {
  let displayMenu = menuItem.map((item) => {
    return `
    <article class="menu-item">
          <img src=${item.img} class="photo" alt="menu item" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">${item.price}</h4>
            </header>
            <p class="item-text">
            ${item.desc}
            </p>
          </div>
        </article>
    `;
  });
  displayMenu = displayMenu.join("");
  menuSection.innerHTML = displayMenu;
}

//
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  // 먼저 html 파일에서 만들었던 버튼을
  // map 함수를 이용해서, 더 편리하게 만들어준다
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  container.innerHTML = categoryBtns;
  const filterBtns = container.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  // 카테고리
  // 각각의 카테고리를 누르면, 해당 카테고리와 일치하는 메뉴만 보여준다.
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategoty = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        displayMenuItem(menu);
      } else {
        displayMenuItem(menuCategoty);
      }
    });
  });
}


// 두번째 섹션부분 - 랜덤출력부분
const secondBox = document.getElementById("second-box");
console.log(secondBox);
const div = document.createElement("div");
secondBox.appendChild(div);
console.log(secondBox.children[0]);

// 랜덤버튼
const randomButton = document.querySelector("#second-box button");
console.log(randomButton);


// 랜덤버튼 클릭시 위에 메뉴들 중 하나 나오게 함
randomButton.addEventListener("click", function () {
  secondBox.children[1].innerHTML =
    menu[parseInt(Math.random() * menu.length)].title;
});
