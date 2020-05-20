window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const words = document.querySelector(".words");
let p = document.createElement("p");

var recognition = new SpeechRecognition();
recognition.interimResults = true;
words.appendChild(p);

recognition.addEventListener("result", e => {
    console.log(e.results[0][0].transcript);
})

recognition.start();