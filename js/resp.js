burger = document.querySelector(".burger");
menu = document.querySelector(".menu_section");

burger.addEventListener("click", () => {
  menu.classList.toggle("v-class-res");
})