const msg = new SpeechSynthesisUtterance();
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

let synth = window.speechSynthesis;
let voices = synth.getVoices();

function init() {
    for (let i = 0; i < voices.length; i++) {
        voicesDropdown.innerHTML += "<option value='" + i + "'>" + voices[i].name + "</option>";
    }
}

speakButton.addEventListener("click", speak);
stopButton.addEventListener("click", stop);

function speak() {
    msg.rate =  options[0].value;
    msg.pitch =  options[1].value;
    msg.text = options[2].value;
    msg.voice = voices[voicesDropdown.value];
    synth.speak(msg);
}

function stop() {
    synth.cancel();
}

init();