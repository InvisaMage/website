//Compiled JavaScript functions utilized on multiple pages.

//Preload - Fades out loading screen and fades in content.
$(function() {
    NProgress.start();
});

$(window).load(function() {
  NProgress.done();
  $('.preload').fadeOut(300, function() {
    $('.content').fadeIn(300);
  });
});

//If no touchscreen, show Tooltips and hide mobile search
if(!('ontouchstart' in window))
{
  $('[data-toggle="tooltip"]').tooltip();
  $('#search-mobile').hide();
}

//If touchscreen, hide desktop search
if(('ontouchstart' in window))
{
  $('#search').hide();
}

//Autofocus Personalize Message Modal
$('#modal-personalize').on('shown.bs.modal', function () {
  $('#name-value').focus();
  $('#name-value').select();
});

//Typeahead Function for Search (Only on Desktop)
$(function () {
  $.getJSON('json/search.json')
    .done(function (data) {
      $('#search').typeahead({ source: data });
    });
});

//Typeahead Function for namePrompt
$(function () {
  $.getJSON('json/namePrompt.json')
    .done(function (data) {
      $('#name-value').typeahead({ source: data });
    });
});

//Mobile Menu select
$('#mobile-menu select').change(function(){
    window.location = $(this).val();
});

//jQuery smooth scroll to id's
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return true;
      }
    }
  });
});

//Loads snowstorm assets and replaces footer text to enable snowstorm on next click
function loadSnowstorm() {
  $('#js-snowstorm').load('js/snowstorm.js');
  $('#footer-snowstorm').tooltip('destroy');
  $('#footer-snowstorm').replaceWith( "<a class='link' id='footer-snowstorm' onclick='snowStorm.toggleSnow();' data-toggle='tooltip' data-placement='top' title='Toggle the snowstorm!'>Toggle Snow</a>" );
  //Re enable tooltips.
  if(!('ontouchstart' in window))
  {
    $('[data-toggle="tooltip"]').tooltip();
  }
}

//Loads snowstorm assets and enables for namePrompt easter egg
function loadSnowstormNamePrompt(){
  setTimeout(enable, 500);
  $('#js-snowstorm').load('js/snowstorm.js');

    function enable(){
      snowStorm.toggleSnow();
    }
}

//Loads water assets and replaces footer text to enable water on next click
function loadWater() {
  $('#js-water').load('js/jquery.ripples.js');
  $('#footer-water').tooltip('destroy');
  $('#footer-water').replaceWith( "<a class='link' id='footer-water' onclick='$(body).ripples({ resolution: 512, dropRadius: 20, perturbance: 0.04 }); destroyWater();' data-toggle='tooltip' data-placement='top' title='Enable a buggy water effect.'>Enable Water</a>" );
  //Re enable tooltips.
  if(!('ontouchstart' in window))
  {
    $('[data-toggle="tooltip"]').tooltip();
  }
}

//Enables water and replaces footer text to enable water on next click
function destroyWater() {
  $('#footer-water').tooltip('destroy');
  $('#footer-water').replaceWith( "<a class='link' id='footer-water' onclick='$(`body`).ripples(`destroy`); loadWater();' data-toggle='tooltip' data-placement='top' title='Mop up the water.'>Destroy Water</a>" );
  //Re enable tooltips.
  if(!('ontouchstart' in window))
  {
    $('[data-toggle="tooltip"]').tooltip();
  }
}

//Loads footer on page load
$('#footer').load('ajax/footer.html');

//Loads terminal modal on Shift + T key combination
var listener = new window.keypress.Listener();
listener.simple_combo("shift t", function() {
    $('#js-ptty').load('js/ptty.jquery.min.js');
    $('#modal-terminal').load('ajax/modals/terminal.html');
});

//Opens terminal with tilde key press
var listener = new window.keypress.Listener();
listener.simple_combo("`", function() {
    //Close open modals
    $('#modal-personalize, #modal-hideads, #modal-contact, #modal-donate, #modal-stats, #modal-reload, #modal-eastereggs, #modal-archive, #modal-search-help, #modal-privacy-yes, #modal-privacy-no, #modal-cookie, #modal-terms-yes, #modal-terms-no').modal('hide');
    $('#modal-terminal').modal('toggle');
    $('#modal-terminal').on('shown.bs.modal', function (e) { $('form, input').focus(); });
});

console.log('What are you doing in here? \nYes I know I need to fix a few errors.')
