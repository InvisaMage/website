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
    function enable(){
      purplerainCheck();
      snowStorm.toggleSnow();
    }
}

//Loads water assets and replaces footer text to enable water on next click
function loadWater() {
  $('#js-water').load('js/ripples.js');
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
//Loads modal references on page load
$('#modals').load('ajax/modals.html');

//Delete Easter egg on del key press
var listener = new window.keypress.Listener();
listener.simple_combo("delete", function() {
  var audio = new Audio('./audio/delete.mp3');
  audio.play();
});

//Loads terminal modal on Shift + Space key combination
var listener = new window.keypress.Listener();
listener.simple_combo("shift space", function() {
    $('#js-ptty').load('js/ptty.min.js');
    $('#modal-terminal').load('ajax/modals/terminal.html');
    $.bootstrapGrowl("Terminal assets have been loaded.<br><br>Press the <kbd>`</kbd> key to open.", {
      type: 'success',
      align: 'right',
      offset: {from: 'top', amount: 60},
      width: '300',
      allow_dismiss: true
    });
});

//Opens terminal with tilde key press
var listener = new window.keypress.Listener();
listener.simple_combo("`", function() {
    //Close open modals
    $('#modal-personalize, #modal-achievements, #modal-hideads, #modal-contact, #modal-donate, #modal-stats, #modal-reload, #modal-eastereggs, #modal-settings, #modal-archive, #modal-search-help, #modal-privacy-yes, #modal-privacy-no, #modal-cookie, #modal-terms-yes, #modal-terms-no').modal('hide');
    $('#modal-terminal').modal('toggle');
    $('#modal-terminal').on('shown.bs.modal', function (e) { $('form, input').focus(); });
    terminalCheck();
});

//Settings modal logic (executed on save button click in Settings modal)
function settingsCheck() {
  //Terminal
  if ($('#terminal-radio1:checked').val() == 'yes') {
    Cookies.set('loadTerminal', 'true', { expires: 3600 });
  }
  if ($('#terminal-radio2:checked').val() == 'no') {
    Cookies.set('loadTerminal', 'false', { expires: 3600 });
  }
  //News
  if ($('#news-radio1:checked').val() == 'projects') {
    Cookies.set('defaultTab', 'projects', { expires: 3600 });
  }
  if ($('#news-radio2:checked').val() == 'important') {
    Cookies.set('defaultTab', 'important', { expires: 3600 });
  }
  if ($('#news-radio3:checked').val() == 'website') {
    Cookies.set('defaultTab', 'website', { expires: 3600 });
  }
  if ($('#news-radio4:checked').val() == 'bugs') {
    Cookies.set('defaultTab', 'bugs', { expires: 3600 });
  }
  //Banners
  if ($('#banners-radio1:checked').val() == 'yes') {
    Cookies.set('loadBanners', 'true', { expires: 3600 });
  }
  if ($('#banners-radio2:checked').val() == 'no') {
    Cookies.set('loadBanners', 'false', { expires: 3600 });
  }
  //Snowstorm
  if ($('#snowstorm-radio1:checked').val() == 'yes') {
    Cookies.set('enableSnowstorm', 'true', { expires: 3600 });
  }
  if ($('#snowstorm-radio2:checked').val() == 'no') {
    Cookies.set('enableSnowstorm', 'false', { expires: 3600 });
  }
  //Theme
  if ($('#theme-radio1:checked').val() == 'dark') {
    Cookies.set('theme', 'dark', { expires: 3600 });
  }
  if ($('#theme-radio2:checked').val() == 'light') {
    Cookies.set('theme', 'light', { expires: 3600 });
  }
  //Dark modals
  if ($('#dark-modal-checkbox1:checked').val() == 'true') {
    Cookies.set('themeDarkModal', 'true', { expires: 3600 });
  }
  if ($('#dark-modal-checkbox1:checked').val() == null) {
    Cookies.set('themeDarkModal', 'false', { expires: 3600 });
  }
  //Dark modals
  if ($('#legacy-background-checkbox1:checked').val() == 'true') {
    Cookies.set('themeLegacyBg', 'true', { expires: 3600 });
  }
  if ($('#legacy-background-checkbox1:checked').val() == null) {
    Cookies.set('themeLegacyBg', 'false', { expires: 3600 });
  }
  setTimeout(enable, 1500);
  $.bootstrapGrowl("Settings Saved!", {
    type: 'success',
    align: 'right',
    offset: {from: 'top', amount: 60},
    width: 'auto',
    delay: 10000,
    allow_dismiss: true
  });
  $.bootstrapGrowl("<strong>Reloading page...</strong>", {
    type: 'danger',
    align: 'center',
    offset: {from: 'top', amount: 60},
    width: 'auto',
    delay: 10000,
    allow_dismiss: true
  });
    function enable(){
      location.reload();
    }
};

//Settings modal cancel message
function settingsCancelMsg() {
    $.bootstrapGrowl("Changes have not been saved!", {
      type: 'danger',
      align: 'right',
      offset: {from: 'top', amount: 60},
      width: 'auto',
      delay: 10000,
      allow_dismiss: true
    });
};

//Check if Load Terminal on page load? is set to yes, if yes, load terminal assets.
$(function() {
  if (Cookies.get('loadTerminal') == 'true') {
    setTimeout(enable, 500);
      function enable(){
        $('#js-ptty').load('js/ptty.min.js');
        $('#modal-terminal').load('ajax/modals/terminal.html');
        console.log('loadTerminal = true');
      }
  } else {
    console.log('loadTerminal = false');
  }
});

//Check which tab needs to be opened on News page.
$(function() {
  if (Cookies.get('defaultTab') == 'projects') {
    $('#myTabs li:eq(0) a').tab('show');
    $('#myPills li:eq(0) a').tab('show');
    console.log('defaultTab = projects');
  }
  else if (Cookies.get('defaultTab') == 'important') {
    $('#myTabs li:eq(1) a').tab('show');
    $('#myPills li:eq(1) a').tab('show');
    console.log('defaultTab = important');
  }
  else if (Cookies.get('defaultTab') == 'website') {
    $('#myTabs li:eq(2) a').tab('show');
    $('#myPills li:eq(2) a').tab('show');
    console.log('defaultTab = website');
  }
  else if (Cookies.get('defaultTab') == 'bugs') {
    $('#myTabs li:eq(3) a').tab('show');
    $('#myPills li:eq(3) a').tab('show');
    console.log('defaultTab = bugs');
  } else {
    console.log('defaultTab = null');
  }
});

//Check if banners need to be displayed on T&C pages
$(function() {
  if (Cookies.get('loadBanners') == 'true') {
    console.log('loadBanners = true');

  } else {
    console.log('loadBanners = false');
    $('#alert').alert('close');
  }
});

//Check if Snowstorm needs to be loaded on page load
$(function() {
  if (Cookies.get('enableSnowstorm') == 'true') {
    setTimeout(enable, 500);
    loadSnowstorm();
      function enable(){
        snowStorm.toggleSnow();
      }
    console.log('enableSnowstorm = true');
  } else {
    console.log('enableSnowstorm = false');
  }
});

//Check which theme to apply
$(function() {
  if (Cookies.get('theme') == 'light') {
    $("nav").attr("class", "navbar navbar-default navbar-fixed-top");
    $('html').append('<link rel="stylesheet" type="text/css" href="./css/theme-light.css">');
    console.log('theme = light');
  } else {
    console.log('theme = dark');
  }
});

//Check if dark modals should be applied
$(function() {
  if (Cookies.get('themeDarkModal') == 'true') {
    $('html').append('<link rel="stylesheet" type="text/css" href="./css/theme-dark.css">');
    console.log('themeDarkModal = true');
  } else {
    console.log('themeDarkModal = false');
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

//Scroll to target in URL after page load
$(function() {
setTimeout(enable, 900);
  function enable(){
    $("html, body").animate({ scrollTop: $('span:target').offset().top }, 1000);
  }
});

//Contact modal copy messages
function emailMsg() {
    $.bootstrapGrowl("E-mail address copied!", {
      type: 'success',
      align: 'right',
      offset: {from: 'top', amount: 60},
      width: 'auto',
      allow_dismiss: true
    });
};
function telegramMsg() {
    $.bootstrapGrowl("Telegram URL copied!", {
      type: 'success',
      align: 'right',
      offset: {from: 'top', amount: 60},
      width: 'auto',
      allow_dismiss: true
    });
};
function keybaseMsg() {
    $.bootstrapGrowl("Keybase username copied!", {
      type: 'success',
      align: 'right',
      offset: {from: 'top', amount: 60},
      width: 'auto',
      allow_dismiss: true
    });
};

//Donate modal copy messages
function bitcoinMsg() {
    $.bootstrapGrowl("Bitcoin wallet address copied!", {
      type: 'success',
      align: 'right',
      offset: {from: 'top', amount: 60},
      width: 'auto',
      allow_dismiss: true
    });
};
function dogecoinMsg() {
    $.bootstrapGrowl("Dogecoin wallet address copied!", {
      type: 'success',
      align: 'right',
      offset: {from: 'top', amount: 60},
      width: 'auto',
      allow_dismiss: true
    });
};
function litecoinMsg() {
    $.bootstrapGrowl("Litecoin wallet address copied!", {
      type: 'success',
      align: 'right',
      offset: {from: 'top', amount: 60},
      width: '300',
      allow_dismiss: true
    });
};

//Used to see if Easteregg modal Achievement message should be displayed.
function eastereggCheck() {
  if (Cookies.get('eastereggAchievement') == 'true') {
    console.log('Achievement message not displayed as user has already gotten it.');
  } else {
    $.bootstrapGrowl("<strong>Achievement Get!</strong><br>Konami Code<br><br>Insert Up, Up, Down, Down, Left, Right, Left, Right, B, A,<br>anywhere in the website.", {
      type: 'info',
      align: 'right',
      offset: {from: 'top', amount: 60},
      width: '300',
      delay: 10000,
      allow_dismiss: true
    });
    Cookies.set('eastereggAchievement', 'true', { expires: 3600 });
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
      offset: {from: 'top', amount: 60},
      width: '300',
      delay: 10000,
      allow_dismiss: true
    });
    Cookies.set('terminalAchievement', 'true', { expires: 3600 });
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
      offset: {from: 'top', amount: 60},
      width: '300',
      delay: 10000,
      allow_dismiss: true
    });
    Cookies.set('wiselyAchievement', 'true', { expires: 3600 });
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
      offset: {from: 'top', amount: 60},
      width: '300',
      delay: 10000,
      allow_dismiss: true
    });
    Cookies.set('purplerainAchievement', 'true', { expires: 3600 });
  }
}

//Reset Achievement cookies
function resetAchievements() {
  Cookies.remove('eastereggAchievement');
  Cookies.remove('terminalAchievement');
  Cookies.remove('wiselyAchievement');
  Cookies.remove('hallucinatingAchievement');
  Cookies.remove('purplerainAchievement');
  $('#btn-reset-achievements').tooltip('hide')
  $.bootstrapGrowl("Your achievement progress has been reset!", {
    type: 'info',
    align: 'right',
    offset: {from: 'top', amount: 60},
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
    $('#modal-hideads').load('ajax/modals/ads.html');
    $('#modal-hideads').modal();
    console.log('Achievement message not displayed as user has already gotten it.');
  } else {
    $('#modal-hideads').load('ajax/modals/ads.html');
    $('#modal-hideads').modal();
    Cookies.set('hallucinatingAchievement', 'true', { expires: 3600 });
    $.bootstrapGrowl("<strong>Achievement Get!</strong><br>Hallucinating<br><br>Click Hide Ads in the footer.", {
      type: 'info',
      align: 'right',
      offset: {from: 'top', amount: 60},
      width: '300',
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
  $('#modal-cookie').load('ajax/modals/cookies.html');
  $('#modal-cookie').modal();
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
  $('#modal-stats').modal('hide')
  $('#btn-reload').tooltip('destroy');
  $('#modal-stats').one('hidden.bs.modal', function (e) {
  $('#modal-reload').load('ajax/modals/reload.html');
  $('#modal-reload').modal();
})}
function loadSearchHelpMod() {
  $('#modal-search-help').load('ajax/modals/search-help.html');
  $('#modal-search-help').modal();
}
function loadStatsMod() {
  $('#modal-stats').load('ajax/modals/stats.html');
  $('#modal-stats').modal();
}
function loadTerminalMod() {
  $('#js-ptty').load('js/ptty.min.js');
  $('#modal-terminal').load('ajax/modals/terminal.html');
  $('#modal-terminal').modal();
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
  $('#pause-btn').replaceWith( "<a id='play-btn' class='btn btn-success btn-md' role='button' onclick='play();'> <span class='glyphicon glyphicon-play' aria-hidden='true'></span> </a>" );
}
function play() {
  $('audio').trigger('play');
  $('#play-btn').replaceWith( "<a id='pause-btn' class='btn btn-success btn-md' role='button' onclick='pause();'> <span class='glyphicon glyphicon-pause' aria-hidden='true'></span> </a>" );
}

console.log('What are you doing in here? \nYes I know I need to fix a few errors.');
