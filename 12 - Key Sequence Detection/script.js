let keySequence = [];

document.getElementsByTagName("body")[0].addEventListener("keydown", getKeyDown);

function getKeyDown(event) {
    keySequence.push(event.keyCode);
    console.log(String.fromCharCode((96 <= event.keyCode && event.keyCode <= 105) ? event.keyCode - 48 : event.keyCode));
    console.log((event.keyCode));
    if(checkSequence()) {
        addKonamiPicture();
    }
}

function checkSequence() {
    let konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    if (keySequence.length > konamiSequence.length) {
        keySequence = keySequence.slice(keySequence.length - konamiSequence.length);
    }
    console.log(keySequence);
    if (keySequence.length === 10) {
        for (let i = 0; i < keySequence.length; i++) {
            if (konamiSequence[i] !== keySequence[i]) {
                return false;
            }
        }
        return true;
    }
    return false;
}

function addKonamiPicture() {
    let konamiPicture = document.createElement("img");
    konamiPicture.src = "src/konami.jpg";
    konamiPicture.height = 200;
    konamiPicture.width = 200;
    let body = document.getElementsByTagName("body")[0];
    body.appendChild(konamiPicture);
}