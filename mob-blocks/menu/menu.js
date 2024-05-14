const buttonOpen = document.querySelector("#open");
const buttonClose = document.querySelector("#close");
const menu = document.querySelector(".menu");
const body = document.querySelector("body");

buttonOpen.addEventListener("click", function () {
  menu.classList.add("show");
  buttonClose.classList.add("show-button");
  body.classList.add("scroll-off");
});

buttonClose.addEventListener("click", function () {
  menu.classList.remove("show");
  buttonClose.classList.remove("show-button");
  body.classList.remove("scroll-off");
});
