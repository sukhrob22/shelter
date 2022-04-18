document.addEventListener("DOMContentLoaded", () => {
  // BURGER
  const burgerButton = document.getElementById("burger");
  const burgerMenu = document.getElementById("menu");
  const headerBlock = document.querySelector("header");

  const toggleMenu = () => {
    document.body.classList.toggle("lock");
    burgerButton.classList.toggle("open");
    burgerMenu.classList.toggle("open");
    headerBlock.classList.toggle("open");
  };

  burgerButton.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleMenu();
  });

  document.addEventListener("click", (event) => {
    if (document.body.classList.contains("lock")) {
      const target = event.target;
      const its_menu = target == burgerMenu || burgerMenu.contains(target);
      const its_btnMenu = target == burgerButton;
      const menu_is_active = burgerMenu.classList.contains("open");
      const navItem = target.classList.contains("nav__link");

      if ((!its_menu && !its_btnMenu && menu_is_active) || navItem) {
        toggleMenu();
      }
    }
  });
});
