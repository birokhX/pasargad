const navMobile = document.querySelector(".nav-mobile");
const openNavMobileBtn = document.querySelector(".open-nav-mobile-btn");
const closeNavMobileBtn = document.querySelector(".close-nav-mobile-btn");
const overlay = document.querySelector(".overlay");
const notification = document.querySelector("#notification");
const showNotification = document.querySelector("#showNotification");

openNavMobileBtn.addEventListener("click", openNav);
closeNavMobileBtn.addEventListener("click", closeNav);

function closeNav() {
  navMobile.classList.remove("right-2");
  navMobile.classList.add("-right-64");
  setTimeout(function () {
    overlay.classList.remove("overlay--visible");
  }, 200);
}
function openNav() {
  navMobile.classList.remove("-right-64");
  navMobile.classList.add("right-2");
  overlay.classList.add("overlay--visible");
}
overlay.addEventListener("click", closeNav);

// Norification
showNotification.addEventListener("click", () => {
  notification.classList.add("notification--visible");
});
// Alpine
document.addEventListener("alpine:init", () => {
  Alpine.data("accordianGroup", () => ({
    activeItem: null,
    toggle(id) {
      this.activeItem = this.activeItem === id ? null : id;
    },
    isOpen(id) {
      return this.activeItem === id;
    },
  }));
  //   Dropdown
  Alpine.data("dropdown", (openItem = false) => ({
    open: openItem,
    closing: false,
    communicationCard: false,
    communicationItem: null,

    communicationCardToggle() {
      this.communicationCard = !this.communicationCard;
    },
    communicationCardClose() {
      this.communicationCard = false;
    },
    getCommunicationIcon() {
      if (this.communicationItem === 1) {
        return "#telegram";
      } else if (this.communicationItem === 2) {
        return "#bale";
      } else {
        return "#eita";
      }
    },
    getCommunicationText() {
      if (this.communicationItem === 1) {
        return "@birokhx";
      } else if (this.communicationItem === 2) {
        return "@birokhx";
      } else {
        return "@birokhx";
      }
    },

    close() {
      this.closing = true;
      notification.classList.remove("notification--visible");

      setTimeout(() => {
        this.open = false;
      }, 300);
    },
  }));

});

// Swiper
document.querySelectorAll(".js-swiper").forEach((element) => {
  const type = element.dataset.type;
  if (type === "managers") {
    new Swiper(element, {
      slidesPerView: 1,
      loop: true,
      autoplay: true,
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });
  }
});
