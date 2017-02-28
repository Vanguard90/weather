
let gpsStatus;

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
} else {
    alert('It seems like Geolocation, which is required for this page, is not enabled in your browser. Please use a browser which supports it.');
}

function successFunction(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    console.log('Your latitude is :'+lat+' and longitude is '+long);
    connLink = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=c364db0444ad3c687cf51fa2244afe1e`;
    console.log(connLink);
    gpsStatus = true;
}

function errorFunction(position) {
	gpsStatus = false;
	alert('Error on acquiring user position!');

}

let gpsbutton = document.querySelector(".gps");
let gpsButtonClick = gpsbutton.addEventListener("click", gpsClickEvent, false);

function gpsClickEvent (process) {

if (gpsStatus = true){

let xhr = new XMLHttpRequest();
xhr.addEventListener("readystatechange", processRequest, false);
xhr.onreadystatechange = processRequest;
xhr.open("GET", connLink, true);
xhr.send();

console.log(xhr.status);
//console.log(xhr.statusText);

function processRequest(e) {

if (gpsStatus = true){
 
 if (xhr.readyState == 4 && xhr.status == 200) {

 	console.log("Passed if in processrequest")
 	let response = JSON.parse(xhr.responseText);
 	console.log(response);
 	let temperature = (response.main.temp) - 273;
 	temperature = Math.round(temperature);
 	temperature = temperature + " ℃";
 	console.log(temperature);
 	let weatherType;
 	let weatherTypeDetail;
 	for (i = 0; i < (response.weather).length; i++) {
 		weatherType = response.weather[i].main;
 		watherTypeDetail = response.weather[i].description;
 	}
 	//Problem with response weather!!!
 	console.log(weatherType);
 	console.log(weatherTypeDetail);
 	let sunrise = response.sys.sunrise;
 	let sunset = response.sys.sunset;
 	console.log(sunrise);
 	console.log(sunset);
 	let sunriseDate = new Date(sunrise*1000);
 	let sunsetDate = new Date(sunset*1000);
 	sunriseDate = `0${sunriseDate.getHours()}:${sunriseDate.getMinutes()}:${sunriseDate.getSeconds()}`
 	sunsetDate =  `${sunsetDate.getHours()}:${sunsetDate.getMinutes()}:${sunsetDate.getSeconds()}`
 	console.log(sunriseDate);
 	console.log(sunsetDate);
 	let locationName = response.name;
 	console.log(locationName);
 
} 

 else if (xhr.readyState == 0 && xhr.status !== 200){

 	console.log("reached else in processrequest");
 	document.querySelector(".errorp").innerHTML = "There is an error!";
 }
 
}
}
} else if (gpsStatus = false) {

	alert("No GPS data!");
}
}

/* if receiveddata != null, then formentry.text = variable. Variable to be used at the GET request.*/

//http://api.openweathermap.org/data/2.5/weather?lat=51.4367&lon=5.4802&APPID=c364db0444ad3c687cf51fa2244afe1e