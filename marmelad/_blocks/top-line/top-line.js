$('.js-button-more').on('click', function(event) {
  event.preventDefault();
  $('.js-mobile-panel').toggleClass('_is-show');
});

function fixedTopPanel() {
  const topPanel = $('.top-line');
  let topPanelHeight = topPanel.height();
  const header = $('.header');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 5) {
      topPanel.addClass('_is-fixed');
      header.addClass('_is-fixed-top-line');
    } else if ($(this).scrollTop() <= 5) {
      topPanel.removeClass('_is-fixed');
      header.removeClass('_is-fixed-top-line');
    }
  });
}

fixedTopPanel();
