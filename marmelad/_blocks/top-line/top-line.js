$('.js-button-more').on('click', function(event) {
  event.preventDefault();
  $('.js-mobile-panel').toggleClass('_is-show');
});