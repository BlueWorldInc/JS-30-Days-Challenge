const items = document.querySelector(".items");
const body = document.querySelector("body");
let startPosition;
let oldPosition;
let draging = false;
let direction = "left";
let oldDirection = "left";

items.addEventListener("mousedown", startDrag);
items.addEventListener("mousemove", drag);
items.addEventListener("mouseup", endDrag);
items.addEventListener("mouseleave", endDrag);

function hello(event) {
    console.log(event.currentTarget);
    console.log(event.clientX);
}

function startDrag(event) {
    draging = true;
    startPosition = event.clientX;
}

function drag(event) {
    if (draging) {
        currentPosition = event.clientX;
        offsetPosition = startPosition - currentPosition;
        direction = getDirection(oldPosition - currentPosition);
        oldPosition = currentPosition;
        if (direction !== oldDirection) {
            startPosition = event.clientX;
        }
        oldDirection = direction;
        event.currentTarget.scrollLeft += offsetPosition / 10;
    }
}

function endDrag(event) {
    draging = false;
}

function getDirection(n) {
    if (n > 0) {
        return "rigth";
    } else {
        return "left";
    }
}