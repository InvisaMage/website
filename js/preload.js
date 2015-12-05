// Fades out loading screen and fades in content.
$(function() {
    $('.preload').delay(300);
});

$(window).load(function() {
  $('.preload').fadeOut(300, function() {
    $('.content').fadeIn(300);
  });
});
