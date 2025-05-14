const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("headerLinks");
const closeMenu = document.getElementById("menuclose");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("show");
});

closeMenu.addEventListener("click", () => {
  menu.classList.remove("show");
});

document.addEventListener("click", (event) => {
  const isClickInsideMenu = menu.contains(event.target);
  const isClickOnToggle = menuToggle.contains(event.target);

  if (!isClickInsideMenu && !isClickOnToggle) {
    menu.classList.remove("show");
  }
});
