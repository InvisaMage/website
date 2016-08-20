//If Search term is listed below, you will jump to that specific page

function search()
{
	var search = document.getElementById("search").value || document.getElementById("search-mobile").value

//Homepage
	if (search == "Home" || (search == "home")) {
	window.location = "index.html";
	}

//News page
	else if (search == "News" || (search == "news")) {
	window.location = "news.html";
	}

//Floating Survival page
	else if (search == "Floating Survival" || (search == "floating survival") || (search == "FS") || (search == "fs") || (search == "Floating survival") || (search == "floating Survival")) {
	window.location = "fs.html";
	}

//InvisaRant page
	else if (search == "Podcast" || (search == "podcast") || (search == "InvisaRant") || (search == "invisarant") || (search == "Invisarant") || (search == "invisaRant")) {
	window.location = "invisarant.html";
	}

//Contact Modal
	else if (search == "Contact" || (search == "contact") || (search == "Help") || (search == "help") || (search == "Support") || (search == "support") || (search == "Questions") || (search == "questions")) {
	loadContactMod();
	}

//Donate Modal
	else if (search == "Donate" || (search == "donate") || (search == "Money") || (search == "money")) {
	loadDonateMod();
	}

//Stats Modal
	else if (search == "Stats" || (search == "stats") || (search == "Statistics") || (search == "statistics") || (search == "Time") || (search == "time") || (search == "OS") || (search == "os") || (search == "Version") || (search == "version")) {
	loadStatsMod();
	}

//About page
	else if (search == "About" || (search == "about") || (search == "InvisaMage") || (search == "invisamage") || (search == "Creation") || (search == "creation") || (search == "Information") || (search == "information")) {
	window.location = "about.html";
	}

//Terms page
	else if (search == "Terms" || (search == "terms") || (search == "Copyright") || (search == "copyright") || (search == "Legal") || (search == "legal") || (search == "Warranties") || (search == "warranties") || (search == "Liability") || (search == "liability")) {
	window.location = "terms.html";
	}

//Privacy page
	else if (search == "Privacy" || (search == "privacy") || (search == "Cookies") || (search == "cookies")) {
	window.location = "privacy.html";
	}

//Archive modal
	else if (search == "Archive" || (search == "archive") || (search == "Old Pages") || (search == "old pages")) {
	loadArchiveMod();
	}

//404 Error page
	else if (search == "404" || (search == "404 Error") || (search == "404 error") || (search == "Error") || (search == "error")) {
	window.location = "404.html";
	}

//Terminal modal
	else if (search == "Terminal" || (search == "terminal") || (search == "Commands") || (search == "commands") || (search == "cmd")) {
	loadTerminalMod();
	}

//Achievements modal
	else if (search == "Achievements" || (search == "achievements") || (search == "Progress") || (search == "progress")) {
	loadAchievementsMod();
	}

//Settings modal
	else if (search == "Settings" || (search == "settings") || (search == "Options") || (search == "options") || (search == "Configure") || (search == "configure")) {
	loadSettingsMod();
	}

//Google
	else if (search == "Google" || (search == "google")) {
	window.open("https://www.google.com/");
	}

//Bing
	else if (search == "Bing" || (search == "bing")) {
	window.open("https://www.bing.com/");
	}

//DuckDuckGo
	else if (search == "DuckDuckGo" || (search == "duckduckgo") || (search == "DuckGo") || (search == "duckgo") || (search == "Duck") || (search == "duck")) {
	window.open("https://duckduckgo.com/");
	}

//YouTube
	else if (search == "YouTube" || (search == "youtube") || (search == "YT") || (search == "yt")) {
	window.open("https://www.youtube.com/");
	}

//RuneScape
	else if (search == "RuneScape" || (search == "runescape") || (search == "RS") || (search == "rs")) {
	window.location = ("rs-launch://www.runescape.com/jav_config.ws");
	}

//DarkScape
	else if (search == "DarkScape" || (search == "darkscape") || (search == "DS") || (search == "ds")) {
	window.location = ("rs-launch://www.runescape.com/jav_config_beta.ws");
	}

//Cortana
	else if (search == "Cortana" || (search == "cortana")) {
	window.location = ("ms-Cortana://");
	}

//Blank
	else if (search == "" || (search == " ")) {
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
