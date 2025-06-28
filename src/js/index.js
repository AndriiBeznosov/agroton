const btn = document.querySelector(".menu__btn").addEventListener("click", () => {
    const menu = document.querySelector(".menu__list");
    const btn = document.querySelector(".menu__btn");
    menu.classList.toggle("menu--active");
    btn.classList.toggle("btn--active");
});

if (document.documentElement.clientWidth < 981) {
    const listNavLink = document.querySelectorAll(".menu__link");
    Array.from(listNavLink).map((e) =>
        e.addEventListener("click", () => {
            const menu = document.querySelector(".menu__list");
            const btn = document.querySelector(".menu__btn");
            menu.classList.remove("menu--active");
            btn.classList.remove("btn--active");
        }),
    );
}

const toTopBtn = document.getElementById("toTopBtn");

window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;

    if (scrollPosition > viewportHeight * 0.8) {
        toTopBtn.classList.add("show");
    } else {
        toTopBtn.classList.remove("show");
    }
});
toTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
