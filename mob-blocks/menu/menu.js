const buttonOpen = document.querySelector("#open");
const buttonClose = document.querySelector("#close");
const menu = document.querySelector(".menu");

buttonOpen.addEventListener("click", function () {
  menu.classList.add("show");
  buttonClose.classList.add("show-button");
});

buttonClose.addEventListener("click", function () {
  menu.classList.remove("show");
  buttonClose.classList.remove("show-button");
});
