(function($) {
    //Change opacity
    var settings = localforage.createInstance({
      name: "settings"
    });
    settings.getItem('theme').then(function(value) {
      if (value == 'light') {
        settings.getItem('terminalOpacity').then(function(value) {
          $('.terminal').css("background-color", 'rgba(248,249,250,' + value + ')');
          $('.terminal, .prompt, .cmd, .cursor, .blink').css("color", '#000');
          $('html').append('<link rel="stylesheet" type="text/css" href="./css/theme-light.css">');
          console.log("terminalOpacity = " + value);
        });
      }
      if (value == 'dark') {
        settings.getItem('terminalOpacity').then(function(value) {
          $('.terminal').css("background-color", 'rgba(34,38,42,' + value + ')');
          console.log("terminalOpacity = " + value);
        });
      }
    });

    //Yup
    $.fn.tilda = function(eval, options) {
        if ($('body').data('tilda')) {
            return $('body').data('tilda').terminal;
        }
        this.addClass('tilda');
        options = options || {};
        eval = eval || function(command, term) {
            term.echo("you don't set eval for tilda");
        };
        var settings = {
            prompt: '[[;#FFC157;]guest@server][[;#fff;]:][[;#66a3ff;]~ $] ',
            name: 'tilda',
            height: windowHeight-62,
            enabled: false,
            completion: ['help', 'reload', 'close', 'date', 'time', 'reset', 'modal', 'media', 'go', 'anchor',
            'snowstorm', 'echo', 'less', 'clear', 'credits', 'search', 'storage', 'ip', 'agent', 'display', 'su', 'users', 'history'],
            greetings: 'Welcome to the Terminal | Copyright (c) 2014-2017\nType \'help\' to view a list of commands.',
            keypress: function(e) {
                if (e.which == 96) {
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
        $(document.documentElement).keypress(function(e) {
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
jQuery(document).ready(function($) {
  $('#terminal').tilda(function(command, terminal) {
    var cmd = $.terminal.parse_command(command);


    /* ReplaceAll function - Replaces all instances of a char in a string
     * http://dumpsite.com/forum/index.php?topic=4.msg8#msg8
     */
    String.prototype.replaceAll = function(str1, str2, ignore) {
       return this.replace(new RegExp(str1.replace(/([\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g, function(c){return "\\" + c;}), "g"+(ignore?"i":"")), str2);
    };

    var modals = ['achievements', 'archive', 'contact', 'cookies', 'donate', 'eastereggs', 'hide-ads', 'reload', 
    'search-help', 'settings', 'shortcuts', 'stats', 'no', 'yes'];
    modals.toString();
    var modalsList = modals.join(", ").replaceAll(",", " |");
    var modalsListComma = modals.join(", ");
    
    var users = ['guest', 'root', 'pi'];
    users.toString();
    var usersList = users.join(", ");

    function getSettings() {
      settings.iterate(function(value, key, iterationNumber) {terminal.echo(key + ' = ' + value);}).catch(function(err) {terminal.echo(err);});
    }
    function getAchievements() {
      achievements.iterate(function(value, key, iterationNumber) {terminal.echo(key + ' = ' + value);}).catch(function(err) {terminal.echo(err);});
    }

    //help
    if (cmd.name == 'help') {
      if (cmd.args == 'media') {
        terminal.echo('   media - Control the audio playing on the page');
        terminal.echo('   Usage: media [play | pause | vu | vd]');
      }
      else if (cmd.args == 'modal') {
        terminal.echo('   modal - Load a modal');
        terminal.echo('   Usage: modal [ (-o | -c) ' + modalsList + ']');
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
        terminal.echo('   Examples: go [info.html | images/txtlock/txtlock1.png | https://google.com]');
      }
      else if (cmd.args == 'anchor') {
        terminal.echo('   anchor - Jump to an element\'s ID on the current page');
        terminal.echo('   Usage: anchor [element ID]');
      }
      else if (cmd.args == 'snowstorm') {
        terminal.echo('   snowstorm - Interface with the snowstorm function');
        terminal.echo('   Usage: snowstorm [load | toggle | freeze | resume | wind | melt]');
      }
      else if (cmd.args == 'storage') {
        terminal.echo('   storage - Manipulate local storage (Interace with localForage)');
        terminal.echo('   Usage: storage [get <database name> | set <database name> <name> <value> | remove <database name> <name>]');
        terminal.echo('   ');
        terminal.echo('   Note: Database name is either Settings (-s) or Achievements (-a).');
      }
      else if (cmd.args == 'less') {
        terminal.echo('   less - View a file one line at a time');
        terminal.echo('   Usage: less [filename.extension]');
        terminal.echo('   ');
        terminal.echo('   Press q to quit');
      }
      else if (cmd.args == 'search') {
        terminal.echo('   search - Send input to a search engine in a new tab');
        terminal.echo('   Usage: search [-g | -d | -y | -b query]');
        terminal.echo('   ');
        terminal.echo('   Example: search [-g invisamage | -y AntVenom]');
      }
      else if (cmd.args == 'reload') {
        terminal.echo('   reload - Reloads the current page');
        terminal.echo('   Usage: reload [# of seconds]');
        terminal.echo('   ');
        terminal.echo('   Example: reload [(no number) | 5]');
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
        terminal.echo('To get more help for a specific command use help <cmd name>.');
        terminal.echo(' ');
        terminal.echo('Available commands:');
        terminal.echo('   | help            -Shows this');
        terminal.echo('   |');
        terminal.echo('   | agent           -Prints your browser\'s user agent');
        terminal.echo('   | date            -Displays the current date');
        terminal.echo('   | display         -Prints the screen resolution');
        terminal.echo('   | echo            -Prints arguments given to the terminal');
        terminal.echo('   | ip              -Prints your public IP address');
        terminal.echo('   | su              -Switch user accounts');
        terminal.echo('   | time            -Prints the current time');
        terminal.echo('   | users           -Display users on system');
        terminal.echo('   |');
        terminal.echo('   | anchor          -Jump to an element\'s ID on the current page');
        terminal.echo('   | go              -Navigate to a file located on the server or an external website');
        terminal.echo('   | less            -View a file one line at a time');
        terminal.echo('   | media           -Control the audio playing on the page');
        terminal.echo('   | modal           -Load a modal');
        terminal.echo('   | search          -Send input to a search engine in a new tab');
        terminal.echo('   | snowstorm       -Interface with the snowstorm function');
        terminal.echo('   | storage         -Manipulate local storage (Interace with localForage)');
        terminal.echo('   | >               -JavaScript Interpreter');
        terminal.echo('   |');
        terminal.echo('   | clear           -Clears the terminal');
        terminal.echo('   | close           -Hides the terminal');
        terminal.echo('   | credits         -Learn how this was made');
        terminal.echo('   | history         -Manipulate command history');
        terminal.echo('   | reload          -Reloads the current page');
        terminal.echo('   | reset           -Resets the Terminal to default state');
      }
      else {
        terminal.echo('Can not get further information for that command')
      }
    }
    //Snowstorm
    else if (cmd.name == 'snowstorm') {
      if (cmd.args == 'load') {
        loadSnowstorm();
        terminal.echo('Loading assets...');
      }
      else if (cmd.args == 'toggle') {
        snowStorm.toggleSnow(); purplerainCheck();
        terminal.echo('Toggling the snow...');
      }
      else if (cmd.args == 'freeze') {
        snowStorm.freeze();
        terminal.echo('Freezing the snow...');
      }
      else if (cmd.args == 'resume') {
        snowStorm.resume();
        terminal.echo('Resuming the snow from the frozen state...');
      }
      else if (cmd.args == 'wind') {
        snowStorm.randomizeWind();
        terminal.echo('Randomizing wind speed and direction...');
      }
      else if (cmd.args == 'melt') {
        snowStorm.stop();
        terminal.echo('Removing the snow...');
      }
      else {
        terminal.echo('Requires an argument');
      }
    }
    //Time
    else if (cmd.name == 'time') {
      var time = new Date();
      hr = time.getHours().toString();
      min = time.getMinutes().toString();
      sec = time.getSeconds().toString();
      terminal.echo(hr+':'+min+':'+sec);
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
      $('#terminal').hide();
      terminal.echo('Terminal hidden...');
    }
    //Go
    else if (cmd.name == 'go') {
      if (cmd.args[0] != undefined) {
        window.location = cmd.args[0];
      }
      else {
        terminal.echo('Requires an argument');
      }
    }
    //Echo
    else if (cmd.name == 'echo') {
      if (cmd.args[0] != undefined) {
        terminal.echo(cmd.rest);
      }
      else {
        terminal.echo('Requires an argument');
      }
    }
    //Anchor
    else if (cmd.name == 'anchor') {
      if (cmd.args[0] != undefined) {
        window.location = '#' + cmd.args[0];
      }
      else {
        terminal.echo('Requires an argument');
      }
    }
    //Storage
    else if (cmd.name == 'storage') {
      if (cmd.args[0] == 'get') {
        if (cmd.args[1] == '-s') {
          getSettings();
        }
        else if (cmd.args[1] == '-a') {
          getAchievements();
        }
        else if (cmd.args[1] == '--all') {
          getSettings();
          getAchievements();
        }
        else {
          terminal.echo('Unknown database');
        }
      }
      else if (cmd.args[0] == 'set') {
        if (cmd.args[1] == '-s') {
          settings.setItem(cmd.args[2], cmd.args[3]);
          terminal.echo('Saving item named "' + cmd.args[2] + '" with a value of "' + cmd.args[3] + '" to the Settings database...' );
        }
        else if (cmd.args[1] == '-a') {
          achievements.setItem(cmd.args[2], cmd.args[3])
          terminal.echo('Saving item named "' + cmd.args[2] + '" with a value of "' + cmd.args[3] + '" to the Achievements database...' );
        }
        else {
          terminal.echo('Unknown database');
        }
      }
      else if (cmd.args[0] == 'remove') {
        if (cmd.args[1] == '-s') {
          if (cmd.args[2] != undefined) {
            settings.removeItem(cmd.args[2]);
            terminal.echo('Removing item named "' + cmd.args[2] + '" from the Settings database...' );
          }
          else {
            terminal.echo('Key value required');
          }
        }
        else if (cmd.args[1] == '-a') {
          if (cmd.args[2] != undefined) {
            achievements.removeItem(cmd.args[2]);
            terminal.echo('Removing item named "' + cmd.args[2] + '" from the Achievements database...' );
          }
          else {
            terminal.echo('Key value required');
          }
        }
        else if (cmd.args[1] == '--all') {
          settings.clear();
          achievements.clear();
          terminal.echo('Removing all stored items...' );
        }
        else {
          terminal.echo('Unknown database');
        }
      }
      else {
        terminal.echo('Requires an argument');
      }
    }
    //Reload
    else if (cmd.name == 'reload') {
      var offset = cmd.args[0];
      if (cmd.args[0] != undefined) {
        terminal.echo('Reloading page in ' + offset + ' seconds...');
        setTimeout(reload, offset*1000);
        function reload() {
          location.reload();
        }
      } else {
        location.reload();
      }
    }
    //Media
    else if (cmd.name == 'media') {
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
          var volume = $("audio").prop("volume")+0.2; if(volume >1){ volume = 1; } $("audio").prop("volume",volume);
          terminal.echo('Increasing volume...');
        }
        else if (cmd.args == 'vd') {
          var volume = $("audio").prop("volume")-0.2; if(volume <0){ volume = 0; } $("audio").prop("volume",volume);
          terminal.echo('Decreasing volume...');
        }
        else if (cmd.args[0] == '-v') {
          if (cmd.args[1] != undefined) {
            var newVol = cmd.args[1];
        		var volume = $("audio").prop("volume") + newVol;
            if(volume <0){ volume = 0; } $("audio").prop("volume",volume);
          }
          terminal.echo('Setting new volume...');
        }
        else {
          terminal.echo('Unknown argument');
        }
      }
      else {
        terminal.echo('Requires an argument');
      }
    }
    //Search
    else if (cmd.name == 'search') {
      if (cmd.args[0] != undefined) {
        if (cmd.args[0] == '-g') {
      		window.open("https://www.google.com/search?q=" + cmd.rest.substr(3));
          terminal.echo('Searching Google for "' + cmd.rest.substr(3) + '"');
        }
        else if (cmd.args[0] == '-d') {
          window.open("https://duckduckgo.com/?q=" + cmd.rest.substr(3));
          terminal.echo('Searching DuckDuckGo for "' + cmd.rest.substr(3) + '"');
        }
        else if (cmd.args[0] == '-y') {
          window.open("https://www.youtube.com/results?search_query=" + cmd.rest.substr(3));
          terminal.echo('Searching YouTube for "' + cmd.rest.substr(3) + '"');
        }
        else if (cmd.args[0] == '-b') {
          window.open("https://www.bing.com/search?q=" + cmd.rest.substr(3));
          terminal.echo('Searching Bing for "' + cmd.rest.substr(3) + '"');
        }
        else {
          terminal.echo('Unknown argument');
        }
      }
      else {
        terminal.echo('Requires an argument');
      }
    }
    //Modals
    else if (cmd.name == 'modal') {
      if (cmd.args[0] != undefined) {
        if (cmd.args[0] == '-o' || cmd.args[0] == '--open') {
          if (cmd.args[1] != undefined) {
            $('#modal-' + cmd.args[1]).load('ajax/modals/'+ cmd.args[1] +'.html');
            $('#modal-'+ cmd.args[1]).modal();
          }
          else {
            terminal.echo('Requires modal name');
          }
        }
        if (cmd.args[0] == '-c' || cmd.args[0] == '--close') {
          if (cmd.args[1] != undefined) {
            $('#modal-'+ cmd.args[1]).modal('hide');
          }
          else {
            terminal.echo('Requires modal name');
          }
        }
        if (cmd.args[0] == '-l' || cmd.args[0] == '--list') {
          terminal.echo(modalsListComma);
        }
      }
      else {
        terminal.echo('Requires an argument');
      }
    }
    //Credits
    else if (cmd.name == 'credits') {
      terminal.echo("Created using <a target='_blank' rel='noopener noreferrer' href='http://terminal.jcubic.pl/'>jQuery Terminal</a> by <a target='_blank' rel='noopener noreferrer' href='http://jcubic.pl/jakub-jankiewicz/'>Jakub Jankiewicz</a>.", {raw: true});
    }
    //Tree
    else if (cmd.name == 'tree') {
      terminal.echo("<pre id='tree' class='color-white'></pre>", {raw: true});
      $('#tree').load('tree.txt');
    }
    //IP
    else if (cmd.name == 'ip') {
      $(function() {
        $.getJSON("https://api.ipify.org?format=jsonp&callback=?", function(json) {
        })
        .done(function(json) {
          terminal.echo("Your public IP address is: " + json.ip);
        })
        .fail(function() {
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
          terminal.echo('Unknown user');
        }
      }
      else {
        terminal.set_prompt('[[;#FFC157;]root@server][[;#fff;]:][[;#66a3ff;]~] [[;#DC3545;]#] ');
        terminal.echo('Switched to "root" user');
        unlimitedPowerCheck();
      }
    }
    //users
    else if (cmd.name == 'users') {
      terminal.echo(usersList);
    }
    //history
    else if (cmd.name == 'history') {
      console.log(terminal.history());
      var history = terminal.history().data();
      history.toString();
      var historyList = history.join("\n");

      if (cmd.args[0] != undefined) {
        if (cmd.args[0] == '-c' || cmd.args[0] == '--clear') {
          terminal.history().clear();
          terminal.echo('Cleared command history...');
        }
      }
      else {
        terminal.echo(historyList);
      }
    }
    //cd
    else if (cmd.name == 'cd') {
      if (cmd.args[0] != undefined) {
        terminal.set_prompt('[[;#FFC157;]guest@server][[;#fff;]:][[;#66a3ff;]'+ cmd.args[0] + ' $] ');
      } else {
        terminal.set_prompt('[[;#FFC157;]guest@server][[;#fff;]:][[;#66a3ff;]~ $] ');
      }
    }
    //JS
    else if (cmd.name == '>') {
      try {
        var result = window.eval(cmd.rest);
        if (result !== undefined) {
            this.echo(new String(result));
        }
      } catch(e) {
        this.error(new String(e));

      }
    }
    //Display
    else if (cmd.name == 'display') {
      terminal.echo(screen.width + ' ⨯ ' + screen.height);
    }
    //Less test
    else if (cmd.name == 'less') {
      if (cmd.args[0] == undefined) {
        terminal.echo('Requires an argument');
      }
      if (command.match(/ *less +[^ ]+/)) {
        terminal.pause();
        $.ajax({
            // leading and trailing spaces and keep those inside argument
            url: command.replace(/^\s+|\s+$/g, '').
            replace(/^ */, '').split(/(\s+)/).slice(2).join(''),
            method: 'GET',
            dataType: 'text',
            success: function(source) {
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
                resize.push(function() {
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
                    keydown: function(e) {
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
    //Unknown command
    else {
      terminal.echo('Unknown command');
    }
  });
});
