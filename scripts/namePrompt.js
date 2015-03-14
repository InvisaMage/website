/* If name is listed below, special message is displayed. If not, input is displayed */

function namePrompt() 
{
	var name = prompt("Who am I addressing?");
	
	if (name != null)
	{
		document.getElementById("name").innerHTML =
		"Hello " + name + " and welcome to <a class=link title=About href=about.html#InvisaMage>InvisaMage</a>'s Website.<br>I hope you enjoy your stay."
		
		if (name == "InvisaMage" || (name == "invisamage") || (name == "Travis") || (name == "travis"))
		document.getElementById("name").innerHTML =
		"Hello creator and welcome back to your website.<br>Here are some links I thought you might like.<br><br><a class=link title=Repository href=https://bitbucket.org/InvisaMage/website/>BitBucket</a>"
		
		if (name == "Matt" || (name == "matt") || (name == "Matthew") || (name == "matthew") || (name == "Tanner") || (name == "tanner") || (name == "Carson") || (name == "carson") || (name == "Chris") || (name == "chris"))
		document.getElementById("name").innerHTML =
		"Hello good friend and welcome back to my Website."
		
		if (name == "Kevin" || (name == "kevin"))
		document.getElementById("name").innerHTML =
		"Hello good friend and welcome back to my Website.<br>Thanks for hosting.<br><br><a class=link title=Host href=http://www.chaoswebs.cf/>http://www.chaoswebs.cf/</a>"
		
		if (name == "Dan" || (name == "dan") || (name == "Daniel") || (name == "daniel") || (name == "Dad") || (name == "dad") || (name == "Father") || (name == "father"))
		document.getElementById("name").innerHTML =
		"Hello father and welcome to my Website."
		
		if (name == "Connie" || (name == "connie") || (name == "Mom") || (name == "mom") || (name == "Mother") || (name == "mother"))
		document.getElementById("name").innerHTML =
		"Hello mother and welcome to my Website."
		
		if (name == "Kim" || (name == "kim") || (name == "Emily") || (name == "emily"))
		document.getElementById("name").innerHTML =
		"Hello miss and welcome to my Website."
		
		if (name == "Rachel" || (name == "rachel"))
		document.getElementById("name").innerHTML =
		"Hello femake and welcome to my Website."
		
		if (name == "Brian" || (name == "brian"))
		document.getElementById("name").innerHTML =
		"Hello brother and welcome to my Website."
		
		if (name == "David" || (name == "david"))
		document.getElementById("name").innerHTML =
		"Hello peasant.<br>You are not welcome here."
		
		if (name == "Jenny" || (name == "jenny"))
		document.getElementById("name").innerHTML =
		"Jenny, I've got your number.<br>867-5309"
		
		if (name == "8675309" || (name == "867-5309"))
		document.getElementById("name").innerHTML =
		"Hey, that's Jenny's number."
		
		if (name == "Stacy" || (name == "stacy"))
		document.getElementById("name").innerHTML =
		"Your mom has got it going on."
		
		if (name == "Jessie" || (name == "jessie"))
		document.getElementById("name").innerHTML =
		"Why can't I find a woman like that?"
		
		if (name == "Jesus" || (name == "jesus"))
		document.getElementById("name").innerHTML =
		"So, it looks like you're back.<br>Now what?"
		
		if (name == "Cortana" || (name == "cortana"))
		document.getElementById("name").innerHTML =
		"How can I help you?"
		
		if (name == "Siri" || (name == "siri"))
		document.getElementById("name").innerHTML =
		"What can I help you with?"
		
		if (name == "Spock" || (name == "spock"))
		document.getElementById("name").innerHTML =
		"Live long, and prosper.<br>Leonard Nimoy, 1931-2015"

		if (name == "" || (name == " ") || (name == "undefined"))
		document.getElementById("name").innerHTML =
		"Your name goes in that box but anyway, welcome to <a class=link title=About href=about.html#InvisaMage>InvisaMage</a>'s Website."
	}
}