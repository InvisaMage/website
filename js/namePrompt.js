// If name is listed below, special message is displayed. If not, input is displayed

function namePrompt()
{
	var name = prompt("What is your name?")

	if (name != null)
	{
//Default
		document.getElementById("name").innerHTML =
		"Hello " + name + " and welcome to <a class='definition' data-toggle='tooltip' data-placement='top' title='A 17 year old human male who likes web technologies and assorted games.'>InvisaMage</a>'s Website.<br>" +
		"I hope you enjoy your stay."
//Creator Message
		if (name == "InvisaMage" || (name == "invisamage") || (name == "Travis Kipp") || (name == "travis kipp") || (name == "Sir Kipp") || (name == "sir kipp"))
		document.getElementById("name").innerHTML =
		"Hello creator and welcome back to your Website.<br>" +
		"Here are some links I thought you might like.<br>" +
		"When are you ever going to make some real content?<br><br>" +
		"<span class='homeSection'><h3>Links</h3>" +
		"<a class='link' data-toggle='tooltip' data-placement='top' title='Repository' target='_blank' href='https://github.com/'>GitHub</a><br>" +
		"<a class='link' data-toggle='tooltip' data-placement='top' title='Online IDE' target='_blank' href='https://ide.c9.io'>Cloud9</a><br>" +
		"<a class='link' data-toggle='tooltip' data-placement='top' title='Telegram Web Client' target='_blank' href='https://web.telegram.org/'>Telegram Web</a>"
//Friends
		if (name == "Matt" || (name == "matt") || (name == "Matthew") || (name == "matthew") || (name == "Tanner") || (name == "tanner") || (name == "Carson") || (name == "carson") || (name == "Chris") || (name == "chris"))
		document.getElementById("name").innerHTML =
		"Hello good friend and welcome back to my Website."
//Kevin - Host
		if (name == "Kevin" || (name == "kevin"))
		document.getElementById("name").innerHTML =
		"Hello good friend and welcome back to my Website.<br>" +
		"Thanks for hosting.<br><br>" +
		"<a class=link target='_blank'' href=http://www.chaoswebs.cf/>http://www.chaoswebs.cf/ <span class='glyphicon glyphicon-new-window glyphicon-colour'></span></a>"
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
		"Hello miss and welcome back to my Website.<br><br>" +
		"<span class='homeSection'>" +
		"<h2>You Are The Woman</h2>" +
		"<audio controls autoplay><source src='./audio/woman.mp3' type='audio/mpeg'><source src='https://www.googledrive.com/host/0B29-yEHUjNU3a1BhczlZS3ZyLUU' type='audio/mpeg'></audio>" +
		"<a class='btn btn-primary btn-sm' role='button' data-toggle='collapse' href='#collapse-info' aria-expanded='false' aria-controls='collapse-info'>" +
		  "<span class='glyphicon glyphicon-option-horizontal' aria-hidden='true'></span>" +
		"</a>" +
		"<br>" +
		"<br>" +
		"<div class='collapse' id='collapse-info'>" +
		  "<div class='well well-sm center-block' style='width:75%'>" +
		    "<table class='table table-responsive table-condensed '>" +
		      "<tr>" +
		        "<td><h5 class='black-bold'>Title</h5></td>" +
		        "<th><h5 class='black'>You Are the Woman</h5></th>" +
		      "</tr>" +
		      "<tr>" +
		        "<td><h5 class='black-bold'>Artist</h5></td>" +
		        "<th><h5 class='black'>Firefall</h5></th>" +
		      "</tr>" +
		      "<tr>" +
		        "<td><h5 class='black-bold'>Album</h5></td>" +
		        "<th><h5 class='black'>N/A (Single)</h5></th>" +
		      "</tr>" +
		      "<tr>" +
		        "<td><h5 class='black-bold'>Year</h5></td>" +
		        "<th><h5 class='black'>1976</h5></th>" +
		      "</tr>" +
		    "</table>" +
		  "</div>" +
		"</div>" +
		"</span>"
//Girls
		if (name == "Kim" || (name == "kim") || (name == "Sabrina") || (name == "sabrina") || (name == "Courtney ") || (name == "courtney "))
		document.getElementById("name").innerHTML =
		"Hello miss and welcome back to my Website."
//Rachel
		if (name == "Rachel" || (name == "rachel"))
		document.getElementById("name").innerHTML =
		"Hello <a class='definition' data-toggle='tooltip' data-placement='top' title='An endangered subspecies of humans which are incapable of reproducing.'>femake</a> and welcome back to my Website."
//Tony
		if (name == "Tony" || (name == "tony"))
		document.getElementById("name").innerHTML =
		"Hello <a class='definition' data-toggle='tooltip' data-placement='top' title='An endangered subspecies of humans which are incapable of reproducing.'>femake</a> lover and welcome back to my Website."
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
		"Tell me David, what's the answer?<br><br>" +
		"<span class='homeSection'>" +
		"<h2>Remember David</h2>" +
		"<audio controls autoplay><source src='./audio/david.mp3' type='audio/mpeg'><source src='https://www.googledrive.com/host/0B29-yEHUjNU3Y1lKNkFaUHZIRFU' type='audio/mpeg'></audio>" +
		"<a class='btn btn-primary btn-sm' role='button' data-toggle='collapse' href='#collapse-info' aria-expanded='false' aria-controls='collapse-info'>" +
		  "<span class='glyphicon glyphicon-option-horizontal' aria-hidden='true'></span>" +
		"</a>" +
		"<br>" +
		"<br>" +
		"<div class='collapse' id='collapse-info'>" +
		  "<div class='well well-sm center-block' style='width:75%'>" +
		    "<table class='table table-responsive table-condensed '>" +
		      "<tr>" +
		        "<td><h5 class='black-bold'>Title</h5></td>" +
		        "<th><h5 class='black'>Remember David</h5></th>" +
		      "</tr>" +
		      "<tr>" +
		        "<td><h5 class='black-bold'>Artist</h5></td>" +
		        "<th><h5 class='black'>A Flock of Seagulls</h5></th>" +
		      "</tr>" +
		      "<tr>" +
		        "<td><h5 class='black-bold'>Album</h5></td>" +
		        "<th><h5 class='black'>The Story of a Young Heart</h5></th>" +
		      "</tr>" +
		      "<tr>" +
		        "<td><h5 class='black-bold'>Year</h5></td>" +
		        "<th><h5 class='black'>1984</h5></th>" +
		      "</tr>" +
		    "</table>" +
		  "</div>" +
		"</div>" +
		"</span>"
//Jenny - Audio
		if (name == "Jenny" || (name == "jenny"))
		document.getElementById("name").innerHTML =
		"Jenny, I've got your number.<br>" +
		"867-5309<br><br>" +
		"<span class='homeSection'>" +
		"<h2>867-5309/Jenny</h2>" +
		"<audio controls autoplay><source src='./audio/jenny.mp3' type='audio/mpeg'><source src='https://www.googledrive.com/host/0B29-yEHUjNU3Znk3bWswQWpIaEE' type='audio/mpeg'></audio>" +
		"<a class='btn btn-primary btn-sm' role='button' data-toggle='collapse' href='#collapse-info' aria-expanded='false' aria-controls='collapse-info'>" +
		  "<span class='glyphicon glyphicon-option-horizontal' aria-hidden='true'></span>" +
		"</a>" +
		"<br>" +
		"<br>" +
		"<div class='collapse' id='collapse-info'>" +
		  "<div class='well well-sm center-block' style='width:75%'>" +
		    "<table class='table table-responsive table-condensed '>" +
		      "<tr>" +
		        "<td><h5 class='black-bold'>Title</h5></td>" +
		        "<th><h5 class='black'>867-5309/Jenny</h5></th>" +
		      "</tr>" +
		      "<tr>" +
		        "<td><h5 class='black-bold'>Artist</h5></td>" +
		        "<th><h5 class='black'>Tommy Tutone</h5></th>" +
		      "</tr>" +
		      "<tr>" +
		        "<td><h5 class='black-bold'>Album</h5></td>" +
		        "<th><h5 class='black'>N/A (Single)</h5></th>" +
		      "</tr>" +
		      "<tr>" +
		        "<td><h5 class='black-bold'>Year</h5></td>" +
		        "<th><h5 class='black'>1981</h5></th>" +
		      "</tr>" +
		    "</table>" +
		  "</div>" +
		"</div>" +
		"</span>"
//Jenny
		if (name == "8675309" || (name == "867-5309"))
		document.getElementById("name").innerHTML =
		"Hey, that's Jenny's number."
//Stacy - Audio
		if (name == "Stacy" || (name == "stacy"))
		document.getElementById("name").innerHTML =
		"Stacy, your mom has got it going on.<br><br>" +
		"<span class='homeSection'>" +
		"<h2>Stacy's Mom</h2>" +
		"<audio controls autoplay><source src='./audio/stacy.mp3' type='audio/mpeg'><source src='https://www.googledrive.com/host/0B29-yEHUjNU3aE1mMXhzXzNJNFU' type='audio/mpeg'></audio>" +
		"<a class='btn btn-primary btn-sm' role='button' data-toggle='collapse' href='#collapse-info' aria-expanded='false' aria-controls='collapse-info'>" +
		  "<span class='glyphicon glyphicon-option-horizontal' aria-hidden='true'></span>" +
		"</a>" +
		"<br>" +
		"<br>" +
		"<div class='collapse' id='collapse-info'>" +
		  "<div class='well well-sm center-block' style='width:75%'>" +
		    "<table class='table table-responsive table-condensed '>" +
		      "<tr>" +
		        "<td><h5 class='black-bold'>Title</h5></td>" +
		        "<th><h5 class='black'>Stacy's Mom</h5></th>" +
		      "</tr>" +
		      "<tr>" +
		        "<td><h5 class='black-bold'>Artist</h5></td>" +
		        "<th><h5 class='black'>Fountains of Wayne</h5></th>" +
		      "</tr>" +
		      "<tr>" +
		        "<td><h5 class='black-bold'>Album</h5></td>" +
		        "<th><h5 class='black'>N/A (Single)</h5></th>" +
		      "</tr>" +
		      "<tr>" +
		        "<td><h5 class='black-bold'>Year</h5></td>" +
		        "<th><h5 class='black'>2003</h5></th>" +
		      "</tr>" +
		    "</table>" +
		  "</div>" +
		"</div>" +
		"</span>"
//Jessie - Audio
		if (name == "Jessie" || (name == "jessie"))
		document.getElementById("name").innerHTML =
		"Why can't I find a woman like that?<br><br>" +
		"<span class='homeSection'>" +
		"<h2>Jessie's Girl</h2>" +
		"<audio controls autoplay><source src='./audio/jessie.mp3' type='audio/mpeg'><source src='https://www.googledrive.com/host/0B29-yEHUjNU3RjJaVkoxdzVTTjg' type='audio/mpeg'></audio>" +
		"<a class='btn btn-primary btn-sm' role='button' data-toggle='collapse' href='#collapse-info' aria-expanded='false' aria-controls='collapse-info'>" +
		  "<span class='glyphicon glyphicon-option-horizontal' aria-hidden='true'></span>" +
		"</a>" +
		"<br>" +
		"<br>" +
		"<div class='collapse' id='collapse-info'>" +
		  "<div class='well well-sm center-block' style='width:75%'>" +
		    "<table class='table table-responsive table-condensed '>" +
		      "<tr>" +
		        "<td><h5 class='black-bold'>Title</h5></td>" +
		        "<th><h5 class='black'>Jessie's Girl</h5></th>" +
		      "</tr>" +
		      "<tr>" +
		        "<td><h5 class='black-bold'>Artist</h5></td>" +
		        "<th><h5 class='black'>Rick Springfield</h5></th>" +
		      "</tr>" +
		      "<tr>" +
		        "<td><h5 class='black-bold'>Album</h5></td>" +
		        "<th><h5 class='black'>N/A (Single)</h5></th>" +
		      "</tr>" +
		      "<tr>" +
		        "<td><h5 class='black-bold'>Year</h5></td>" +
		        "<th><h5 class='black'>1980</h5></th>" +
		      "</tr>" +
		    "</table>" +
		  "</div>" +
		"</div>" +
		"</span>"
//Leah - Audio
		if (name == "Leah" || (name == "leah"))
		document.getElementById("name").innerHTML =
		"Oh hey Leah. Look, it's your favourite song.<br><br>" +
		"<span class='homeSection'>" +
		"<h2>Ah Leah</h2>" +
		"<audio controls autoplay><source src='./audio/leah.mp3' type='audio/mpeg'><source src='https://www.googledrive.com/host/0B29-yEHUjNU3WHl4a2xNSDBjRGc' type='audio/mpeg'></audio>" +
		"<a class='btn btn-primary btn-sm' role='button' data-toggle='collapse' href='#collapse-info' aria-expanded='false' aria-controls='collapse-info'>" +
		  "<span class='glyphicon glyphicon-option-horizontal' aria-hidden='true'></span>" +
		"</a>" +
		"<br>" +
		"<br>" +
		"<div class='collapse' id='collapse-info'>" +
		  "<div class='well well-sm center-block' style='width:75%'>" +
		    "<table class='table table-responsive table-condensed '>" +
		      "<tr>" +
		        "<td><h5 class='black-bold'>Title</h5></td>" +
		        "<th><h5 class='black'>Ah Leah</h5></th>" +
		      "</tr>" +
		      "<tr>" +
		        "<td><h5 class='black-bold'>Artist</h5></td>" +
		        "<th><h5 class='black'>Donnie Iris</h5></th>" +
		      "</tr>" +
		      "<tr>" +
		        "<td><h5 class='black-bold'>Album</h5></td>" +
		        "<th><h5 class='black'>N/A (Single)</h5></th>" +
		      "</tr>" +
		      "<tr>" +
		        "<td><h5 class='black-bold'>Year</h5></td>" +
		        "<th><h5 class='black'>1980</h5></th>" +
		      "</tr>" +
		    "</table>" +
		  "</div>" +
		"</div>" +
		"</span>"
//Immortal - Audio
		if (name == "Immortal" || (name == "immortal"))
		document.getElementById("name").innerHTML =
		"Are you sure you're Immortal?<br><br>" +
		"<span class='homeSection'>" +
		"<h2>Immortal</h2>" +
		"<audio controls autoplay><source src='./audio/immortal.mp3' type='audio/mpeg'></audio>" +
		"<a class='btn btn-primary btn-sm' role='button' data-toggle='collapse' href='#collapse-info' aria-expanded='false' aria-controls='collapse-info'>" +
		  "<span class='glyphicon glyphicon-option-horizontal' aria-hidden='true'></span>" +
		"</a>" +
		"<br>" +
		"<br>" +
		"<div class='collapse' id='collapse-info'>" +
		  "<div class='well well-sm center-block' style='width:75%'>" +
		    "<table class='table table-responsive table-condensed '>" +
		      "<tr>" +
		        "<td><h5 class='black-bold'>Title</h5></td>" +
		        "<th><h5 class='black'>Immortal</h5></th>" +
		      "</tr>" +
		      "<tr>" +
		        "<td><h5 class='black-bold'>Artist</h5></td>" +
		        "<th><h5 class='black'>Thomas Bergersen</h5></th>" +
		      "</tr>" +
		      "<tr>" +
		        "<td><h5 class='black-bold'>Album</h5></td>" +
		        "<th><h5 class='black'>Illusions</h5></th>" +
		      "</tr>" +
		      "<tr>" +
		        "<td><h5 class='black-bold'>Year</h5></td>" +
		        "<th><h5 class='black'>2011</h5></th>" +
		      "</tr>" +
		    "</table>" +
		  "</div>" +
		"</div>" +
		"</span>"
//Raido Ga Ga - Audio
		if (name == "Radio" || (name == "radio") || (name == "Radio Ga Ga") || (name == "radio ga ga"))
		document.getElementById("name").innerHTML =
		"What's new Radio?<br><br>" +
		"<span class='homeSection'>" +
		"<h2>Radio Ga Ga</h2>" +
		"<audio controls autoplay><source src='./audio/radio.mp3' type='audio/mpeg'></audio>" +
		"<a class='btn btn-primary btn-sm' role='button' data-toggle='collapse' href='#collapse-info' aria-expanded='false' aria-controls='collapse-info'>" +
		  "<span class='glyphicon glyphicon-option-horizontal' aria-hidden='true'></span>" +
		"</a>" +
		"<br>" +
		"<br>" +
		"<div class='collapse' id='collapse-info'>" +
		  "<div class='well well-sm center-block' style='width:75%'>" +
		    "<table class='table table-responsive table-condensed '>" +
		      "<tr>" +
		        "<td><h5 class='black-bold'>Title</h5></td>" +
		        "<th><h5 class='black'>Radio Ga Ga</h5></th>" +
		      "</tr>" +
		      "<tr>" +
		        "<td><h5 class='black-bold'>Artist</h5></td>" +
		        "<th><h5 class='black'>Queen</h5></th>" +
		      "</tr>" +
		      "<tr>" +
		        "<td><h5 class='black-bold'>Album</h5></td>" +
		        "<th><h5 class='black'>The Works</h5></th>" +
		      "</tr>" +
		      "<tr>" +
		        "<td><h5 class='black-bold'>Year</h5></td>" +
		        "<th><h5 class='black'>1984</h5></th>" +
		      "</tr>" +
		    "</table>" +
		  "</div>" +
		"</div>" +
		"</span>"
//Mickey - Audio
		if (name == "Mickey" || (name == "mickey"))
		document.getElementById("name").innerHTML =
		"Hey Mickey you're so fine.<br><br>" +
		"<span class='homeSection'>" +
		"<h2>Mickey</h2>" +
		"<audio controls autoplay><source src='./audio/mickey.mp3' type='audio/mpeg'></audio>" +
		"<a class='btn btn-primary btn-sm' role='button' data-toggle='collapse' href='#collapse-info' aria-expanded='false' aria-controls='collapse-info'>" +
		  "<span class='glyphicon glyphicon-option-horizontal' aria-hidden='true'></span>" +
		"</a>" +
		"<br>" +
		"<br>" +
		"<div class='collapse' id='collapse-info'>" +
		  "<div class='well well-sm center-block' style='width:75%'>" +
		    "<table class='table table-responsive table-condensed '>" +
		      "<tr>" +
		        "<td><h5 class='black-bold'>Title</h5></td>" +
		        "<th><h5 class='black'>Mickey</h5></th>" +
		      "</tr>" +
		      "<tr>" +
		        "<td><h5 class='black-bold'>Artist</h5></td>" +
		        "<th><h5 class='black'>Toni Basil</h5></th>" +
		      "</tr>" +
		      "<tr>" +
		        "<td><h5 class='black-bold'>Album</h5></td>" +
		        "<th><h5 class='black'>Word of Mouth</h5></th>" +
		      "</tr>" +
		      "<tr>" +
		        "<td><h5 class='black-bold'>Year</h5></td>" +
		        "<th><h5 class='black'>1982</h5></th>" +
		      "</tr>" +
		    "</table>" +
		  "</div>" +
		"</div>" +
		"</span>"
//Jesus
		if (name == "Jesus" || (name == "jesus"))
		document.getElementById("name").innerHTML =
		"So, it looks like you're back.<br>Now what?"
//Cortana
		if (name == "Cortana" || (name == "cortana") || (name == "Hey Cortana") || (name == "hey Cortana"))
		document.getElementById("name").innerHTML =
		"Can I be of assistance?<br><br>" +
		"<img class='img-responsive img-circle center-block' src='images/cortana.gif' height='175' width='175'><br>" +
		"Thinking..." +
		"<audio autoplay preload='auto'><source src='./audio/cortana.mp3' type='audio/mpeg'></audio>"
//Siri
		if (name == "Siri" || (name == "siri") || (name == "Hey Siri") || (name == "hey Siri"))
		document.getElementById("name").innerHTML =
		"What can I help you with?<br><br>" +
		"<img class='img-responsive img-rounded center-block' src='images/siri.gif' height='113' width='555'><br>" +
		"Hmmm.. Let me think about that." +
		"<audio autoplay preload='auto'><source src='./audio/siri.mp3' type='audio/mpeg'></audio>"
//Spock
		if (name == "Spock" || (name == "spock"))
		document.getElementById("name").innerHTML =
		"Live long, and prosper.<br>" +
		"Leonard Nimoy, 1931-2015<br><br>" +
		"<img class='img-responsive img-rounded center-block' src='images/spock.jpg' height='300' width='300'>"
//Doctor Who
		if (name == "The Doctor" || (name == "the doctor") || (name == "The doctor") || (name == "the Doctor") || (name == "Doctor") || (name == "doctor"))
		document.getElementById("name").innerHTML =
		"Doctor Who?<br>" +
		"Hey look, I found your TARDIS.<br><br>" +
		"<img class='img-responsive img-rounded center-block' src='images/tardis.jpg' height='200' width='225'>"
//Mirth
		if (name == "Mirth" || (name == "mirth"))
		document.getElementById("name").innerHTML =
		"<span class='homeSection'>" +
		"<h3>Mirth</h3>" +
		"<a class='link' data-toggle='tooltip' data-placement='top' title='Funny Windows Web Emulator' target='_blank'' href='http://www.windows93.net/'>WINDOWS93.net</a><br>" +
		"<a class='link' data-toggle='tooltip' data-placement='top' title='Restart old Operating Systems' target='_blank'' href='http://www.therestartpage.com/'>The Restart Page</a><br>" +
		"<a class='link' data-toggle='tooltip' data-placement='top' title='AI' target='_blank'' href='http://www.cleverbot.com/'>Cleverbot</a>" +
		"</span>"
//Software
		if (name == "Software" || (name == "software"))
		document.getElementById("name").innerHTML =
		"<span class='homeSection'>" +
		"<h3>Software</h3>" +
		"<a class='link' data-toggle='tooltip' data-placement='top' title='Free Open source Internet Browser by Mozilla' target='_blank' href='www.firefox.com'>Mozilla Firefox</a><br>" +
		"<a class='link' data-toggle='tooltip' data-placement='top' title='Cross Platform Messaging Application' target='_blank' href='https://telegram.org/'>Telegram</a><br>" +
		"<a class='link' data-toggle='tooltip' data-placement='top' title='Office Suite' target='_blank' href='http://www.libreoffice.org/'>LibreOffice</a><br>" +
		"<a class='link' data-toggle='tooltip' data-placement='top' title='Text Editor' target='_blank' href='http://notepad-plus-plus.org/'>Notepad++</a><br>" +
		"<a class='link' data-toggle='tooltip' data-placement='top' title='Free Antivirus' target='_blank' href='http://www.avast.com/en-us/index'>Avast</a><br>" +
		"<a class='link' data-toggle='tooltip' data-placement='top' title='Password Manager' target='_blank' href='http://keepass.info/'>KeePass</a><br>" +
		"<a class='link' data-toggle='tooltip' data-placement='top' title='Software Downloader' target='_blank' href='https://ninite.com/'>Ninite</a><br>" +
		"<a class='link' data-toggle='tooltip' data-placement='top' title='Virtual Machine Software' target='_blank' href='https://www.virtualbox.org/'>Oracle Virtual Box</a><br>" +
		"<a class='link' data-toggle='tooltip' data-placement='top' title='Desktop Customization Tool' target='_blank' href='http://rainmeter.net/'>Rainmeter</a><br>" +
		"<a class='link' data-toggle='tooltip' data-placement='top' title='Portable Applications for USB Storage Devices' target='_blank' href='http://portableapps.com/'>PortableApps</a><br>" +
		"<a class='link' data-toggle='tooltip' data-placement='top' title='Image Editor' target='_blank' href='http://www.getpaint.net/'>Paint.NET</a><br>" +
		"<a class='link' data-toggle='tooltip' data-placement='top' title='3D Rendering' target='_blank' href='http://www.blender.org/'>Blender</a><br>" +
		"<a class='link' data-toggle='tooltip' data-placement='top' title='Audio Editor' target='_blank' href='http://audacity.sourceforge.net/'>Audacity</a>" +
		"</span>"
//Python
		if (name == "Python" || (name == "python"))
		document.getElementById("name").innerHTML =
		"<code>print(&quot;Hello World!&quot;)</code>"
//JavaScript
		if (name == "JavaScript" || (name == "javascript") || (name == "JS") || (name == "js"))
		document.getElementById("name").innerHTML =
		"<code>document.write(&quot;Hello World!&quot;);</code>"
//Curses - Audio
		if (name == "Fuck" || (name == "fuck") || (name == "Bitch") || (name == "bitch") || (name == "Shit") || (name == "shit") || (name == "Cunt") || (name == "cunt") || (name == "Fucker") || (name == "fucker") || (name == "Damn") || (name == "damn") || (name == "Bastard") || (name == "bastard") || (name == "Cock") || (name == "cock") || (name == "Dick") || (name == "dick") || (name == "Hoe") || (name == "hoe") || (name == "Jackass") || (name == "jackass") || (name == "Nigger") || (name == "nigger") || (name == "Nigga") || (name == "nigga"))
		document.getElementById("name").innerHTML =
		"Hey, that's not nice!<br><audio autoplay preload='auto'><source src='./audio/beep.mp3' type='audio/mpeg'><source src='https://www.googledrive.com/host/0B29-yEHUjNU3NUpWTTVoRnBGSXM' type='audio/mpeg'></audio>"
//Reset
		if (name == "Reset" || (name == "reset") || (name == "Clear") || (name == "clear") || (name == "cls"))
		document.getElementById("name").innerHTML =
		"Welcome to <a class='definition' data-toggle='tooltip' data-placement='top' title='A 17 year old human male who likes web technologies and assorted games.'>InvisaMage</a>'s Website."
//No name - Audio
		if (name == "" || (name == " ") || (name == "undefined"))
		document.getElementById("name").innerHTML =
		"Your name goes in that box but, welcome to <a class='definition' data-toggle='tooltip' data-placement='top' title='A 17 year old human male who likes web technologies and assorted games.'>InvisaMage</a>'s Website.<br><br>" +
		"<span class='homeSection'>" +
		"<h2>What's Your Name</h2>" +
		"<audio controls autoplay><source src='./audio/name.mp3' type='audio/mpeg'><source src='https://www.googledrive.com/host/0B29-yEHUjNU3OGducF9kRVU1dFE' type='audio/mpeg'></audio>" +
		"<a class='btn btn-primary btn-sm' role='button' data-toggle='collapse' href='#collapse-info' aria-expanded='false' aria-controls='collapse-info'>" +
		  "<span class='glyphicon glyphicon-option-horizontal' aria-hidden='true'></span>" +
		"</a>" +
		"<br>" +
		"<br>" +
		"<div class='collapse' id='collapse-info'>" +
		  "<div class='well well-sm center-block' style='width:75%'>" +
		    "<table class='table table-responsive table-condensed '>" +
		      "<tr>" +
		        "<td><h5 class='black-bold'>Title</h5></td>" +
		        "<th><h5 class='black'>What's Your Name</h5></th>" +
		      "</tr>" +
		      "<tr>" +
		        "<td><h5 class='black-bold'>Artist</h5></td>" +
		        "<th><h5 class='black'>Boston</h5></th>" +
		      "</tr>" +
		      "<tr>" +
		        "<td><h5 class='black-bold'>Album</h5></td>" +
		        "<th><h5 class='black'>Walk On</h5></th>" +
		      "</tr>" +
		      "<tr>" +
		        "<td><h5 class='black-bold'>Year</h5></td>" +
		        "<th><h5 class='black'>1994</h5></th>" +
		      "</tr>" +
		    "</table>" +
		  "</div>" +
		"</div>" +
		"</span>"
	}
//Activate Tooltips
	if(!('ontouchstart' in window))
	{
		$('[data-toggle="tooltip"]').tooltip();
	}
}
