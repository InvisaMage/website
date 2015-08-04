/* If name is listed below, special message is displayed. If not, input is displayed */

function namePrompt() 
{
	var name = prompt("Who am I addressing?");
	
	if (name != null)
	{
		document.getElementById("name").innerHTML =
		"Hello " + name + " and welcome to <a class=a title=About href=about.html#InvisaMage>InvisaMage</a>'s Website.<br>I hope you enjoy your stay."
		
		if (name == "InvisaMage" || (name == "invisamage") || (name == "Travis") || (name == "travis"))
		document.getElementById("name").innerHTML =
		"Hello creator and welcome back to your website.<br>Is there anything that I can do for you?"
		
		if (name == "Kevin" || (name == "kevin") || (name == "Matt") || (name == "matt") || (name == "Matthew") || (name == "matthew") || (name == "Tanner") || (name == "tanner") || (name == "Carson") || (name == "carson") || (name == "Chris") || (name == "chris"))
		document.getElementById("name").innerHTML =
		"Hello good friend and welcome to my Website."
		
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
		
		if (name == "" || (name == " ") || (name == "undefined"))
		document.getElementById("name").innerHTML =
		"Your name goes in that box but anyway, welcome to <a class=a title=About href=about.html#InvisaMage>InvisaMage</a>'s Website."
	}
}