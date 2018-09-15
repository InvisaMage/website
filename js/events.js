/*!
 * Proudly coded by Travis Kipp
 * Created September 30, 2016
 * Events
 *
 * Determines user's system date and displays a banner on the Homepage if there's an event for the given date.
 */

//Initialize built in date function
var date = new Date;

//New Year
if (date.getMonth() === 0 && (date.getDate() == 1)) {
  showEvent("<strong>Happy New Year!</strong><br><br>Did you make any New Year's resolutions?");
}
//Star Wars Day
if (date.getMonth() == 4 && (date.getDate() == 4)) {
  showEvent("<strong>Happy Star Wars Day!</strong><br><br>May the fourth be with you!");
}
//Independence Day
if (date.getMonth() == 6 && (date.getDate() == 4)) {
  showEvent("<strong>Happy Independence Day</strong><br><br>BBQ time!");
}
//Owner's birthday
if (date.getMonth() == 8 && (date.getDate() == 28)) {
  showEvent("<strong>Happy Birthday</strong><br><br>Today is Travis's birthday.");
}
//Veterans Day
if (date.getMonth() == 9 && (date.getDate() == 11)) {
  showEvent("<strong>Veterans Day!</strong><br><br>Be sure to thank a Veteran.");
}
//Halloween
if (date.getMonth() == 9 && (date.getDate() == 31)) {
  showEvent("<strong>Happy Halloween</strong><br><br>Are you going to get any candy?");
}
//Christmas eve
if (date.getMonth() == 11 && (date.getDate() == 24)) {
  showEvent("<strong>Christmas Eve</strong><br><br>'Tis the night before Christmas...");
}
//Christmas
if (date.getMonth() == 11 && (date.getDate() == 25)) {
  showEvent("<strong>Merry Christmas</strong><br><br>I'm dreaming of a white Christmas...<br><span id='no-click'><a id='events-snow' href='#' onclick='loadSnowstormEvents();'>Make it so</a></span>");
}

function showEvent(msg) {
  var notice = PNotify.success({
    title: 'Event Today',
    text: msg + '<br><br><small>Click to configure <i class="fa fa-cog fa-sm"></i></small>',
    textTrusted: true,
    hide: false,
    modules: {
      Buttons: {
        sticker: false
      }
    }
  });
  notice.refs.elem.style.cursor = 'pointer';
  notice.on('click', function(e) {
    if ($(e.target).is('.ui-pnotify-closer *, .ui-pnotify-sticker *, #no-click *')) {
      return;
    }
    loadSettingsMod();
  });
}

function loadSnowstormEvents() {
  setTimeout(enable, 500);
  $.getScript('js/snowstorm.js');
  $('#footer-snowstorm').replaceWith("<a class='link' id='footer-snowstorm' onclick='snowStorm.toggleSnow(); vulcanicAshCheck();' data-toggle='tooltip' data-placement='top' title='Toggle the snowstorm!'>Toggle Snow</a>");
  function enable() {
    vulcanicAshCheck();
    snowStorm.toggleSnow();
    $('#events-snow').hide();
  }
}