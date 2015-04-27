// If Search term is listed below, you will jump to that specific page

function search() 
{
	var search = document.getElementById("search").value;

// Homepage
	if (search == "Home" || (search == "home"))
	window.location = "index.html";

// News page
	if (search == "News" || (search == "news") || (search == "New") || (search == "new"))
	window.location = "news.html";

// Floating Survival page
	if (search == "Floating Survival" || (search == "floating survival") || (search == "FS") || (search == "fs") || (search == "Floating survival") || (search == "floating Survival"))
	window.location = "fs.html";

// InvisaRant page
	if (search == "Podcast" || (search == "podcast") || (search == "InvisaRant") || (search == "invisarant") || (search == "Invisarant") || (search == "invisaRant"))
	window.location = "invisarant.html";

// iOS Web App page
	if (search == "iOS" || (search == "ios") || (search == "App") || (search == "app") || (search == "Application") || (search == "application") || (search == "iOS Web App") || (search == "iOS web app") || (search == "webapp"))
	window.location = "webapp.html";

// Contact page
	if (search == "Contact" || (search == "contact") || (search == "Help") || (search == "help") || (search == "Support") || (search == "support") || (search == "Questions") || (search == "questions"))
	window.location = "contact.html";

// About page
	if (search == "About" || (search == "about") || (search == "InvisaMage") || (search == "invisamage") || (search == "Creation") || (search == "creation") || (search == "Information") || (search == "information") || (search == "Help") || (search == "help") || (search == "?"))
	window.location = "about.html";

// Terms page
	if (search == "Terms" || (search == "terms") || (search == "Copyright") || (search == "copyright") || (search == "Legal") || (search == "legal") || (search == "Warranties") || (search == "warranties") || (search == "Liability") || (search == "liability"))
	window.location = "terms.html";

// Privacy page
	if (search == "Privacy" || (search == "privacy") || (search == "Cookies") || (search == "cookies"))
	window.location = "privacy.html";

// Archive page
	if (search == "Archive" || (search == "archive") || (search == "Old Pages") || (search == "old pages") || (search == "Old pages") || (search == "old Pages"))
	window.location = "archive.html";

// 404 Error page
	if (search == "404" || (search == "404 Error") || (search == "404 error") || (search == "Error") || (search == "error"))
	window.location = "404.html";

// Google
	if (search == "Google" || (search == "google"))
	window.open("https://www.google.com/");

// Bing
	if (search == "Bing" || (search == "bing"))
	window.open("https://www.bing.com/");

// DuckDuckGo
	if (search == "DuckDuckGo" || (search == "duckduckgo") || (search == "DuckGo") || (search == "duckgo") || (search == "Duck") || (search == "duck"))
	window.open("https://duckduckgo.com/");

// YouTube
	if (search == "YouTube" || (search == "youtube") || (search == "YT") || (search == "yt"))
	window.open("https://www.youtube.com/");
}