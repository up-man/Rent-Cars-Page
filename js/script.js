// Swiper slider
const swiper1 = new Swiper("#swiper-brands", {
  freeMode: true,

  slidesPerView: "auto",
});
const swiper2 = new Swiper("#swiper-popular", {
  loop: true,
  slidesPerView: 1,
  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
    1160: {
      slidesPerView: 4,
    },
  },
});

const swiper3 = new Swiper("#swiper-testimonials", {
  freeMode: true,
  slidesPerView: "auto",
});
