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
videoBackground.load();
videoBackground.play();

} else if (700 < windowWidth && windowWidth < 961) {

videoBackground.poster = "img/video/sky-thumbnail-960x1000.jpg";
videoBackground.pause();
videoBackground.removeChild(videoSource);
videoBackground.innerHTML = `<source class="video-source" src="img/video/sky-background-960x1000.mp4" type="video/mp4">`;
videoBackground.load();
videoBackground.play();

} else if (450 < windowWidth && windowWidth < 701) {

videoBackground.poster = "img/video/sky-thumbnail-700x700.jpg";
videoBackground.pause();
videoBackground.removeChild(videoSource);
videoBackground.innerHTML = '';
videoBackground.load();
videoBackground.play();
} else if (450 >= windowWidth) {

videoBackground.poster = "img/video/sky-thumbnail-450x800.jpg";
videoBackground.pause();
videoBackground.removeChild(videoSource);
videoBackground.innerHTML = '';
videoBackground.load();
videoBackground.play();
}
