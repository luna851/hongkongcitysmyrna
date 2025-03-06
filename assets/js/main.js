/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle("show-menu");
            toggle.classList.toggle("toggle-rotate"); // Adds rotation animation
        });
    }
};
showMenu("nav-toggle", "nav-menu");

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");
function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector(".nav__menu a[href*=" + sectionId + "]")
                .classList.add("active-link");
        } else {
            document
                .querySelector(".nav__menu a[href*=" + sectionId + "]")
                .classList.remove("active-link");
        }
    });
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const nav = document.getElementById("header");
    if (this.scrollY >= 200) {
        nav.classList.add("scroll-header");
        nav.style.transition = "0.4s ease-in-out"; // Smooth transition
    } else {
        nav.classList.remove("scroll-header");
    }
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL TOP ====================*/
function scrollTop() {
    const scrollTop = document.getElementById("scroll-top");
    if (this.scrollY >= 560) {
        scrollTop.classList.add("show-scroll");
        scrollTop.style.opacity = "1";
        scrollTop.style.transform = "scale(1)";
    } else {
        scrollTop.classList.remove("show-scroll");
        scrollTop.style.opacity = "0";
        scrollTop.style.transform = "scale(0.8)";
    }
}
window.addEventListener("scroll", scrollTop);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button"),
    darkTheme = "dark-theme",
    iconTheme = "bx-sun";

const selectedTheme = localStorage.getItem("selected-theme"),
    selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
    themeButton.classList.contains(iconTheme) ? "bx-moon" : "bx-sun";

if (selectedTheme) {
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
        darkTheme
    );
    themeButton.classList[selectedIcon === "bx-moon" ? "add" : "remove"](
        iconTheme
    );
}

themeButton.addEventListener("click", () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
    document.body.style.transition = "background-color 0.4s ease-in-out";
});

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: "top",
    distance: "50px",
    duration: 2000,
    reset: true,
    easing: "ease-in-out",
});

sr.reveal(
    `.home__data, .home__img,
     .about__data, .about__img,
     .services__content, .menu__content,
     .app__data, .app__img,
     .contact__data, .contact__button,
     .footer__content`,
    {
        interval: 200,
        scale: 0.95,
        opacity: 0,
    }
);

// Extra Scroll Reveal Variations
sr.reveal(".home__title", { delay: 300, origin: "left" });
sr.reveal(".home__subtitle", { delay: 400, origin: "right" });
sr.reveal(".home__img", { delay: 500, origin: "bottom" });

