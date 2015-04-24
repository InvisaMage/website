/* Message on start up */
function msg()
{
	alert("The mobile version of the site is still being tested and may not work correctly.\nPlease contact me if you experience any major problems.");
}

/* Thanks the user with a message */
function yes()
{
	alert("You have chosen... wisely.");
}

/* Gives regards and redirects to Google */
function no() 
{
	alert("You chose poorly.");
	window.location = "http://www.google.com";
}

/* "Hide Ads" Easter Egg */
function ads()
{
	alert("You must be seeing things.\nI don't see any ads.");
}