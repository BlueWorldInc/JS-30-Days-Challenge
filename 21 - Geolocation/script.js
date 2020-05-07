let p = document.getElementsByClassName("speed-value")[0];

navigator.geolocation.getCurrentPosition(showPosition);

function showPosition(position) {
    p.innerHTML = "Your position is: <br> Lat: " + position.coords.latitude + "<br> Lon: " + position.coords.longitude
        + "<br> Accuracy: " + position.coords.accuracy + " meter" + "<br> Timestamp : " + position.timestamp;
    console.log(position);
}

let body = document.getElementsByTagName("body")[0];

// body.addEventListener("keydown", updatePosition);

// function updatePosition() {
//     navigator.geolocation.getCurrentPosition(showPosition);
// }