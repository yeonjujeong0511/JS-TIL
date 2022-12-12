// const date = document.getElementById("date");
// date.innerHTML = new Date().getFullYear();

// const navToggle = document.querySelector(".nav-toggle");
// const linksContainer = document.querySelector(".link-container");
// const links = document.querySelector(".links");
// console.log(navToggle);
// console.log(linksContainer);
// navToggle.addEventListener("click", function () {
//   // linksContainer.classList.toggle("show-links");
//   const containerHeight = linksContainer.getBoundingClientRect().height;
//   console.log(containerHeight);
//   const linksHeight = links.getBoundingClientRect().height;
//   console.log(linksHeight);
//   if (containerHeight === 0) {
//     linksContainer.style.height = `${linksHeight}px`;
//   } else {
//     linksContainer.style.height = 0;
//   }
// });

// const navbar = document.getElementById("nav");
// const topLink = document.querySelector(".top-link");

// window.addEventListener("scroll", function () {
//   //console.log(window.pageYOffset);
//   const scrollHeight = window.pageXOffset;
//   const navHegitht = navbar.getBoundingClientRect().height;
//   if (scrollHeight > navHegitht) {
//     navbar.classList.add("fixed-nav");
//   } else {
//     navbar.classList.remove("fixed-nav");
//   }

//   if (scrollHeight > 500) {
//     topLink.classList.add("show-link");
//   } else {
//     topLink.classList.remove("show-list");
//   }
// });

// const scrollLinks = document.querySelectorAll(".scroll-link");
// scrollLinks.forEach(function (link) {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();
//     // navgaite to specific spot
//     const id = e.currentTarget.getAttribute("href").slice(1);
//     const element = document.getElementById(id);
//     const navHeight = navbar.getBoundingClientRect().height;
//     const contaninerHeight = linksContainer.getBoundingClientRect().height;
//     const fixedNav = navbar.classList.contains("fixed-nav");
//     let position = element.offsetTop - navHeight;
//     console.log(position);
//     if (!fixedNav) {
//       position = position - navHeight;
//     }
//     window.scrollTo({
//       left: 0,
//       top: position,
//     });
//     linksContainer.style.height = 0;
//   });
// });
