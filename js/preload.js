// Fades out loading screen and fades in content.
$(function() {
  $('.preload').fadeOut(1000, function() {
    $('.content').fadeIn(500);
  });
});
