// Displays how many times you have visited the web page

var cookiec = document.cookie
if (cookiec != "") {
	var eqchr = 0;
	for (var cloop = 1; cloop <= cookiec.length; cloop++) {
		if (cookiec.charAt(cloop) == "=") {
			eqchr=(++cloop);
		}
	}
	var cookiess = 0;
	clength=cookiec.length;
	cookies="";
	for (cloop = eqchr; cloop < clength; cloop++) {
		if (cookiec==";") {
			cloop=clength;
		}
		else {
			cookies = cookies + cookiec.charAt(cloop);			
		}
	}
	cookiess = parseInt(cookies);
	document.write("[ " + cookiess + " ]");
	cookiess++;
	cookies = cookiess;
	var one_week = 7 * 24 * 60 * 60 * 1000;
	var expDate = new Date();
	expDate.setTime(expDate.getTime() + one_week);
	document.cookie = "Counter=" + escape(cookies) + "; expires=" + expDate.toGMTString();
}	
else {
	var one_week = 7 * 24 * 60 * 60 * 1000;
	var expDate = new Date();
	expDate.setTime(expDate.getTime() + one_week);
	document.cookie = "Counter=2; expires=" + expDate.toGMTString();
	document.write("[1]");
}