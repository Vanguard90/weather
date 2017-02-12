let button = document.querySelector("button");
let buttonClick = button.addEventListener("click", clickEvent, false);

function clickEvent (process) {

let xhr = new XMLHttpRequest();
xhr.addEventListener("readystatechange", processRequest, false);
xhr.onreadystatechange = processRequest;
xhr.open("GET", "api.openweathermap.org/data/2.5/weather?q=Eindhoven&APPID=c364db0444ad3c687cf51fa2244afe1e", true);
xhr.send();

console.log(xhr.status);
console.log(xhr.statusText);
 
function processRequest(e) {
 
 if (xhr.readyState == 4 && xhr.status == 200) {

 	let response = JSON.parse(xhr.responseText);
 	alert(response.weather.description);
 	console.log(response.visibility);
 	console.log(response.name);
 } else {

 	let errorp = document.querySelectorAll(".errorp");
 	errorp.innerHTML = "There is an error!";
 }
}
}
