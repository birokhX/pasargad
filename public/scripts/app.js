const navMobile = document.querySelector(".nav-mobile");
const openNavMobileBtn = document.querySelector(".open-nav-mobile-btn");
const closeNavMobileBtn = document.querySelector(".close-nav-mobile-btn");
const overlay = document.querySelector(".overlay");

openNavMobileBtn.addEventListener("click", function () {
    navMobile.classList.remove("-right-64");
    navMobile.classList.add("right-2");
    overlay.classList.add("overlay--visible");
});
closeNavMobileBtn.addEventListener("click", function () {
    navMobile.classList.remove("right-2");
    navMobile.classList.add("-right-64");
    setTimeout(function () {
        overlay.classList.remove("overlay--visible");

    }, 200)
});