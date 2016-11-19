//If name is listed below, special message is displayed. If not, input is displayed

function namePrompt()
{
	var name = document.getElementById("name-value").value;

//Default
	if (name != null) {
		$("#name").html(
		"Hello " + name + " and welcome to <a class='definition' data-toggle='tooltip' data-placement='top' title='An 18 year old human male who likes web technologies and assorted games.'>InvisaMage</a>'s website.<br>" +
		"I hope you enjoy your stay."
		)
	;}
//Creator Message - List
		if (name == "InvisaMage" || (name == "invisamage") || (name == "Travis Kipp") || (name == "travis kipp") || (name == "Sir Kipp") || (name == "sir kipp")) {
			$("#name").html(
			"Hello creator and welcome back to your website.<br>" +
			"Here are some links I thought you might like.<br>" +
			"When are you ever going to create some real content?<br><br>" +
			"<div class='panel panel-transparent panel-green'>" +
				"<div class='panel-heading'>" +
					"<h3 class='panel-title'>Links</h3>" +
				"</div>" +
				"<div class='panel-body'>" +
					"<a class='link' data-toggle='tooltip' data-placement='top' title='The search engine that does not track you.' target='_blank' href='https://duckduckgo.com/'>DuckDuckGo</a><br>" +
					"<a class='link' data-toggle='tooltip' data-placement='top' title='A publicly accessible and editable wiki for information related to Minecraft.' target='_blank' href='http://minecraft.gamepedia.com/Minecraft_Wiki'>Minecraft Wiki</a><br>" +
					"<a class='link' data-toggle='tooltip' data-placement='top' title='A web-based Git repository hosting service.' target='_blank' href='https://github.com/'>GitHub</a><br>" +
					"<a class='link' data-toggle='tooltip' data-placement='top' title='Online IDE' target='_blank' href='https://ide.c9.io'>Cloud9</a><br>" +
					"<a class='link' data-toggle='tooltip' data-placement='top' title='Telegram Web Client' target='_blank' href='https://web.telegram.org/'>Telegram Web</a>" +
				"</div>"+
			"</div>"
			)
		;}
//Travis
		if (name == "Travis" || (name == "travis")) {
			$("#name").html(
			"Hey, that's my creator's name!"
			)
		;}
//Friends
		if (name == "Matt" || (name == "matt") || (name == "Matthew") || (name == "matthew") || (name == "Carson") || (name == "carson")) {
			$("#name").html(
			"Hello good friend and welcome back to my website."
			)
		;}
//Noel
		if (name == "Noel" || (name == "noel")) {
			$("#name").html(
			"See, there is plenty of snow, Noel."
			)
			loadSnowstormNamePrompt();
		;}
//Tanner - Audio
		if (name == "Tanner" || (name == "tanner") || (name == "No") || (name == "no")) {
			$("#name").html(
			"Ohhh No!" +
			"<audio autoplay preload='auto'><source src='./audio/no.mp3' type='audio/mpeg'></audio>"
			)
		;}
//Kevin - Host
		if (name == "Kevin" || (name == "kevin")) {
			$("#name").html(
			"Hello good friend and welcome back to my website.<br>" +
			"Thanks for hosting, but I grew up.<br><br>" +
			"<a class=link target='_blank' href='https://chaoswebs.net/'>https://chaoswebs.net/ <span class='glyphicon glyphicon-new-window glyphicon-color'></span></a>"
			)
		;}
//Father
		if (name == "Dan" || (name == "dan") || (name == "Daniel") || (name == "daniel") || (name == "Dad") || (name == "dad") || (name == "Father") || (name == "father")) {
			$("#name").html(
			"Hello father and welcome back to my website."
			)
		;}
//Mother
		if (name == "Connie" || (name == "connie") || (name == "Mom") || (name == "mom") || (name == "Mother") || (name == "mother")) {
			$("#name").html(
			"Hello mother and welcome back to my website."
			)
		;}
//Emily - Audio
		if (name == "Emily" || (name == "emily")) {
			$("#name").html(
			"Hello miss and welcome back to my website.<br><br>" +
			"<div class='btn-group' role='group'>" +
			  "<a class='btn btn-default btn-md' role='button' onclick='$(`#collapse-info`).collapse(`toggle`)' data-toggle='tooltip' title='Click for details' data-container='body'>You Are The Woman</a>" +
				"<a id='pause-btn' class='btn btn-success btn-md' role='button' onclick='pause();'>" +
					"<span class='glyphicon glyphicon-pause' aria-hidden='true'></span>" +
				"</a>" +
			"</div>" +
			"<br>" +
			"<br>" +
			"<div class='collapse' id='collapse-info'>" +
				"<div class='well well-sm'>" +
					"<audio controls autoplay id='audio'><source src='./audio/woman.mp3' type='audio/mpeg'><source src='https://www.googledrive.com/host/0B29-yEHUjNU3a1BhczlZS3ZyLUU' type='audio/mpeg'></audio>" +
			    "<table class='table table-responsive table-condensed'>" +
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
			      "<tr>" +
			        "<td><h5 class='black-bold'>Download</h5></td>" +
			        "<th><h5><a href='https://itunes.apple.com/us/album/firefall-greatest-hits/id50234083' target='_blank'>iTunes</a><br><a href='https://www.amazon.com/You-Are-The-Woman/dp/B00123NOVQ/' target='_blank'>Amazon</a></h5></th>" +
			      "</tr>" +
			    "</table>" +
			  "</div>" +
			"</div>"
			)
		;}
//Girls
		if (name == "Kim" || (name == "kim") || (name == "Sabrina") || (name == "sabrina") || (name == "Courtney") || (name == "courtney")) {
			$("#name").html(
			"Hello miss and welcome back to my website."
			)
		;}
//Rachel
		if (name == "Rachel" || (name == "rachel")) {
			$("#name").html(
			"Hello <a class='definition' data-toggle='tooltip' data-placement='top' title='An endangered subspecies of humans which are incapable of reproducing.'>femake</a> and welcome back to my website."
			)
		;}
//Tony
		if (name == "Tony" || (name == "tony")) {
			$("#name").html(
			"Hello <a class='definition' data-toggle='tooltip' data-placement='top' title='An endangered subspecies of humans which are incapable of reproducing.'>femake</a> lover and welcome back to my website."
			)
		;}
//Joe
		if (name == "Joe" || (name == "joe") || (name == "Joey") || (name == "joey")) {
			$("#name").html(
			"Hello nerd and welcome back to my website."
			)
		;}
//Brian
		if (name == "Brian" || (name == "brian")) {
			$("#name").html(
			"Hello brother and welcome back to my website."
			)
		;}
//David - Audio
		if (name == "David" || (name == "david")) {
			$("#name").html(
			"Tell me David, what's the answer?<br><br>" +
			"<div class='btn-group' role='group'>" +
			  "<a class='btn btn-default btn-md' role='button' onclick='$(`#collapse-info`).collapse(`toggle`)' data-toggle='tooltip' title='Click for details' data-container='body'>Remember David</a>" +
				"<a id='pause-btn' class='btn btn-success btn-md' role='button' onclick='pause();'>" +
					"<span class='glyphicon glyphicon-pause' aria-hidden='true'></span>" +
				"</a>" +
			"</div>" +
			"<br>" +
			"<br>" +
			"<div class='collapse' id='collapse-info'>" +
			  "<div class='well well-sm'>" +
					"<audio controls autoplay><source src='./audio/david.mp3' type='audio/mpeg'><source src='https://www.googledrive.com/host/0B29-yEHUjNU3Y1lKNkFaUHZIRFU' type='audio/mpeg'></audio>" +
			    "<table class='table table-responsive table-condensed'>" +
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
						"<tr>" +
			        "<td><h5 class='black-bold'>Download</h5></td>" +
			        "<th><h5><a href='https://itunes.apple.com/us/album/the-story-of-a-young-heart/id295506962' target='_blank'>iTunes</a><br><a href='https://www.amazon.com/Remember-David/dp/B001KW53EU/' target='_blank'>Amazon</a></h5></th>" +
			      "</tr>" +
			    "</table>" +
			  "</div>" +
			"</div>"
			)
		;}
//Jenny - Audio
		if (name == "Jenny" || (name == "jenny")) {
			$("#name").html(
			"Jenny, I've got your number.<br>" +
			"867-5309<br><br>" +
			"<div class='btn-group' role='group'>" +
			  "<a class='btn btn-default btn-md' role='button' onclick='$(`#collapse-info`).collapse(`toggle`)' data-toggle='tooltip' title='Click for details' data-container='body'>867-5309/Jenny</a>" +
				"<a id='pause-btn' class='btn btn-success btn-md' role='button' onclick='pause();'>" +
					"<span class='glyphicon glyphicon-pause' aria-hidden='true'></span>" +
				"</a>" +
			"</div>" +
			"<br>" +
			"<br>" +
			"<div class='collapse' id='collapse-info'>" +
			  "<div class='well well-sm'>" +
					"<audio controls autoplay><source src='./audio/jenny.mp3' type='audio/mpeg'><source src='https://www.googledrive.com/host/0B29-yEHUjNU3Znk3bWswQWpIaEE' type='audio/mpeg'></audio>" +
					"<table class='table table-responsive table-condensed'>" +
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
						"<tr>" +
			        "<td><h5 class='black-bold'>Download</h5></td>" +
			        "<th><h5><a href='https://itunes.apple.com/us/album/867-5309-jenny-single/id278258326' target='_blank'>iTunes</a><br><a href='https://www.amazon.com/867-5309-Jenny/dp/B001J2BFWK/' target='_blank'>Amazon</a></h5></th>" +
			      "</tr>" +
			    "</table>" +
			  "</div>" +
			"</div>"
			)
		;}
//Jenny
		if (name == "8675309" || (name == "867-5309")) {
			$("#name").html(
			"Hey, that's Jenny's number."
			)
		;}
//Stacy - Audio
		if (name == "Stacy" || (name == "stacy")) {
			$("#name").html(
			"Stacy, your mom has got it going on.<br><br>" +
			"<div class='btn-group' role='group'>" +
			  "<a class='btn btn-default btn-md' role='button' onclick='$(`#collapse-info`).collapse(`toggle`)' data-toggle='tooltip' title='Click for details' data-container='body'>Stacy's Mom</a>" +
				"<a id='pause-btn' class='btn btn-success btn-md' role='button' onclick='pause();'>" +
					"<span class='glyphicon glyphicon-pause' aria-hidden='true'></span>" +
				"</a>" +
			"</div>" +
			"<br>" +
			"<br>" +
			"<div class='collapse' id='collapse-info'>" +
			  "<div class='well well-sm'>" +
					"<audio controls autoplay><source src='./audio/stacy.mp3' type='audio/mpeg'><source src='https://www.googledrive.com/host/0B29-yEHUjNU3aE1mMXhzXzNJNFU' type='audio/mpeg'></audio>" +
					"<table class='table table-responsive table-condensed'>" +
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
						"<tr>" +
			        "<td><h5 class='black-bold'>Download</h5></td>" +
			        "<th><h5><a href='https://itunes.apple.com/us/album/welcome-interstate-managers/id712721721' target='_blank'>iTunes</a><br><a href='https://www.amazon.com/Stacys-Mom/dp/B000TEMF7S/' target='_blank'>Amazon</a></h5></th>" +
			      "</tr>" +
			    "</table>" +
			  "</div>" +
			"</div>"
			)
		;}
//Jessie - Audio
		if (name == "Jessie" || (name == "jessie")) {
			$("#name").html(
			"Why can't I find a woman like that?<br><br>" +
			"<div class='btn-group' role='group'>" +
			  "<a class='btn btn-default btn-md' role='button' onclick='$(`#collapse-info`).collapse(`toggle`)' data-toggle='tooltip' title='Click for details' data-container='body'>Jessie's Girl</a>" +
				"<a id='pause-btn' class='btn btn-success btn-md' role='button' onclick='pause();'>" +
					"<span class='glyphicon glyphicon-pause' aria-hidden='true'></span>" +
				"</a>" +
			"</div>" +
			"<br>" +
			"<br>" +
			"<div class='collapse' id='collapse-info'>" +
			  "<div class='well well-sm'>" +
					"<audio controls autoplay><source src='./audio/jessie.mp3' type='audio/mpeg'><source src='https://www.googledrive.com/host/0B29-yEHUjNU3RjJaVkoxdzVTTjg' type='audio/mpeg'></audio>" +
			    "<table class='table table-responsive table-condensed'>" +
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
						"<tr>" +
			        "<td><h5 class='black-bold'>Download</h5></td>" +
			        "<th><h5><a href='https://itunes.apple.com/us/album/the-best-of-rick-springfield/id258611578' target='_blank'>iTunes</a><br><a href='https://www.amazon.com/Jessies-Girl/dp/B00136JB14' target='_blank'>Amazon</a></h5></th>" +
			      "</tr>" +
			    "</table>" +
			  "</div>" +
			"</div>"
			)
		;}
//Leah - Audio
		if (name == "Leah" || (name == "leah")) {
			$("#name").html(
			"Oh hey Leah. Look, it's your favourite song.<br><br>" +
			"<div class='btn-group' role='group'>" +
			  "<a class='btn btn-default btn-md' role='button' onclick='$(`#collapse-info`).collapse(`toggle`)' data-toggle='tooltip' title='Click for details' data-container='body'>Ah Leah</a>" +
				"<a id='pause-btn' class='btn btn-success btn-md' role='button' onclick='pause();'>" +
					"<span class='glyphicon glyphicon-pause' aria-hidden='true'></span>" +
				"</a>" +
			"</div>" +
			"<br>" +
			"<br>" +
			"<div class='collapse' id='collapse-info'>" +
			  "<div class='well well-sm'>" +
					"<audio controls autoplay><source src='./audio/leah.mp3' type='audio/mpeg'><source src='https://www.googledrive.com/host/0B29-yEHUjNU3WHl4a2xNSDBjRGc' type='audio/mpeg'></audio>" +
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
						"<tr>" +
			        "<td><h5 class='black-bold'>Download</h5></td>" +
			        "<th><h5><a href='https://itunes.apple.com/us/album/20th-century-masters-millennium/id66474' target='_blank'>iTunes</a><br><a href='https://www.amazon.com/Ah-Leah-Album-Version/dp/B000VWKVSI' target='_blank'>Amazon</a></h5></th>" +
			      "</tr>" +
			    "</table>" +
			  "</div>" +
			"</div>"
			)
		;}
//Eileen - Audio
		if (name == "Eileen" || (name == "eileen")) {
			$("#name").html(
			"Come on Eileen.<br><br>" +
			"<div class='btn-group' role='group'>" +
			  "<a class='btn btn-default btn-md' role='button' onclick='$(`#collapse-info`).collapse(`toggle`)' data-toggle='tooltip' title='Click for details' data-container='body'>Come On Eileen</a>" +
				"<a id='pause-btn' class='btn btn-success btn-md' role='button' onclick='pause();'>" +
					"<span class='glyphicon glyphicon-pause' aria-hidden='true'></span>" +
				"</a>" +
			"</div>" +
			"<br>" +
			"<br>" +
			"<div class='collapse' id='collapse-info'>" +
			  "<div class='well well-sm'>" +
					"<audio controls autoplay><source src='./audio/eileen.mp3' type='audio/mpeg'><source src='https://www.googledrive.com/host/0B29-yEHUjNU3WHl4a2xNSDBjRGc' type='audio/mpeg'></audio>" +
					"<table class='table table-responsive table-condensed '>" +
			      "<tr>" +
			        "<td><h5 class='black-bold'>Title</h5></td>" +
			        "<th><h5 class='black'>Come On Eileen</h5></th>" +
			      "</tr>" +
			      "<tr>" +
			        "<td><h5 class='black-bold'>Artist</h5></td>" +
			        "<th><h5 class='black'>Dexys Midnight Runners</h5></th>" +
			      "</tr>" +
			      "<tr>" +
			        "<td><h5 class='black-bold'>Album</h5></td>" +
			        "<th><h5 class='black'>Too-Rye-Ay</h5></th>" +
			      "</tr>" +
			      "<tr>" +
			        "<td><h5 class='black-bold'>Year</h5></td>" +
			        "<th><h5 class='black'>1982</h5></th>" +
			      "</tr>" +
						"<tr>" +
			        "<td><h5 class='black-bold'>Download</h5></td>" +
			        "<th><h5><a href='https://itunes.apple.com/us/album/too-rye-ay-expanded-edition/id136012' target='_blank'>iTunes</a><br><a href='https://www.amazon.com/Come-On-Eileen-Album-Version/dp/B0013XHLG4' target='_blank'>Amazon</a></h5></th>" +
			      "</tr>" +
			    "</table>" +
			  "</div>" +
			"</div>"
			)
		;}
//Mickey - Audio
		if (name == "Mickey" || (name == "mickey")) {
			$("#name").html(
			"Hey Mickey you're so fine.<br><br>" +
			"<div class='btn-group' role='group'>" +
			  "<a class='btn btn-default btn-md' role='button' onclick='$(`#collapse-info`).collapse(`toggle`)' data-toggle='tooltip' title='Click for details' data-container='body'>Mickey</a>" +
				"<a id='pause-btn' class='btn btn-success btn-md' role='button' onclick='pause();'>" +
					"<span class='glyphicon glyphicon-pause' aria-hidden='true'></span>" +
				"</a>" +
			"</div>" +
			"<br>" +
			"<br>" +
			"<div class='collapse' id='collapse-info'>" +
			  "<div class='well well-sm'>" +
				"<audio controls autoplay><source src='./audio/mickey.mp3' type='audio/mpeg'></audio>" +
					"<table class='table table-responsive table-condensed'>" +
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
						"<tr>" +
			        "<td><h5 class='black-bold'>Download</h5></td>" +
			        "<th><h5><a href='https://itunes.apple.com/us/album/mickey-very-best-toni-basil/id524095099' target='_blank'>iTunes</a><br><a href='https://www.amazon.com/dp/B019HX0IY8' target='_blank'>Amazon</a></h5></th>" +
			      "</tr>" +
			    "</table>" +
			  "</div>" +
			"</div>"
			)
		;}
//Jesus
		if (name == "Jesus" || (name == "jesus")) {
			$("#name").html(
			"So, it looks like you're back.<br>Now what?"
			)
		;}
//Cortana - Audio
		if (name == "Cortana" || (name == "cortana") || (name == "Hey Cortana") || (name == "hey Cortana")) {
			$("#name").html(
			"Can I be of assistance?<br><br>" +
			"<img class='img-responsive img-circle center-block' src='images/cortana.gif' height='175' width='175'><br>" +
			"Thinking..." +
			"<audio autoplay preload='auto'><source src='./audio/cortana.mp3' type='audio/mpeg'></audio>"
			)
		;}
//Siri - Audio
		if (name == "Siri" || (name == "siri") || (name == "Hey Siri") || (name == "hey Siri")) {
			$("#name").html(
			"What can I help you with?<br><br>" +
			"<img class='img-responsive img-rounded center-block' src='images/siri.gif' height='113' width='555'><br>" +
			"Hmmm... Let me think about that." +
			"<audio autoplay preload='auto'><source src='./audio/siri.mp3' type='audio/mpeg'></audio>"
			)
		;}
//Spock
		if (name == "Spock" || (name == "spock")) {
			$("#name").html(
			"Live long, and prosper.<br>" +
			"Leonard Nimoy, 1931-2015<br><br>" +
			"<img class='img-responsive img-rounded center-block' src='images/spock.jpg' height='300' width='300'>"
			)
		;}
//Doctor Who
		if (name == "The Doctor" || (name == "the doctor") || (name == "The doctor") || (name == "the Doctor") || (name == "Doctor") || (name == "doctor")) {
			$("#name").html(
			"Doctor Who?<br>" +
			"Hey look, I found your TARDIS.<br><br>" +
			"<img class='img-responsive img-rounded center-block' src='images/tardis.jpg' height='200' width='225'>"
			)
		;}
//Mirth - List
		if (name == "Mirth" || (name == "mirth")) {
			$("#name").html(
			"<div class='panel panel-transparent panel-green'>" +
				"<div class='panel-heading'>" +
					"<h3 class='panel-title'>Mirth</h3>" +
				"</div>" +
				"<div class='panel-body'>" +
					"<a class='link' data-toggle='tooltip' data-placement='top' title='Funny Windows Web Emulator' target='_blank' href='http://www.windows93.net/'>WINDOWS93.net</a><br>" +
					"<a class='link' data-toggle='tooltip' data-placement='top' title='Restart old Operating Systems' target='_blank' href='http://www.therestartpage.com/'>The Restart Page</a><br>" +
					"<a class='link' data-toggle='tooltip' data-placement='top' title='AI' target='_blank' href='http://www.cleverbot.com/'>Cleverbot</a>" +
				"</div>" +
			"</div>"
			)
		;}
//Browsers - List
		if (name == "Browsers" || (name == "browsers") || (name == "Browser") || (name == "browser")) {
			$("#name").html(
			"A list of popular web browsers." +
			"<div class='panel panel-transparent panel-green'>" +
				"<div class='panel-heading'>" +
					"<h3 class='panel-title'>Browsers</h3>" +
				"</div>" +
				"<div class='panel-body'>" +
					"<a class='link' data-toggle='tooltip' data-placement='top' title='Free Open source Internet Browser by Mozilla' target='_blank' href='https://www.mozilla.org/en-US/firefox/new/'>Mozilla Firefox</a><br>" +
					"<a class='link' data-toggle='tooltip' data-placement='top' title='A fast, simple, and secure web browser, built for the modern web.' target='_blank' href='https://www.google.com/chrome/browser'>Google Chrome</a><br>" +
					"<a class='link' data-toggle='tooltip' data-placement='top' title='The open-source web browser project from which Google Chrome draws its source code.' target='_blank' href='https://www.chromium.org/'>Chromium</a><br>" +
					"<a class='link' data-toggle='tooltip' data-placement='top' title='A web browser developed by Microsoft and included in the company's Windows 10 operating systems.' target='_blank' href='http://www.browserfordoing.com/en-us/'>Microsoft Edge</a><br>" +
					"<a class='link' data-toggle='tooltip' data-placement='top' title='A web browser developed by Apple based on the WebKit engine. Only available on Apple products.' target='_blank' href='https://www.apple.com/safari/'>Safari</a><br>" +
					"<a class='link' data-toggle='tooltip' data-placement='top' title='A super fast, safe and secure way to surf the web, from Mac, PC or mobile.' target='_blank' href='https://www.opera.com/'>Opera</a>" +
				"</div>" +
			"</div>"
			)
		;}
//Software - List
		if (name == "Software" || (name == "software")) {
			$("#name").html(
			"Ask and you shall receive." +
			"<div class='panel panel-transparent panel-green'>" +
				"<div class='panel-heading'>" +
					"<h3 class='panel-title'>Software</h3>" +
				"</div>" +
				"<div class='panel-body'>" +
					"<a class='link' data-toggle='tooltip' data-placement='top' title='Free Open source Internet Browser by Mozilla' target='_blank' href='https://www.mozilla.org/en-US/firefox/new/'>Mozilla Firefox</a><br>" +
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
				"</div>"+
			"</div>"
			)
		;}
//Python
		if (name == "Python" || (name == "python")) {
			$("#name").html(
			"<code>print(&quot;Hello World!&quot;)</code>"
			)
		;}
//JavaScript
		if (name == "JavaScript" || (name == "javascript") || (name == "JS") || (name == "js")) {
			$("#name").html(
			"<code>document.write(&quot;Hello World!&quot;);</code>"
			)
		;}
//Curses - Audio
		if (name == "Fuck" || (name == "fuck") || (name == "Bitch") || (name == "bitch") || (name == "Shit") || (name == "shit") || (name == "Cunt") || (name == "cunt") || (name == "Fucker") || (name == "fucker") || (name == "Damn") || (name == "damn") || (name == "Bastard") || (name == "bastard") || (name == "Cock") || (name == "cock") || (name == "Dick") || (name == "dick") || (name == "Hoe") || (name == "hoe") || (name == "Jackass") || (name == "jackass") || (name == "Nigger") || (name == "nigger") || (name == "Nigga") || (name == "nigga")) {
			$("#name").html(
			"Hey, that's not nice!<br><audio autoplay preload='auto'><source src='./audio/beep.mp3' type='audio/mpeg'><source src='https://www.googledrive.com/host/0B29-yEHUjNU3NUpWTTVoRnBGSXM' type='audio/mpeg'></audio>"
			)
		;}
//Reset
		if (name == "Reset" || (name == "reset") || (name == "Clear") || (name == "clear") || (name == "cls")) {
			$("#name").html(
			"Welcome to <a class='definition' data-toggle='tooltip' data-placement='top' title='An 18 year old human male who likes web technologies and assorted games.'>InvisaMage</a>'s website."
			)
		;}
//No name - Audio
		if (name == "" || (name == " ") || (name == "undefined")) {
			$("#name").html(
			"Your name goes in that box but, welcome to <a class='definition' data-toggle='tooltip' data-placement='top' title='An 18 year old human male who likes web technologies and assorted games.'>InvisaMage</a>'s website.<br><br>" +
			"<div class='btn-group' role='group'>" +
			  "<a class='btn btn-default btn-md' role='button' onclick='$(`#collapse-info`).collapse(`toggle`)' data-toggle='tooltip' title='Click for details' data-container='body'>What's Your Name</a>" +
				"<a id='pause-btn' class='btn btn-success btn-md' role='button' onclick='pause();'>" +
					"<span class='glyphicon glyphicon-pause' aria-hidden='true'></span>" +
				"</a>" +
			"</div>" +
			"<br>" +
			"<br>" +
			"<div class='collapse' id='collapse-info'>" +
			  "<div class='well well-sm'>" +
				"<audio controls autoplay><source src='./audio/name.mp3' type='audio/mpeg'><source src='https://www.googledrive.com/host/0B29-yEHUjNU3OGducF9kRVU1dFE' type='audio/mpeg'></audio>" +
					"<table class='table table-responsive table-condensed'>" +
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
						"<tr>" +
			        "<td><h5 class='black-bold'>Download</h5></td>" +
			        "<th><h5><a href='https://itunes.apple.com/us/album/walk-on/id60981' target='_blank'>iTunes</a><br><a href='https://www.amazon.com/Whats-Your-Name-Album-Version/dp/B000VROBUM/' target='_blank'>Amazon</a></h5></th>" +
			      "</tr>" +
			    "</table>" +
			  "</div>" +
			"</div>"
			)
		;}

	//Activate Tooltips
		if(!('ontouchstart' in window)) {
		{
			$('[data-toggle="tooltip"]').tooltip();
		}
	}
}
