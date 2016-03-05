//Compiled JavaScript functions utilized on multiple pages.



//Preload - Fades out loading screen and fades in content.
$(function() {
    NProgress.start();
    $('.preload').delay(200);
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
$('#personalize').on('shown.bs.modal', function () {
  $('#name-value').focus();
  $('#name-value').select();
});

//Animated Loading Text
$("#js-rotating").Morphext({
    // The [in] animation type. Refer to Animate.css for a list of available animations.
    animation: "bounceInUp",
    // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
    separator: "|",
    // The delay between the changing of each phrase in milliseconds.
    speed: 2000,
    complete: function () {
        // Called after the entrance animation is executed.
    }
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


//Statistics Modal Functions

//Clock - Displays the time
interval = setInterval(time, 1000);
function time()
{
	var currentTime = document.getElementById("clock");
		var d = new Date();
		var t = d.toLocaleTimeString();
		document.getElementById("clock").innerHTML = t;
}

//Counter - Displays how many times you have visited the web page
var cookiec = document.cookie
if (cookiec != "") {
	var eqchr = 0;
	for (var cloop = 1; cloop <= cookiec.length; cloop++) {
		if (cookiec.charAt(cloop) == "=") {
			eqchr=(++cloop);
		}
	}
	var cookiess = 0;
	clength=cookiec.length;
	cookies="";
	for (cloop = eqchr; cloop < clength; cloop++) {
		if (cookiec==";") {
			cloop=clength;
		}
		else {
			cookies = cookies + cookiec.charAt(cloop);
		}
	}
	cookiess = parseInt(cookies);
  $('#requests').append(" " + cookiess + " ");
	cookiess++;
	cookies = cookiess;
	var one_week = 7 * 24 * 60 * 60 * 1000;
	var expDate = new Date();
	expDate.setTime(expDate.getTime() + one_week);
	document.cookie = "Counter=" + escape(cookies) + "; expires=" + expDate.toGMTString();
}
else {
	var one_week = 7 * 24 * 60 * 60 * 1000;
	var expDate = new Date();
	expDate.setTime(expDate.getTime() + one_week);
	document.cookie = "Counter=2; expires=" + expDate.toGMTString();
  $('#requests').append("1");
}

//OS - Detects the user's OS.
var OSName="Unknown OS";
if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";
$('#os').append(OSName);

//Browser - Detects the user's browser name and version
var nVer = navigator.appVersion;
var nAgt = navigator.userAgent;
var browserName  = navigator.appName;
var fullVersion  = ''+parseFloat(navigator.appVersion);
var majorVersion = parseInt(navigator.appVersion,10);
var nameOffset,verOffset,ix;

// In Opera 15+, the true version is after "OPR/"
if ((verOffset=nAgt.indexOf("OPR/"))!=-1) {
 browserName = "Opera";
 fullVersion = nAgt.substring(verOffset+4);
}
// In older Opera, the true version is after "Opera" or after "Version"
else if ((verOffset=nAgt.indexOf("Opera"))!=-1) {
 browserName = "Opera";
 fullVersion = nAgt.substring(verOffset+6);
 if ((verOffset=nAgt.indexOf("Version"))!=-1)
   fullVersion = nAgt.substring(verOffset+8);
}
// In MSIE, the true version is after "MSIE" in userAgent
else if ((verOffset=nAgt.indexOf("MSIE"))!=-1) {
 browserName = "Microsoft Internet Explorer";
 fullVersion = nAgt.substring(verOffset+5);
}
// In Chrome, the true version is after "Chrome"
else if ((verOffset=nAgt.indexOf("Chrome"))!=-1) {
 browserName = "Chrome";
 fullVersion = nAgt.substring(verOffset+7);
}
// In Safari, the true version is after "Safari" or after "Version"
else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
 browserName = "Safari";
 fullVersion = nAgt.substring(verOffset+7);
 if ((verOffset=nAgt.indexOf("Version"))!=-1)
   fullVersion = nAgt.substring(verOffset+8);
}
// In Firefox, the true version is after "Firefox"
else if ((verOffset=nAgt.indexOf("Firefox"))!=-1) {
 browserName = "Firefox";
 fullVersion = nAgt.substring(verOffset+8);
}
// In most other browsers, "name/version" is at the end of userAgent
else if ( (nameOffset=nAgt.lastIndexOf(' ')+1) <
          (verOffset=nAgt.lastIndexOf('/')) )
{
 browserName = nAgt.substring(nameOffset,verOffset);
 fullVersion = nAgt.substring(verOffset+1);
 if (browserName.toLowerCase()==browserName.toUpperCase()) {
  browserName = navigator.appName;
 }
}
// trim the fullVersion string at semicolon/space if present
if ((ix=fullVersion.indexOf(";"))!=-1)
   fullVersion=fullVersion.substring(0,ix);
if ((ix=fullVersion.indexOf(" "))!=-1)
   fullVersion=fullVersion.substring(0,ix);

majorVersion = parseInt(''+fullVersion,10);
if (isNaN(majorVersion)) {
 fullVersion  = ''+parseFloat(navigator.appVersion);
 majorVersion = parseInt(navigator.appVersion,10);
}

$('#browser').append(''
  +''+browserName+' '
  +'v'+majorVersion+''
);
