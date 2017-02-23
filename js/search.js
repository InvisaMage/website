//If Search term is listed below, you will jump to that specific page

function search()
{
	var search = document.getElementById("search").value;
	var sL = search.toLowerCase();

//Homepage
	if (sL == "home") {
		window.location = "index.html";
	}

//News page
	else if (sL == "news") {
		window.location = "news.html";
	}

//Valkyrie Realms page
	else if (sL == "valkyrie realms" || sL == "vr"){
		window.location = "mc.html";
	}
//Floating Survival page
	else if (sL == "floating survival" || sL == "fs") {
		window.location = "fs.html";
	}

//InvisaRant page
	else if (sL == "podcast" || sL == "invisarant") {
		window.location = "invisarant.html";
	}

//Contact Modal
	else if (sL == "contact" || sL == "help" || sL == "support" || sL == "questions") {
		loadContactMod();
	}

//Donate Modal
	else if (sL == "donate" || sL == "money") {
		loadDonateMod();
	}

//Stats Modal
	else if (sL == "stats" || sL == "statistics" || sL == "time" || sL == "os" || sL == "version") {
		loadStatsMod();
	}

//About page
	else if (sL == "about" || sL == "invisamage" || sL == "creation" || sL == "information") {
		window.location = "about.html";
	}

//Terms page
	else if (sL == "terms" || sL == "copyright" || sL == "legal" || sL == "warranties" || sL == "liability") {
		window.location = "terms.html";
	}

//Privacy page
	else if (sL == "privacy" || sL == "cookies") {
		window.location = "privacy.html";
	}

//Archive modal
	else if (sL == "archive" || sL == "old pages") {
		loadArchiveMod();
	}

//404 Error page
	else if (sL == "404" || sL == "404 error" || sL == "error") {
		window.location = "404.html";
	}

//Terminal modal
	else if (sL == "terminal" || sL == "commands" || sL == "cmd") {
		loadTerminalMod();
	}

//Achievements modal
	else if (sL == "achievements" || sL == "progress") {
		loadAchievementsMod();
	}

//Settings modal
	else if (sL == "settings" || sL == "options" || sL == "configure") {
		loadSettingsMod();
	}

//Google
	else if (sL == "google") {
		window.open("https://www.google.com/");
	}

//Bing
	else if (sL == "bing") {
		window.open("https://www.bing.com/");
	}

//DuckDuckGo
	else if (sL == "duckduckgo" || sL == "duckgo" || sL == "duck") {
		window.open("https://duckduckgo.com/");
	}

//YouTube
	else if (sL == "youtube" || sL == "yt") {
		window.open("https://www.youtube.com/");
	}

//RuneScape
	else if (sL == "runescape" || sL == "rs") {
		window.location = ("rs-launch://www.runescape.com/jav_config.ws");
	}

//DarkScape
	else if (sL == "darkscape" || sL == "ds") {
		window.location = ("rs-launch://www.runescape.com/jav_config_beta.ws");
	}

//Cortana
	else if (sL == "cortana") {
		window.location = ("ms-Cortana://");
	}

//Blank
	else if (sL == "" || sL == " ") {
		$.bootstrapGrowl("There's nothing to search for!", {
	    type: 'danger',
	    align: 'right',
	    offset: {from: 'top', amount: 60},
	    width: 'auto',
	    allow_dismiss: true
	  });
	}

//If no other conditions are true, display message.
	else {
		$.bootstrapGrowl("No Results", {
	    type: 'danger',
	    align: 'right',
	    offset: {from: 'top', amount: 60},
	    width: 'auto',
	    allow_dismiss: true
	  });
	}
}
