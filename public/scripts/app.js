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
});

// Swiper
document.querySelectorAll('.js-swiper').forEach(element => {
    const type = element.dataset.type
    if (type === 'managers') {
        new Swiper(element, {
            slidesPerView: 1,
            loop: true,
            autoplay:true,
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    spaceBetween: 15
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20

                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                1280: {
                    slidesPerView: 4,
                    spaceBetween: 20
                }
            }
        })
    }
})