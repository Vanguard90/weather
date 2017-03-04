let plainbutton = document.querySelector(".plaintext");
let plainButtonClick = plainbutton.addEventListener("click", plainClickEvent, false);

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
} //Capitalize function

function plainClickEvent (process) {

let locationName = document.querySelector('#locationname').value;
connLinkPlain = `http://api.openweathermap.org/data/2.5/weather?q=${locationName}&units=metric&APPID=c364db0444ad3c687cf51fa2244afe1e`;

let plainxhr = new XMLHttpRequest();
plainxhr.addEventListener("readystatechange", processRequest, false);
plainxhr.onreadystatechange = processRequest;
plainxhr.open("GET", connLinkPlain, true);
plainxhr.send();

console.log(plainxhr.status);

function processRequest(e) {
 
 if (plainxhr.readyState === 4 && plainxhr.status === 200) {
//Most of the variables declared on default.
 	console.log("Passed if in processrequest")
 	let response = JSON.parse(plainxhr.responseText);
 	console.log(response);
 	temperature = (response.main.temp);
 	temperature = Math.round(temperature);
 	temperature = temperature + " ℃";
 	console.log(temperature);
	for (i = 0; i < (response.weather).length; i++) {
 		weatherType = response.weather[i].main;
 		weatherTypeDetail = response.weather[i].description;
 	}
 	console.log(weatherType);
 	weatherTypeDetail = weatherTypeDetail.capitalize();
 	console.log(weatherTypeDetail);
 	sunrise = response.sys.sunrise;
 	sunset = response.sys.sunset;
 	console.log(sunrise);
 	console.log(sunset);
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
 	console.log(sunriseDate);
 	console.log(sunsetDate);
 	locationName = response.name;
 	console.log(locationName);
 	cloudiness =`%${response.clouds.all} cloudiness`;
 	console.log(cloudiness);

 } else if (locationName = null || plainxhr.readyState == 0 || plainxhr.status !== 200) {

 	console.log("reached else in processrequest");
 	document.querySelector(".errorp").innerHTML = "There is an error!";
 }
 
}
}

/* if receiveddata != null, then formentry.text = variable. Variable to be used at the GET request.*/

//http://api.openweathermap.org/data/2.5/weather?lat=51.4367&lon=5.4802&APPID=c364db0444ad3c687cf51fa2244afe1e