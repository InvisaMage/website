// If name is listed below, special message is displayed. If not, input is displayed

function namePrompt() 
{
	var name = prompt("Who am I addressing?");
	
	if (name != null)
	{
//Default
		document.getElementById("name").innerHTML =
		"Hello " + name + " and welcome to <a class=link title=About href=about.html#InvisaMage>InvisaMage</a>'s Website.<br>I hope you enjoy your stay."
//Creator Message
		if (name == "InvisaMage" || (name == "invisamage") || (name == "Travis") || (name == "travis"))
		document.getElementById("name").innerHTML =
		"Hello creator and welcome back to your Website.<br>Here are some links I thought you might like.<br><br><span class='homeSection'><h3>Links</h3><a class=link title='Repository' href=https://github.com/>GitHub</a><br><a class=link title='Online IDE' href=https://ide.c9.io>Cloud9</a><br><a class=link title='Telegram Web Client' href=https://web.telegram.org/>Telegram Web</a></span>"
//Friends
		if (name == "Matt" || (name == "matt") || (name == "Matthew") || (name == "matthew") || (name == "Tanner") || (name == "tanner") || (name == "Carson") || (name == "carson") || (name == "Chris") || (name == "chris"))
		document.getElementById("name").innerHTML =
		"Hello good friend and welcome back to my Website."
//Kevin - Host
		if (name == "Kevin" || (name == "kevin"))
		document.getElementById("name").innerHTML =
		"Hello good friend and welcome back to my Website.<br>Thanks for hosting.<br><br><a class=link title=Host href=http://www.chaoswebs.cf/>http://www.chaoswebs.cf/</a>"
//Father	
		if (name == "Dan" || (name == "dan") || (name == "Daniel") || (name == "daniel") || (name == "Dad") || (name == "dad") || (name == "Father") || (name == "father"))
		document.getElementById("name").innerHTML =
		"Hello father and welcome back to my Website."
//Mother
		if (name == "Connie" || (name == "connie") || (name == "Mom") || (name == "mom") || (name == "Mother") || (name == "mother"))
		document.getElementById("name").innerHTML =
		"Hello mother and welcome back to my Website."
//Emily - Audio
		if (name == "Emily" || (name == "emily"))
		document.getElementById("name").innerHTML =
		"Hello miss and welcome back to my Website.<br><br><span class='homeSection'><h2>You Are The Woman</h2><audio controls autoplay><source src='./res/woman.mp3' type='audio/mpeg'><source src='https://www.googledrive.com/host/0B29-yEHUjNU3a1BhczlZS3ZyLUU' type='audio/mpeg'></audio></span>"
//Kim
		if (name == "Kim" || (name == "kim"))
		document.getElementById("name").innerHTML =
		"Hello miss and welcome back to my Website."
//Rachel
		if (name == "Rachel" || (name == "rachel"))
		document.getElementById("name").innerHTML =
		"Hello femake and welcome back to my Website."
//Brian
		if (name == "Brian" || (name == "brian"))
		document.getElementById("name").innerHTML =
		"Hello brother and welcome back to my Website."
//David - Audio
		if (name == "David" || (name == "david"))
		document.getElementById("name").innerHTML =
		"Tell me David, what's the answer?<br><br><span class='homeSection'><h2>Remember David</h2><audio controls autoplay><source src='./res/david.mp3' type='audio/mpeg'><source src='https://www.googledrive.com/host/0B29-yEHUjNU3Y1lKNkFaUHZIRFU' type='audio/mpeg'></audio></span>"
//Jenny - Audio
		if (name == "Jenny" || (name == "jenny"))
		document.getElementById("name").innerHTML =
		"Jenny, I've got your number.<br>867-5309<br><br><span class='homeSection'><h2>867-5309/Jenny</h2><audio controls autoplay><source src='./res/jenny.mp3' type='audio/mpeg'><source src='https://www.googledrive.com/host/0B29-yEHUjNU3Znk3bWswQWpIaEE' type='audio/mpeg'></audio></span>"
//Jenny
		if (name == "8675309" || (name == "867-5309"))
		document.getElementById("name").innerHTML =
		"Hey, that's Jenny's number."
//Stacy - Audio
		if (name == "Stacy" || (name == "stacy"))
		document.getElementById("name").innerHTML =
		"Stacy, your mom has got it going on.<br><br><span class='homeSection'><h2>Stacy's Mom</h2><audio controls autoplay><source src='./res/stacy.mp3' type='audio/mpeg'><source src='https://www.googledrive.com/host/0B29-yEHUjNU3aE1mMXhzXzNJNFU' type='audio/mpeg'></audio></span>"
//Jessie - Audio
		if (name == "Jessie" || (name == "jessie"))
		document.getElementById("name").innerHTML =
		"Why can't I find a woman like that?<br><br><span class='homeSection'><h2>Jessie's Girl</h2><audio controls autoplay><source src='./res/jessie.mp3' type='audio/mpeg'><source src='https://www.googledrive.com/host/0B29-yEHUjNU3RjJaVkoxdzVTTjg' type='audio/mpeg'></audio></span>"
//Jesus
		if (name == "Jesus" || (name == "jesus"))
		document.getElementById("name").innerHTML =
		"So, it looks like you're back.<br>Now what?"
//Cortana
		if (name == "Cortana" || (name == "cortana"))
		document.getElementById("name").innerHTML =
		"How can I help you?"
//Siri
		if (name == "Siri" || (name == "siri"))
		document.getElementById("name").innerHTML =
		"What can I help you with?"
//Spock
		if (name == "Spock" || (name == "spock"))
		document.getElementById("name").innerHTML =
		"Live long, and prosper.<br>Leonard Nimoy, 1931-2015"
//Mirth
		if (name == "Mirth" || (name == "mirth"))
		document.getElementById("name").innerHTML =
		"<span class='homeSection'><h3>Mirth</h3><a class='link' title='Funny Windows Web Emulator' href='http://www.windows93.net/'>WINDOWS93.net</a><br><a class='link' title='Restart old Operating Systems' href='http://www.therestartpage.com/'>The Restart Page</a><br><a class='link' title='AI' href='http://www.cleverbot.com/'>Cleverbot</a></span>"
//Software
		if (name == "Software" || (name == "software"))
		document.getElementById("name").innerHTML =
		"<span class='homeSection'><h3>Software</h3><a class='link' title='Cross Platform Messaging Application' href='https://telegram.org/'>Telegram</a><br><a class='link' title='Office Suite' href='http://www.libreoffice.org/'>LibreOffice</a><br><a class='link' title='Text Editor' href='http://notepad-plus-plus.org/'>Notepad++</a><br><a class='link' title='Free Antivirus' href='http://www.avast.com/en-us/index'>Avast</a><br><a class='link' title='Password Manager' href='http://keepass.info/'>KeePass</a><br><a class='link' title='Software Downloader' href='https://ninite.com/'>Ninite</a><br><a class='link' title='Virtual Machine Software' href='https://www.virtualbox.org/'>Oracle Virtual Box</a><br><a class='link' title='Desktop Customization Tool' href='http://rainmeter.net/'>Rainmeter</a><br><a class='link' title='Portable Applications for USB Device' href='http://portableapps.com/'>PortableApps</a><br><a class='link' title='Image Editor' href='http://www.getpaint.net/'>Paint.NET</a><br><a class='link' title='3D Rendering' href='http://www.blender.org/'>Blender</a><br><a class='link' title='Audio Editor' href='http://audacity.sourceforge.net/'>Audacity</a></span>"
//Curses - Audio
		if (name == "Fuck" || (name == "fuck") || (name == "Bitch") || (name == "bitch") || (name == "Shit") || (name == "shit") || (name == "Cunt") || (name == "cunt") || (name == "Fucker") || (name == "fucker") || (name == "fuck") || (name == "Damn") || (name == "damn") || (name == "Bastard") || (name == "bastard") || (name == "Cock") || (name == "cock") || (name == "Dick") || (name == "dick") || (name == "Hoe") || (name == "hoe") || (name == "Jackass") || (name == "jackass") || (name == "bastard") || (name == "Nigger") || (name == "nigger") || (name == "Nigga") || (name == "nigga"))
		document.getElementById("name").innerHTML =
		"Hey, that's not nice!<br><audio autoplay preload='auto'><source src='./res/beep.mp3' type='audio/mpeg'><source src='https://www.googledrive.com/host/0B29-yEHUjNU3NUpWTTVoRnBGSXM' type='audio/mpeg'></audio>"		
//Reset
		if (name == "Reset" || (name == "reset") || (name == "Clear") || (name == "clear") || (name == "cls"))
		document.getElementById("name").innerHTML =
		"Welcome to <a class='link' title='About' href='about.html#InvisaMage'>InvisaMage</a>'s Website."
//No name - Audio
		if (name == "" || (name == " ") || (name == "undefined"))
		document.getElementById("name").innerHTML =
		"Your name goes in that box but anyway, welcome to <a class=link title=About href=about.html#InvisaMage>InvisaMage</a>'s Website.<br><br><span class='homeSection'><h2>What's Your Name</h2><audio controls autoplay><source src='./res/name.mp3' type='audio/mpeg'><source src='https://www.googledrive.com/host/0B29-yEHUjNU3OGducF9kRVU1dFE' type='audio/mpeg'></audio></span>"
	}
}