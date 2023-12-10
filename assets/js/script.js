const slider = new Swiper('.videos .slider', {
  slidesPerView: 3,
  spaceBetween: 28,
  speed: 800,
  pagination: {
    el: '.videos .swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.videos .btn-next',
    prevEl: '.videos .btn-prev'
  }
});
