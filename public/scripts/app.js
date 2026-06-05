const navMobile = document.querySelector(".nav-mobile");
const openNavMobileBtn = document.querySelector(".open-nav-mobile-btn");
const closeNavMobileBtn = document.querySelector(".close-nav-mobile-btn");
const overlay = document.querySelector(".overlay");

openNavMobileBtn.addEventListener("click", openNav);
closeNavMobileBtn.addEventListener("click", closeNav);

function closeNav() {
    navMobile.classList.remove("right-2");
    navMobile.classList.add("-right-64");
    setTimeout(function () {
        overlay.classList.remove("overlay--visible");

    }, 200)
}
function openNav() {
    navMobile.classList.remove("-right-64");
    navMobile.classList.add("right-2");
    overlay.classList.add("overlay--visible");
}
overlay.addEventListener("click", closeNav);

// Alpine
document.addEventListener('alpine:init', () => {
    Alpine.data('accordianGroup', () => ({
        activeItem: null,
        toggle(id) {
            this.activeItem = this.activeItem === id ? null : id
        },
        isOpen(id) {
            return this.activeItem === id
        }
    }))
})