//Main JavaScript functions utilized on multiple pages.

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
$('#ajax').load('ajax/ajax.html');

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
PNotify.modules.Animate.defaults.outClass = 'fadeOutRight';

PNotify.defaultStack.firstpos1 = 75;
PNotify.defaultStack.firstpos2 = 15;
PNotify.defaultStack.spacing1 = 15;

//PNotify defaults for mobile
if (('ontouchstart' in window)) {
  PNotify.defaultStack.push = 'top';
  PNotify.defaultStack.dir1 = 'up';
  PNotify.defaultStack.dir2 = 'left';
}

//Libraries
var jqueryVer = '3.5.1';
var bootstrapVer = '4.5.0';
var fontawesomeVer = '5.0.10';
var jqueryterminalVer = '1.18.0';
var localforageVer = '1.7.1';
var keypressVer = '2.1.5';
var konamiVer = '1.6.2';
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

function enableTooltips() {
  //If no touchscreen, show Tooltips
  if (!('ontouchstart' in window)) {
    $('[data-toggle="tooltip"]').tooltip();
  }
}

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
    else if ($("title").html() == "InvisaMage | Paper Tray") {
      $('#nav-papertray').addClass('active');
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
      var npNotice = PNotify.error({
        title: 'Search',
        text: "Unable to get assets!<br>Are you online?<br><br><small>Click to retry <i class='fas fa-redo fa-sm'></i></small>",
        textTrusted: true,
        hide: false,
        modules: {
          Buttons: {
            sticker: false
          }
        }
      });
      npNotice.refs.elem.style.cursor = 'pointer';
      npNotice.on('click', function (e) {
        if ($(e.target).is('.ui-pnotify-closer *, .ui-pnotify-sticker *')) {
          return;
        }
        npNotice.close();
        loadSearch();
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
      var npNotice = PNotify.error({
        title: 'namePrompt',
        text: "Unable to get assets!<br>Are you online?<br><br><small>Click to retry <i class='fas fa-redo fa-sm'></i></small>",
        textTrusted: true,
        hide: false,
        modules: {
          Buttons: {
            sticker: false
          }
        }
      });
      npNotice.refs.elem.style.cursor = 'pointer';
      npNotice.on('click', function (e) {
        if ($(e.target).is('.ui-pnotify-closer *, .ui-pnotify-sticker *')) {
          return;
        }
        npNotice.close();
        loadNamePrompt();
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
/*
$(function () {
  setTimeout(enable, 900);
  function enable() {
    var test = $('*:target').offset().top;
    $("html, body").animate({ scrollTop: test - 200 }, 1000);
  }
});
*/

//Loads snowstorm assets and replaces footer text to enable snowstorm on next click
function loadSnowstorm() {
  $.getScript('js/snowstorm.js');
  $('#footer-snowstorm').tooltip('dispose');
  $('#footer-snowstorm').replaceWith("<a class='link' id='footer-snowstorm' onclick='snowStorm.toggleSnow(); vulcanicAshCheck();' data-toggle='tooltip' data-placement='top' title='Toggle the snowstorm!'>Toggle snow</a>");
  //Re enable tooltips.
  enableTooltips();
}

//List of easter eggs
var easter_egg = new Konami(function () {
  loadEastereggsMod();
  eastereggCheck();
});

function lastMsg() {
  PNotify.modules.History.showLast();
}

//Shortcuts
//Loads terminal modal on alt + ` key combination
var listener = new window.keypress.Listener();
listener.simple_combo("alt `", async function () {
  //Inform user of progress
  var tNotice = PNotify.info({
    text: 'Loading assets...',
    icon: 'fas fa-circle-notch fa-spin',
    hide: false,
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
      tNotice.update({
        title: 'Terminal Ready',
        text: "Press the <kbd>~</kbd> key to open.",
        type: 'success',
        icon: true,
        textTrusted: true,
        hide: true
      });
      termCounter = 1;
    }).catch(function () {
      //If fail, display message and offer to retry
      tNotice.update({
        title: "Terminal",
        text: "Unable to get assets!\nAre you online?",
        type: 'error',
        icon: true,
        hide: true
      });
      console.log("KeyCombo Terminal: One or more assets failed to load");
    });
  }
  //If assets have already been loaded
  else {
    tNotice.update({
      text: "Terminal assets have already been loaded!",
      type: 'error',
      icon: true,
      hide: true
    });
    console.log('KeyCombo Terminal: Already loaded assets');
  }
});

//Focus search box with Ctrl + Alt + F key press
var listener = new window.keypress.Listener();
listener.simple_combo("/", function () {
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

//Show last PNotify notice
var listener = new window.keypress.Listener();
listener.simple_combo("ctrl alt l", function () {
  lastMsg();
});

//Hides all modals
function hideModals() {
  $('#modal-personalize, #modal-achievements, #modal-hide-ads, #modal-contact, #modal-donate, #modal-stats, #modal-eastereggs, #modal-settings, #modal-shortcuts, #modal-terminal, #modal-archive, #modal-search-help, #modal-yes, #modal-no').modal('hide');
}

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
        settings.getItem('toggleTerminal').then(function (value) {
          if (value == 'true') {
            terminalNotice('Opened automatically.');
          }
          else {
            terminalNotice('Press the <kbd>~</kbd> key to open.');
          }
        });
        console.log("onPageLoadTerm: Loaded assets");
        termCounter = 1;
        //Restore terminal output history
        settings.getItem('terminalContent').then(function (value) {
          $('.terminal-output').html(value);
          console.info('Restored terminal');
        });
      }).catch(function () {
        //If fail, display message and offer to retry
        console.log("onPageLoadTerm: One or more assets failed to load");
        PNotify.error({
          title: "Terminal (Auto)",
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

//Events notification
$(function () {
  //Check date to see if events needs to be loaded
  var date = new Date();
  var dates = ['01', '44', '64', '828', '931', '1124', '1125'];

  var month = date.getMonth().toString();
  var day = date.getDate().toString();
  var mD = month + day;

  settings.getItem('enableEventsBanner').then(function (value) {
    if (value == 'true') {
      if (dates.indexOf(mD) != -1) {
        $.getScript('js/events.js')
        console.log('event = yes');
      }
      else {
        console.log('event = no');
      }
    }
    console.log('enableEventsBanner = ' + value);
  });
});

//Check if Info Banner needs to be shown on homepage
settings.getItem('enableInfoBanner').then(function (value) {
  if (value == 'true') {
    PNotify.notice({
      title: 'Feedback',
      text: 'Would you like to take a survey?',
      icon: 'fas fa-question-circle',
      hide: false,
      modules: {
        Confirm: {
          confirm: true,
          buttons: [{
              text: 'Sure',
              primary: true,
              click: function(notice) {
                notice.close();
                settings.setItem('enableInfoBanner', 'false');
                window.open('https://goo.gl/forms/xf5uzcw2jqkRSRf83', '_blank')
                notice.update({
                  title: 'Thank you',
                  text: 'Your feedback is greatly appreciated.',
                  icon: true,
                  type: 'success',
                  hide: false,
                  modules: {
                    Confirm: {
                      confirm: false
                    },
                    Buttons: {
                      closer: true
                    }
                  }
                });
              }
            },
            {
              text: 'No thanks',
              click: function(notice) {
                settings.setItem('enableInfoBanner', 'false');
                notice.update({
                  title: 'Feedback Declined',
                  text: 'Sorry to hear that.<br><br>This message will not be shown again unless configured in settings.',
                  textTrusted: true,
                  icon: true,
                  type: 'info',
                  hide: true,
                  modules: {
                    Confirm: {
                      confirm: false
                    },
                    Buttons: {
                      closer: true,
                      sticker: true
                    }
                  }
                });
              }
            }
          ]
        },
        Buttons: {
          closer: false,
          sticker: false
        }
      }
    });
  }
  console.log('enableInfoBanner = ' + value);
});

//Check if Legal Banner needs to be shown on homepage
settings.getItem('enableLegalBanner').then(function (value) {
  if (value == 'true') {
  //if (value == 'true' || value == null) {
    PNotify.info({
      title: 'Legal',
      text: 'Use of this website is subject to the <a href="terms.html">Terms & Conditions</a>  and <a href="privacy.html">Privacy Policy</a>.',
      textTrusted: true,
      hide: false,
      modules: {
        Confirm: {
          confirm: true,
          buttons: [{
              text: 'Accept',
              primary: true,
              click: function(notice) {
                notice.close();
                settings.setItem('enableLegalBanner', 'false');
                loadYesMod();
              }
            },
            {
              text: 'Decline',
              click: function(notice) {
                settings.setItem('enableLegalBanner', 'true');
                loadNoMod();
              }
            }
          ]
        },
        Buttons: {
          closer: false,
          sticker: false
        }
      }
    });
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
        var sNotice = PNotify.notice({
          title: 'Snowstorm Started',
          text: 'Enabled automatically.<br><br><small>Click to configure <i class="fa fa-cog fa-sm"></i></small>',
          textTrusted: true,
          delay: 3000
        });
        sNotice.refs.elem.style.cursor = 'pointer';
        sNotice.on('click', function (e) {
          if ($(e.target).is('.ui-pnotify-closer *, .ui-pnotify-sticker *')) {
            return;
          }
          sNotice.close();
          hideModals();
          loadSettingsMod();
        });

        snowStorm.toggleSnow();
        $('#footer-snowstorm').replaceWith("<a class='link' id='footer-snowstorm' onclick='snowStorm.toggleSnow(); vulcanicAshCheck();' data-toggle='tooltip' data-placement='top' title='Toggle the snowstorm!'>Toggle snow</a>");
      }
      vulcanicAshCheck();
    }
    console.log('enableSnowstorm = ' + value);
  });
});

//Temporary workaround for settings bug
//Forces to set banner legal if they have not been set yet
$(function () {
  //Banner - Events
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
      settings.setItem('enableLegalBanner', 'false').then(function (value) {
        console.log(value);
      });
    }
  });
  //Terminal opacity
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
  $('.card').removeClass('bg-dark').addClass('border-dark');
  $('table').removeClass('table-dark').addClass('table-light');
  $("nav").attr("class", "navbar navbar-expand-xl navbar-light bg-light fixed-top animated fadeInDown");
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
  achievements.getItem('easteregg').then(function (value) {
    if (value == 'true') {
      console.log('Achievement message not displayed as user has already gotten it.');
    } else {
      achievementNotice('Konami Code<br><br>Insert Up, Up, Down, Down, Left, Right, Left, Right, B, A, anywhere in the website.')
      achievements.setItem('easteregg', 'true');
    }
    console.log('eastereggAchievement = ' + value);
  });
}

//Used to see if Terminal Achievement message should be displayed.
function terminalCheck() {
  achievements.getItem('terminal').then(function (value) {
    if (value == 'true') {
      console.log('Achievement message not displayed as user has already gotten it.');
    } else {
      achievementNotice('Hacker?! <br><br> Use the Terminal for the first time.');
      achievements.setItem('terminal', 'true');
    }
    console.log('terminalAchievement = ' + value);
  });
}

//Used to see if Unlimited Power Achievement message should be displayed.
function unlimitedPowerCheck() {
  achievements.getItem('unlimitedPower').then(function (value) {
    if (value == 'true') {
      console.log('Achievement message not displayed as user has already gotten it.');
    } else {
      achievementNotice('Unlimited POWER! <br><br> Change to the super user account.');
      achievements.setItem('unlimitedPower', 'true');
    }
    console.log('unlimitedPowerAchievement = ' + value);
  });
}

//Used to see if Wisely Achievement message should be displayed.
function wiselyCheck() {
  achievements.getItem('wisely').then(function (value) {
    if (value == 'true') {
      console.log('Achievement message not displayed as user has already gotten it.');
    } else {
      achievementNotice("You've Chosen Wisely <br><br> Agree to the <span id='no-click'><a href='terms.html'>Terms & Conditions</a></span> and <span id='no-click'><a href='privacy.html'>Privacy Policy</a></span>.");
      achievements.setItem('wisely', 'true');
    }
    console.log('wiselyAchievement = ' + value);
  });
}

//Used to see if Vulcanic Ash Achievement message should be displayed.
function vulcanicAshCheck() {
  achievements.getItem('vulcanicAsh').then(function (value) {
    if (value == 'true') {
      console.log('Achievement message not displayed as user has already gotten it.');
    } else {
      settings.getItem('theme').then(function (value) {
        if (value == 'light') {
          achievementNotice('Vulcanic Ash <br><br> Enable the snowstorm with the "light" theme enabled.')
          achievements.setItem('vulcanicAsh', 'true');
        }
      });
    }
    console.log('vulcanicAshAchievement = ' + value);
  });
}

//Achievement notifications
function achievementNotice(msg) {
  var aNotice = PNotify.info({
    title: 'Achievement Unlocked',
    text: msg + '<br><br><small>Click to view progress <i class="fa fa-trophy fa-sm"></i></small>',
    textTrusted: true,
    delay: 10000
  });
  aNotice.refs.elem.style.cursor = 'pointer';
  aNotice.on('click', function (e) {
    if ($(e.target).is('.ui-pnotify-closer *, .ui-pnotify-sticker *, #no-click *')) {
      return;
    }
    aNotice.close();
    hideModals();
    loadAchievementsMod();
  });
}

//Terminal notifications
function terminalNotice(msg) {
  var tNotice = PNotify.notice({
    title: 'Terminal Ready',
    text: msg + '<br><br><small>Click to configure <i class="fa fa-cog fa-sm"></i></small>',
    textTrusted: true,
    delay: 3000
  });
  tNotice.refs.elem.style.cursor = 'pointer';
  tNotice.on('click', function (e) {
    if ($(e.target).is('.ui-pnotify-closer *, .ui-pnotify-sticker *')) {
      return;
    }
    tNotice.close();
    hideModals();
    loadSettingsMod();
  });
}

//Check if Achievements icon needs to be gold
function goldCheck() {
  var keys = ['easteregg', 'terminal', 'unlimitedPower', 'wisely', 'hallucinating', 'vulcanicAsh'];

  achievements.getItems(keys).then(function (results) {
    if (results.easteregg == 'true' && results.terminal == 'true' && results.unlimitedPower == 'true' && results.wisely == 'true' && results.hallucinating == 'true' && results.vulcanicAsh == 'true') {
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
  achievements.getItem('hallucinating').then(function (value) {
    if (value == 'true') {
      console.log('Achievement message not displayed as user has already gotten it.');
    } else {
      achievementNotice('Hallucinating <br><br> Click "Hide ads" in the footer.');
      achievements.setItem('hallucinating', 'true');
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
function loadTxtlockLogMod() {
  $('#modal-txtlock-log').load('ajax/modals/txtlock-log.html');
  $('#modal-txtlock-log').modal();
}
function loadTidyntLogMod() {
  $('#modal-tidynt-log').load('ajax/modals/tidynt-log.html');
  $('#modal-tidynt-log').modal();
}
function loadFsLogMod() {
  $('#modal-fs-log').load('ajax/modals/fs-log.html');
  $('#modal-fs-log').modal();
  $('#modal-fs-log-txt').load('ajax/modals/fs-changelog.txt');
}
function loadPtLogMod() {
  $('#modal-pt-log').load('ajax/modals/pt-log.html');
  $('#modal-pt-log').modal();
  $('#modal-pt-log-txt').load('ajax/modals/pt-changelog.txt');
}

/* 404 Button */
function btn404() {
  if (btn404Counter % 2 === 0) {
    $("#btn-404-icon").attr("data-fa-transform", "rotate-180");
    $("#btn-404-text").text("Hide Recent Changes");
  }
  else {
    $("#btn-404-icon").attr("data-fa-transform", "rotate-360");
    $("#btn-404-text").text("View Recent Changes");
  }
  btn404Counter++;
}

/* Search Bar Animation */
function searchAnimation() {
  $('#search-div').css("max-width", "30rem");
}
function searchAnimationOut() {
  $('#search-div').css("max-width", "15.5rem");
}

/* Anchor offset
 * https://jsfiddle.net/ianclark001/rkocah23/
 */
(function(document,history,location){var HISTORY_SUPPORT=!!(history&&history.pushState);var anchorScrolls={ANCHOR_REGEX:/^#[^ ]+$/,OFFSET_HEIGHT_PX:64,init:function(){this.scrollToCurrent();$(window).on('hashchange',$.proxy(this,'scrollToCurrent'));$('body').on('click','a',$.proxy(this,'delegateAnchors'))},getFixedOffset:function(){return this.OFFSET_HEIGHT_PX},scrollIfAnchor:function(href,pushToHistory){var match,anchorOffset;if(!this.ANCHOR_REGEX.test(href)){return false}match=document.getElementById(href.slice(1));if(match){anchorOffset=$(match).offset().top-this.getFixedOffset();$('html, body').animate({scrollTop:anchorOffset});if(HISTORY_SUPPORT&&pushToHistory){history.pushState({},document.title,location.pathname+href)}}return!!match},scrollToCurrent:function(e){if(this.scrollIfAnchor(window.location.hash)&&e){e.preventDefault()}},delegateAnchors:function(e){var elem=e.target;if(this.scrollIfAnchor(elem.getAttribute('href'),true)){e.preventDefault()}}};$(document).ready($.proxy(anchorScrolls,'init'))})(window.document,window.history,window.location);

/**
 * @license
 * ========================================================================
 * ScrollPos-Styler v0.7.1
 * https://github.com/acch/scrollpos-styler
 * ========================================================================
 * Copyright 2015 Achim Christ
 * Licensed under MIT (https://github.com/acch/scrollpos-styler/blob/master/LICENSE)
 * ======================================================================== */
var ScrollPosStyler=function(t,r){"use strict";var o=0,a=!1,i=1,n="sps",c=t.getElementsByClassName(n),f="sps--abv",m="sps--blw",u="data-sps-offset";function l(s){var e=[];o=r.pageYOffset;for(var t=0;c[t];++t){var a=c[t],n=a.getAttribute(u)||i,l=a.classList.contains(f);(s||l)&&n<o?e.push({element:a,addClass:m,removeClass:f}):(s||!l)&&o<=n&&e.push({element:a,addClass:f,removeClass:m})}return e}function v(s){for(var e=0;s[e];++e){var t=s[e];t.element.classList.add(t.addClass),t.element.classList.remove(t.removeClass)}a=!1}var s={init:function(s){a=!0,s&&(s.spsClass&&(n=s.spsClass,c=t.getElementsByClassName(n)),i=s.scrollOffsetY||i,f=s.classAbove||f,m=s.classBelow||m,u=s.offsetTag||u);var e=l(!0);0<e.length?r.requestAnimationFrame(function(){v(e)}):a=!1}};return t.addEventListener("DOMContentLoaded",function(){r.setTimeout(s.init,1)}),r.addEventListener("scroll",function(){if(!a){var s=l(!1);0<s.length&&(a=!0,r.requestAnimationFrame(function(){v(s)}))}}),s}(document,window);

console.log('What are you doing in here? \nYes I know I need to fix a few errors.\n\n');