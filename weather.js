let plainbutton = document.querySelector(".plaintext");
let plainButtonClick = plainbutton.addEventListener("click", plainClickEvent, false);

function plainClickEvent (process) {

let plainxhr = new XMLHttpRequest();
plainxhr.addEventListener("readystatechange", processRequest, false);
plainxhr.onreadystatechange = processRequest;
plainxhr.open("GET", connLink, true);
plainxhr.send();

connLink = "http://api.openweathermap.org/data/2.5/weather?q=Eindhoven&APPID=c364db0444ad3c687cf51fa2244afe1e"
console.log(plainxhr.status);
//console.log(xhr.statusText);

function processRequest(e) {
 
 if (plainxhr.readyState === 4 && plainxhr.status === 200) {

 	console.log("Passed if in processrequest")
 	let response = JSON.parse(plainxhr.responseText);
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

 } else if (plainxhr.readyState == 0 && plainxhr.status !== 200){

 	console.log("reached else in processrequest");
 	document.querySelector(".errorp").innerHTML = "There is an error!";
 }
 
}
}

/* if receiveddata != null, then formentry.text = variable. Variable to be used at the GET request.*/

//http://api.openweathermap.org/data/2.5/weather?lat=51.4367&lon=5.4802&APPID=c364db0444ad3c687cf51fa2244afe1e