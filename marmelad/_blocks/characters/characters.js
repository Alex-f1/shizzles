const charactersSlider = new Swiper(".js-characters-slider", {
  slidesPerView: 'auto',
  spaceBetween: 20,
  loop: true,
  centeredSlides: true,
  speed: 1000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
});
