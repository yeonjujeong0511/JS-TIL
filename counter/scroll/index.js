const nav = document.getElementById("nav");
const links = document.querySelector(".links");
const topLink = document.querySelector(".top-link");

// nav 고정하기
window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  //console.log(scrollHeight); // 스크롤 할때마다 값 바뀜
  const navHeight = nav.getBoundingClientRect().height;
  //console.log(navHeight); // 0
  // 스크롤 값이 0보다 크면, nav에 class추가
  // class 값에 nav 고정한다는 스타일링 담겨있음
  if (scrollHeight > navHeight) {
    nav.classList.add("fixed-nav");
  } else {
    nav.classList.remove("fixed-nav");
  }

  // 스크롤 높이가 500 이상이면, 숨겨져있던 네모상자를 보여주고,
  // 다시 높이가 낮아지면 네모상자를 보여준다.
  // 즉 스크롤을 내리면 상자가 보이고 다시 화면 위로 가면 네모 상자 안보이게 클래스로 스타일링 줌
  if (scrollHeight > 500) {
    // console.log("hello");
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    //console.log(id);
    // href를 가져와서, #을 제외한 단어만
    const element = document.getElementById(id);
    // console.log(element);
    // 각각의 scetion의 아이디가 위에 id값과 일치함으로
    // element는 각각 section이다.
    const navHeight = nav.getBoundingClientRect().height;
    console.log(navHeight); // 100
    const linkHeight = links.getBoundingClientRect().height;
    console.log(linkHeight);
    const fixedNav = nav.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;
    console.log(element.offsetTop); // 0
    console.log(navHeight); // 100
    console.log(position); //
    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + linkHeight;
    }
    window.scrollTo({
      left: 0,
      top: position,
    });
  });
});
