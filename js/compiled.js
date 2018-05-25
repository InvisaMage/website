//Compiled JavaScript functions utilized on multiple pages.

//Set localForage databases
var settings = localforage.createInstance({
  name: "settings"
});
var achievements = localforage.createInstance({
  name: "achievements"
});

//Loads navbar, modals, and footer on page load
$('nav').load('ajax/nav.html');
$('#footer').load('ajax/footer.html');
$('#modals').load('ajax/modals.html');

var protocol = window.location.protocol;
var windowHeight = window.innerHeight;
var termCounter = 0;
var namePromptCounter = 0;
var searchCounter = 0;
var btn404Counter = 0;

//PNotify
PNotify.defaults.styling = 'bootstrap4';
PNotify.defaults.icons = 'fontawesome5';
PNotify.defaults.delay = 4000;

PNotify.modules.Animate.defaults.animate = true;
PNotify.modules.Animate.defaults.inClass = 'fadeInUp';
PNotify.modules.Animate.defaults. outClass = 'fadeOutRight';

PNotify.defaultStack.firstpos1 = 75;
PNotify.defaultStack.firstpos2 = 15;
PNotify.defaultStack.spacing1 = 15;

//Libraries
var jqueryVer = '3.3.1';
var bootstrapVer = '4.1.1';
var fontawesomeVer = '5.0.10';
var jqueryterminalVer = '1.14.0';
var localforageVer = '1.7.1';
var keypressVer = '2.1.5';
var konamiVer = '1.6.0';
var pnotifyVer = PNotify.VERSION;
var snowstormVer = '1.44.20131208';

/* Simulate key press
 * https://stackoverflow.com/questions/22274728/simulate-a-keyboard-key-pressed-with-dispatchevent-of-keypress#22274892
 * http://jsfiddle.net/QpLpG/
 */
function simulateKeyPress(character, element) {
  var e = $.Event('keypress');
  e.which = character.charCodeAt(0);
  $(element).trigger(e);
}

//Sleep function
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

$(function () {
  //If no touchscreen, show Tooltips
  if (!('ontouchstart' in window)) {
    $('[data-toggle="tooltip"]').tooltip();
  }
  //If touchscreen, disable gray background in tab-content
  if (('ontouchstart' in window)) {
    $('.tab-content').css('background-color', 'inherit');
  }
});

//Navbar current page highlight
setTimeout(navEnable, 700);
function navEnable() {
  $(function () {
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
    else if ($("title").html() == "InvisaMage | TxtLock") {
      $('#nav-txtLock').addClass('active');
      $("#nav-projects").addClass("active animated bounceIn");
    }
    else if ($("title").html() == "InvisaMage | TidyNT") {
      $('#nav-tidynt').addClass('active');
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

//loadSearch assets
async function loadSearch() {
  if (searchCounter == 0) {
    $.when($.ready,
      $.getScript('js/typeahead.min.js'),
      await sleep(500),
      $.getScript('js/search.js'),
      $.getJSON('json/search.json')
        .done(function (data) {
          $('#search, #search-mobile').typeahead({ source: data });
        })
    ).then(function () {
      console.log("loadSearch: Loaded assets");
      searchCounter = 1;
    }).catch(function () {
      //If fail, display message and offer to retry
      console.log("loadSearch: One or more assets failed to load");
      PNotify.error({
        text: "Unable to get assets!<br>Are you online? <br><br> <button type='button' class='btn btn-primary' onclick='loadSearch(); PNotify.closeAll();'>Retry <i class='fas fa-redo'></i></i></button>",
        hide: false,
        textTrusted: true
      });
    });
  }
  else {
    console.log("loadSearch: Already loaded assets");
  }
}

//loadNamePrompt assets
async function loadNamePrompt() {
  if (namePromptCounter == 0) {
    $.when($.ready,
      $.getScript('js/typeahead.min.js'),
      await sleep(500),
      $.getScript('js/namePrompt.js'),
      $.getJSON('json/namePrompt.json')
        .done(function (data) {
          $('#name-value').typeahead({ source: data });
        })
    ).then(function () {
      console.log("loadNamePrompt: Loaded assets");
      namePromptCounter = 1;
    }).catch(function () {
      //If fail, display message and offer to retry
      PNotify.error({
        text: "Unable to get assets!<br>Are you online?<br><br> <button type='button' class='btn btn-primary' onclick='loadNamePrompt(); PNotify.closeAll();'>Retry <i class='fas fa-redo'></i></button>",
        hide: false,
        textTrusted: true
      });
      console.log("loadNamePrompt: One or more assets failed to load");
    });
  }
  else {
    console.log("loadNamePrompt: Already loaded assets");
  }
}

//Mobile Menu select
$('#mobile-menu select').change(function () {
  window.location = $(this).val();
});

//Scroll to target in URL after page load
$(function () {
  setTimeout(enable, 900);
  function enable() {
    var test = $('*:target').offset().top;
    $("html, body").animate({ scrollTop: test - 200 }, 1000);
  }
});

//Loads snowstorm assets and replaces footer text to enable snowstorm on next click
function loadSnowstorm() {
  $.getScript('js/snowstorm.js');
  $('#footer-snowstorm').tooltip('dispose');
  $('#footer-snowstorm').replaceWith("<a class='link' id='footer-snowstorm' onclick='snowStorm.toggleSnow(); purplerainCheck();' data-toggle='tooltip' data-placement='top' title='Toggle the snowstorm!'>Toggle Snow</a>");
  //Re enable tooltips.
  if (!('ontouchstart' in window)) {
    $('[data-toggle="tooltip"]').tooltip();
  }
}

//Loads snowstorm assets and enables for namePrompt easter egg
function loadSnowstormNamePrompt() {
  setTimeout(enable, 500);
  $.getScript('js/snowstorm.js');
  $('#footer-snowstorm').replaceWith("<a class='link' id='footer-snowstorm' onclick='snowStorm.toggleSnow(); purplerainCheck();' data-toggle='tooltip' data-placement='top' title='Toggle the snowstorm!'>Toggle Snow</a>");
  function enable() {
    purplerainCheck();
    snowStorm.toggleSnow();
  }
}

//List of easter eggs
var easter_egg = new Konami(function() {
	loadEastereggsMod();
	eastereggCheck();
});

//Shortcuts
//Loads terminal modal on Shift + Space key combination
var listener = new window.keypress.Listener();
listener.simple_combo("shift space", async function () {
  //Inform user of progress
  PNotify.info({
    text: 'Loading assets...',
    delay: 2000
  });
  //Get scripts if not already loaded
  if (termCounter == 0) {
    $.when($.ready,
      $.getScript('js/jquery.terminal.min.js'),
      await sleep(500),
      $.getScript('js/terminal.js'),
      $.ajax({
        url: "./css/jquery.terminal.css",
        dataType: "script",
        success: function (data) {
          $("<style></style>").appendTo("head").html(data);
          //loading complete code here
        }
      })
    ).then(function () {
      console.log("KeyCombo Terminal: Loaded assets");
      PNotify.success({
        title: 'Terminal Ready',
        text: "Press the <kbd>~</kbd> key to open.",
        textTrusted: true,
        delay: 2000
      });
      termCounter = 1;
    }).catch(function () {
      //If fail, display message and offer to retry
      console.log("KeyCombo Terminal: One or more assets failed to load");
      PNotify.error({
        text: "Unable to get assets!\nAre you online?"
      });
    });
  }
  //If assets have already been loaded
  else {
    PNotify.error({
      text: "Terminal assets have already been loaded!",
      delay: 2000
    });
    console.log('KeyCombo Terminal: Already loaded assets');
  }
});

//Hides all modals
function hideModals() {
  $('#modal-personalize, #modal-achievements, #modal-hideads, #modal-contact, #modal-donate, #modal-stats, #modal-eastereggs, #modal-settings, #modal-shortcuts, #modal-terminal, #modal-archive, #modal-search-help, #modal-yes, #modal-no').modal('hide');
}

//Focus search box with Ctrl + Alt + F key press
var listener = new window.keypress.Listener();
listener.simple_combo("ctrl alt f", function () {
  $('input').focus();
});

//Settings
var listener = new window.keypress.Listener();
listener.simple_combo("ctrl alt c", function () {
  hideModals();
  loadSettingsMod();
});

//Stats
var listener = new window.keypress.Listener();
listener.simple_combo("ctrl alt s", function () {
  hideModals();
  loadStatsMod();
});

//Achievements
var listener = new window.keypress.Listener();
listener.simple_combo("ctrl alt a", function () {
  hideModals();
  loadAchievementsMod();
});

//Settings modal logic (executed on save button click in Settings modal)
function settingsCheck() {
  //Theme
  settings.setItem('theme', $('[name=themeStyle]:checked').val());
  //Centered Modals
  if ($('[name=centerModals]:checked').val() == 'true') {
    settings.setItem('centeredModals', 'true');
  } else {
    settings.setItem('centeredModals', 'false');
  }
  //Terminal Opacity
  settings.setItem('terminalOpacity', $('#terminal-opacity').val());
  //Banner - Events
  if ($('#home-banner-checkbox1:checked').val() == 'true') {
    settings.setItem('enableEventsBanner', 'true');
  } else {
    settings.setItem('enableEventsBanner', 'false');
  }
  //Banner - Info
  if ($('#info-banner-checkbox1:checked').val() == 'true') {
    settings.setItem('enableInfoBanner', 'true');
  } else {
    settings.setItem('enableInfoBanner', 'false');
  }
  //Banner - Legal
  if ($('#legal-banner-checkbox1:checked').val() == 'true') {
    settings.setItem('enableLegalBanner', 'true');
  } else {
    settings.setItem('enableLegalBanner', 'false');
  }
  //News
  settings.setItem('defaultTab', $('[name=defaultTab]:checked').val());
  //Terminal
  if ($('#terminal-checkbox1:checked').val() == 'true') {
    settings.setItem('loadTerminal', 'true');
  } else {
    settings.setItem('loadTerminal', 'false');
  }
  //Toggle Terminal
  if ($('#terminal-checkbox2:checked').val() == 'true') {
    settings.setItem('toggleTerminal', 'true');
  } else {
    settings.setItem('toggleTerminal', 'false');
  }
  //Snowstorm
  if ($('#snowstorm-checkbox1:checked').val() == 'true') {
    settings.setItem('enableSnowstorm', 'true');
  } else {
    settings.setItem('enableSnowstorm', 'false');
  }
  //Set background color
  if ($('#bg-color-hex').val() !== '' || $('#bg-color-hex').val() !== ' ') {
    settings.setItem('backgroundColor', $('[name=backgroundColor]').val());
  }

  setTimeout(enable, 1500);
  PNotify.success({
    text: 'Settings saved!'
  });
  PNotify.notice({
    text: 'Reloading page...'
  });
  function enable() {
    location.reload();
  }
}

//Settings modal cancel message
function settingsCancelMsg() {
  PNotify.error({
    text: 'Changes have not been saved!'
  });
}

//Set background color
$(function () {
  settings.getItem('backgroundColor').then(function (value) {
    $('body').css("background-color", value);
    console.log("backgroundColor = " + value);
  });
});

//Check if Load Terminal on page load? is set to yes, if yes, load terminal assets.
async function onPageLoadTerm() {
  settings.getItem('loadTerminal').then(async function (value) {
    if (value == 'true') {
      //Get scripts
      $.when($.ready,
        $.getScript('js/jquery.terminal.min.js'),
        await sleep(500),
        $.getScript('js/terminal.js'),
        $.ajax({
          url: "./css/jquery.terminal.css",
          dataType: "script",
          success: function (data) {
            $("<style></style>").appendTo("head").html(data);
            //loading complete code here
          }
        })
      ).then(function () {
        console.log("onPageLoadTerm: Loaded assets");
        PNotify.notice({
          title: 'Terminal Ready',
          text: "Press the <kbd>~</kbd> key to open. <br><br> <button type='button' onclick='loadSettingsMod();' class='btn btn-outline-secondary'><i class='fas fa-cog'></i> Settings</button>",
          textTrusted: true,
          delay: 3000
        });
        termCounter = 1;
      }).catch(function () {
        //If fail, display message and offer to retry
        console.log("onPageLoadTerm: One or more assets failed to load");
        PNotify.error({
          text: "Unable to get assets!\nAre you online?"
        });
      });
    }
    console.log('OnPageLoadTerm = ' + value);
  });
}

//Load when page loads - done so async works
$(function () {
  onPageLoadTerm();
  onPageLoadTermToggle();
});

//Check if Terminal needs to be toggled
async function onPageLoadTermToggle() {
  settings.getItem('toggleTerminal').then(async function (value) {
    if (value == 'true') {
      await sleep(1000);
      simulateKeyPress("`", 'body');
    }
    console.log('toggleTerminal = ' + value);
  });
}

//Check which tab needs to be opened on News page.
$(function () {
  settings.getItem('defaultTab').then(function (value) {
    if ($("title").html() == "InvisaMage | News") {
      if (value == 'projects') {
        $('#tabs li:eq(0) a').tab('show');
        $('#pills li:eq(0) a').tab('show');
      }
      else if (value == 'important') {
        $('#tabs li:eq(1) a').tab('show');
        $('#pills li:eq(1) a').tab('show');
      }
      else if (value == 'website') {
        $('#tabs li:eq(2) a').tab('show');
        $('#pills li:eq(2) a').tab('show');
      }
      else if (value == 'bugs') {
        $('#tabs li:eq(3) a').tab('show');
        $('#pills li:eq(3) a').tab('show');
      }
    }
    console.log('defaultTab = ' + value);
  });
});

//Check if Events Banner needs to be shown on Homepage
$(function () {
  //Check date to know if events needs to be loaded
  var date = new Date();
  var dates = ['01', '44', '64', '828', '931', '1124', '1125'];

  var month = date.getMonth().toString();
  var day = date.getDate().toString();
  var mD = month + day;

  settings.getItem('enableEventsBanner').then(function (value) {
    if (value == 'true') {
      if (dates.indexOf(mD) != -1) {
        $('#ajax-event-banner').load('ajax/alerts/alert-events.html');
      }
    }
    console.log('enableEventsBanner = ' + value);
  });
});

//Check if Info Banner needs to be shown on homepage
settings.getItem('enableInfoBanner').then(function (value) {
  if (value == 'true') {
    $('#ajax-info-banner').load('ajax/alerts/alert-info.html');
  }
  console.log('enableInfoBanner = ' + value);
});

//Check if Legal Banner needs to be shown on homepage
settings.getItem('enableLegalBanner').then(function (value) {
  if (value == 'true') {
    $('#ajax-legal-banner').load('ajax/alerts/alert-legal.html');
  }
  console.log('enableLegalBanner = ' + value);
});

//Check if Snowstorm needs to be loaded on page load
$(function () {
  settings.getItem('enableSnowstorm').then(function (value) {
    if (value == 'true') {
      setTimeout(enable, 500);
      loadSnowstorm();
      function enable() {
        snowStorm.toggleSnow();
        $('#footer-snowstorm').replaceWith("<a class='link' id='footer-snowstorm' onclick='snowStorm.toggleSnow(); purplerainCheck();' data-toggle='tooltip' data-placement='top' title='Toggle the snowstorm!'>Toggle Snow</a>");
      }
      purplerainCheck();
    }
    console.log('enableSnowstorm = ' + value);
  });
});

//Temporary workaround for settings bug
//Forces to set banner legal if they have not been set yet
//Banner - Events
$(function () {
  settings.getItem('enableEventsBanner').then(function (value) {
    if (value == null) {
      settings.setItem('enableEventsBanner', 'true').then(function (value) {
        console.log(value);
      });
    }
  });
  //Banner - Info
  settings.getItem('enableInfoBanner').then(function (value) {
    if (value == null) {
      settings.setItem('enableInfoBanner', 'false').then(function (value) {
        console.log(value);
      });
    }
  });
  //Banner - Legal
  settings.getItem('enableLegalBanner').then(function (value) {
    if (value == null) {
      settings.setItem('enableLegalBanner', 'true').then(function (value) {
        console.log(value);
      });
    }
  });
  settings.getItem('terminalOpacity').then(function (value) {
    if (value == null) {
      settings.setItem('terminalOpacity', 0.8).then(function (value) {
        console.log(value);
      });
    }
  });
});

//Check which theme to apply
$(function () {
  settings.getItem('theme').then(function (value) {
    if (value == 'light') {
      themeLight();
    }
    console.log('theme = ' + value);
  });
});

//Light theme
function themeLight() {
  $('html').append('<link rel="stylesheet" type="text/css" href="./css/theme-light.css">');
  $('.card').removeClass('bg-dark').addClass('bg-light');
  //$('button').removeClass('btn-light').addClass('btn-secondary');
  $('table').removeClass('table-dark').addClass('table-light');
  $("nav").attr("class", "navbar navbar-expand-xl navbar-light bg-light fixed-top");
  //$("nav").attr("style", "background-color: #e3f2fd;");
}

//Check if centered modals need to be applied
$(function () {
  settings.getItem('centeredModals').then(function (value) {
    if (value == 'true') {
      $('.modal-dialog').addClass('modal-dialog-centered');
    }
    console.log('centeredModals = ' + value);
  });
});

//Used to see if Easteregg modal Achievement message should be displayed.
function eastereggCheck() {
  achievements.getItem('eastereggAchievement').then(function (value) {
    if (value == 'true') {
      console.log('Achievement message not displayed as user has already gotten it.');
    } else {
      PNotify.info({
        title: 'Achievement Get',
        text: "Konami Code<br><br>Insert Up, Up, Down, Down, Left, Right, Left, Right, B, A,<br>anywhere in the website. <br><br> <button type='button' onclick='loadAchievementsMod();' class='btn btn-outline-secondary'><i class='fa fa-trophy'></i> Achievements</button>",
        textTrusted: true,
        delay: 10000
      });
      achievements.setItem('eastereggAchievement', 'true');
    }
    console.log('eastereggAchievement = ' + value);
  });
}

//Used to see if Terminal Achievement message should be displayed.
function terminalCheck() {
  achievements.getItem('terminalAchievement').then(function (value) {
    if (value == 'true') {
      console.log('Achievement message not displayed as user has already gotten it.');
    } else {
      PNotify.info({
        title: 'Achievement Get',
        text: "Hacker?! <br><br> Use the Terminal for the first time. <br><br> <button type='button' onclick='loadAchievementsMod();' class='btn btn-outline-secondary'><i class='fa fa-trophy'></i> Achievements</button>",
        textTrusted: true,
        delay: 10000
      });
      achievements.setItem('terminalAchievement', 'true');
    }
    console.log('terminalAchievement = ' + value);
  });
}

//Used to see if Unlimited Power Achievement message should be displayed.
function unlimitedPowerCheck() {
  achievements.getItem('unlimitedPowerAchievement').then(function (value) {
    if (value == 'true') {
      console.log('Achievement message not displayed as user has already gotten it.');
    } else {
      PNotify.info({
        title: 'Achievement Get',
        text: "Unlimited POWER! <br><br> Change to the super user account. <br><br> <button type='button' onclick='loadAchievementsMod();' class='btn btn-outline-secondary'><i class='fa fa-trophy'></i> Achievements</button>",
        textTrusted: true,
        delay: 10000
      });
      achievements.setItem('unlimitedPowerAchievement', 'true');
    }
    console.log('unlimitedPowerAchievement = ' + value);
  });
}

//Used to see if Wisely Achievement message should be displayed.
function wiselyCheck() {
  achievements.getItem('wiselyAchievement').then(function (value) {
    if (value == 'true') {
      console.log('Achievement message not displayed as user has already gotten it.');
    } else {
      PNotify.info({
        title: 'Achievement Get',
        text: "You've Chosen Wisely <br><br> Agree to the <a href='terms.html'>Terms & Conditions</a> and <a href='privacy.html'>Privacy Policy</a>. <br><br> <button type='button' onclick='loadAchievementsMod();' class='btn btn-outline-secondary'><i class='fa fa-trophy'></i> Achievements</button>",
        textTrusted: true,
        delay: 10000
      });
      achievements.setItem('wiselyAchievement', 'true');
    }
    console.log('wiselyAchievement = ' + value);
  });
}

//Used to see if Wisely Achievement message should be displayed.
function purplerainCheck() {
  achievements.getItem('purplerainAchievement').then(function (value) {
    if (value == 'true') {
      console.log('Achievement message not displayed as user has already gotten it.');
    } else {
      settings.getItem('theme').then(function (value) {
        if (value == 'light') {
          PNotify.info({
            title: 'Achievement Get',
            text: "Purple Rain <br><br> Enable the snowstorm with the 'light' theme enabled. <br><br> <button type='button' onclick='loadAchievementsMod();' class='btn btn-outline-secondary'><i class='fa fa-trophy'></i> Achievements</button>",
            textTrusted: true,
            delay: 10000
          });
          achievements.setItem('purplerainAchievement', 'true');
        }
      });
    }
    console.log('purplerainAchievement = ' + value);
  });
}

//Check if Achievements icon needs to be gold
function goldCheck() {
  var keys = ['eastereggAchievement', 'terminalAchievement', 'unlimitedPowerAchievement', 'wiselyAchievement', 'hallucinatingAchievement', 'purplerainAchievement'];

  achievements.getItems(keys).then(function (results) {
    if (results.eastereggAchievement == 'true' && results.terminalAchievement == 'true' && results.unlimitedPowerAchievement == 'true' && results.wiselyAchievement == 'true' && results.hallucinatingAchievement == 'true' && results.purplerainAchievement == 'true') {
      $("#achievements-star, #achievements-star-mobile ").css('color', 'gold');
      console.log("Changed achievements icon color");
    }
  });
}

//Clear Local Storage
function clearLocalStorage() {
  settings.clear();
  achievements.clear();
  localforage.clear();
  $('#btn-clear-localstorage').tooltip('hide');
  PNotify.info({
    title: 'Local Storage',
    text: 'All databases have been removed!'
  });
}

//Shortened modal load functions
function loadAchievementsMod() {
  $('#modal-achievements').load('ajax/modals/achievements.html');
  $('#modal-achievements').modal();
}
function loadAdsMod() {
  achievements.getItem('hallucinatingAchievement').then(function (value) {
    if (value == 'true') {
      console.log('Achievement message not displayed as user has already gotten it.');
    } else {
      PNotify.info({
        title: 'Achievement Get',
        text: "Hallucinating <br><br> Click Hide Ads in the footer. <br><br> <button type='button' onclick='loadAchievementsMod();' class='btn btn-outline-secondary'><i class='fa fa-trophy'></i> Achievements</button>",
        textTrusted: true,
        delay: 10000
      });
      achievements.setItem('hallucinatingAchievement', 'true');
    }
    $('#modal-hide-ads').load('ajax/modals/hide-ads.html');
    $('#modal-hide-ads').modal();
    console.log('hallucinatingAchievement = ' + value);
  });
}
function loadArchiveMod() {
  $('#modal-archive').load('ajax/modals/archive.html');
  $('#modal-archive').modal();
}
function loadContactMod() {
  $('#modal-contact').load('ajax/modals/contact.html');
  $('#modal-contact').modal();
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
function loadSearchHelpMod() {
  $('#modal-search-help').load('ajax/modals/search-help.html');
  $('#modal-search-help').modal();
}
function loadSearchMod() {
  $('#modal-search').load('ajax/modals/search.html');
  $('#modal-search').modal();
}
function loadStatsMod() {
  $('#modal-stats').load('ajax/modals/stats.html');
  $('#modal-stats').modal();
}
function loadNoMod() {
  $('#modal-no').load('ajax/modals/no.html');
  $('#modal-no').modal();
  $('.alert').toggle();
}
function loadYesMod() {
  $('#modal-yes').load('ajax/modals/yes.html');
  $('#modal-yes').modal();
  $('.alert').toggle();
  wiselyCheck();
}
function loadResetSettingsMod() {
  $('#modal-reset-settings').load('ajax/modals/dialog/reset-settings.html');
  $('#modal-reset-settings').modal();
}
function loadResetAchievementsMod() {
  $('#modal-reset-achievements').load('ajax/modals/dialog/reset-achievements.html');
  $('#modal-reset-achievements').modal();
}
function loadClearLocalStorageMod() {
  $('#modal-clear-local-storage').load('ajax/modals/dialog/clear-local-storage.html');
  $('#modal-clear-local-storage').modal();
}

/* 404 Button */
function btn404() {
  if (btn404Counter % 2 === 0) {
    $("#btn-404-icon").attr("data-fa-transform", "rotate-180");
  }
  else {
    $("#btn-404-icon").attr("data-fa-transform", "rotate-360");
  }
  btn404Counter++;
}

/*Settings cog spin 
$(function () {
  $("#settings-button").hover(function () {
    $("#settings-fa-spin").addClass("fa-spin");
  },
  function () {
      $("#settings-fa-spin").removeClass("fa-spin");
  });
});
*/

console.log('What are you doing in here? \nYes I know I need to fix a few errors.');
