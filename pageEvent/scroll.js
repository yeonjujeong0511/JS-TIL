const sections = document.querySelectorAll("section");

const bgColor = ["#111", "#222", "#333", "#444", "#555", "#666"];

bgColor.map((item, index) => {
  console.dir(sections);
  sections[index].style.backgroundColor = item;
});
