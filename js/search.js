//If Search term is listed below, you will jump to that specific page

function search()
{
	var search = document.getElementById("search").value || document.getElementById("search-mobile").value

//Homepage
	if (search == "Home" || (search == "home"))
	window.location = "index.html";

//News page
	if (search == "News" || (search == "news"))
	window.location = "news.html";

//Floating Survival page
	if (search == "Floating Survival" || (search == "floating survival") || (search == "FS") || (search == "fs") || (search == "Floating survival") || (search == "floating Survival"))
	window.location = "fs.html";

//InvisaRant page
	if (search == "Podcast" || (search == "podcast") || (search == "InvisaRant") || (search == "invisarant") || (search == "Invisarant") || (search == "invisaRant"))
	window.location = "invisarant.html";

//iOS Web App page
	if (search == "Web App" || (search == "web app") || (search == "iOS") || (search == "ios") || (search == "App") || (search == "app") || (search == "Application") || (search == "application") || (search == "iOS Web App") || (search == "iOS web app") || (search == "webapp"))
	window.location = "webapp.html";

//Contact Modal
	if (search == "Contact" || (search == "contact") || (search == "Help") || (search == "help") || (search == "Support") || (search == "support") || (search == "Questions") || (search == "questions"))
	loadContactMod();

//Donate Modal
	if (search == "Donate" || (search == "donate") || (search == "Money") || (search == "money"))
	loadDonateMod();

//Stats Modal
	if (search == "Stats" || (search == "stats") || (search == "Statistics") || (search == "statistics") || (search == "Time") || (search == "time") || (search == "OS") || (search == "os") || (search == "Version") || (search == "version"))
	loadStatsMod();

//About page
	if (search == "About" || (search == "about") || (search == "InvisaMage") || (search == "invisamage") || (search == "Creation") || (search == "creation") || (search == "Information") || (search == "information"))
	window.location = "about.html";

//Terms page
	if (search == "Terms" || (search == "terms") || (search == "Copyright") || (search == "copyright") || (search == "Legal") || (search == "legal") || (search == "Warranties") || (search == "warranties") || (search == "Liability") || (search == "liability"))
	window.location = "terms.html";

//Privacy page
	if (search == "Privacy" || (search == "privacy") || (search == "Cookies") || (search == "cookies"))
	window.location = "privacy.html";

//Archive modal
	if (search == "Archive" || (search == "archive") || (search == "Old Pages") || (search == "old pages"))
	loadArchiveMod();

//404 Error page
	if (search == "404" || (search == "404 Error") || (search == "404 error") || (search == "Error") || (search == "error"))
	window.location = "404.html";

//Terminal modal
	if (search == "Terminal" || (search == "terminal") || (search == "Commands") || (search == "commands") || (search == "cmd"))
	loadTerminalMod();

//Google
	if (search == "Google" || (search == "google"))
	window.open("https://www.google.com/");

//Bing
	if (search == "Bing" || (search == "bing"))
	window.open("https://www.bing.com/");

//DuckDuckGo
	if (search == "DuckDuckGo" || (search == "duckduckgo") || (search == "DuckGo") || (search == "duckgo") || (search == "Duck") || (search == "duck"))
	window.open("https://duckduckgo.com/");

//YouTube
	if (search == "YouTube" || (search == "youtube") || (search == "YT") || (search == "yt"))
	window.open("https://www.youtube.com/");

//RuneScape
	if (search == "RuneScape" || (search == "runescape") || (search == "RS") || (search == "rs"))
	window.location = ("rs-launch://www.runescape.com/jav_config.ws");

//DarkScape
	if (search == "DarkScape" || (search == "darkscape") || (search == "DS") || (search == "ds"))
	window.location = ("rs-launch://www.runescape.com/jav_config_beta.ws");

//Cortana
	if (search == "Cortana" || (search == "cortana"))
	window.location = ("ms-Cortana://");
}
