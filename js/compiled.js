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
  if(!('ontouchstart' in window)) {
    $('[data-toggle="tooltip"]').tooltip();
  }
  //If touchscreen, disable gray background in tab-content
  if(('ontouchstart' in window)) {
    $('.tab-content').css('background-color', 'inherit');
  }
});

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

//loadSearch assets
async function loadSearch() {
  if (searchCounter == 0) {
    $.when( $.ready,
      $.getScript('js/typeahead.min.js'),
      await sleep(500),
      $.getScript('js/search.js'),
      $.getJSON('json/search.json')
        .done(function (data) {
        $('#search').typeahead({ source: data });
      })
    ).then(function() {
      console.log("loadSearch: Loaded assets");
      searchCounter = 1;
    }).catch( function() {
      //If fail, display message and offer to retry
       console.log("loadSearch: One or more assets failed to load");
       $.bootstrapGrowl("Unable to get assets!<br>Are you online?<br> <button type='button' class='btn btn-primary' data-dismiss='alert' onclick='loadSearch();'>Retry</button>", {
         type: 'danger',
         align: 'right',
         delay: 999999999,
         offset: {from: 'top', amount: 70},
         width: 300,
         allow_dismiss: true
      })
    });
  }
  else {
    console.log("loadSearch: Already loaded assets");
  }
}

//loadNamePrompt assets
async function loadNamePrompt() {
  if (namePromptCounter == 0) {
    $.when( $.ready,
      $.getScript('js/typeahead.min.js'),
      await sleep(500),
      $.getScript('js/namePrompt.js'),
      $.getJSON('json/namePrompt.json')
        .done(function (data) {
        $('#name-value').typeahead({ source: data });
      })
    ).then(function() {
      console.log("loadNamePrompt: Loaded assets");
      namePromptCounter = 1;
    }).catch( function() {
      //If fail, display message and offer to retry
       console.log("loadNamePrompt: One or more assets failed to load");
       $.bootstrapGrowl("Unable to get assets!<br>Are you online?<br> <button type='button' class='btn btn-primary' data-dismiss='alert' onclick='loadNamePrompt();'>Retry</button>", {
         type: 'danger',
         align: 'right',
         delay: 999999999,
         offset: {from: 'top', amount: 70},
         width: 300,
         allow_dismiss: true
      })
    });
  }
  else {
    console.log("loadNamePrompt: Already loaded assets");
  }
}

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
  $.getScript('js/snowstorm.js');
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
  $.getScript('js/snowstorm.js');
  $('#footer-snowstorm').replaceWith( "<a class='link' id='footer-snowstorm' onclick='snowStorm.toggleSnow(); purplerainCheck();' data-toggle='tooltip' data-placement='top' title='Toggle the snowstorm!'>Toggle Snow</a>" );
    function enable(){
      purplerainCheck();
      snowStorm.toggleSnow();
    }
}

//Shortcuts
//Loads terminal modal on Shift + Space key combination
var listener = new window.keypress.Listener();
listener.simple_combo("shift space", async function() {
  //Inform user of progress
  $.bootstrapGrowl("Loading assets...", {
    type: 'info',
    align: 'right',
    delay: 1500,
    offset: {from: 'top', amount: 70},
    width: 300,
    allow_dismiss: true
  });
  //Get scripts if not already loaded
  if (termCounter == 0) {
    $.when( $.ready,
      $.getScript('js/jquery.terminal.min.js'),
      await sleep(500),
      $.getScript('js/terminal.js'),
      $.ajax({
  			url:"./css/jquery.terminal.css",
  			dataType:"script",
  			success:function(data){
  				 $("<style></style>").appendTo("head").html(data);
  				 //loading complete code here
  			}
      })
    ).then(function() {
      console.log("KeyCombo Terminal: Loaded assets");
      $.bootstrapGrowl("Terminal assets have been loaded.<br><br>Press the <kbd>`</kbd> key to open.", {
        type: 'success',
        align: 'right',
        delay: 2000,
        offset: {from: 'top', amount: 70},
        width: 300,
        allow_dismiss: true
      });
      termCounter = 1;
    }).catch( function() {
      //If fail, display message and offer to retry
       console.log("KeyCombo Terminal: One or more assets failed to load");
       $.bootstrapGrowl("Unable to get assets!<br>Are you online?", {
         type: 'danger',
         align: 'right',
         delay: 999999999,
         offset: {from: 'top', amount: 70},
         width: 300,
         allow_dismiss: true
      })
    });
  }
  //If assets have already been loaded
  else {
    $.bootstrapGrowl("Terminal assets have already been loaded!", {
      type: 'danger',
      align: 'right',
      delay: 1500,
      offset: {from: 'top', amount: 70},
      width: 300,
      allow_dismiss: true
    });
    console.log('KeyCombo Terminal: Already loaded assets');
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
  //Banner - Terms and conditions
  if ($('#tac-banner-checkbox1:checked').val() == 'true') {
    settings.setItem('enableTacBanner', 'true');
  } else {
    settings.setItem('enableTacBanner', 'false');
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
  if ($('#snowstorm-checkbox2:checked').val() == 'true') {
    settings.setItem('enableSnowstorm', 'true');
  } else {
    settings.setItem('enableSnowstorm', 'false');
  }
  //Set background color
  if ($('#bg-color-hex').val() !== '' || $('#bg-color-hex').val() !== ' ') {
    settings.setItem('backgroundColor', $('[name=backgroundColor]').val());
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
  settings.getItem('backgroundColor').then(function(value) {
    $('body').css("background-color", value);
    console.log("backgroundColor = " + value);
  });
});

//Check if Load Terminal on page load? is set to yes, if yes, load terminal assets.
async function onPageLoadTerm() {
  settings.getItem('loadTerminal').then(async function(value) {
    if (value == 'true') {
      //Get scripts
      $.when( $.ready,
        $.getScript('js/jquery.terminal.min.js'),
        await sleep(500),
        $.getScript('js/terminal.js'),
        $.ajax({
          url:"./css/jquery.terminal.css",
          dataType:"script",
          success:function(data){
             $("<style></style>").appendTo("head").html(data);
             //loading complete code here
          }
        })
      ).then(function() {
        console.log("onPageLoadTerm: Loaded assets");
        $.bootstrapGrowl("Terminal assets have been loaded.<br><br>Press the <kbd>`</kbd> key to open.", {
          type: 'success',
          align: 'right',
          delay: 2000,
          offset: {from: 'top', amount: 70},
          width: 300,
          allow_dismiss: true
        });
        termCounter = 1;
      }).catch( function() {
        //If fail, display message and offer to retry
         console.log("onPageLoadTerm: One or more assets failed to load");
         $.bootstrapGrowl("Unable to get assets!<br>Are you online?", {
           type: 'danger',
           align: 'right',
           delay: 2000,
           offset: {from: 'top', amount: 70},
           width: 300,
           allow_dismiss: true
        })
      });
    }
    console.log('theme = ' + value);
  });
}

//Load when page loads - done so async works
$(function(){
  onPageLoadTerm();
  onPageLoadTermToggle();
});

//Check if Terminal needs to be toggled
async function onPageLoadTermToggle() {
  settings.getItem('toggleTerminal').then(async function(value) {
    if (value == 'true') {
      await sleep(1000);
      simulateKeyPress("`", 'body');
    }
    console.log('toggleTerminal = ' + value);
  });
}

//Check which tab needs to be opened on News page.
$(function() {
  settings.getItem('defaultTab').then(function(value) {
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
    console.log('defaultTab = ' + value);
  });
});

//Check if Events Banner needs to be shown on Homepage
$(function() {
  //Check date to know if events needs to be loaded
  var date = new Date();
  var dates = ['01', '44', '64', '828', '931', '1124', '1125'];

  var month = date.getMonth().toString();
  var day = date.getDate().toString();
  var mD = month + day;

  settings.getItem('enableEventsBanner').then(function(value) {
    if (value == 'true') {
      if(dates.indexOf(mD) != -1) {
        $('#ajax-event-banner').load('ajax/alerts/alert-events.html');
      }
    }
    console.log('enableEventsBanner = ' + value);
  });
});

//Check if Info Banner needs to be shown on homepage
settings.getItem('enableInfoBanner').then(function(value) {
  if (value == 'true') {
    $('#ajax-info-banner').load('ajax/alerts/alert-info.html');
  }
  console.log('enableInfoBanner = ' + value);
});

//Check if Banners needs to be shown on Terms and Privacy page
$(function() {
  settings.getItem('enableTacBanner').then(function(value) {
    if (value == 'true') {
      if (($("title").html() == "InvisaMage | Terms")) {
        $.bootstrapGrowl("Do you accept the Terms and Conditions?<br><br> <button type='button' class='btn btn-success btn-md' data-dismiss='alert' onclick='loadTermsYesMod();'>Yes <i class='fa fa-check' aria-hidden='true'></i></button> <button type='button' class='btn btn-danger btn-md' onclick='loadTermsNoMod();'> No <i class='fa fa-times' aria-hidden='true'></i></button>", {
          type: 'danger',
          align: 'right',
          delay: 999999999,
          offset: {from: 'top', amount: 70},
          width: 300,
          allow_dismiss: false
        });
      }
      if (($("title").html() == "InvisaMage | Privacy")) {
        $.bootstrapGrowl("Do you accept the Privacy Policy?<br><br> <button type='button' class='btn btn-success btn-md' data-dismiss='alert' onclick='loadPrivacyYesMod();'>Yes <i class='fa fa-check' aria-hidden='true'></i></button> <button type='button' class='btn btn-danger btn-md' onclick='loadPrivacyNoMod();'> No <i class='fa fa-times' aria-hidden='true'></i></button>", {
          type: 'danger',
          align: 'right',
          delay: 999999999,
          offset: {from: 'top', amount: 70},
          width: 300,
          allow_dismiss: false
        });
      }
    }
    console.log("enableTacBanner = " + value);
  });
});

//Check if Snowstorm needs to be loaded on page load
$(function() {
  settings.getItem('enableSnowstorm').then(function(value) {
    if (value == 'true') {
      setTimeout(enable, 500);
      loadSnowstorm();
      function enable(){
        snowStorm.toggleSnow();
        $('#footer-snowstorm').replaceWith( "<a class='link' id='footer-snowstorm' onclick='snowStorm.toggleSnow(); purplerainCheck();' data-toggle='tooltip' data-placement='top' title='Toggle the snowstorm!'>Toggle Snow</a>" );
      }
    }
    console.log('enableSnowstorm = ' + value);
  });
});

//Temporary workaround for settings bug
//Forces to set banner cookies if they have not been set yet
//Banner - Events
$(function() {
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
      settings.setItem('enableInfoBanner', 'true').then(function (value) {
          console.log(value);
      });
    }
  });
  //Banner - Terms and conditions
  settings.getItem('enableTacBanner').then(function (value) {
    if (value == null) {
      settings.setItem('enableTacBanner', 'true').then(function (value) {
          console.log(value);
      });
    }
  });
});

//Check which theme to apply
$(function() {
  settings.getItem('theme').then(function(value) {
    if (value == 'light') {
      themeLight();
    }
    console.log('theme = ' + value);
  });
});

//Light theme
function themeLight() {
  $('.card').removeClass('bg-dark').addClass('bg-light');
  //$('button').removeClass('btn-light').addClass('btn-secondary');
  $('table').removeClass('table-dark').addClass('table-light');
  $("nav").attr("class", "navbar navbar-expand-md navbar-light bg-light fixed-top");
  //$("nav").attr("style", "background-color: #e3f2fd;");
  $('html').append('<link rel="stylesheet" type="text/css" href="./css/theme-light.css">');
}

//Check if centered modals need to be applied
$(function() {
  settings.getItem('centeredModals').then(function(value) {
    if (value == 'true') {
      $('html').append('<link rel="stylesheet" type="text/css" href="./css/modals-centered.css">');
    }
    console.log('centeredModals = ' + value);
  });
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
  achievements.getItem('eastereggAchievement').then(function(value) {
    if (value == 'true') {
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
      achievements.setItem('eastereggAchievement', 'true');
    }
    console.log('eastereggAchievement = ' + value);
  });
}

//Used to see if Terminal Achievement message should be displayed.
function terminalCheck() {
  achievements.getItem('terminalAchievement').then(function(value) {
    if (value == 'true') {
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
      achievements.setItem('terminalAchievement', 'true');
    }
    console.log('terminalAchievement = ' + value);
  });
}

//Used to see if Wisely Achievement message should be displayed.
function wiselyCheck() {
  achievements.getItem('wiselyAchievement').then(function(value) {
    if (value == 'true') {
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
      achievements.setItem('wiselyAchievement', 'true');
    }
    console.log('wiselyAchievement = ' + value);
  });
}

//Used to see if Wisely Achievement message should be displayed.
function purplerainCheck() {
  achievements.getItem('purplerainAchievement').then(function(value) {
    if (value == 'true') {
      console.log('Achievement message not displayed as user has already gotten it.');
    } else {
      settings.getItem('theme').then(function(value) {
        if (value == 'light') {
          $.bootstrapGrowl("<strong>Achievement Get!</strong><br>Purple Rain<br><br>Enable the snowstorm with the 'light' theme enabled.", {
            type: 'info',
            align: 'right',
            offset: {from: 'top', amount: 70},
            width: 300,
            delay: 10000,
            allow_dismiss: true
          });
          achievements.setItem('purplerainAchievement', 'true');
        }
      });
    }
    console.log('purplerainAchievement = ' + value);
  });
}

//Clear Local Storage
function clearLocalStorage() {
  settings.clear();
  achievements.clear();
  localforage.clear();
  $('#btn-clear-localstorage').tooltip('hide');
  $.bootstrapGrowl("All local storage databases have been removed!", {
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
  achievements.getItem('hallucinatingAchievement').then(function(value) {
    if (value == 'true') {
      console.log('Achievement message not displayed as user has already gotten it.');
    } else {
      $.bootstrapGrowl("<strong>Achievement Get!</strong><br>Hallucinating<br><br>Click Hide Ads in the footer.", {
        type: 'info',
        align: 'right',
        offset: {from: 'top', amount: 70},
        width: 300,
        delay: 10000,
        allow_dismiss: true
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

console.log('What are you doing in here? \nYes I know I need to fix a few errors.');
