let volumeSlide = document.querySelector('input[name="volume"]');
let playrateSlide = document.querySelector('input[name="playbackRate"]');
let progressBar = document.querySelector(".progress");
let progressBarFilled = document.querySelector(".progress__filled");
let minusTenSec = document.querySelector('button[data-skip="-10"]');
let plusTwentyFiveSec = document.querySelector('button[data-skip="25"]');
let video = document.querySelector("video");
let body = document.querySelector("body");
let playButton = document.querySelector(".player__button");

video.addEventListener("click", togglePause);
video.addEventListener("play", updateProgressBar);
video.addEventListener("pause", updateProgressBar);
volumeSlide.addEventListener("input", changeVolume);
playrateSlide.addEventListener("input", changePlayRate);
progressBar.addEventListener("click", changeFrame);
minusTenSec.addEventListener("click", backward);
plusTwentyFiveSec.addEventListener("click", forward);
playButton.addEventListener("click", togglePause);

initPlayer();

function togglePause() {
    if (video.paused) {
        video.play();
        playButton.innerHTML = "⏸︎";
    } else {
        video.pause();
        playButton.innerHTML = "►";
    }
}

function changeVolume(e) {
    video.volume = e.currentTarget.value;
    console.log(e.currentTarget.value);
}

function initPlayer() {
    video.volume = 0.5;
    volumeSlide.value = 0.5;
    progressBarFilled.style.flexBasis = "0%";
}

function changePlayRate(e) {
    video.playbackRate = e.currentTarget.value;
    console.log(video.playbackRate);
}

function changeFrame(e) {
    let percentProgress = e.offsetX / e.currentTarget.clientWidth;
    video.currentTime = video.duration * percentProgress;
    console.log(progressBarFilled.style);
    progressBarFilled.style.flexBasis = percentProgress * 100 + "%";
}

function backward() {
    video.currentTime -= 10;
    let percentProgress = video.currentTime / video.duration;
    progressBarFilled.style.flexBasis = percentProgress * 100 + "%";
}

function forward() {
    video.currentTime += 25;
    let percentProgress = video.currentTime / video.duration;
    progressBarFilled.style.flexBasis = percentProgress * 100 + "%";
}

function setProgressBar() {
    let percentProgress = video.currentTime / video.duration;
    progressBarFilled.style.flexBasis = percentProgress * 100 + "%";
}

function updateProgressBar() {
    let interval;
    if (video.paused) {
        clearInterval(interval);
    } else {
        interval = setInterval(setProgressBar, 500);
    }
}