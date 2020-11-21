(function ($) {
  //Change opacity
  var settings = localforage.createInstance({
    name: "settings"
  });
  settings.getItem('theme').then(function (value) {
    if (value == 'light') {
      settings.getItem('terminalOpacity').then(function (value) {
        $('.terminal').css("background-color", 'rgba(248,249,250,' + value + ')');
        $('.terminal, .prompt, .cmd, .cursor, .blink').css("color", '#000');
        $('html').append('<link rel="stylesheet" type="text/css" href="./css/theme-light.css">');
        console.log("terminalOpacity = " + value);
      });
    }
    if (value == 'dark' || value == undefined) {
      settings.getItem('terminalOpacity').then(function (value) {
        $('.terminal').css("background-color", 'rgba(34,38,42,' + value + ')');
        console.log("terminalOpacity = " + value);
      });
    }
  });

  //Yup
  $.fn.tilda = function (eval, options) {
    if ($('body').data('tilda')) {
      return $('body').data('tilda').terminal;
    }
    this.addClass('tilda');
    options = options || {};
    eval == eval || function (command, terminal) {
      term.echo("you don't set eval for tilda");
    };
    var settings = {
      prompt: '[[;#FFC157;]guest@server][[;#fff;]:][[;#66a3ff;]~ $] ',
      name: 'tilda',
      height: windowHeight - 62,
      historySize: 120,
      enabled: false,
      completion: ['help', 'reload', 'close', 'date', 'time', 'reset', 'modal', 'media', 'name', 'go', 'anchor', 'support', 'alert', 'requests',
        'snowstorm', 'echo', 'less', 'clear', 'credits', 'search', 'storage', 'ip', 'agent', 'display', 'su', 'users', 'history', 'libraries'],
      greetings: 'Website Terminal [Version 2018.12.19]\nCopyright (c) 2014 - 2020 InvisaMage. All rights reserved.\nPress ~ to exit.\n',
      keypress: function (e, terminal) {
        if (e.which == 96) {
          return false;
        }
        if (e.which == 68 && e.which == 17) {
          stop = true;
          terminal.resume();
          return false;
        }
      }
    };
    if (options) {
      $.extend(settings, options);
    }

    this.append('<div class="td"></div>');
    var self = this;
    self.terminal = this.find('.td').terminal(eval, settings);
    var focus = false;
    $(document.documentElement).keypress(function (e) {
      if (e.which == 96) {
        terminalCheck();
        self.slideToggle('fast');
        self.terminal.focus(focus = !focus);
        self.terminal.attr({
          scrollTop: self.terminal.attr("scrollHeight")
        });
      }
    });
    $('body').data('tilda', this);
    this.hide();
    return self;
  };
})(jQuery);

//--------------------------------------------------------------------------
jQuery(document).ready(function ($) {
  $('#terminal').tilda(function (command, terminal) {
    var cmd = $.terminal.parse_command(command);


    /* ReplaceAll function - Replaces all instances of a char in a string
     * http://dumpsite.com/forum/index.php?topic=4.msg8#msg8
     */
    String.prototype.replaceAll = function (str1, str2, ignore) {
      return this.replace(new RegExp(str1.replace(/([\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g, function (c) { return "\\" + c; }), "g" + (ignore ? "i" : "")), str2);
    };

    var modals = ['achievements', 'archive', 'contact', 'donate', 'eastereggs', 'hide-ads', 'search', 'search-help', 'settings',
      'shortcuts', 'stats', 'no', 'yes'];
    modals.toString();
    var modalsList = modals.join(", ");

    var users = ['guest', 'root', 'pi'];
    users.toString();
    var usersList = users.join(", ");

    function getSettings() {
      settings.iterate(function (value, key, iterationNumber) { terminal.echo(key + ' = ' + value); }).catch(function (err) { terminal.echo(err); });
    }
    function getAchievements() {
      achievements.iterate(function (value, key, iterationNumber) { terminal.echo(key + ' = ' + value); }).catch(function (err) { terminal.echo(err); });
    }

    //help
    if (cmd.name == 'help' || cmd.name == '?') {
      if (cmd.args == 'media') {
        terminal.echo('   media - Control the audio playing on the page (Only works on the homepage)');
        terminal.echo('   Usage: media [play | pause | vu | vd]');
        terminal.echo('   ');
        terminal.echo('   Example: media vu');
      }
      else if (cmd.args == 'ip') {
        terminal.echo('   ip - Prints your public IP address');
        terminal.echo('   Usage: ip');
        terminal.echo('   ');
        terminal.echo('   Note: Relies on https://api.ipify.org');
      }
      else if (cmd.args == 'modal') {
        terminal.echo('   modal - Load a modal');
        terminal.echo('   Usage: modal [(-o | -c) <modal name>]');
        terminal.echo('   ');
        terminal.echo('   -o, --open');
        terminal.echo('      Opens modal');
        terminal.echo('   -c, --close');
        terminal.echo('      Closes modal');
        terminal.echo('   -l, --list');
        terminal.echo('      Lists all modals');
      }
      else if (cmd.args == 'go') {
        terminal.echo('   go - Go to a file located on the server or an external website');
        terminal.echo('   Usage: go [local file | website]');
        terminal.echo('   ');
        terminal.echo('   Example: go info.html');
        terminal.echo('   Example: go images/txtlock/txtlock1.png');
        terminal.echo('   Example: go https://google.com');
      }
      else if (cmd.args == 'anchor') {
        terminal.echo('   anchor - Jump to an element\'s ID on the current page');
        terminal.echo('   Usage: anchor [-l | -g <element ID (string)>]');
        terminal.echo('   ');
        terminal.echo('   -g, --go');
        terminal.echo('      Navigate to anchor');
        terminal.echo('   -l, --list');
        terminal.echo('      List all IDs on the page (not all of them are useful)');
        terminal.echo('   ');
        terminal.echo('   Example: anchor -g top');
        terminal.echo('   Example: anchor --list');
      }
      else if (cmd.args == 'snowstorm') {
        terminal.echo('   snowstorm - Interface with the snowstorm function');
        terminal.echo('   Usage: snowstorm [-l | -t | -f | -r | -w | -m]');
        terminal.echo('   ');
        terminal.echo('   -l, --load');
        terminal.echo('      Loads the snowstorm assets');
        terminal.echo('   -t, --toggle');
        terminal.echo('      Toggle the snowstorm on or off');
        terminal.echo('   -f, --freeze');
        terminal.echo('      Pauses snow');
        terminal.echo('   -r, --resume');
        terminal.echo('      Resumes snow from pause state');
        terminal.echo('   -w, --wind');
        terminal.echo('      Randomizes wind direction and speed');
        terminal.echo('   -m, --melt');
        terminal.echo('      Removes snow elements from the page');
        terminal.echo('   ');
        terminal.echo('   Example: snowstorm --load');
        terminal.echo('   Example: snowstorm -t');
      }
      else if (cmd.args == 'name') {
        terminal.echo('   name - Interface with namePrompt function (Only works on homepage)');
        terminal.echo('   Usage: name [<string>]');
        terminal.echo('   ');
        terminal.echo('   Example: name Travis');
        terminal.echo('   Example: name Spock');
      }
      else if (cmd.args == 'storage') {
        terminal.echo('   storage - Manipulate local storage (Interface with localForage)');
        terminal.echo('   Usage: storage [get <database name> | set <database name> <key name> <value> | remove <database name> <key name>]');
        terminal.echo('   ');
        terminal.echo('   Example: storage get -s');
        terminal.echo('   Example: storage set -s terminalOpacity 1');
        terminal.echo('   ');
        terminal.echo('   Note: Database name is either Settings (-s) or Achievements (-a).');
      }
      else if (cmd.args == 'alert') {
        terminal.echo('   alert - Display an alert on the page with the PNotify plugin');
        terminal.echo('   Usage: alert [<"title"> <"message"> <type> <delay>]');
        terminal.echo('   ');
        terminal.echo('   Type can be: notice, info, success, error');
        terminal.echo('   Delay is integer in milliseconds');
        terminal.echo('   ');
        terminal.echo('   Example: alert "Welcome" "Welcome to Windows XP!" notice 4000');
      }
      else if (cmd.args == 'less') {
        terminal.echo('   less - View a file one line at a time');
        terminal.echo('   Usage: less <filename.extension>');
        terminal.echo('   ');
        terminal.echo('   Press q to quit');
        terminal.echo('   If q does not work press Ctrl + D');
      }
      else if (cmd.args == 'search') {
        terminal.echo('   search - Send input to a search engine in a new tab');
        terminal.echo('   Usage: search [-d | -g | -yt | -y | w | -b <query>]');
        terminal.echo('   ');
        terminal.echo('   -d');
        terminal.echo('      Search with DuckDuckGo');
        terminal.echo('   -g');
        terminal.echo('      Search with Google');
        terminal.echo('   -yt');
        terminal.echo('      Search with YouTube');
        terminal.echo('   -y');
        terminal.echo('      Search with Yahoo');
        terminal.echo('   -w');
        terminal.echo('      Search with Wikipedia');
        terminal.echo('   -b');
        terminal.echo('      Search with Bing');
        terminal.echo('   ');
        terminal.echo('   Example: search -g invisamage');
        terminal.echo('   Example: search -yt AntVenom');
      }
      else if (cmd.args == 'reload') {
        terminal.echo('   reload - Reloads the current page');
        terminal.echo('   Usage: reload [<integer in seconds>]');
        terminal.echo('   ');
        terminal.echo('   Example: reload');
        terminal.echo('   Example: reload 5');
      }
      else if (cmd.args == '>') {
        terminal.echo('   > - JavaScript Interpreter');
        terminal.echo('   Usage: > <JavaScript expression>');
        terminal.echo('   ');
        terminal.echo('   Example: > 1+1');
        terminal.echo('   Example: > $(\'body\').css(\'background-color\', \'red\');');
        terminal.echo('   More: https://www.w3schools.com/js/default.asp');
      }
      else if (cmd.args == 'history') {
        terminal.echo('   history - Manipulate command history');
        terminal.echo('   Usage: history | history -c');
        terminal.echo('   ');
        terminal.echo('   -c, --clear');
        terminal.echo('      Clears history');
      }
      else if (cmd.args == '') {
        terminal.echo('To get additional help for a command use help <cmd name>.');
        terminal.echo(' ');
        terminal.echo('Available commands:');
        terminal.echo('   | help            -Shows this');
        terminal.echo('   |');
        terminal.echo('   | agent           -Prints your browser\'s user agent');
        terminal.echo('   | date            -Displays the current date');
        terminal.echo('   | display         -Prints the screen resolution');
        terminal.echo('   | echo            -Prints arguments given to the terminal');
        terminal.echo('   | ip              -Prints your public IP address');
        terminal.echo('   | libraries       -Prints the version of 3rd party libraries used on this site');
        terminal.echo('   | requests        -Displays total and unique requests');
        terminal.echo('   | su              -Switch user accounts');
        terminal.echo('   | support         -Determine what features the browser supports based on current configuration');
        terminal.echo('   | time            -Prints the current time');
        terminal.echo('   | users           -Display users on system');
        terminal.echo('   |');
        terminal.echo('   | anchor          -Jump to an element\'s ID on the current page');
        terminal.echo('   | alert           -Display an alert on the page with the PNotify plugin');
        terminal.echo('   | go              -Navigate to a file located on the server or an external website');
        terminal.echo('   | less            -View a file one line at a time');
        terminal.echo('   | media           -Control the audio playing on the page (Only works on homepage)');
        terminal.echo('   | modal           -Load a modal');
        terminal.echo('   | name            -Interface with namePrompt function (Only works on homepage)');
        terminal.echo('   | search          -Send input to a search engine in a new tab');
        terminal.echo('   | snowstorm       -Interface with the snowstorm function');
        terminal.echo('   | storage         -Manipulate local storage (Interface with localForage)');
        terminal.echo('   | >               -JavaScript Interpreter');
        terminal.echo('   |');
        terminal.echo('   | clear           -Clears the terminal');
        terminal.echo('   | close           -Hides the terminal');
        terminal.echo('   | credits         -Learn how this was made');
        terminal.echo('   | history         -Manipulate command history');
        terminal.echo('   | reload          -Reloads the current page');
        terminal.echo('   | reset           -Resets the terminal to default state');
      }
      else {
        terminal.error("Can not get further information for '" + cmd.args[0] + "'.");
      }
    }
    //Snowstorm
    else if (cmd.name == 'snowstorm') {
      if (cmd.args == '--load' || cmd.args == '-l') {
        loadSnowstorm();
        terminal.echo('Loading assets...');
      }
      else if (cmd.args == '--toggle' || cmd.args == '-t') {
        snowStorm.toggleSnow(); vulcanicAshCheck();
        terminal.echo('Toggling the snow...');
      }
      else if (cmd.args == '--freeze' || cmd.args == '-f') {
        snowStorm.freeze();
        terminal.echo('Freezing the snow...');
      }
      else if (cmd.args == '--resume' || cmd.args == '-r') {
        snowStorm.resume();
        terminal.echo('Resuming the snow from the frozen state...');
      }
      else if (cmd.args == '--wind' || cmd.args == '-w') {
        snowStorm.randomizeWind();
        terminal.echo('Randomizing wind speed and direction...');
      }
      else if (cmd.args == '--melt' || cmd.args == '-m') {
        snowStorm.stop();
        terminal.echo('Removing the snow...');
      }
      else {
        terminal.error('Requires an argument');
      }
    }
    //Time
    else if (cmd.name == 'time') {
      var time = new Date();
      hr = time.getHours().toString();
      min = time.getMinutes().toString();
      sec = time.getSeconds().toString();
      terminal.echo(hr + ':' + min + ':' + sec);
    }
    //Date
    else if (cmd.name == 'date') {
      var date = new Date();
      terminal.echo(date);
    }
    //Reset
    else if (cmd.name == 'reset') {
      terminal.reset();
    }
    //Close
    else if (cmd.name == 'close') {
      //$('#terminal').hide();
      simulateKeyPress("`", 'body');
      terminal.echo('Terminal hidden...');
    }
    //Go
    else if (cmd.name == 'go') {
      if (cmd.args[0] != undefined) {
        window.location = cmd.args[0];
      }
      else {
        terminal.error('Requires an argument');
      }
    }
    //Echo
    else if (cmd.name == 'echo') {
      if (cmd.args[0] != undefined) {
        terminal.echo(cmd.rest);
      }
      else {
        terminal.error('Requires an argument');
      }
    }
    //Anchor
    else if (cmd.name == 'anchor') {
      if (cmd.args[0] != undefined) {
        if (cmd.args[0] == '--list' || cmd.args[0] == '-l') {
          terminal.echo('List of all IDs on this page:\n');

          /* Get all IDs on page
           * https://stackoverflow.com/questions/7115022/how-do-i-enumerate-all-of-the-html-ids-in-a-document-with-javascript#7115033
           */
          var ids = document.querySelectorAll('[id]');
          Array.prototype.forEach.call(ids, function (el, i) {
            // "el" is your element
            terminal.echo(el.id); // log the ID
          });
        }
        else if (cmd.args[0] == '--go' || cmd.args[0] == '-g') {
          if (cmd.args[1] != undefined) {
            window.location = '#' + cmd.args[1];
          }
          else {
            terminal.error('Requires an element ID name');
          }
        }
        else {
          terminal.error('Unknown argument');
        }
      }
      else {
        terminal.error('Requires an argument');
      }
    }
    //Storage
    else if (cmd.name == 'storage') {
      if (cmd.args[0] == 'get') {
        if (cmd.args[1] == '--settings' || cmd.args[1] == '-s') {
          getSettings();
        }
        else if (cmd.args[1] == '--achievements' || cmd.args[1] == '-a') {
          getAchievements();
        }
        else if (cmd.args[1] == '--all') {
          getSettings();
          getAchievements();
        }
        else {
          terminal.error('Unknown database');
        }
      }
      else if (cmd.args[0] == 'set') {
        if (cmd.args[1] == '--settings' || cmd.args[1] == '-s') {
          settings.setItem(cmd.args[2], cmd.args[3]);
          terminal.echo('Saving item named "' + cmd.args[2] + '" with a value of "' + cmd.args[3] + '" to the Settings database...');
        }
        else if (cmd.args[1] == '--achievements' || cmd.args[1] == '-a') {
          achievements.setItem(cmd.args[2], cmd.args[3])
          terminal.echo('Saving item named "' + cmd.args[2] + '" with a value of "' + cmd.args[3] + '" to the Achievements database...');
        }
        else {
          terminal.error('Unknown database');
        }
      }
      else if (cmd.args[0] == 'remove') {
        if (cmd.args[1] == '--settings' || cmd.args[1] == '-s') {
          if (cmd.args[2] != undefined) {
            settings.removeItem(cmd.args[2]);
            terminal.echo('Removing item named "' + cmd.args[2] + '" from the Settings database...');
          }
          else {
            terminal.error('Key value required');
          }
        }
        else if (cmd.args[1] == '--achievements' || cmd.args[1] == '-a') {
          if (cmd.args[2] != undefined) {
            achievements.removeItem(cmd.args[2]);
            terminal.echo('Removing item named "' + cmd.args[2] + '" from the Achievements database...');
          }
          else {
            terminal.error('Key value required');
          }
        }
        else if (cmd.args[1] == '--all') {
          settings.clear();
          achievements.clear();
          terminal.echo('Removing all stored items...');
        }
        else {
          terminal.error('Unknown database');
        }
      }
      else {
        terminal.error('Requires an argument');
      }
    }
    //Reload
    else if (cmd.name == 'reload') {
      var offset = cmd.args[0];
      if (cmd.args[0] != undefined) {
        if (cmd.args[0] == 1) {
          terminal.echo('Reloading page in ' + offset + ' second...');
        }
        else {
          terminal.echo('Reloading page in ' + offset + ' seconds...');
        }
        setTimeout(reload, offset * 1000);
        function reload() {
          location.reload();
        }
      } else {
        location.reload();
      }
    }
    //Media
    else if (cmd.name == 'media') {
      if ($("title").html() == "InvisaMage | Home") {
        if ($('body').has('audio').length == 1) {
          if (cmd.args[0] != undefined) {
            if (cmd.args == 'play') {
              play();
              terminal.echo('Playing media...');
            }
            else if (cmd.args == 'pause') {
              pause();
              terminal.echo('Pausing media...');
            }
            else if (cmd.args == 'vu') {
              var volume = $("audio").prop("volume") + 0.2; if (volume > 1) { volume = 1; } $("audio").prop("volume", volume);
              terminal.echo('Increasing volume...');
            }
            else if (cmd.args == 'vd') {
              var volume = $("audio").prop("volume") - 0.2; if (volume < 0) { volume = 0; } $("audio").prop("volume", volume);
              terminal.echo('Decreasing volume...');
            }
            else if (cmd.args[0] == '-v') {
              if (cmd.args[1] != undefined) {
                var newVol = cmd.args[1];
                var volume = $("audio").prop("volume") + newVol;
                if (volume < 0) { volume = 0; } $("audio").prop("volume", volume);
              }
              terminal.echo('Setting new volume...');
            }
            else {
              terminal.error('Unknown argument');
            }
          }
          else {
            terminal.error('Requires an argument');
          }
        }
        else {
          terminal.error('No audio element on the page');
        }
      }
      else {
        terminal.error("This command only works on the homepage.");
        terminal.echo("Click <a href='index.html'>here</a> to go there.", { raw: true });
        terminal.echo("Or type 'go index.html'");
      }
    }
    //Search
    else if (cmd.name == 'search') {
      if (cmd.args[0] != undefined) {
        if (cmd.args[0] == '-d') {
          window.open("https://duckduckgo.com/?q=" + cmd.rest.substr(3));
          terminal.echo('Searching DuckDuckGo for "' + cmd.rest.substr(3) + '"');
        }
        else if (cmd.args[0] == '-g') {
          window.open("https://www.google.com/search?q=" + cmd.rest.substr(3));
          terminal.echo('Searching Google for "' + cmd.rest.substr(3) + '"');
        }
        else if (cmd.args[0] == '-yt') {
          window.open("https://www.youtube.com/results?search_query=" + cmd.rest.substr(4));
          terminal.echo('Searching YouTube for "' + cmd.rest.substr(4) + '"');
        }
        else if (cmd.args[0] == '-y') {
          window.open("https://search.yahoo.com/search?p=" + cmd.rest.substr(3));
          terminal.echo('Searching Yahoo for "' + cmd.rest.substr(3) + '"');
        }
        else if (cmd.args[0] == '-b') {
          window.open("https://www.bing.com/search?q=" + cmd.rest.substr(3));
          terminal.echo('Searching Bing for "' + cmd.rest.substr(3) + '"');
        }
        else if (cmd.args[0] == '-w') {
          window.open("https://en.wikipedia.org/w/index.php?search=" + cmd.rest.substr(3));
          terminal.echo('Searching Wikipedia for "' + cmd.rest.substr(3) + '"');
        }
        else {
          terminal.error('Unknown search engine argument');
        }
      }
      else {
        terminal.error('Requires an argument');
      }
    }
    //Modals
    else if (cmd.name == 'modal') {
      if (cmd.args[0] != undefined) {
        if (cmd.args[0] == '-o' || cmd.args[0] == '--open') {
          if (cmd.args[1] != undefined) {
            if (jQuery.inArray(cmd.args[1], modals) !== -1) {
              if ($('.modal').is(':visible') == false) {
                $('#modal-' + cmd.args[1]).load('ajax/modals/' + cmd.args[1] + '.html');
                $('#modal-' + cmd.args[1]).modal();
                terminal.echo('Opening modal "' + cmd.args[1] + '"...');
              }
              else {
                terminal.error('A modal is already open');
              }
            }
            else {
              terminal.error('Unknown modal');
            }
          }
          else {
            terminal.error('Requires modal name');
          }
        }
        if (cmd.args[0] == '-c' || cmd.args[0] == '--close') {
          if (cmd.args[1] != undefined) {
            if (jQuery.inArray(cmd.args[1], modals) !== -1) {
              if ($('#modal-' + cmd.args[1]).is(':visible')) {
                $('#modal-' + cmd.args[1]).modal('hide');
                terminal.echo('Closing modal "' + cmd.args[1] + '"...');
              }
              else {
                terminal.error('That modal is not open');
              }
            }
            else {
              terminal.error('Unknown modal');
            }
          }
          else {
            terminal.error('Requires modal name');
          }
        }
        if (cmd.args[0] == '-l' || cmd.args[0] == '--list') {
          terminal.echo(modalsList);
        }
      }
      else {
        terminal.error('Requires an argument');
      }
    }
    //Credits
    else if (cmd.name == 'credits') {
      terminal.echo("Created using <a target='_blank' rel='noopener noreferrer' href='http://terminal.jcubic.pl/'>jQuery Terminal</a> by <a target='_blank' rel='noopener noreferrer' href='http://jcubic.pl/jakub-jankiewicz/'>Jakub Jankiewicz</a>.", { raw: true });
    }
    //IP
    else if (cmd.name == 'ip') {
      ready(() => {
        $.getJSON("https://api.ipify.org?format=jsonp&callback=?", function (json) {
        })
          .done(function (json) {
            terminal.echo("Your public IP address is: " + json.ip);
          })
          .fail(function () {
            terminal.echo("Unable to get IP!");
            terminal.echo("Sometimes content blocking extensions will prevent this from working.");
          });
      });
    }
    //Agent
    else if (cmd.name == 'agent') {
      terminal.echo(navigator.userAgent);
    }
    //su
    else if (cmd.name == 'su') {
      if (cmd.args[0] != undefined) {
        if (cmd.args[0] == 'root' || cmd.args[0] == '-') {
          terminal.set_prompt('[[;#FFC157;]root@server][[;#fff;]:][[;#66a3ff;]~] [[;#DC3545;]#] ');
          terminal.echo('Switched to "root" user');
          unlimitedPowerCheck();
        }
        else if (jQuery.inArray(cmd.args[0], users) !== -1) {
          terminal.set_prompt('[[;#FFC157;]' + cmd.args[0] + '@server][[;#fff;]:][[;#66a3ff;]~ $] ');
          terminal.echo('Switched to "' + cmd.args[0] + '" user');
        }
        else {
          terminal.error('Unknown user');
        }
      }
      else {
        terminal.set_prompt('[[;#FFC157;]root@server][[;#fff;]:][[;#66a3ff;]~] [[;#DC3545;]#] ');
        terminal.echo('Switched to "root" user');
        unlimitedPowerCheck();
      }
    }
    //alert
    else if (cmd.name == 'alert') {
      if (cmd.args[0] != undefined) {
        if (cmd.args[1] != undefined) {
          if (cmd.args[2] != undefined) {
            if (cmd.args[3] != undefined) {
              PNotify.alert({
                title: cmd.args[0],
                text: cmd.args[1],
                type: cmd.args[2],
                delay: cmd.args[3]
              });
            }
            else {
              terminal.error('Requires delay in milliseconds');
            }
          }
          else {
            terminal.error('Requires alert type');
          }
        }
        else {
          terminal.error('Requires alert text');
        }
      }
      else {
        terminal.error('Requires a title');
      }
    }
    //users
    else if (cmd.name == 'users') {
      terminal.echo(usersList);
    }
    //history
    else if (cmd.name == 'history') {
      var history = terminal.history().data();
      history.toString();
      var historyList = history.join("\n");

      if (cmd.args[0] != undefined) {
        if (cmd.args[0] == '-c' || cmd.args[0] == '--clear') {
          terminal.history().clear();
          terminal.echo('Cleared command history...');
        }
        else {
          terminal.error('Unknown argument');
        }
      }
      else {
        terminal.echo(historyList);
      }
    }
    //support
    else if (cmd.name == 'support') {
      //Flash
      var hasFlash = false;
      try {
        hasFlash = Boolean(new ActiveXObject('ShockwaveFlash.ShockwaveFlash'));
      } catch (exception) {
        hasFlash = ('undefined' != typeof navigator.mimeTypes['application/x-shockwave-flash']);
      }

      //DoNotTrack
      var doNotTrack = navigator.doNotTrack
      if (doNotTrack == 1) {
        doNotTrack = true
      }
      else {
        doNotTrack = false
      }

      terminal.echo("Cookies Enabled:    " + navigator.cookieEnabled);
      terminal.echo("Java Enabled:       " + navigator.javaEnabled());
      terminal.echo("Flash Enabled:      " + hasFlash);
      terminal.echo("DoNotTrack Enabled: " + doNotTrack);

      if (hasFlash == true || navigator.javaEnabled() == true) {
        terminal.echo(" ");
        terminal.echo("Notes:");
      }
      if (hasFlash == true) {
        terminal.echo("For security reasons, it is recommended to make Flash 'Ask to Activate' rather than leave it on.");
      }
      if (navigator.javaEnabled() == true) {
        terminal.echo(" ");
        terminal.echo("Notes:");
        terminal.echo("For security reasons, it is recommended to make Flash 'Ask to Activate' rather than leave it on.");
      }
    }
    //cd
    else if (cmd.name == 'cd') {
      if (cmd.args[0] != undefined) {
        terminal.set_prompt('[[;#FFC157;]guest@server][[;#fff;]:][[;#66a3ff;]' + cmd.args[0] + ' $] ');
      } else {
        terminal.set_prompt('[[;#FFC157;]guest@server][[;#fff;]:][[;#66a3ff;]~ $] ');
      }
    }
    //apt
    else if (cmd.name == 'apt') {
      if (cmd.args[0] != undefined) {
        if (cmd.args[0] == 'update') {
          terminal.pause();
          terminal.echo('Updating...');
          setTimeout(function(){
            terminal.echo('Get: http://archive.raspberrypi.org/debian');
          }, 500);
          setTimeout(function(){
            terminal.echo('Get: http://raspbian.raspberrypi.org/raspbian');
          }, 1555);
          setTimeout(function(){
            terminal.echo('Fetched 184 kB in 2s (65.0 kB/s)');
          }, 2521);
          setTimeout(function(){
            terminal.echo('Reading package lists...');
          }, 3213);
          setTimeout(function(){
            terminal.echo('Done');
          }, 3518);
          setTimeout(function(){
            terminal.echo('Building dependancy tree');
          }, 4200);
          setTimeout(function(){
            terminal.echo('Reading state information...');
          }, 4567);
          setTimeout(function(){
            terminal.echo('Done');
          }, 5157);
          setTimeout(function(){
            terminal.echo('All packages are up to date.');
            terminal.resume();
          }, 5598);
        }
      } else {
        terminal.error('Requires an argument');
      }
    }
    //Requests
    else if (cmd.name == 'requests') {
      terminal.pause();
      $.ajax({
        url: "./ajax/unique-requests.txt",
        cache: false,
        success: function (data) {
          data = data.replace(/\s/g, '');
          terminal.echo('Unique requests: ' + data);
          terminal.resume();
        },
        error: function () {
          terminal.error('Unable to get unique requests.');
          terminal.resume();
        }
      });

      $.ajax({
        url: "./ajax/total-requests.txt",
        cache: false,
        success: function (data) {
          data = data.replace(/\s/g, '');
          terminal.echo('Total requests: ' + data);
          terminal.resume();
        },
        error: function () {
          terminal.error('Unable to get total requests.');
          terminal.resume();
        }
      });
    }
    //JS
    else if (cmd.name == '>') {
      try {
        var result = window.eval(cmd.rest);
        if (result !== undefined) {
          this.echo(new String(result));
        }
      } catch (e) {
        this.error(new String(e));

      }
    }
    //namePrompt
    else if (cmd.name == 'name') {
      if ($("title").html() == "InvisaMage | Home") {
        $.when($.ready,
          loadNamePrompt()
        )
          .then(function () {
            if (cmd.args[0] != undefined) {
              namePrompt(cmd.rest);
            }
            else {
              terminal.error('Requires an argument');
            }
          });
      }
      else {
        terminal.error("This command only works on the homepage.");
        terminal.echo("Click <a href='index.html'>here</a> to go there.", { raw: true });
        terminal.echo("Or type 'go index.html'");
      }
    }
    //Display
    else if (cmd.name == 'display') {
      terminal.echo(screen.width + ' ⨯ ' + screen.height);
    }
    //Background fix
    else if (cmd.name == 'bg') {
      terminal.echo('Fixing screen...');
      settings.getItem('theme').then(function (value) {
        if (value == 'light') {
          settings.getItem('terminalOpacity').then(function (value) {
            $('.terminal').css("background-color", 'rgba(248,249,250,' + value + ')');
            $('.terminal, .prompt, .cmd, .cursor, .blink').css("color", '#000');
            $('html').append('<link rel="stylesheet" type="text/css" href="./css/theme-light.css">');
            console.log("terminalOpacity = " + value);
          });
        }
        if (value == 'dark' || value == undefined) {
          settings.getItem('terminalOpacity').then(function (value) {
            $('.terminal').css("background-color", 'rgba(34,38,42,' + value + ')');
            console.log("terminalOpacity = " + value);
          });
        }
        terminal.echo('Theme is ' + value);
        terminal.echo('Done!');
      });
    }
    //ping
    else if (cmd.name == 'ping') {
      terminal.echo('Pong!');
    }
    //Libraries
    else if (cmd.name == 'libraries') {
      terminal.echo('jQuery:          ' + jqueryVer);
      terminal.echo('Bootstrap:       ' + bootstrapVer);
      terminal.echo('Font Awesome:    ' + fontawesomeVer);
      terminal.echo('jQuery Terminal: ' + jqueryterminalVer);
      terminal.echo('localForage:     ' + localforageVer);
      terminal.echo('Keypress:        ' + keypressVer);
      terminal.echo('Konami-JS:       ' + konamiVer);
      terminal.echo('PNotify:         ' + pnotifyVer);
      terminal.echo('Snowstorm:       ' + snowstormVer);
    }
    //Less test
    else if (cmd.name == 'less') {
      if (cmd.args[0] == undefined) {
        terminal.error('Requires an argument');
      }
      if (command.match(/ *less +[^ ]+/)) {
        terminal.pause();
        $.ajax({
          // leading and trailing spaces and keep those inside argument
          url: command.replace(/^\s+|\s+$/g, '').
            replace(/^ */, '').split(/(\s+)/).slice(2).join(''),
          method: 'GET',
          dataType: 'text',
          success: function (source) {
            terminal.resume();
            var export_data = terminal.export_view();
            var less = true;
            source = source.replace(/&/g, '&amp;').
              replace(/\[/g, '&#91;').
              replace(/\]/g, '&#93;');
            var cols = terminal.cols();
            var rows = terminal.rows();
            resize = [];
            var lines = source.split('\n');
            resize.push(function () {
              if (less) {
                cols = terminal.cols();
                rows = terminal.rows();
                print();
              }
            });
            var pos = 0;

            function print() {
              terminal.clear();
              terminal.echo(lines.slice(pos, pos + rows - 1).join('\n'));
            }
            print();
            terminal.push($.noop, {
              keydown: function (e) {
                if (terminal.get_prompt() !== '/') {
                  if (e.which == 191) {
                    terminal.set_prompt('/');
                  } else if (e.which === 38) { //up
                    if (pos > 0) {
                      --pos;
                      print();
                    }
                  } else if (e.which === 40) { //down
                    if (pos < lines.length - 1) {
                      ++pos;
                      print();
                    }
                  } else if (e.which === 34) { // Page up
                    pos += rows;
                    if (pos > lines.length - 1 - rows) {
                      pos = lines.length - 1 - rows;
                    }
                    print();
                  } else if (e.which === 33) { // page down
                    pos -= rows;
                    if (pos < 0) {
                      pos = 0;
                    }
                    print();
                  } else if (e.which == 81) { //Q
                    less = false;
                    terminal.pop().import_view(export_data);
                  }
                  return false;
                } else {
                  if (e.which === 8 && terminal.get_command() === '') {
                    terminal.set_prompt(':');
                  } else if (e.which == 13) {
                    var command = terminal.get_command();
                    // basic search find only first
                    // instance and don't mark the result
                    if (command.length > 0) {
                      var regex = new RegExp(command);
                      for (var i = 0; i < lines.length; ++i) {
                        if (regex.test(lines[i])) {
                          pos = i;
                          print();
                          terminal.set_command('');
                          break;
                        }
                      }
                      terminal.set_command('');
                      terminal.set_prompt(':');
                    }
                    return false;
                  }
                }
              },
              prompt: ':'
            });
          }
        });
      }
    }
    //None
    else if (cmd.name == '') {
    }
    //Unknown command
    else {
      terminal.error("Unknown command");
      terminal.echo("Type 'help' to view a list of commands.");
    }
  });
});

/* Terminal Save Test */
$("#terminal").keydown(function() {
  settings.setItem('terminalContent', $('.terminal-output').html());
  console.info("Saved changes");
});