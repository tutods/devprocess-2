const slider = new Swiper('.videos .slider', {
  speed: 800,
  pagination: {
    el: '.videos .swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.videos .btn-next',
    prevEl: '.videos .btn-prev'
  },
  breakpoints: {
    320: {
      slidesPerView: 1.1,
      spaceBetween: 16,
    },
    767: {
      slidesPerView: 2.1,
    },
    1024: {
      slidesPerView: 3.1,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
