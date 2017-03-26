let gpsStatus;

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
} //Capitalize constructor

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
} else {
    alert('It seems like Geolocation, which is required for this page, is not enabled in your browser. Please use a browser which supports it.');
}

function successFunction(position) {
    lat = position.coords.latitude;
    long = position.coords.longitude;
    latlong = 'Your approximate latitude is '+ lat +' and longitude is '+ long;
    connLinkGps = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&APPID=c364db0444ad3c687cf51fa2244afe1e`;
    gpsStatus = true;
}

function errorFunction(position) {
	gpsStatus = false;
	alert('Error on acquiring user position! Please use plain text search.');

}

let gpsbutton = document.querySelector(".gps");
let gpsButtonClick = gpsbutton.addEventListener("click", gpsClickEvent, false);

function gpsClickEvent (process) {

if (gpsStatus = true){

let xhr = new XMLHttpRequest();
xhr.addEventListener("readystatechange", processRequest, false);
xhr.onreadystatechange = processRequest;
xhr.open("GET", connLinkGps, true);
xhr.send();

function processRequest(e) {

if (gpsStatus = true){
 
 if (xhr.readyState == 4 && xhr.status == 200) {
//Most of the variables declared on default.
 	let response = JSON.parse(xhr.responseText);
 	temperature = (response.main.temp);
 	temperature = Math.round(temperature);
 	temperature = temperature + "&#8451";
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
 	setTimeout(markupResult,0500);
 	skyCheck();
 	rainCheck();
 	snowCheck();
} else if (connLinkGps == undefined){
 	document.querySelector(".errorp").innerHTML = "Cannot make a GPS-based search. Please check your location settings!";
 	if (windowWidth < 701) {document.querySelector(".errorp").innerHTML = "Cannot make a GPS-based search.";
 	document.querySelector(".errorp2").innerHTML = "Please check your location settings!";};
 	processStatus = false;
 }

//xhr.readyState == 0 && xhr.status !== 200
}
}
} else if (gpsStatus = false) {

	alert("No GPS data!");
	processStatus = false;
}
}

function markupResult(){

if (processStatus = true) {

	currentWeatherBody = document.querySelector(".currentweather");
	markup = `<div><h2>Your location is '${locationName}'</h2></div>
	<div class="temperature-div"><h3>Temperature is ${temperature}</h3><img class="weather-icon" src="img/thumbnail/${weatherIcon}.png" alt="weather-icon"></div>
	<div><p>Weather status: ${weatherTypeDetail}</p></div>
	<div><p>Cloudiness in the sky is ${cloudiness}</p></div>
	<div><p>Sun rises at ${sunriseDate}</p></div>
	<div><p>Sun sets at ${sunsetDate}</p></div>
	<div><p><a href="http://maps.google.com/?q=${lat},${long}">${latlong}</a></p></div>
	`;
	currentWeatherBody.innerHTML = markup;
}
}