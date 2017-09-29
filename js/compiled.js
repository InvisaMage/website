//Compiled JavaScript functions utilized on multiple pages.

//Loads navbar, modals, and footer on page load
$('nav').load('ajax/nav.html');
$('#footer').load('ajax/footer.html');
$('#modals').load('ajax/modals.html');

var protocol = window.location.protocol;
var windowHeight = window.innerHeight;
var termCounter = 0;

//If no touchscreen, show Tooltips
if(!('ontouchstart' in window)) {
  $('[data-toggle="tooltip"]').tooltip();
}

//If touchscreen, disable gray background in tab-content
if(('ontouchstart' in window)) {
  $('.tab-content').css('background-color', 'inherit');
}

//Navbar current page highlight
setTimeout(navEnable, 700);
  function navEnable(){
    $(function (){
      if ($("title").html() == "InvisaMage | Home") {
        $('#nav-home').addClass('active animated bounceIn');
      }
      else if ($("title").html() == "InvisaMage | News") {
        $('#nav-news').addClass('active animated bounceIn');
      }
      else if ($("title").html() == "InvisaMage | Valkyrie Realms") {
        $('#nav-mc').addClass('active');
        $("#nav-projects").addClass("active animated bounceIn");
      }
      else if ($("title").html() == "InvisaMage | Floating Survival") {
        $('#nav-fs').addClass('active');
        $("#nav-projects").addClass("active animated bounceIn");
      }
      else if ($("title").html() == "InvisaMage | InvisaRant") {
        $('#nav-ir').addClass('active');
        $("#nav-projects").addClass("active animated bounceIn");
      }
      else if ($("title").html() == "InvisaMage | TxtLock") {
        $('#nav-txtLock').addClass('active');
        $("#nav-projects").addClass("active animated bounceIn");
      }
      else if ($("title").html() == "InvisaMage | Computers") {
        $('#nav-computers').addClass('active animated bounceIn');
        $("#nav-resources").addClass("active");
      }
      else if ($("title").html() == "InvisaMage | Site Information") {
        $('#nav-info').addClass('active animated bounceIn');
      }
    });
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

//Scroll to target in URL after page load
$(function() {
setTimeout(enable, 900);
  function enable(){
    var test = $('*:target').offset().top;
    $("html, body").animate({ scrollTop: test -200 }, 1000);
  }
});

//Loads snowstorm assets and replaces footer text to enable snowstorm on next click
function loadSnowstorm() {
  $('#js-snowstorm').load('js/snowstorm.js');
  $('#footer-snowstorm').tooltip('dispose');
  $('#footer-snowstorm').replaceWith( "<a class='link' id='footer-snowstorm' onclick='snowStorm.toggleSnow(); purplerainCheck();' data-toggle='tooltip' data-placement='top' title='Toggle the snowstorm!'>Toggle Snow</a>" );
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
  $('#footer-snowstorm').replaceWith( "<a class='link' id='footer-snowstorm' onclick='snowStorm.toggleSnow(); purplerainCheck();' data-toggle='tooltip' data-placement='top' title='Toggle the snowstorm!'>Toggle Snow</a>" );
    function enable(){
      purplerainCheck();
      snowStorm.toggleSnow();
    }
}

//Delete Easter egg on del key press
var listener = new window.keypress.Listener();
listener.simple_combo("delete", function() {
  var audio = new Audio('./audio/delete.mp3');
  audio.play();
});

//Shortcuts
//Loads terminal modal on Shift + Space key combination
var listener = new window.keypress.Listener();
listener.simple_combo("shift space", function() {
  //Inform user of successful load
  $.bootstrapGrowl("Loading assets...", {
    type: 'info',
    align: 'right',
    delay: 1500,
    offset: {from: 'top', amount: 70},
    width: 300,
    allow_dismiss: true
  });
  if (termCounter == 0) {
    $.getScript('js/jquery.terminal.min.js');
    $('html').append('<link rel="stylesheet" type="text/css" href="./css/jquery.terminal.css">');
    setTimeout(enable, 500);
      function enable(){
        $.getScript('js/terminal.js')
         .done(function() {
           //Inform user of successful load
           $.bootstrapGrowl("Terminal assets have been loaded.<br><br>Press the <kbd>`</kbd> key to open.", {
             type: 'success',
             align: 'right',
             delay: 2000,
             offset: {from: 'top', amount: 70},
             width: 300,
             allow_dismiss: true
           });
           termCounter = 1;
         })
      }
  } else {
    //Inform user of successful load
    $.bootstrapGrowl("Terminal assets have already been loaded!", {
      type: 'danger',
      align: 'right',
      delay: 1500,
      offset: {from: 'top', amount: 70},
      width: 300,
      allow_dismiss: true
    });
  }
});

//Hides all modals
function hideModals() {
  $('#modal-personalize, #modal-achievements, #modal-hideads, #modal-contact, #modal-donate, #modal-stats, #modal-reload, #modal-eastereggs, #modal-settings, #modal-shortcuts, #modal-terminal, #modal-archive, #modal-search-help, #modal-privacy-yes, #modal-privacy-no, #modal-cookies, #modal-terms-yes, #modal-terms-no').modal('hide');
}

//Focus search box with Ctrl + Alt + F key press
var listener = new window.keypress.Listener();
listener.simple_combo("ctrl alt f", function() {
    $('input').focus();
});

//Settings
var listener = new window.keypress.Listener();
listener.simple_combo("ctrl alt c", function() {
  hideModals();
  loadSettingsMod();
});

//Settings
var listener = new window.keypress.Listener();
listener.simple_combo("ctrl alt s", function() {
  hideModals();
  loadStatsMod();
});

//Achievements
var listener = new window.keypress.Listener();
listener.simple_combo("ctrl alt a", function() {
  hideModals();
  loadAchievementsMod();
});

//Settings modal logic (executed on save button click in Settings modal)
function settingsCheck() {
  //Theme
  if ($('#theme-radio1:checked').val() == 'dark') {
    Cookies.set('theme', 'dark', {expires: 3600, secure: true});
  }
  if ($('#theme-radio2:checked').val() == 'light') {
    Cookies.set('theme', 'light', {expires: 3600, secure: true});
  }
  //Legacy background
  if ($('#legacy-background-checkbox1:checked').val() == 'true') {
    Cookies.set('themeLegacyBg', 'true', {expires: 3600, secure: true});
  }
  if ($('#legacy-background-checkbox1:checked').val() != 'true') {
    Cookies.set('themeLegacyBg', 'false', {expires: 3600, secure: true});
  }
  //Centered Modals
  if ($('#modal-centered-checkbox1:checked').val() == 'true') {
    Cookies.set('centeredModals', 'true', {expires: 3600, secure: true});
  }
  if ($('#modal-centered-checkbox1:checked').val() != 'true') {
    Cookies.set('centeredModals', 'false', {expires: 3600, secure: true});
  }
  //Loading screen
  if ($('#loading-screen-checkbox1:checked').val() == 'true') {
    Cookies.set('loadingScreen', 'true', {expires: 3600, secure: true});
  }
  if ($('#loading-screen-checkbox1:checked').val() != 'true') {
    Cookies.set('loadingScreen', 'false', {expires: 3600, secure: true});
  }
  //Banner - Events
  if ($('#home-banner-checkbox1:checked').val() == 'true') {
    Cookies.set('enableEventsBanner', 'true', {expires: 3600, secure: true});
  }
  if ($('#home-banner-checkbox1:checked').val() != 'true') {
    Cookies.set('enableEventsBanner', 'false', {expires: 3600, secure: true});
  }
  //Banner - Info
  if ($('#info-banner-checkbox1:checked').val() == 'true') {
    Cookies.set('enableInfoBanner', 'true', {expires: 3600, secure: true});
  }
  if ($('#info-banner-checkbox1:checked').val() != 'true') {
    Cookies.set('enableInfoBanner', 'false', {expires: 3600, secure: true});
  }
  //Banner - Terms and conditions
  if ($('#tac-banner-checkbox1:checked').val() == 'true') {
    Cookies.set('enableTacBanner', 'true', {expires: 3600, secure: true});
  }
  if ($('#tac-banner-checkbox1:checked').val() != 'true') {
    Cookies.set('enableTacBanner', 'false', {expires: 3600, secure: true});
  }
  //News
  if ($('#news-radio1:checked').val() == 'projects') {
    Cookies.set('defaultTab', 'projects', {expires: 3600, secure: true});
  }
  if ($('#news-radio2:checked').val() == 'important') {
    Cookies.set('defaultTab', 'important', {expires: 3600, secure: true});
  }
  if ($('#news-radio3:checked').val() == 'website') {
    Cookies.set('defaultTab', 'website', {expires: 3600, secure: true});
  }
  if ($('#news-radio4:checked').val() == 'bugs') {
    Cookies.set('defaultTab', 'bugs', {expires: 3600, secure: true});
  }
  //Terminal
  if ($('#terminal-checkbox1:checked').val() == 'true') {
    Cookies.set('loadTerminal', 'true', {expires: 3600, secure: true});
  }
  if ($('#terminal-checkbox1:checked').val() != 'true') {
    Cookies.set('loadTerminal', 'false', {expires: 3600, secure: true});
  }
  //Snowstorm
  if ($('#snowstorm-checkbox1:checked').val() == 'true') {
    Cookies.set('enableSnowstorm', 'true', {expires: 3600, secure: true});
  }
  if ($('#snowstorm-checkbox1:checked').val() != 'true') {
    Cookies.set('enableSnowstorm', 'false', {expires: 3600, secure: true});
  }
  //Set background color
  if ($('#bg-color-hex').val() !== '' || $('#bg-color-hex').val() !== ' ') {
    var hexValue = $('#bg-color-hex').val();
    Cookies.set('bgColor', hexValue, {expires: 3600, secure: true});
  }

  setTimeout(enable, 1500);
  $.bootstrapGrowl("Settings Saved!", {
    type: 'success',
    align: 'right',
    offset: {from: 'top', amount: 70},
    width: 'auto',
    delay: 10000,
    allow_dismiss: true
  });
  $.bootstrapGrowl("<strong>Reloading page...</strong>", {
    type: 'danger',
    align: 'center',
    offset: {from: 'top', amount: 70},
    width: 'auto',
    delay: 10000,
    allow_dismiss: true
  });
  function enable(){
    location.reload();
  }
}

//Settings modal cancel message
function settingsCancelMsg() {
    $.bootstrapGrowl("Changes have not been saved!", {
      type: 'danger',
      align: 'right',
      offset: {from: 'top', amount: 70},
      width: 'auto',
      delay: 2000,
      allow_dismiss: true
    });
}

//Set background color
$(function() {
  if (Cookies.get('bgColor') != null) {
    newColor = Cookies.get('bgColor');
    setTimeout(enable, 1);
      function enable(){
        $('body').css("background-color", newColor);
        console.log("background-color: " + newColor);
      }
  } else {

  }
});

//Check if Load Terminal on page load? is set to yes, if yes, load terminal assets.
$(function() {
  if (Cookies.get('loadTerminal') == 'true') {
    $.getScript('js/jquery.terminal.min.js');
    $('html').append('<link rel="stylesheet" type="text/css" href="./css/jquery.terminal.css">');
    setTimeout(enable, 500);
      function enable(){
        $.getScript('js/terminal.js')
         .done(function() {
           //Inform user of successful load
           $.bootstrapGrowl("Terminal assets have been loaded.<br><br>Press the <kbd>`</kbd> key to open.", {
             type: 'success',
             align: 'right',
             delay: 1500,
             offset: {from: 'top', amount: 70},
             width: 300,
             allow_dismiss: true
           });
         })

        console.log('loadTerminal = true');
        termCounter = 1;
      }
  } else {
    console.log('loadTerminal = false');
  }
});

//Check which tab needs to be opened on News page.
$(function() {
  if (Cookies.get('defaultTab') == 'projects') {
    $('#tabs li:eq(0) a').tab('show');
    $('#pills li:eq(0) a').tab('show');
    console.log('defaultTab = projects');
  }
  else if (Cookies.get('defaultTab') == 'important') {
    $('#tabs li:eq(1) a').tab('show');
    $('#pills li:eq(1) a').tab('show');
    console.log('defaultTab = important');
  }
  else if (Cookies.get('defaultTab') == 'website') {
    $('#tabs li:eq(2) a').tab('show');
    $('#pills li:eq(2) a').tab('show');
    console.log('defaultTab = website');
  }
  else if (Cookies.get('defaultTab') == 'bugs') {
    $('#tabs li:eq(3) a').tab('show');
    $('#pills li:eq(3) a').tab('show');
    console.log('defaultTab = bugs');
  } else {
    console.log('defaultTab = null');
  }
});

//Check if Events Banner needs to be shown on Homepage
$(function() {
  //Check date to know if events needs to be loaded
  var date = new Date();
  var dates = ['01', '44', '64', '828', '931', '1124', '1125'];

  var month = date.getMonth().toString();
  var day = date.getDate().toString();
  var mD = month + day;

if (Cookies.get('enableEventsBanner') == 'true') {
  if(dates.indexOf(mD) != -1) {
    $('#ajax-event-banner').load('ajax/alerts/events.html');
  }
  console.log('enableEventsBanner = true');
  } else {
    console.log('enableEventsBanner = false');
  }
});

//Check if info Banner needs to be shown on homepage
if (Cookies.get('enableInfoBanner') == 'true') {
  $('#ajax-info-banner').load('ajax/alerts/info.html');
  console.log('enableInfoBanner = true');
  } else {
    console.log('enableInfoBanner = false');
  }


//Check if Banners needs to be shown on Terms and Privacy page
$(function() {
  if (Cookies.get('enableTacBanner') == 'true') {
    $('#ajax-terms-banner').load('ajax/alerts/terms.html');
    $('#ajax-privacy-banner').load('ajax/alerts/privacy.html');
    console.log('enableTacBanner = true');
  } else {
    console.log('enableTacBanner = false');
  }
});

//Check if Snowstorm needs to be loaded on page load
$(function() {
  if (Cookies.get('enableSnowstorm') == 'true') {
    setTimeout(enable, 500);
    loadSnowstorm();
      function enable(){
        snowStorm.toggleSnow();
        $('#footer-snowstorm').replaceWith( "<a class='link' id='footer-snowstorm' onclick='snowStorm.toggleSnow(); purplerainCheck();' data-toggle='tooltip' data-placement='top' title='Toggle the snowstorm!'>Toggle Snow</a>" );
      }
    console.log('enableSnowstorm = true');
  } else {
    console.log('enableSnowstorm = false');
  }
});

//Temporary workaround for settings bug
//Forces to set banner cookies if they have not been set yet
$(function() {
  if (Cookies.get('enableEventsBanner') === undefined) {
      Cookies.set('enableEventsBanner', 'true', {expires: 3600, secure: true});
  }
  if (Cookies.get('enableTacBanner') === undefined) {
      Cookies.set('enableTacBanner', 'true', {expires: 3600, secure: true});
  }
  if (Cookies.get('enableInfoBanner') === undefined) {
      Cookies.set('enableInfoBanner', 'true', {expires: 3600, secure: true});
  }
});

//Check which theme to apply
$(function() {
  if (Cookies.get('theme') == 'light') {
    $('.card').removeClass('bg-dark').addClass('bg-light');
    //$('button').removeClass('btn-light').addClass('btn-secondary');
    $('table').removeClass('table-inverse').addClass('table-light');
    $("nav").attr("class", "navbar navbar-expand-md navbar-light bg-light fixed-top");
    //$("nav").attr("style", "background-color: #e3f2fd;");
    $('html').append('<link rel="stylesheet" type="text/css" href="./css/theme-light.css">');
    console.log('theme = light');
  } else {
    console.log('theme = dark');
  }
});

//Test light theme locally
function test() {
  $('.card').removeClass('bg-dark').addClass('bg-light');
  //$('button').removeClass('btn-light').addClass('btn-secondary');
  $('table').removeClass('table-inverse').addClass('table-light');
  $("nav").attr("class", "navbar navbar-expand-md navbar-light bg-light fixed-top");
  //$("nav").attr("style", "background-color: #e3f2fd;");
  $('html').append('<link rel="stylesheet" type="text/css" href="./css/theme-light.css">');
}

//Check if centered modals need to be applied
$(function() {
  if (Cookies.get('centeredModals') == 'true') {
    $('html').append('<link rel="stylesheet" type="text/css" href="./css/modals-centered.css">');
    console.log('centeredModals = true');
  } else {
    console.log('centeredModals = false');
  }
});

//Check if legacy background needs to be applied
$(function() {
  if (Cookies.get('themeLegacyBg') == 'true' && Cookies.get('theme') != 'light' ) {
    $('body').css("background-image", "url(./images/bg.jpg)");
    console.log('themeLegacyBg = true');
  } else {
    console.log('themeLegacyBg = false');
  }
});

//Contact modal copy messages
function emailMsg() {
    $.bootstrapGrowl("E-mail address copied!", {
      type: 'success',
      align: 'right',
      offset: {from: 'top', amount: 70},
      width: 'auto',
      allow_dismiss: true
    });
}
function telegramMsg() {
    $.bootstrapGrowl("Telegram URL copied!", {
      type: 'success',
      align: 'right',
      offset: {from: 'top', amount: 70},
      width: 'auto',
      allow_dismiss: true
    });
}
function keybaseMsg() {
    $.bootstrapGrowl("Keybase username copied!", {
      type: 'success',
      align: 'right',
      offset: {from: 'top', amount: 70},
      width: 'auto',
      allow_dismiss: true
    });
}

//Donate modal copy messages
function bitcoinMsg() {
    $.bootstrapGrowl("Bitcoin wallet address copied!", {
      type: 'success',
      align: 'right',
      offset: {from: 'top', amount: 70},
      width: 'auto',
      allow_dismiss: true
    });
}
function dogecoinMsg() {
    $.bootstrapGrowl("Dogecoin wallet address copied!", {
      type: 'success',
      align: 'right',
      offset: {from: 'top', amount: 70},
      width: 'auto',
      allow_dismiss: true
    });
}
function litecoinMsg() {
    $.bootstrapGrowl("Litecoin wallet address copied!", {
      type: 'success',
      align: 'right',
      offset: {from: 'top', amount: 70},
      width: 300,
      allow_dismiss: true
    });
}

//Used to see if Easteregg modal Achievement message should be displayed.
function eastereggCheck() {
  if (Cookies.get('eastereggAchievement') == 'true') {
    console.log('Achievement message not displayed as user has already gotten it.');
  } else {
    $.bootstrapGrowl("<strong>Achievement Get!</strong><br>Konami Code<br><br>Insert Up, Up, Down, Down, Left, Right, Left, Right, B, A,<br>anywhere in the website.", {
      type: 'info',
      align: 'right',
      offset: {from: 'top', amount: 70},
      width: 300,
      delay: 10000,
      allow_dismiss: true
    });
    Cookies.set('eastereggAchievement', 'true', {expires: 3600, secure: true});
  }
}

//Used to see if Terminal Achievement message should be displayed.
function terminalCheck() {
  if (Cookies.get('terminalAchievement') == 'true') {
    console.log('Achievement message not displayed as user has already gotten it.');
  } else {
    $.bootstrapGrowl("<strong>Achievement Get!</strong><br>Hacker?!<br><br>Use the Terminal for the first time.", {
      type: 'info',
      align: 'right',
      offset: {from: 'top', amount: 70},
      width: 300,
      delay: 10000,
      allow_dismiss: true
    });
    Cookies.set('terminalAchievement', 'true', {expires: 3600, secure: true});
  }
}

//Used to see if Wisely Achievement message should be displayed.
function wiselyCheck() {
  if (Cookies.get('wiselyAchievement') == 'true') {
    console.log('Achievement message not displayed as user has already gotten it.');
  } else {
    $.bootstrapGrowl("<strong>Achievement Get!</strong><br>You've Chosen Wisely<br><br>Agree to the <a href='terms.html'>Terms & Conditions</a> or <a href='privacy.html'>Privacy Policy</a>.", {
      type: 'info',
      align: 'right',
      offset: {from: 'top', amount: 70},
      width: 300,
      delay: 10000,
      allow_dismiss: true
    });
    Cookies.set('wiselyAchievement', 'true', {expires: 3600, secure: true});
  }
}

//Used to see if Wisely Achievement message should be displayed.
function purplerainCheck() {
  if (Cookies.get('purplerainAchievement') == 'true' )  {
    console.log('Achievement message not displayed as user has already gotten it.');
  } if (Cookies.get('purplerainAchievement') !== 'true' && Cookies.get('theme') == 'light' ) {
    $.bootstrapGrowl("<strong>Achievement Get!</strong><br>Purple Rain<br><br>Enable the snowstorm with the 'light' theme enabled.", {
      type: 'info',
      align: 'right',
      offset: {from: 'top', amount: 70},
      width: 300,
      delay: 10000,
      allow_dismiss: true
    });
    Cookies.set('purplerainAchievement', 'true', {expires: 3600, secure: true});
  }
}

//Reset Achievement cookies
function resetAchievements() {
  Cookies.remove('eastereggAchievement', {secure: true});
  Cookies.remove('terminalAchievement', {secure: true});
  Cookies.remove('wiselyAchievement', {secure: true});
  Cookies.remove('hallucinatingAchievement', {secure: true});
  Cookies.remove('purplerainAchievement', {secure: true});
  $('#btn-reset-achievements').tooltip('hide');
  $.bootstrapGrowl("Your achievement progress has been reset!", {
    type: 'info',
    align: 'right',
    offset: {from: 'top', amount: 70},
    width: 'auto',
    allow_dismiss: true
  });
}

//Shortened modal load functions
function loadAchievementsMod() {
  $('#modal-achievements').load('ajax/modals/achievements.html');
  $('#modal-achievements').modal();
}
function loadAdsMod() {
  if (Cookies.get('hallucinatingAchievement') == 'true') {
    $('#modal-hide-ads').load('ajax/modals/hide-ads.html');
    $('#modal-hide-ads').modal();
    console.log('Achievement message not displayed as user has already gotten it.');
  } else {
    $('#modal-hide-ads').load('ajax/modals/hide-ads.html');
    $('#modal-hide-ads').modal();
    Cookies.set('hallucinatingAchievement', 'true', {expires: 3600, secure: true});
    $.bootstrapGrowl("<strong>Achievement Get!</strong><br>Hallucinating<br><br>Click Hide Ads in the footer.", {
      type: 'info',
      align: 'right',
      offset: {from: 'top', amount: 70},
      width: 300,
      delay: 10000,
      allow_dismiss: true
    });
  }
}
function loadArchiveMod() {
  $('#modal-archive').load('ajax/modals/archive.html');
  $('#modal-archive').modal();
}
function loadContactMod() {
  $('#modal-contact').load('ajax/modals/contact.html');
  $('#modal-contact').modal();
}
function loadCookiesMod() {
  $('#modal-cookies').load('ajax/modals/cookies.html');
  $('#modal-cookies').modal();
}
function loadDonateMod() {
  $('#modal-donate').load('ajax/modals/donate.html');
  $('#modal-donate').modal();
}
function loadEastereggsMod() {
  $('#modal-eastereggs').load('ajax/modals/eastereggs.html');
  $('#modal-eastereggs').modal();
}
function loadSettingsMod() {
  $('#modal-settings').load('ajax/modals/settings.html');
  $('#modal-settings').modal();
}
function loadShortcutsMod() {
  $('#modal-shortcuts').load('ajax/modals/shortcuts.html');
  $('#modal-shortcuts').modal();
}
function loadPrivacyNoMod() {
  $('#modal-privacy-no').load('ajax/modals/privacy-no.html');
  $('#modal-privacy-no').modal();
  $('.alert').toggle();
}
function loadPrivacyYesMod() {
  $('#modal-privacy-yes').load('ajax/modals/privacy-yes.html');
  $('#modal-privacy-yes').modal();
  $('.alert').toggle();
  wiselyCheck();
}
function loadReloadMod() {
  $('#btn-reload').tooltip('dispose');
  $('#modal-stats').modal('hide');
  $('#modal-stats').one('hidden.bs.modal', function (e) {
  $('#modal-reload').load('ajax/modals/reload.html');
  $('#modal-reload').modal();
});}
function loadSearchHelpMod() {
  $('#modal-search-help').load('ajax/modals/search-help.html');
  $('#modal-search-help').modal();
}
function loadStatsMod() {
  $('#modal-stats').load('ajax/modals/stats.html');
  $('#modal-stats').modal();
}
function loadTermsNoMod() {
  $('#modal-terms-no').load('ajax/modals/terms-no.html');
  $('#modal-terms-no').modal();
  $('.alert').toggle();
}
function loadTermsYesMod() {
  $('#modal-terms-yes').load('ajax/modals/terms-yes.html');
  $('#modal-terms-yes').modal();
  $('.alert').toggle();
  wiselyCheck();
}

//namePrompt media controls
function pause() {
  $('audio').trigger('pause');
  $('#pause-btn').replaceWith( "<a id='play-btn' class='btn btn-success btn-md' role='button' onclick='play();'> <i class='fa fa-play' aria-hidden='true'></i> </a>" );
}
function play() {
  $('audio').trigger('play');
  $('#play-btn').replaceWith( "<a id='pause-btn' class='btn btn-success btn-md' role='button' onclick='pause();'> <i class='fa fa-pause' aria-hidden='true'></i> </a>" );
}

/*Settings cog spin
$(function () {
  $("#settings-li").hover(function () {
    $("#settings-button").addClass("fa-spin");
  },
  function () {
      $("#settings-button").removeClass("fa-spin");
  });
});
*/

/* Simulate key press
 * https://stackoverflow.com/questions/22274728/simulate-a-keyboard-key-pressed-with-dispatchevent-of-keypress#22274892

function simulateKeyPress(character, element) {
    var e = $.Event('keypress');
    e.which = character.charCodeAt(0);
    $(element).trigger(e);
}

$('body').keypress(function(e) {

});
*/

console.log('What are you doing in here? \nYes I know I need to fix a few errors.');
