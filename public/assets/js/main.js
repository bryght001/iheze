const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("headerLinks");
const closeMenu = document.getElementById("menuclose");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("show");
  if (menu.classList.contains("show")) {
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
  }
});

closeMenu.addEventListener("click", () => {
  menu.classList.remove("show");
  document.body.classList.remove('no-scroll');
  // ...hide menu logic...
});

document.addEventListener("click", (event) => {
  const isClickInsideMenu = menu.contains(event.target);
  const isClickOnToggle = menuToggle.contains(event.target);

  if (!isClickInsideMenu && !isClickOnToggle) {
    menu.classList.remove("show");
    document.body.classList.remove('no-scroll');
  }
});
