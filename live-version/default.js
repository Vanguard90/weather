//Comm links to the API
let connLink;
let connLinkPlain;
let connLinkGps;
//Gps-related variables
let lat;
let long;
let latlong;
//Inside call
let temperature;
let weatherType;
let weatherTypeDetail;
let sunrise;
let sunset;
let sunriseDate;
let sunsetDate;
let locationName;
let cloudiness;
let weatherId;
let weatherIndex;
let weatherIcon;
//Flow checker variable
let processStatus;
//HTML area for results
let markup;
let markupPlain;
//WindowWidth
let windowWidth = parseInt(window.innerWidth);

let videoBackground = document.querySelector(".video");
let videoSource = document.querySelector(".video-source");
//For content background transition
let currentWeather = document.querySelector(".currentweather");
let topWeather = document.querySelector(".form-area");

skyCheck(); //This is a default check so that correct assets are used when website is opened at non-wide monitor/device.

function skyCheck(){

if ((weatherIndex != 2) && (weatherIndex != 3) && (weatherIndex != 5) && (weatherIndex != 6)) {

if (1367 < windowWidth){

videoBackground.poster = "img/video/sky-thumbnail-1920x1080.jpg";
videoBackground.alt = "sky-background";
videoBackground.pause();
videoBackground.removeChild(videoSource);
videoBackground.innerHTML = `<source class="video-source" src="img/video/sky-background.mp4" type="video/mp4">`;
videoSource = document.querySelector(".video-source");

} else if (960 < windowWidth && windowWidth < 1367) {

videoBackground.poster = "img/video/sky-thumbnail-1366x768.jpg";
videoBackground.alt = "sky-background";
videoBackground.pause();
videoBackground.removeChild(videoSource);
videoBackground.innerHTML = `<source class="video-source" src="img/video/sky-background-1366x768.mp4" type="video/mp4">`;
videoSource = document.querySelector(".video-source");

} else if (700 < windowWidth && windowWidth < 961) {

videoBackground.poster = "img/video/sky-thumbnail-960x1000.jpg";
videoBackground.alt = "sky-background";
videoBackground.pause();
videoBackground.removeChild(videoSource);
videoBackground.innerHTML = `<source class="video-source" src="img/video/sky-background-960x1000.mp4" type="video/mp4">`;
videoSource = document.querySelector(".video-source");

} else if (450 < windowWidth && windowWidth < 701) {

videoBackground.poster = "img/video/sky-thumbnail-700x700.jpg";
videoBackground.alt = "sky-background";
videoBackground.pause();
videoBackground.removeChild(videoSource);
videoBackground.innerHTML = '';
videoSource = document.querySelector(".video-source");
} else if (450 >= windowWidth) {

videoBackground.poster = "img/video/sky-thumbnail-450x800.jpg";
videoBackground.alt = "sky-background";
videoBackground.pause();
videoBackground.removeChild(videoSource);
videoBackground.innerHTML = '';
videoSource = document.querySelector(".video-source");
}
}
currentWeather = document.querySelector(".currentweather");
topWeather = document.querySelector(".form-area");
currentWeather.style = "";
topWeather.style = "";
currentWeather.style.backgroundColor = "rgba(238, 239, 255, 0.4)";
topWeather.style.backgroundColor = "rgba(238, 239, 255, 0.4)";
videoActivator();
}

function rainCheck() {

if ((weatherIndex == 2) || (weatherIndex == 3) || (weatherIndex == 5)) {

if (1367 < windowWidth){

videoBackground.poster = "img/video/raindrops-1920x1080-minified.jpg";
videoBackground.alt = "rain-background";
videoBackground.pause();
videoBackground.removeChild(videoSource);
videoBackground.innerHTML = `<source class="video-source" src="img/video/raindrops-1920x1080-minified.mp4" type="video/mp4">`;
//Redeclaring videoSource to update the variable so that it can be grabbed later. 
videoSource = document.querySelector(".video-source");

} else if (960 < windowWidth && windowWidth < 1367) {

videoBackground.poster = "img/video/raindrops-1366x768-minified.jpg";
videoBackground.alt = "rain-background";
videoBackground.pause();
videoBackground.removeChild(videoSource);
videoBackground.innerHTML = `<source class="video-source" src="img/video/raindrops-1366x768-minified.mp4" type="video/mp4">`;
videoSource = document.querySelector(".video-source");

} else if (700 < windowWidth && windowWidth < 961) {

videoBackground.poster = "img/video/raindrops-960x1000-minified.jpg";
videoBackground.alt = "rain-background";
videoBackground.pause();
videoBackground.removeChild(videoSource);
videoBackground.innerHTML = `<source class="video-source" src="img/video/raindrops-960x1000-minified.mp4" type="video/mp4">`;
videoSource = document.querySelector(".video-source");

} else if (450 < windowWidth && windowWidth < 701) {

videoBackground.poster = "img/video/raindrops-700x700-minified.jpg";
videoBackground.alt = "rain-background";
videoBackground.pause();
videoBackground.removeChild(videoSource);
videoBackground.innerHTML = '';
videoSource = document.querySelector(".video-source");

} else if (450 >= windowWidth) {

videoBackground.poster = "img/video/raindrops-450x800-minified.jpg";
videoBackground.alt = "rain-background";
videoBackground.pause();
videoBackground.removeChild(videoSource);
videoBackground.innerHTML = '';
videoSource = document.querySelector(".video-source");
}
}
contChange();
videoActivator();
}

function snowCheck() {

if (weatherIndex == 6) {

if (1367 < windowWidth){

videoBackground.poster = "img/video/snow-background-1920x1080.jpg";
videoBackground.alt = "snow-background";
videoBackground.pause();
videoBackground.removeChild(videoSource);
videoBackground.innerHTML = `<source class="video-source" src="img/video/snow-1920x1080-minified.mp4" type="video/mp4">`;
//Redeclaring videoSource to update the variable so that it can be grabbed correctly later. 
videoSource = document.querySelector(".video-source");

} else if (960 < windowWidth && windowWidth < 1367) {

videoBackground.poster = "img/video/snow-background-1366x768.jpg";
videoBackground.alt = "snow-background";
videoBackground.pause();
videoBackground.removeChild(videoSource);
videoBackground.innerHTML = `<source class="video-source" src="img/video/snow-1366x768-minified.mp4" type="video/mp4">`;
videoSource = document.querySelector(".video-source");

} else if (700 < windowWidth && windowWidth < 961) {

videoBackground.poster = "img/video/snow-background-960x1000.jpg";
videoBackground.alt = "snow-background";
videoBackground.pause();
videoBackground.removeChild(videoSource);
videoBackground.innerHTML = `<source class="video-source" src="img/video/snow-960x1000-minified.mp4" type="video/mp4">`;
videoSource = document.querySelector(".video-source");

} else if (450 < windowWidth && windowWidth < 701) {

videoBackground.poster = "img/video/snow-background-700x700.jpg";
videoBackground.alt = "snow-background";
videoBackground.pause();
videoBackground.removeChild(videoSource);
videoBackground.innerHTML = '';
videoSource = document.querySelector(".video-source");

} else if (450 >= windowWidth) {

videoBackground.poster = "img/video/snow-background-450x800.jpg";
videoBackground.alt = "snow-background";
videoBackground.pause();
videoBackground.removeChild(videoSource);
videoBackground.innerHTML = '';
videoSource = document.querySelector(".video-source");
}
}
contChange();
videoActivator();
}

function videoActivator() {
	videoBackground.load();
	videoBackground.play();
}

function contChange() {
currentWeather = document.querySelector(".currentweather");
topWeather = document.querySelector(".form-area");
currentWeather.style = "";
topWeather.style = "";
currentWeather.style.backgroundColor = "rgba(238, 239, 255, 0.7)";
topWeather.style.backgroundColor = "rgba(238, 239, 255, 0.7)";
}