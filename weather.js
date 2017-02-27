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
// 	alert(response.weather.description);
 //	console.log(response.visibility);
 //	console.log(response.name);
 } else if (plainxhr.readyState == 0 && plainxhr.status !== 200){

 	console.log("reached else in processrequest");
 	document.querySelector(".errorp").innerHTML = "There is an error!";
 }
 
}
}

/* if receiveddata != null, then formentry.text = variable. Variable to be used at the GET request.*/

//http://api.openweathermap.org/data/2.5/weather?lat=51.4367&lon=5.4802&APPID=c364db0444ad3c687cf51fa2244afe1e