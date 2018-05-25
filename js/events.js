/*!
 * Proudly coded by Travis Kipp
 * Created September 30, 2016
 * Events
 *
 * Determines user's system date and displays a banner on the Homepage if there's an event for the given date.
 */

//Hide Event Banner on page load
$('#event-banner').toggle();

//Initialize built in date function
var date = new Date;

//New Year
if (date.getMonth() === 0 && (date.getDate() == 1)) {
  	document.getElementById("event-banner-content").innerHTML =
    "Happy New Year!<br>" +
    "Did you make any New Year's resolutions?";
    $('#event-banner').toggle();
}
//Star Wars Day
if (date.getMonth() == 4 && (date.getDate() == 4)) {
  	document.getElementById("event-banner-content").innerHTML =
    "Happy Star Wars Day!<br>" +
    "May the fourth be with you!";
    $('#event-banner').toggle();
}
//Independence Day
if (date.getMonth() == 6 && (date.getDate() == 4)) {
  	document.getElementById("event-banner-content").innerHTML =
    "Happy Independence Day!<br>" +
    "BBQ time!";
    $('#event-banner').toggle();
}
//Owner's birthday
if (date.getMonth() == 8 && (date.getDate() == 28)) {
  	document.getElementById("event-banner-content").innerHTML =
    "Today is the owner's birthday.<br>" +
    "Happy Birthday Travis!";
    $('#event-banner').toggle();
}
//Veterans Day
if (date.getMonth() == 9 && (date.getDate() == 11)) {
  document.getElementById("event-banner-content").innerHTML =
  "Veterans Day<br>" +
  "Be sure to thank a Veteran.";
  $('#event-banner').toggle();
}
//Halloween
if (date.getMonth() == 9 && (date.getDate() == 31)) {
  	document.getElementById("event-banner-content").innerHTML =
    "Happy Holloween!<br>" +
		"Are you going to get any candy?";
    $('#event-banner').toggle();
}
//Christmas eve
if (date.getMonth() == 11 && (date.getDate() == 24)) {
  	document.getElementById("event-banner-content").innerHTML =
    "Christmas Eve<br>" +
		"'Tis the night before Christmas...";
    $('#event-banner').toggle();
}
//Christmas
if (date.getMonth() == 11 && (date.getDate() == 25)) {
  	document.getElementById("event-banner-content").innerHTML =
    "Merry Christmas!<br>" +
		"<a onclick='loadSnowstormNamePrompt();'>Let it Snow!</a>";
    $('#event-banner').toggle();
}
