//If name is listed below, special message is displayed. If not, input is displayed

function namePrompt(name) {
	let nL = name.toLowerCase();

	//Light Theme
	ready(() => { 
		settings.getItem('theme').then(function(value) {
			if (value == 'light') {
					document.querySelector(".card.bg-secondary").classList.replace("bg-secondary", "bg-light");
			}
		});
	});

	//Audio Template
	let btnGroup = "<div class='btn-group' role='group'>";
	let pauseBtn = "<button id='pause-btn' class='btn btn-success btn-md' role='button' onclick='pause();'>";
	let faPause = "<i class='fa fa-pause' aria-hidden='true'></i>";

	//Card Template
	let card = "<div class='card bg-secondary'>";

//Default
	if (nL !== null) {
		
		document.getElementById('name').innerHTML =
		"Hello " + name + " and welcome to <a class='definition' data-toggle='tooltip' data-placement='top' title='A  who likes web technologies and assorted games.'>InvisaMage</a>'s website.<br>" +
		"I hope you enjoy your stay."
		
	;}
//Creator Message - List
		if (nL == "invisamage" || nL == "travis kipp" || nL == "sir kipp") {
			document.getElementById('name').innerHTML =
			"Hello creator and welcome back. " +
			"Here are some links I thought you might like. " +
			"When are you ever going to create some real content?<br><br>" +
			card +
				"<h5 class='card-header'>Links</h5>" +
				"<div class='card-body'>" +
					"<a class='link link-light' data-toggle='tooltip' data-placement='top' title='The search engine that does not track you.' target='_blank' rel='noopener noreferrer' href='https://duckduckgo.com/'>DuckDuckGo</a><br>" +
					"<a class='link link-light' data-toggle='tooltip' data-placement='top' title='A publicly accessible and editable wiki for information related to Minecraft.' target='_blank' rel='noopener noreferrer' href='http://minecraft.gamepedia.com/Minecraft_Wiki'>Minecraft Wiki</a><br>" +
					"<a class='link link-light' data-toggle='tooltip' data-placement='top' title='A web-based Git repository hosting service.' target='_blank' rel='noopener noreferrer' href='https://github.com/'>GitHub</a><br>" +
					"<a class='link link-light' data-toggle='tooltip' data-placement='top' title='Telegram Web Client' target='_blank' rel='noopener noreferrer' href='https://web.telegram.org/'>Telegram Web</a>" +
				"</div>"+
			"</div>"
		;}
//Travis
		if (nL == "travis") {
			document.getElementById('name').innerHTML =
			"Hey, that's my creator's name!"
		;}
//Friends
		if (nL == "matt" || nL == "matthew" || nL == "carson") {
			document.getElementById('name').innerHTML =
			"Hello good friend and welcome back to my website."
		;}
//Noel
		if (nL == "noel") {
			document.getElementById('name').innerHTML =
			"See, there is plenty of snow, Noel.";
			loadSnowstormNamePrompt();
		}
//Tanner - Audio
		if (nL == "tanner" || nL == "no") {
			document.getElementById('name').innerHTML =
			"Ohhh No!" +
			"<audio autoplay preload='auto'><source src='./audio/no.mp3' type='audio/mpeg'></audio>"
		;}
//Kevin - Host
		if (nL == "kevin") {
			document.getElementById('name').innerHTML =
			"Hello good friend and welcome back to my website.<br>" +
			"Thanks for hosting, but I grew up.<br><br>" +
			"<a class=link target='_blank' rel='noopener noreferrer' href='https://chaoswebs.net/'>https://chaoswebs.net/</a>"
		;}
//Father
		if (nL == "dan" || nL == "daniel" || nL == "dad" || nL == "father") {
			document.getElementById('name').innerHTML =
			"Hello father and welcome back to my website."
		;}
//Mother
		if (nL == "connie" || nL == "mom" || nL == "mother") {
			document.getElementById('name').innerHTML =
			"Hello mother and welcome back to my website."
		;}
//Girls
		if (nL == "kim" || nL == "sabrina" || nL == "courtney" || nL == "taylor" || nL == "emily") {
			document.getElementById('name').innerHTML =
			"Hello miss and welcome back to my website."
		;}
//Rachel
		if (nL == "rachel") {
			document.getElementById('name').innerHTML =
			"Hello <a class='definition' data-toggle='tooltip' data-placement='top' title='An endangered subspecies of humans which are incapable of reproducing.'>femake</a> and welcome back to my website."
		;}
//Eric
		if (nL == "eric") {
			document.getElementById('name').innerHTML =
			"Hello <a class='definition' data-toggle='tooltip' data-placement='top' title='An endangered subspecies of humans which are incapable of reproducing.'>femake</a> lover and welcome back to my website."
		;}
//Joe
		if (nL == "joe" || nL == "joey") {
			document.getElementById('name').innerHTML =
			"Hello nerd and welcome back to my website."
		;}
//Brian
		if (nL == "brian") {
			document.getElementById('name').innerHTML =
			"Hello brother and welcome back to my website."
		;}
//Rudy
		if (nL == "rudy") {
			document.getElementById('name').innerHTML =
			"Quit playing with the clock!" +
			"<audio autoplay preload='auto'><source src='./audio/clock.wav' type='audio/wav'></audio>"
		;}
//David - Audio
		if (nL == "david") {
			document.getElementById('name').innerHTML =
			"Tell me David, what's the answer?<br><br>" +
			btnGroup +
			  "<button class='btn btn-secondary btn-md' role='button' onclick='$(`#collapse-info`).collapse(`toggle`)' data-toggle='tooltip' title='Click for details' data-container='body'>Remember David</button>" +
				pauseBtn +
					faPause +
				"</button>" +
			"</div>" +
			"<br>" +
			"<br>" +
			"<div class='collapse' id='collapse-info'>" +
			  card +
				"<div class='card-header'><audio controls autoplay><source src='./audio/david.mp3' type='audio/mpeg'></audio></div>" +
			    "<table class='table'>" +
			      "<tr>" +
			        "<td><h6 class='black-bold'>Title</h6></td>" +
			        "<th><h6 class='black'>Remember David</h6></th>" +
			      "</tr>" +
			      "<tr>" +
			        "<td><h6 class='black-bold'>Artist</h6></td>" +
			        "<th><h6 class='black'>A Flock of Seagulls</h6></th>" +
			      "</tr>" +
			      "<tr>" +
			        "<td><h6 class='black-bold'>Album</h6></td>" +
			        "<th><h6 class='black'>The Story of a Young Heart</h6></th>" +
			      "</tr>" +
			      "<tr>" +
			        "<td><h6 class='black-bold'>Year</h6></td>" +
			        "<th><h6 class='black'>1984</h6></th>" +
			      "</tr>" +
						"<tr>" +
			        "<td><h6 class='black-bold'>Download</h6></td>" +
			        "<th><h6><a class='link link-light' href='https://itunes.apple.com/us/album/the-story-of-a-young-heart/id295506962' target='_blank' rel='noopener noreferrer'>iTunes</a><br><a class='link link-light' href='https://www.amazon.com/Remember-David/dp/B001KW53EU/' target='_blank' rel='noopener noreferrer'>Amazon</a></h6></th>" +
			      "</tr>" +
			    "</table>" +
			  "</div>" +
			"</div>"
		;}
//Jenny - Audio
		if (nL == "jenny") {
			document.getElementById('name').innerHTML =
			"Jenny, I've got your number.<br><br>" +
			btnGroup +
			  "<button class='btn btn-secondary btn-md' role='button' onclick='$(`#collapse-info`).collapse(`toggle`)' data-toggle='tooltip' title='Click for details' data-container='body'>867-5309/Jenny</button>" +
				pauseBtn +
					faPause +
				"</button>" +
			"</div>" +
			"<br>" +
			"<br>" +
			"<div class='collapse' id='collapse-info'>" +
			  card +
				"<div class='card-header'><audio controls autoplay><source src='./audio/jenny.mp3' type='audio/mpeg'></audio></div>" +
					"<table class='table'>" +
			      "<tr>" +
			        "<td><h6 class='black-bold'>Title</h6></td>" +
			        "<th><h6 class='black'>867-5309/Jenny</h6></th>" +
			      "</tr>" +
			      "<tr>" +
			        "<td><h6 class='black-bold'>Artist</h6></td>" +
			        "<th><h6 class='black'>Tommy Tutone</h6></th>" +
			      "</tr>" +
			      "<tr>" +
			        "<td><h6 class='black-bold'>Album</h6></td>" +
			        "<th><h6 class='black'>N/A (Single)</h6></th>" +
			      "</tr>" +
			      "<tr>" +
			        "<td><h6 class='black-bold'>Year</h6></td>" +
			        "<th><h6 class='black'>1981</h6></th>" +
			      "</tr>" +
						"<tr>" +
			        "<td><h6 class='black-bold'>Download</h6></td>" +
			        "<th><h6><a class='link link-light' href='https://itunes.apple.com/us/album/867-5309-jenny-single/id278258326' target='_blank' rel='noopener noreferrer'>iTunes</a><br><a class='link link-light' href='https://www.amazon.com/867-5309-Jenny/dp/B001J2BFWK/' target='_blank' rel='noopener noreferrer'>Amazon</a></h6></th>" +
			      "</tr>" +
			    "</table>" +
			  "</div>" +
			"</div>"
		;}
//Stacy - Audio
		if (nL == "stacy") {
			document.getElementById('name').innerHTML =
			"Stacy, your mom has got it going on.<br><br>" +
			btnGroup +
			  "<button class='btn btn-secondary btn-md' role='button' onclick='$(`#collapse-info`).collapse(`toggle`)' data-toggle='tooltip' title='Click for details' data-container='body'>Stacy's Mom</button>" +
				pauseBtn +
					faPause +
				"</button>" +
			"</div>" +
			"<br>" +
			"<br>" +
			"<div class='collapse' id='collapse-info'>" +
			  card +
				"<div class='card-header'><audio controls autoplay><source src='./audio/stacy.mp3' type='audio/mpeg'></audio></div>" +
					"<table class='table'>" +
			      "<tr>" +
			        "<td><h6 class='black-bold'>Title</h6></td>" +
			        "<th><h6 class='black'>Stacy's Mom</h6></th>" +
			      "</tr>" +
			      "<tr>" +
			        "<td><h6 class='black-bold'>Artist</h6></td>" +
			        "<th><h6 class='black'>Fountains of Wayne</h6></th>" +
			      "</tr>" +
			      "<tr>" +
			        "<td><h6 class='black-bold'>Album</h6></td>" +
			        "<th><h6 class='black'>N/A (Single)</h6></th>" +
			      "</tr>" +
			      "<tr>" +
			        "<td><h6 class='black-bold'>Year</h6></td>" +
			        "<th><h6 class='black'>2003</h6></th>" +
			      "</tr>" +
						"<tr>" +
			        "<td><h6 class='black-bold'>Download</h6></td>" +
			        "<th><h6><a class='link link-light' href='https://itunes.apple.com/us/album/welcome-interstate-managers/id712721721' target='_blank' rel='noopener noreferrer'>iTunes</a><br><a class='link link-light' href='https://www.amazon.com/Stacys-Mom/dp/B000TEMF7S/' target='_blank' rel='noopener noreferrer'>Amazon</a></h6></th>" +
			      "</tr>" +
			    "</table>" +
			  "</div>" +
			"</div>"
		;}
//Jessie - Audio
		if (nL == "jessie") {
			document.getElementById('name').innerHTML =
			"Why can't I find a woman like that?<br><br>" +
			btnGroup +
			  "<button class='btn btn-secondary btn-md' role='button' onclick='$(`#collapse-info`).collapse(`toggle`)' data-toggle='tooltip' title='Click for details' data-container='body'>Jessie's Girl</button>" +
				pauseBtn +
					faPause +
				"</button>" +
			"</div>" +
			"<br>" +
			"<br>" +
			"<div class='collapse' id='collapse-info'>" +
			  card +
				"<div class='card-header'><audio controls autoplay><source src='./audio/jessie.mp3' type='audio/mpeg'></audio></div>" +
			    "<table class='table table-condensed'>" +
			      "<tr>" +
			        "<td><h6 class='black-bold'>Title</h6></td>" +
			        "<th><h6 class='black'>Jessie's Girl</h6></th>" +
			      "</tr>" +
			      "<tr>" +
			        "<td><h6 class='black-bold'>Artist</h6></td>" +
			        "<th><h6 class='black'>Rick Springfield</h6></th>" +
			      "</tr>" +
			      "<tr>" +
			        "<td><h6 class='black-bold'>Album</h6></td>" +
			        "<th><h6 class='black'>N/A (Single)</h6></th>" +
			      "</tr>" +
			      "<tr>" +
			        "<td><h6 class='black-bold'>Year</h6></td>" +
			        "<th><h6 class='black'>1980</h6></th>" +
			      "</tr>" +
						"<tr>" +
			        "<td><h6 class='black-bold'>Download</h6></td>" +
			        "<th><h6><a class='link link-light' href='https://itunes.apple.com/us/album/the-best-of-rick-springfield/id258611578' target='_blank' rel='noopener noreferrer'>iTunes</a><br><a class='link link-light' href='https://www.amazon.com/Jessies-Girl/dp/B00136JB14' target='_blank' rel='noopener noreferrer'>Amazon</a></h6></th>" +
			      "</tr>" +
			    "</table>" +
			  "</div>" +
			"</div>"
		;}
//Leah - Audio
		if (nL == "leah") {
			document.getElementById('name').innerHTML =
			"Oh hey Leah. Look, it's your favourite song.<br><br>" +
			btnGroup +
			  "<button class='btn btn-secondary btn-md' role='button' onclick='$(`#collapse-info`).collapse(`toggle`)' data-toggle='tooltip' title='Click for details' data-container='body'>Ah Leah</button>" +
				pauseBtn +
					faPause +
				"</button>" +
			"</div>" +
			"<br>" +
			"<br>" +
			"<div class='collapse' id='collapse-info'>" +
			  "<div class='card bg-secondary'>" +
				"<div class='card-header'><audio controls autoplay><source src='./audio/leah.mp3' type='audio/mpeg'></audio></div>" +
					"<table class='table table-condensed '>" +
			      "<tr>" +
			        "<td><h6 class='black-bold'>Title</h6></td>" +
			        "<th><h6 class='black'>Ah Leah</h6></th>" +
			      "</tr>" +
			      "<tr>" +
			        "<td><h6 class='black-bold'>Artist</h6></td>" +
			        "<th><h6 class='black'>Donnie Iris</h6></th>" +
			      "</tr>" +
			      "<tr>" +
			        "<td><h6 class='black-bold'>Album</h6></td>" +
			        "<th><h6 class='black'>N/A (Single)</h6></th>" +
			      "</tr>" +
			      "<tr>" +
			        "<td><h6 class='black-bold'>Year</h6></td>" +
			        "<th><h6 class='black'>1980</h6></th>" +
			      "</tr>" +
						"<tr>" +
			        "<td><h6 class='black-bold'>Download</h6></td>" +
			        "<th><h6><a class='link link-light' href='https://itunes.apple.com/us/album/20th-century-masters-millennium/id66474' target='_blank' rel='noopener noreferrer'>iTunes</a><br><a class='link link-light' href='https://www.amazon.com/Ah-Leah-Album-Version/dp/B000VWKVSI' target='_blank' rel='noopener noreferrer'>Amazon</a></h6></th>" +
			      "</tr>" +
			    "</table>" +
			  "</div>" +
			"</div>"
		;}
//Eileen - Audio
		if (nL == "eileen") {
			document.getElementById('name').innerHTML =
			"Come on Eileen.<br><br>" +
			btnGroup +
			  "<button class='btn btn-secondary btn-md' role='button' onclick='$(`#collapse-info`).collapse(`toggle`)' data-toggle='tooltip' title='Click for details' data-container='body'>Come On Eileen</button>" +
				pauseBtn +
					faPause +
				"</button>" +
			"</div>" +
			"<br>" +
			"<br>" +
			"<div class='collapse' id='collapse-info'>" +
			  	"<div class='card bg-secondary'>" +
					"<div class='card-header'><audio controls autoplay><source src='./audio/eileen.mp3' type='audio/mpeg'></audio></div>" +
					"<table class='table table-condensed '>" +
			      "<tr>" +
			        "<td><h6 class='black-bold'>Title</h6></td>" +
			        "<th><h6 class='black'>Come On Eileen</h6></th>" +
			      "</tr>" +
			      "<tr>" +
			        "<td><h6 class='black-bold'>Artist</h6></td>" +
			        "<th><h6 class='black'>Dexys Midnight Runners</h6></th>" +
			      "</tr>" +
			      "<tr>" +
			        "<td><h6 class='black-bold'>Album</h6></td>" +
			        "<th><h6 class='black'>Too-Rye-Ay</h6></th>" +
			      "</tr>" +
			      "<tr>" +
			        "<td><h6 class='black-bold'>Year</h6></td>" +
			        "<th><h6 class='black'>1982</h6></th>" +
			      "</tr>" +
						"<tr>" +
			        "<td><h6 class='black-bold'>Download</h6></td>" +
			        "<th><h6><a class='link link-light' href='https://itunes.apple.com/us/album/too-rye-ay-expanded-edition/id136012' target='_blank' rel='noopener noreferrer'>iTunes</a><br><a class='link link-light' href='https://www.amazon.com/Come-On-Eileen-Album-Version/dp/B0013XHLG4' target='_blank' rel='noopener noreferrer'>Amazon</a></h6></th>" +
			      "</tr>" +
			    "</table>" +
			  "</div>" +
			"</div>"
		;}
//Mickey - Audio
		if (nL == "mickey") {
			document.getElementById('name').innerHTML =
			"Hey Mickey you're so fine.<br><br>" +
			btnGroup +
			  "<button class='btn btn-secondary btn-md' role='button' onclick='$(`#collapse-info`).collapse(`toggle`)' data-toggle='tooltip' title='Click for details' data-container='body'>Mickey</button>" +
				pauseBtn +
					faPause +
				"</button>" +
			"</div>" +
			"<br>" +
			"<br>" +
			"<div class='collapse' id='collapse-info'>" +
				"<div class='card bg-secondary'>" +
				"<div class='card-header'><audio controls autoplay><source src='./audio/mickey.mp3' type='audio/mpeg'></audio></div>" +
					"<table class='table'>" +
			      "<tr>" +
			        "<td><h6 class='black-bold'>Title</h6></td>" +
			        "<th><h6 class='black'>Mickey</h6></th>" +
			      "</tr>" +
			      "<tr>" +
			        "<td><h6 class='black-bold'>Artist</h6></td>" +
			        "<th><h6 class='black'>Toni Basil</h6></th>" +
			      "</tr>" +
			      "<tr>" +
			        "<td><h6 class='black-bold'>Album</h6></td>" +
			        "<th><h6 class='black'>Word of Mouth</h6></th>" +
			      "</tr>" +
			      "<tr>" +
			        "<td><h6 class='black-bold'>Year</h6></td>" +
			        "<th><h6 class='black'>1982</h6></th>" +
			      "</tr>" +
						"<tr>" +
			        "<td><h6 class='black-bold'>Download</h6></td>" +
			        "<th><h6><a class='link link-light' href='https://itunes.apple.com/us/album/mickey-very-best-toni-basil/id524095099' target='_blank' rel='noopener noreferrer'>iTunes</a><br><a class='link link-light' href='https://www.amazon.com/dp/B019HX0IY8' target='_blank' rel='noopener noreferrer'>Amazon</a></h6></th>" +
			      "</tr>" +
			    "</table>" +
			  "</div>" +
			"</div>"
		;}
//Jesus
		if (nL == "jesus") {
			document.getElementById('name').innerHTML =
			"So, it looks like you're back.<br>Now what?"
		;}
//Cortana - Audio
		if (nL == "cortana" || nL == "hey Cortana") {
			document.getElementById('name').innerHTML =
			"Can I be of assistance?<br><br>" +
			"<img class='img-fluid rounded-circle center-block' src='images/cortana.gif' height='175' width='175'><br>" +
			"Thinking..." +
			"<audio autoplay preload='auto'><source src='./audio/cortana.mp3' type='audio/mpeg'></audio>"
		;}
//Siri - Audio
		if (nL == "siri" || nL == "hey Siri") {
			document.getElementById('name').innerHTML =
			"What can I help you with?<br><br>" +
			"<img class='img-fluid rounded center-block' src='images/siri.gif' height='113' width='555'><br>" +
			"Hmmm... Let me think about that." +
			"<audio autoplay preload='auto'><source src='./audio/siri.mp3' type='audio/mpeg'></audio>"
		;}
//1
		if (nL == "spock") {
			document.getElementById('name').innerHTML =
			"Live long, and prosper.<br>" +
			"Leonard Nimoy, 1931-2015<br><br>" +
			"<img class='img-fluid rounded center-block' src='images/spock.jpg' height='300' width='300'><br><br>" +
			"<i class='far fa-hand-spock fa-4x'></i>"
		;}
//Leia
		if (nL == "leia" || nL == "princess leia") {
			document.getElementById('name').innerHTML =
			"Aren't you a little short for a stormtrooper?<br>" +
			"Carrie Fisher, 1956-2016<br><br>" +
			"<img class='img-fluid rounded center-block' src='images/leia.jpg' height='383' width='260'>"
		;}
//Doctor Who
		if (nL == "the doctor" || nL == "doctor") {
			document.getElementById('name').innerHTML =
			"Doctor Who?<br>" +
			"Hey look, I found your TARDIS.<br><br>" +
			"<img class='img-fluid rounded center-block' src='images/tardis.jpg' height='200' width='225'>"
		;}
//Mirth - List
		if (nL == "mirth") {
			document.getElementById('name').innerHTML =
			card +
				"<h5 class='card-header'>Mirth</h5>" +
				"<div class='card-body'>" +
					"<a class='link link-light' data-toggle='tooltip' data-placement='top' title='Funny Windows Web Emulator' target='_blank' rel='noopener noreferrer' href='http://www.windows93.net/'>WINDOWS93.net</a><br>" +
					"<a class='link link-light' data-toggle='tooltip' data-placement='top' title='Restart old Operating Systems' target='_blank' rel='noopener noreferrer' href='http://www.therestartpage.com/'>The Restart Page</a><br>" +
					"<a class='link link-light' data-toggle='tooltip' data-placement='top' title='AI' target='_blank' rel='noopener noreferrer' href='http://www.cleverbot.com/'>Cleverbot</a>" +
				"</div>" +
			"</div>"
		;}
//Browsers - List
		if (nL == "browsers" || nL == "browser") {
			document.getElementById('name').innerHTML =
			"A list of popular web browsers.<br><br>" +
			card +
				"<h5 class='card-header'>Browsers</h5>" +
				"<div class='card-body'>" +
					"<a class='link link-light' data-toggle='tooltip' data-placement='top' title='Free Open source Internet Browser by Mozilla' target='_blank' rel='noopener noreferrer' href='https://www.mozilla.org/en-US/firefox/new/'>Mozilla Firefox</a><br>" +
					"<a class='link link-light' data-toggle='tooltip' data-placement='top' title='A fast, simple, and secure web browser, built for the modern web.' target='_blank' rel='noopener noreferrer' href='https://www.google.com/chrome/browser'>Google Chrome</a><br>" +
					"<a class='link link-light' data-toggle='tooltip' data-placement='top' title='The open-source web browser project from which Google Chrome draws its source code.' target='_blank' rel='noopener noreferrer' href='https://www.chromium.org/'>Chromium</a><br>" +
					"<a class='link link-light' data-toggle='tooltip' data-placement='top' title='A web browser developed by Microsoft and included in the companies Windows 10 operating systems.' target='_blank' rel='noopener noreferrer' href='http://www.browserfordoing.com/en-us/'>Microsoft Edge</a><br>" +
					"<a class='link link-light' data-toggle='tooltip' data-placement='top' title='A web browser developed by Apple based on the WebKit engine. Only available on Apple products.' target='_blank' rel='noopener noreferrer' href='https://www.apple.com/safari/'>Safari</a><br>" +
					"<a class='link link-light' data-toggle='tooltip' data-placement='top' title='A super fast, safe and secure way to surf the web, from Mac, PC or mobile.' target='_blank' rel='noopener noreferrer' href='https://www.opera.com/'>Opera</a>" +
				"</div>" +
			"</div>"
		;}
//Software - List
		if (nL == "software") {
			document.getElementById('name').innerHTML =
			"Ask and you shall receive.<br><br>" +
			card +
				"<h5 class='card-header'>Software</h5>" +
				"<div class='card-body'>" +
					"<a class='link link-light' data-toggle='tooltip' data-placement='top' title='Free open source internet browser by Mozilla' target='_blank' rel='noopener noreferrer' href='https://www.mozilla.org/en-US/firefox/new/'>Mozilla Firefox</a><br>" +
					"<a class='link link-light' data-toggle='tooltip' data-placement='top' title='Cross platform messaging application' target='_blank' rel='noopener noreferrer' href='https://telegram.org/'>Telegram</a><br>" +
					"<a class='link link-light' data-toggle='tooltip' data-placement='top' title='Office suite' target='_blank' rel='noopener noreferrer' href='http://www.libreoffice.org/'>LibreOffice</a><br>" +
					"<a class='link link-light' data-toggle='tooltip' data-placement='top' title='Text editor' target='_blank' rel='noopener noreferrer' href='http://notepad-plus-plus.org/'>Notepad++</a><br>" +
					"<a class='link link-light' data-toggle='tooltip' data-placement='top' title='Password manager' target='_blank' rel='noopener noreferrer' href='https://keepassxc.org/'>KeePassXC</a><br>" +
					"<a class='link link-light' data-toggle='tooltip' data-placement='top' title='Software downloader' target='_blank' rel='noopener noreferrer' href='https://ninite.com/'>Ninite</a><br>" +
					"<a class='link link-light' data-toggle='tooltip' data-placement='top' title='Virtual machine software' target='_blank' rel='noopener noreferrer' href='https://www.virtualbox.org/'>Oracle Virtual Box</a><br>" +
					"<a class='link link-light' data-toggle='tooltip' data-placement='top' title='Desktop customization tool' target='_blank' rel='noopener noreferrer' href='http://rainmeter.net/'>Rainmeter</a><br>" +
					"<a class='link link-light' data-toggle='tooltip' data-placement='top' title='Desktop customization tool' target='_blank' rel='noopener noreferrer' href='https://github.com/TranslucentTB/TranslucentTB'>TranslucentTB</a><br>" +
					"<a class='link link-light' data-toggle='tooltip' data-placement='top' title='Screenshot utility' target='_blank' rel='noopener noreferrer' href='https://getgreenshot.org/'>Greenshot</a><br>" +
					"<a class='link link-light' data-toggle='tooltip' data-placement='top' title='Windows search utility' target='_blank' rel='noopener noreferrer' href='https://www.voidtools.com/support/everything/'>Everything</a><br>" +
					"<a class='link link-light' data-toggle='tooltip' data-placement='top' title='Portable applications for USB storage devices' target='_blank' rel='noopener noreferrer' href='http://portableapps.com/'>PortableApps</a><br>" +
					"<a class='link link-light' data-toggle='tooltip' data-placement='top' title='Image editor' target='_blank' rel='noopener noreferrer' href='http://www.getpaint.net/'>Paint.NET</a><br>" +
					"<a class='link link-light' data-toggle='tooltip' data-placement='top' title='3D rendering' target='_blank' rel='noopener noreferrer' href='http://www.blender.org/'>Blender</a><br>" +
					"<a class='link link-light' data-toggle='tooltip' data-placement='top' title='Audio editor' target='_blank' rel='noopener noreferrer' href='http://audacity.sourceforge.net/'>Audacity</a>" +
				"</div>"+
			"</div>"
		;}
//PC - List
		if (nL == "pc"|| nL == "computer") {
			document.getElementById('name').innerHTML =
			card +
				"<h5 class='card-header'>Computer Specs</h5>" +
				"<div class='card-body'>" +
					"Windows 10 Pro 64-bit<br>" +
					"ASUS Prime X470-Pro AM4<br>" +
					"AMD Ryzen 7 2700X<br>" +
					"G.Skill Trident Z (2x16 GB) DDR4-3200<br>" +
					"ASUS Radeon RX VEGA 64 8 GB STRIX<br>" +
					"Corsair Obsidian 500D Mid Tower<br>" +
					"Corsair Strafe RGB Keyboard<br>" +
					"Logitech G403" +
				"</div>"+
			"</div>"
		;}
//Python
		if (nL == "python") {
			document.getElementById('name').innerHTML =
			"<code>print(&quot;Hello World!&quot;)</code>"
		;}
//JavaScript
		if (nL == "javascript" || nL == "js") {
			document.getElementById('name').innerHTML =
			"<code>document.write(&quot;Hello World!&quot;);</code>"
		;}
//Reset
		if (nL == "reset" || nL == "clear" || nL == "cls") {
			document.getElementById('name').innerHTML =
			"Welcome to <a class='definition' data-toggle='tooltip' data-placement='top' title='The owner of this site is a privacy and security advocate who enjoys web technologies and TaeKwon-Do.'>InvisaMage</a>'s website."
		;}
//No name - Audio
		if (nL === "" || nL == " " || nL == "undefined") {
			document.getElementById('name').innerHTML =
			"Your name goes in that box but, welcome to <a class='definition' data-toggle='tooltip' data-placement='top' title='The owner of this site is a privacy and security advocate who enjoys web technologies and TaeKwon-Do.'>InvisaMage</a>'s website.<br><br>" +
			btnGroup +
			  "<button class='btn btn-secondary btn-md' role='button' onclick='$(`#collapse-info`).collapse(`toggle`)' data-toggle='tooltip' title='Click for details' data-container='body'>What's Your Name</button>" +
				pauseBtn +
					faPause +
				"</button>" +
			"</div>" +
			"<br>" +
			"<br>" +
			"<div class='collapse' id='collapse-info'>" +
			  card +
				"<div class='card-header'><audio controls autoplay><source src='./audio/name.mp3' type='audio/mpeg'></audio></div>" +
					"<table class='table'>" +
			      "<tr>" +
			        "<td><h6 class='black-bold'>Title</h6></td>" +
			        "<th><h6 class='black'>What's Your Name</h6></th>" +
			      "</tr>" +
			      "<tr>" +
			        "<td><h6 class='black-bold'>Artist</h6></td>" +
			        "<th><h6 class='black'>Boston</h6></th>" +
			      "</tr>" +
			      "<tr>" +
			        "<td><h6 class='black-bold'>Album</h6></td>" +
			        "<th><h6 class='black'>Walk On</h6></th>" +
			      "</tr>" +
			      "<tr>" +
			        "<td><h6 class='black-bold'>Year</h6></td>" +
			        "<th><h6 class='black'>1994</h6></th>" +
			      "</tr>" +
						"<tr>" +
			        "<td><h6 class='black-bold'>Download</h6></td>" +
			        "<th><h6><a class='link link-light' href='https://itunes.apple.com/us/album/walk-on/id60981' target='_blank' rel='noopener noreferrer'>iTunes</a><br><a class='link link-light' href='https://www.amazon.com/Whats-Your-Name-Album-Version/dp/B000VROBUM/' target='_blank' rel='noopener noreferrer'>Amazon</a></h6></th>" +
			      "</tr>" +
			    "</table>" +
			  "</div>" +
			"</div>"
		;}

	//Activate Tooltips
	enableTooltips();
	
	//Reduce volume
	let volume = document.querySelector("audio").volume = 0.4; 
	
	if (volume < 0) { 
		volume = 0;
	}
	document.querySelector("audio").volume = volume; 
}

//namePrompt media controls
function pause() {
	document.querySelector("audio").pause();
	document.querySelector("#pause-btn").outerHTML = "<a id='play-btn' class='btn btn-success btn-md' role='button' onclick='play();'> <i class='fa fa-play' aria-hidden='true'></i> </a>";
}
function play() {
	document.querySelector("audio").play();
	document.querySelector("#play-btn").outerHTML = "<a id='pause-btn' class='btn btn-success btn-md' role='button' onclick='pause();'> <i class='fa fa-pause' aria-hidden='true'></i> </a>";
}

//Loads snowstorm assets and enables for namePrompt easter egg
function loadSnowstormNamePrompt() {
	setTimeout(enable, 500);
	$.getScript('js/snowstorm.js');
	document.querySelector("#footer-snowstorm"),outerHTML = "<a class='link' id='footer-snowstorm' onclick='snowStorm.toggleSnow(); vulcanicAshCheck();' data-toggle='tooltip' data-placement='top' title='Toggle the snowstorm!'>Toggle snow</a>";
		function enable() {
			vulcanicAshCheck();
			snowStorm.toggleSnow();
		}
}
