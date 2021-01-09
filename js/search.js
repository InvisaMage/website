//If Search term is listed below, you will jump to that specific page

function search(value) {
	var sL = value.toLowerCase();

	//Homepage
	if (sL == "home") {
		window.location = "/";
	}

	//News page
	else if (sL == "news") {
		window.location = "news";
	}

	//Valkyrie Realms page
	else if (sL == "valkyrie realms" || sL == "vr") {
		window.location = "mc";
	}
	//Floating Survival page
	else if (sL == "floating survival" || sL == "fs") {
		window.location = "fs";
	}

	//TxtLock page
	else if (sL == "txtlock") {
		window.location = "txtlock";
	}

	//TidyNT page
	else if (sL == "tidynt") {
		window.location = "tidynt";
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

	//Info page
	else if (sL == "info" || sL == "creation" || sL == "libraries" || sL == "functions" || sL == "design" || sL == "information") {
		window.location = "info";
	}

	//Terms page
	else if (sL == "terms" || sL == "copyright" || sL == "legal" || sL == "warranties" || sL == "liability") {
		window.location = "terms";
	}

	//Privacy page
	else if (sL == "privacy" || sL == "local storage") {
		window.location = "privacy";
	}

	//Archive modal
	else if (sL == "archive" || sL == "old pages") {
		loadArchiveMod();
	}

	//404 Error page
	else if (sL == "404" || sL == "404 error" || sL == "error") {
		window.location = "404";
	}

	//Terminal modal
	else if (sL == "terminal" || sL == "commands" || sL == "cmd") {
		window.location = "info#terminal-info";
	}

	//Achievements modal
	else if (sL == "achievements" || sL == "progress") {
		loadAchievementsMod();
	}

	//Settings modal
	else if (sL == "settings" || sL == "options" || sL == "configure") {
		loadSettingsMod();
	}

	//RuneScape
	else if (sL == "runescape" || sL == "rs") {
		window.location = ("rs-launch://www.runescape.com/jav_config.ws");
	}

	//Cortana
	else if (sL == "cortana") {
		window.location = ("ms-Cortana://");
	}

	//Blank
	else if (sL === "" || sL == " ") {
		PNotify.error({
			text: "There's nothing to search for!"
		});
	}

	//If no other conditions are true, display message.
	else {
		PNotify.error({
			text: 'No Results'
		});
	}
}
