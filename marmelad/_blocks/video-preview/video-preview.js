$(".js-button-play").click(function () {
  let $this = $(this);
  let videoSrc = $this.data('video');
  
  $this.closest('.video-preview').find('iframe').attr('src', videoSrc);
  $this.closest('.video-preview').addClass('_is-play-video');
});

