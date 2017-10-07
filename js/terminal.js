(function($) {
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
            height: windowHeight-55,
            enabled: false,
            completion: ['help', 'reload', 'close', 'date', 'time', 'reset', 'modal', 'cookies', 'media', 'go', 'anchor',
            'snowstorm', 'echo', 'less', 'clear', 'credits', 'search'],
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

    var modals = ['achievements', 'archive', 'contact', 'cookies', 'donate', 'eastereggs', 'hide-ads', 'privacy-no',
    'privacy-yes', 'reload', 'search-help', 'settings', 'shortcuts', 'stats', 'terms-no', 'terms-yes'];
    modals.toString();

    var modalsList = modals.join(", ").replaceAll(",", " |");

    var commands = [];

    /*
    for (i = 0; i < modals.length; i++) {
      console.log(modals[i]);
    }
    */

    //help
    if (cmd.name == 'help') {
      if (cmd.args == 'media') {
        terminal.echo('   media - Control the audio playing on the page')
        terminal.echo('   Usage: media [play | pause | vu | vd]')
      }
      else if (cmd.args == 'modal') {
        terminal.echo('   modal - Load a modal')
        terminal.echo('   Usage: modal [ (-o | -c) ' + modalsList + ']');
        terminal.echo('   -o -Opens modal');
        terminal.echo('   -c -Closes modal');
      }
      else if (cmd.args == 'go') {
        terminal.echo('   go - Go to a file located on the server or an external website')
        terminal.echo('   Usage: go [local file | website]');
        terminal.echo('   Examples: go [info.html | images/txtlock/txtlock1.png | https://google.com]');
      }
      else if (cmd.args == 'anchor') {
        terminal.echo('   anchor - Jump to an element\'s ID on the current page')
        terminal.echo('   Usage: anchor [element ID]');
      }
      else if (cmd.args == 'snowstorm') {
        terminal.echo('   snowstorm - Interface with the snowstorm function')
        terminal.echo('   Usage: snowstorm [load | toggle | freeze | resume | wind | melt]');
      }
      else if (cmd.args == 'cookies') {
        terminal.echo('   cookies - Manipulate cookies on the site')
        terminal.echo('   Usage: cookies [get | remove <cookie name>]');
      }
      else if (cmd.args == 'less') {
        terminal.echo('   less - View a file one line at a time')
        terminal.echo('   Usage: less [filename.extension]');
        terminal.echo('   Press q to quit');
      }
      else if (cmd.args == 'search') {
        terminal.echo('   search - Send input to a search engine in a new tab')
        terminal.echo('   Usage: search [-g | -d | -y | -b query]');
        terminal.echo('   Example: search [-g invisamage | -y AntVenom]');
      }
      else if (cmd.args == 'reload') {
        terminal.echo('   reload - Reloads the current page')
        terminal.echo('   Usage: reload [# of seconds]');
        terminal.echo('   Example: reload [(no number) | 5]');
      }
      else if (cmd.args == '') {
        terminal.echo('Available commands:');
        terminal.echo('   | help            -Shows this');
        terminal.echo('   |');
        terminal.echo('   | date            -Displays the current date');
        terminal.echo('   | time            -Returns the current time');
        terminal.echo('   | echo            -Prints arguments given to the terminal');
        terminal.echo('   |');
        terminal.echo('   | media           -Control the audio playing on the page');
        terminal.echo('   | modal           -Load a modal');
        terminal.echo('   | go              -Navigate to a file located on the server or an external website');
        terminal.echo('   | anchor          -Jump to an element\'s ID on the current page');
        terminal.echo('   | search          -Send input to a search engine in a new tab');
        terminal.echo('   | snowstorm       -Interface with the snowstorm function');
        terminal.echo('   | cookies         -Manipulate cookies on the site');
        terminal.echo('   | less            -View a file one line at a time');
        terminal.echo('   |');
        terminal.echo('   | credits         -Learn how this was made');
        terminal.echo('   | reload          -Reloads the current page');
        terminal.echo('   | clear           -Clears the terminal');
        terminal.echo('   | reset           -Resets the Terminal to default state');
        terminal.echo('   | close           -Hides the terminal');
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
      var now = new Date();
      hr = now.getHours().toString();
      min = now.getMinutes().toString();
      sec = now.getSeconds().toString();
      terminal.echo(hr+':'+min+':'+sec);
    }
    //Date
    else if (cmd.name == 'date') {
      var now = new Date();
      terminal.echo(now);
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
    //Cookies
    else if (cmd.name == 'cookies') {
      if (cmd.args[0] == 'get') {
        var cookiesString = JSON.stringify(Cookies.get());
        var newLine = cookiesString.replaceAll(",", '\n');
        var rm1 = newLine.replaceAll("{", '');
        var rm2 = rm1.replaceAll("}", '');
        terminal.echo(rm2);
      }
      else if (cmd.args[0] == 'remove') {
        if (cmd.args[1] != undefined) {
          Cookies.remove(cmd.args[1]);
          terminal.echo('Removing ' + cmd.args[1] + ' cookie...');
        }
        else {
          terminal.echo('Cookie name required');
        }
      }
      else {
        terminal.echo('Requires an argument');
      }
      if ($.isEmptyObject(Cookies.get()) && (cmd.args[0] == 'get')) {
        terminal.echo('No cookies found!');
      }
    }
    //Reload
    else if (cmd.name == 'reload') {
      var offset = cmd.args[0];
      var history = terminal.history();
      history.disable();
      terminal.push(function(command) {
          if (command.match(/^(y|yes)$/i)) {
            terminal.echo('Reloading page in ' + offset + ' seconds...');
            setTimeout(reload, offset*1000);
            function reload() {
              location.reload();
            }
              terminal.pop();
              history.enable();
          } else if (command.match(/^(n|no)$/i)) {
              terminal.pop();
              history.enable();
          }
      }, {
          prompt: 'Are you sure? [y|n] '
      });
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
        else if (cmd.args == '-y') {
          window.open("https://www.youtube.com/results?search_query=" + cmd.rest.substr(3));
          terminal.echo('Searching YouTube for "' + cmd.rest.substr(3) + '"');
        }
        else if (cmd.args == 'vd') {
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
        if (cmd.args[0] == '-o') {
          if (cmd.args[1] != undefined) {
            $('#modal-' + cmd.args[1]).load('ajax/modals/'+ cmd.args[1] +'.html');
            $('#modal-'+ cmd.args[1]).modal();
          }
          else {
            terminal.echo('Requires an argument');
          }
        }
        if (cmd.args[0] == '-c') {
          if (cmd.args[1] != undefined) {
            $('#modal-'+ cmd.args[1]).modal('hide');
          }
          else {
            terminal.echo('Requires an argument');
          }
        }
      }
      else {
        terminal.echo('Requires an argument');
      }
    }
    //Credits
    else if (cmd.name == 'credits') {
      terminal.echo("Created using <a class='link' target='_blank' rel='noopener noreferrer' href='http://terminal.jcubic.pl/'>jquery Terminal</a>", {raw: true});
    }
    //Tree
    else if (cmd.name == 'tree') {
      terminal.echo("<pre id='tree' class='color-white'></pre>", {raw: true});
      $('#tree').load('tree.txt');
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
