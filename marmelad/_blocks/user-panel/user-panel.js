function initPopupOver() {
  setTimeout(function () {

    $('.user-panel').find('.js-have-popover').each(function () {
      let thisElem = $(this);
      let thisHeight = thisElem.innerHeight();
      let thisOffsetLeft = Math.floor(thisElem.position().left);
      let thisOffsetTop = Math.floor(thisElem.position().top);

      thisElem.find('.popover-user').each(function () {
        $(this).css('left', thisOffsetLeft);
        $(this).css('top', thisOffsetTop + thisHeight + 20);
      })
    })

  }, 500);

  var setSessionStoragePopupOver = null;

  $('.js-button-status-ok').on('click', function () {
    $(this).closest('.popover-user').removeClass('_is-active-popover');
    $(this).closest('.user-panel__col').removeClass('_is-active-col');
    $(this).closest('.js-have-popover').siblings('.js-have-popover').find('.popover-user--code').addClass('_is-active-popover');
    $(this).closest('.user-panel__col').siblings('.js-have-popover').addClass('_is-active-col');
  });

  $('.js-button-code-ok').on('click', function () {
    $(this).closest('.popover-user').removeClass('_is-active-popover');
    $(this).closest('.user-panel__col').removeClass('_is-active-col');
    $('.remodal-overlay').removeClass('_is-active-overlay');
  })
  

  $('.js-button-code-ok').on('click', function () {
    setSessionStoragePopupOver = sessionStorage.setItem('popover', 'ok');
  });

  if (sessionStorage.getItem("popover") == null && sessionStorage.getItem("popover") != 'ok') {
    setTimeout(function () {
      $('.remodal-overlay').addClass('_is-active-overlay');
      $('.user-panel__col--left').addClass('_is-active-col');
      $('.popover-user--status').addClass('_is-active-popover');
    }, 1500);
  }
}

if ($('.user-panel').length) {
  initPopupOver();
}