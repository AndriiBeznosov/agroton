const btn = document
    .querySelector(".menu__btn")
    .addEventListener("click", () => {
        const menu = document.querySelector(".menu__list");
        menu.classList.toggle("menu--active");
    });
