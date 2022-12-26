const menu = [
  {
    id: 1,
    title: "탄탄면공방",
    category: "중식",
    price: "9900",
    img: "",
    desc: "기본 탄탄면부터 존맛탱,땅콩향이 가득가득 고소한 탄탄면~!",
  },
  {
    id: 2,
    title: "토미야",
    category: "일식",
    price: "8500",
    img: "",
    desc: "냉우동 맛집, 무조건 돈까스랑 가라야게를 같이 시켜서 먹어야한다",
  },
  {
    id: 3,
    title: "소바노하나",
    category: "일식",
    price: "8500",
    img: "",
    desc: "소바랑 우동맛집, 개인적으로는 김치우동 굿굿! 돈까스가 아주 맛있다",
  },
  {
    id: 4,
    title: "담양애떡갈비",
    category: "한식",
    price: "13000",
    img: "",
    desc: "고기가 산처럼 쌓아서 나오는데, 아주 맛있음. 무조건 예약 예약 안하면 못 먹음",
  },
  {
    id: 5,
    title: "오렌지블루스",
    category: "양식",
    price: "20000",
    img: "",
    desc: "스테이크 진짜루 맛있음..파스타도 뇸뇸 굿",
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
