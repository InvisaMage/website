
interval = setInterval(time, 1000);
// Clock script
function time()
{
	var currentTime = document.getElementById("clock");
		var d = new Date();
		var t = d.toLocaleTimeString();
		document.getElementById("clock").innerHTML = t;
}
