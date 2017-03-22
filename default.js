//Comm links to the API
let connLink;
let connLimkPlain;
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
//Flow checker variable
let processStatus;

//HTML area for results
let markup;

//WindowWidth
let windowWidth = parseInt(window.innerWidth);

let videoBackground = document.querySelector(".video");
let videoSource = document.querySelector(".video-source");

if (960 < windowWidth && windowWidth < 1367) {

videoBackground.poster = "img/video/sky-thumbnail-1366x768.jpg";
videoBackground.pause();
videoBackground.removeChild(videoSource);
videoBackground.innerHTML = `<source class="video-source" src="img/video/sky-background-1366x768.mp4" type="video/mp4">`;
videoSource = document.querySelector(".video-source");
videoActivator();

} else if (700 < windowWidth && windowWidth < 961) {

videoBackground.poster = "img/video/sky-thumbnail-960x1000.jpg";
videoBackground.pause();
videoBackground.removeChild(videoSource);
videoBackground.innerHTML = `<source class="video-source" src="img/video/sky-background-960x1000.mp4" type="video/mp4">`;
videoSource = document.querySelector(".video-source");
videoActivator();

} else if (450 < windowWidth && windowWidth < 701) {

videoBackground.poster = "img/video/sky-thumbnail-700x700.jpg";
videoBackground.pause();
videoBackground.removeChild(videoSource);
videoBackground.innerHTML = '';
videoActivator();
} else if (450 >= windowWidth) {

videoBackground.poster = "img/video/sky-thumbnail-450x800.jpg";
videoBackground.pause();
videoBackground.removeChild(videoSource);
videoBackground.innerHTML = '';
videoActivator();
}

function rainCheck() {

if (weatherIndex = 2 || 3 || 5) {

videoBackground.poster = "img/video/raindrops-1920x1080.jpg";
videoBackground.pause();
videoBackground.removeChild(videoSource);
videoBackground.innerHTML = `<source class="video-source" src="img/video/raindrops-1920x1080-minified.mp4" type="video/mp4">`;
//Refeclaring videoSource to update the variable so that it can be grabbed. 
videoSource = document.querySelector(".video-source");

if (960 < windowWidth && windowWidth < 1367) {

videoBackground.poster = "img/video/raindrops-1366x768.jpg";
videoBackground.pause();
videoBackground.removeChild(videoSource);
videoBackground.innerHTML = `<source class="video-source" src="img/video/raindrops-1366x768-minified.mp4" type="video/mp4">`;
videoSource = document.querySelector(".video-source");

} else if (700 < windowWidth && windowWidth < 961) {

videoBackground.poster = "img/video/sky-thumbnail-960x1000.jpg";
videoBackground.pause();
videoBackground.removeChild(videoSource);
videoBackground.innerHTML = `<source class="video-source" src="img/video/sky-background-960x1000.mp4" type="video/mp4">`;
videoSource = document.querySelector(".video-source");

} else if (450 < windowWidth && windowWidth < 701) {

videoBackground.poster = "img/video/sky-thumbnail-700x700.jpg";
videoBackground.pause();
videoBackground.removeChild(videoSource);
videoBackground.innerHTML = '';

} else if (450 >= windowWidth) {

videoBackground.poster = "img/video/sky-thumbnail-450x800.jpg";
videoBackground.pause();
videoBackground.removeChild(videoSource);
videoBackground.innerHTML = '';
}
}
videoActivator();
}

function videoActivator() {
	videoBackground.load();
	videoBackground.play();
}
