'use strict';

/* ^^^
 * Viewport Height Correction
 *
 * @link https://www.npmjs.com/package/postcss-viewport-height-correction
 * ========================================================================== */
function setViewportProperty(){
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', vh + 'px');
}
window.addEventListener('resize', setViewportProperty);
setViewportProperty(); // Call the fuction for initialisation

/* ^^^
 * Полифил для NodeList.forEach(), на случай если забыл про IE 11
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach
 * ========================================================================== */
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

/* ^^^
 * JQUERY Actions
 * ========================================================================== */
$(function() {
  //=require ../_blocks/**/*.js
  
  function notSupportedBrowser() {
    let sUsrAg = navigator.userAgent;
    let setNotSupported = $('body');

    if (sUsrAg.indexOf("Firefox") > -1) {
      setNotSupported.addClass('_is-not-supported-browser');
    } else if (sUsrAg.indexOf("Opera") > -1) {
      setNotSupported.addClass('_is-not-supported-browser');
    }
  }

  notSupportedBrowser();

  $('.js-button-info').on('click', function () {
    let thisElem = $(this);
    let thisElemDataText = thisElem.data('text');
    let statusInfoText = $('.js-status-info-text');
    
    if (thisElem.hasClass('_is-active')) {
      thisElem.removeClass('_is-active');
      statusInfoText.removeClass('_is-show');
      statusInfoText.text('')
    } else {
      thisElem.addClass('_is-active');
      statusInfoText.addClass('_is-show');
      thisElem.closest('tr').siblings('tr').find('.js-button-info').removeClass('_is-active');
      statusInfoText.text(thisElemDataText)
    }
  })
});
