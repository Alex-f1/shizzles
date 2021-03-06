function initPopupNote() {
  var setSessionStoragePopupNote = null;

  $('.js-button-note-ok, .js-button-note-close').on('click', function () {
    setSessionStoragePopupNote = sessionStorage.setItem('popup_note', 'ok');
  });

  if (sessionStorage.getItem("popup_note") == null && sessionStorage.getItem("popup_note") != 'ok') {
    setTimeout(function () {
      const popupNote = $('[data-remodal-id=note]').remodal();
      popupNote.open();
    }, 3000);
  }
}

if ($('.popup-note').length) {
  initPopupNote();
}