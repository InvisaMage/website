// Auto Typeing
$.fn.typer = function(text, options){
    options = $.extend({}, {
        char: ' ',
        delay: 1000,
        duration: 600,
        endless: false,
    }, options || text);

    text = $.isPlainObject(text) ? options.text : text;

    var elem = $(this),
        isTag = false,
        c = 0;

    (function typetext(i) {
        var e = ({string:1, number:1}[typeof text] ? text : text[i]) + options.char,
            char = e.substr(c++, 1);

        if( char === '<' ){ isTag = true; }
        if( char === '>' ){ isTag = false; }
        elem.html(e.substr(0, c));
        if(c <= e.length){
            if( isTag ){
                typetext(i);
            } else {
                setTimeout(typetext, options.duration/10, i);
            }
        } else {
            c = 0;
            i++;

            if (i === text.length && !options.endless) {
                return;
            } else if (i === text.length) {
                i = 0;
            }
            setTimeout(typetext, options.delay, i);
        }
    })(0);
};

$('#type-news').typer(["This page is information related to website changes and project updates. <br> Most of this is an archive for my reference but some of you might be interested."]);
$('#type-fs').typer(["Floating Survival, or FS for short, is a Minecraft adventure/survival map. <br> I work on it in my free time and when I'm really bored. <br> I'd appreciate any feedback that you have on it."]);
$('#type-contact').typer(["Questions, Comments, Suggestions, <a class='link' href='fs.html'>Floating Survival</a> problems?"]);
$('#type-donate').typer(["If you enjoy what I do, a donation would be extreamly appreciated."]);
$('#type-about').typer(["This page is more information about the developer, creation of this website, and its contents."]);
$('#type-terms').typer(["By using this website, you agree to the following terms and conditions..."]);
$('#type-privacy').typer(["By using this website, you agree to the following privacy policy..."]);
// $('#type-home').typer([""]);
