
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
// 	alert(response.weather.description);
 //	console.log(response.visibility);
 //	console.log(response.name);
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