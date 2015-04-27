// The current time in 24h clock

function clock()
{
	var today=new Date();
	var h=today.getHours();
	var m=today.getMinutes();
	var s=today.getSeconds();
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById("clock").innerHTML = h+":"+m+":"+s;
	var t = setTimeout(function(){clock()},500);
}

function checkTime(i) 
{
	if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
	return i;
}


// Displays the date at which the page was loaded

function date()
{
	document.getElementById("date").innerHTML = Date();
}