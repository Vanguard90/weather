let plainbutton = document.querySelector(".plaintext");
let plainButtonClick = plainbutton.addEventListener("click", plainClickEvent, false);
let plainButtonEnter = window.addEventListener("keyup", function(e) {

if (e.keyCode == 13) {

	plainClickEvent();
	} else { return;}

}, false);

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
} //Capitalize function

function plainClickEvent (process) {

locationName = document.querySelector('#locationname').value;
connLinkPlain = `http://api.openweathermap.org/data/2.5/weather?q=${locationName}&units=metric&APPID=c364db0444ad3c687cf51fa2244afe1e`;

let plainxhr = new XMLHttpRequest();
plainxhr.addEventListener("readystatechange", processRequest, false);
plainxhr.onreadystatechange = processRequest;
plainxhr.open("GET", connLinkPlain, true);
plainxhr.send();

function processRequest(e) {
 
 if (plainxhr.readyState === 4 && plainxhr.status === 200) {
//Most of the variables declared on default.
 	let response = JSON.parse(plainxhr.responseText);
 	temperature = (response.main.temp);
 	temperature = Math.round(temperature);
 	temperature = temperature + " ℃";
	for (i = 0; i < (response.weather).length; i++) {
 		weatherType = response.weather[i].main;
 		weatherTypeDetail = response.weather[i].description;
 	}
 	weatherTypeDetail = weatherTypeDetail.capitalize();
 	sunrise = response.sys.sunrise;
 	sunset = response.sys.sunset;
  	sunriseDate = new Date(sunrise*1000);
 	sunsetDate = new Date(sunset*1000);
 	let sunriseDateHour = sunriseDate.getHours();
 	if (sunriseDateHour < 10 ) {sunriseDateHour = "0" + sunriseDateHour};
 	let sunriseDateMinute = sunriseDate.getMinutes();
 	if (sunriseDateMinute < 10 ) {sunriseDateMinute = "0" + sunriseDateMinute};
 	let sunriseDateSecond = sunriseDate.getSeconds();
 	if (sunriseDateSecond < 10 ) {sunriseDateSecond = "0" + sunriseDateSecond};
 	sunriseDate = `${sunriseDateHour}:${sunriseDateMinute}:${sunriseDateSecond}`;
 	let sunsetDateHour = sunsetDate.getHours();
 	if (sunsetDateHour < 10 ) {sunsetDateHour = "0" + sunsetDateHour};
 	let sunsetDateMinute = sunsetDate.getMinutes();
 	if (sunsetDateMinute < 10 ) {sunsetDateMinute = "0" + sunsetDateMinute};
 	let sunsetDateSecond = sunsetDate.getSeconds();
 	if (sunsetDateSecond < 10 ) {sunsetDateSecond = "0" + sunsetDateSecond};
 	sunsetDate = sunsetDateHour + ':' + sunsetDateMinute + ':' + sunsetDateSecond;
 	locationName = response.name;
 	cloudiness =`${response.clouds.all}%`;
 	processStatus = true;
 	weatherId = response.weather;
 	weatherId = weatherId.find(x => x.id);
 	weatherId = weatherId.id;
 	weatherId = weatherId.toString();
 	weatherIndex = weatherId.charAt(0);
 	weatherIcon = response.weather;
 	weatherIcon = weatherIcon.find(x => x.icon);
 	weatherIcon = weatherIcon.icon;
 	setTimeout(markupResultPlain,0500);
 	skyCheck();
 	rainCheck();
 	snowCheck();
 } else if ((locationName == null) || (locationName == "")) {

 	document.querySelector(".errorp").innerHTML = "There is an error with the text search! Please enter a value.";
 	if (windowWidth < 701) {document.querySelector(".errorp").innerHTML = "There is an error with the text search!";
 	document.querySelector(".errorp2").innerHTML = "Please enter a value into the field.";};
 	processStatus = false;
 }

//|| plainxhr.readyState === 0 || plainxhr.status !== 200
}
}

function markupResultPlain(){

if (processStatus = true) {

	currentWeatherBody = document.querySelector(".currentweather");
	markupPlain = `<div><h2>Weather data for '${locationName}'</h2></div>
	<div class="temperature-div"><h3>Temperature is ${temperature}</h3><img class="weather-icon" src="img/thumbnail/${weatherIcon}.png" alt="weather-icon"></div>
	<div><p>Weather status: ${weatherTypeDetail}</p></div>
	<div><p>Cloudiness in the sky is ${cloudiness}</p></div>
	<div><p>Sun rises at ${sunriseDate}</p></div>
	<div><p>Sun sets at ${sunsetDate}</p></div>
	`;
	currentWeatherBody.innerHTML = markupPlain;
}
}