/* Ask questions about the website and it will give you information */

function help() 
{
	var query = prompt("What can I help you with?");
	
	if (query != null)
	{
		document.getElementById("query").innerHTML =
		"I am sorry, I do not recognize the query, " + query + ", please check to make sure you typed it correctly.<br>Some things you can ask me are...<br><br>Who is the owner?"
		
		if (query == "Who is the owner?" || (query == "who is the owner?") || (query == "Who is the owner") || (query == "who is the owner?"))
		document.getElementById("query").innerHTML =
		"The owner of this website is InvisaMage."
		
		if (query == "Kevin" || (query == "kevin") || (query == "Matt") || (query == "matt") || (query == "Matthew") || (query == "matthew") || (query == "Tanner") || (query == "tanner") || (query == "Carson") || (query == "carson") || (query == "Chris") || (query == "chris"))
		document.getElementById("query").innerHTML =
		"Hello good friend and welcome to my Website."
		
		if (query == "Dan" || (query == "dan") || (query == "Daniel") || (query == "daniel") || (query == "Dad") || (query == "dad") || (query == "Father") || (query == "father"))
		document.getElementById("query").innerHTML =
		"Hello father and welcome to my Website."
		
		if (query == "Connie" || (query == "connie") || (query == "Mom") || (query == "mom") || (query == "Mother") || (query == "mother"))
		document.getElementById("query").innerHTML =
		"Hello mother and welcome to my Website."
		
		if (query == "Kim" || (query == "kim") || (query == "Emily") || (query == "emily"))
		document.getElementById("query").innerHTML =
		"Hello miss and welcome to my Website."
		
		if (query == "Rachel" || (query == "rachel"))
		document.getElementById("query").innerHTML =
		"Hello femake and welcome to my Website."
		
		if (query == "Brian" || (query == "brian"))
		document.getElementById("query").innerHTML =
		"Hello brother and welcome to my Website."
		
		if (query == "David" || (query == "david"))
		document.getElementById("query").innerHTML =
		"Hello peasant.<br>You are not welcome here."
		
		if (query == "" || (query == " "))
		document.getElementById("query").innerHTML =
		"Your query goes in that box"
	}
}