// If name is listed below, special message is displayed. If not, input is displayed

function namePrompt()
{
	var name = prompt("What is your name?")

	if (name != null)
	{
//Default
		document.getElementById("name").innerHTML =
		"Hello " + name + " and welcome to <a class='definition' data-toggle='tooltip' data-placement='bottom' title='A 17 year old human male who likes web technologies and assorted games.'>InvisaMage</a>'s Website.<br>I hope you enjoy your stay."
//Creator Message
		if (name == "InvisaMage" || (name == "invisamage") || (name == "Travis") || (name == "travis"))
		document.getElementById("name").innerHTML =
		"Hello creator and welcome back to your Website.<br>Here are some links I thought you might like.<br><br><span class='homeSection'><h3>Links</h3><span class='hint--right' data-hint='Repository'><a class='link' href='https://github.com/'>GitHub</a></span><br><span class='hint--right' data-hint='Online IDE'><a class='link' href='https://ide.c9.io'>Cloud9</a></span><br><span class='hint--right' data-hint='Telegram Web Client'><a class='link' href='https://web.telegram.org/'>Telegram Web</a></span>"
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
		"Hello miss and welcome back to my Website.<br><br><span class='homeSection'><h2>You Are The Woman</h2><audio controls autoplay><source src='./audio/woman.mp3' type='audio/mpeg'><source src='https://www.googledrive.com/host/0B29-yEHUjNU3a1BhczlZS3ZyLUU' type='audio/mpeg'></audio></span>"
//Kim
		if (name == "Kim" || (name == "kim"))
		document.getElementById("name").innerHTML =
		"Hello miss and welcome back to my Website."
//Rachel
		if (name == "Rachel" || (name == "rachel"))
		document.getElementById("name").innerHTML =
		"Hello <a class='definition' data-toggle='tooltip' data-placement='bottom' title='An endangered subspecies of humans which are incapable of reproducing.'>femake</a> and welcome back to my Website."
//Tony
		if (name == "Tony" || (name == "tony"))
		document.getElementById("name").innerHTML =
		"Hello <a class='definition' data-toggle='tooltip' data-placement='bottom' title='An endangered subspecies of humans which are incapable of reproducing.'>femake</a> lover and welcome back to my Website."
//Joe
		if (name == "Joe" || (name == "joe") || (name == "Joey") || (name == "joey"))
		document.getElementById("name").innerHTML =
		"Hello nerd and welcome back to my Website."
//Brian
		if (name == "Brian" || (name == "brian"))
		document.getElementById("name").innerHTML =
		"Hello brother and welcome back to my Website."
//David - Audio
		if (name == "David" || (name == "david"))
		document.getElementById("name").innerHTML =
		"Tell me David, what's the answer?<br><br><span class='homeSection'><h2>Remember David</h2><audio controls autoplay><source src='./audio/david.mp3' type='audio/mpeg'><source src='https://www.googledrive.com/host/0B29-yEHUjNU3Y1lKNkFaUHZIRFU' type='audio/mpeg'></audio></span>"
//Jenny - Audio
		if (name == "Jenny" || (name == "jenny"))
		document.getElementById("name").innerHTML =
		"Jenny, I've got your number.<br>867-5309<br><br><span class='homeSection'><h2>867-5309/Jenny</h2><audio controls autoplay><source src='./audio/jenny.mp3' type='audio/mpeg'><source src='https://www.googledrive.com/host/0B29-yEHUjNU3Znk3bWswQWpIaEE' type='audio/mpeg'></audio></span>"
//Jenny
		if (name == "8675309" || (name == "867-5309"))
		document.getElementById("name").innerHTML =
		"Hey, that's Jenny's number."
//Stacy - Audio
		if (name == "Stacy" || (name == "stacy"))
		document.getElementById("name").innerHTML =
		"Stacy, your mom has got it going on.<br><br><span class='homeSection'><h2>Stacy's Mom</h2><audio controls autoplay><source src='./audio/stacy.mp3' type='audio/mpeg'><source src='https://www.googledrive.com/host/0B29-yEHUjNU3aE1mMXhzXzNJNFU' type='audio/mpeg'></audio></span>"
//Jessie - Audio
		if (name == "Jessie" || (name == "jessie"))
		document.getElementById("name").innerHTML =
		"Why can't I find a woman like that?<br><br><span class='homeSection'><h2>Jessie's Girl</h2><audio controls autoplay><source src='./audio/jessie.mp3' type='audio/mpeg'><source src='https://www.googledrive.com/host/0B29-yEHUjNU3RjJaVkoxdzVTTjg' type='audio/mpeg'></audio></span>"
//Leah - Audio
		if (name == "Leah" || (name == "leah"))
		document.getElementById("name").innerHTML =
		"Oh hey Leah. Look, it's your favourite song.<br><br><span class='homeSection'><h2>Ah Leah</h2><audio controls autoplay><source src='./audio/leah.mp3' type='audio/mpeg'><source src='https://www.googledrive.com/host/0B29-yEHUjNU3WHl4a2xNSDBjRGc' type='audio/mpeg'></audio></span>"
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
		"<span class='homeSection'><h3>Mirth</h3><span class='hint--right' data-hint='Funny Windows Web Emulator'><a class='link' href='http://www.windows93.net/'>WINDOWS93.net</a></span><br><span class='hint--right' data-hint='Restart old Operating Systems'><a class='link' href='http://www.therestartpage.com/'>The Restart Page</a></span><br><span class='hint--right' data-hint='AI'><a class='link' href='http://www.cleverbot.com/'>Cleverbot</a></span></span>"//Software
//Software
		if (name == "Software" || (name == "software"))
		document.getElementById("name").innerHTML =
		"<span class='homeSection'><h3>Software</h3><span class='hint--right' data-hint='Free Open source Internet Browser by Mozilla'><a class='link' href='www.firefox.com'>Mozilla Firefox</a></span><br><span class='hint--right' data-hint='Cross Platform Messaging Application'><a class='link' href='https://telegram.org/'>Telegram</a></span><br><span class='hint--right' data-hint='Office Suite'><a class='link' href='http://www.libreoffice.org/'>LibreOffice</a></span><br><span class='hint--right' data-hint='Text Editor'><a class='link' href='http://notepad-plus-plus.org/'>Notepad++</a></span><br><span class='hint--right' data-hint='Free Antivirus'><a class='link' href='http://www.avast.com/en-us/index'>Avast</a></span><br><span class='hint--right' data-hint='Password Manager'><a class='link' href='http://keepass.info/'>KeePass</a></span><br><span class='hint--right' data-hint='Software Downloader'><a class='link' href='https://ninite.com/'>Ninite</a></span><br><span class='hint--right' data-hint='Virtual Machine Software'><a class='link' href='https://www.virtualbox.org/'>Oracle Virtual Box</a></span><br><span class='hint--right' data-hint='Desktop Customization Tool'><a class='link' href='http://rainmeter.net/'>Rainmeter</a></span><br><span class='hint--right' data-hint='Portable Applications for USB Storage Devices'><a class='link' href='http://portableapps.com/'>PortableApps</a></span><br><span class='hint--right' data-hint='Image Editor'><a class='link' href='http://www.getpaint.net/'>Paint.NET</a></span><br><span class='hint--right' data-hint='3D Rendering'><a class='link' href='http://www.blender.org/'>Blender</a></span><br><span class='hint--right' data-hint='Audio Editor'><a class='link' href='http://audacity.sourceforge.net/'>Audacity</a></span>"
//Curses - Audio
		if (name == "Fuck" || (name == "fuck") || (name == "Bitch") || (name == "bitch") || (name == "Shit") || (name == "shit") || (name == "Cunt") || (name == "cunt") || (name == "Fucker") || (name == "fucker") || (name == "fuck") || (name == "Damn") || (name == "damn") || (name == "Bastard") || (name == "bastard") || (name == "Cock") || (name == "cock") || (name == "Dick") || (name == "dick") || (name == "Hoe") || (name == "hoe") || (name == "Jackass") || (name == "jackass") || (name == "bastard") || (name == "Nigger") || (name == "nigger") || (name == "Nigga") || (name == "nigga"))
		document.getElementById("name").innerHTML =
		"Hey, that's not nice!<br><audio autoplay preload='auto'><source src='./audio/beep.mp3' type='audio/mpeg'><source src='https://www.googledrive.com/host/0B29-yEHUjNU3NUpWTTVoRnBGSXM' type='audio/mpeg'></audio>"
//Reset
		if (name == "Reset" || (name == "reset") || (name == "Clear") || (name == "clear") || (name == "cls"))
		document.getElementById("name").innerHTML =
		"Welcome to <a class='definition' data-toggle='tooltip' data-placement='bottom' title='A 17 year old human male who likes web technologies and assorted games.'>InvisaMage</a>'s Website."
//No name - Audio
		if (name == "" || (name == " ") || (name == "undefined"))
		document.getElementById("name").innerHTML =
		"Your name goes in that box but, welcome to <a class='definition' data-toggle='tooltip' data-placement='bottom' title='A 17 year old human male who likes web technologies and assorted games.'>InvisaMage</a>'s Website.<br><br><span class='homeSection'><h2>What's Your Name</h2><audio controls autoplay><source src='./audio/name.mp3' type='audio/mpeg'><source src='https://www.googledrive.com/host/0B29-yEHUjNU3OGducF9kRVU1dFE' type='audio/mpeg'></audio></span>"
	}
}
