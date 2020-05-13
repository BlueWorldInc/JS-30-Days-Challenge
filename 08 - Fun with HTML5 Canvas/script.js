const canvas = document.querySelector("#draw");
/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext("2d");
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let evolution = true;

ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;
ctx.globalCompositeOperation = 'lighter';

// ctx.fillStyle = "blue";
// ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

function drawMoz() {
    ctx.strokeStyle = "yellow";
    ctx.lineWidth = 20;
    ctx.lineJoin = 'round';
    ctx.beginPath();
    ctx.moveTo(20, 20);
    ctx.lineTo(190, 100);
    ctx.lineTo(280, 20);
    ctx.lineTo(280, 150);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineWidth = 15;
    ctx.lineCap = 'round';
    ctx.lineTo(100, 100);
    ctx.stroke();
}

canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", function () {
    isDrawing = false;
});
canvas.addEventListener("mouseout", function () {
    isDrawing = false;
});

function startDraw(evt) {
    isDrawing = true;
    lastX = getMousePos(canvas, evt).x;
    lastY = getMousePos(canvas, evt).y;
}

function draw(evt) {
    if (isDrawing) {
        ctx.beginPath();
        ctx.strokeStyle = "hsl(" + hue++ + ", 100%, 50%)";
        if (ctx.lineWidth === 75) {
            evolution = false;
        } else if (ctx.lineWidth === 1) {
            evolution = true;
        }
        if (evolution) {
            ctx.lineWidth++;
        } else {
            ctx.lineWidth--;
        }
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.moveTo(lastX, lastY);
        x = getMousePos(canvas, evt).x;
        y = getMousePos(canvas, evt).y;
        ctx.lineTo(x, y);
        ctx.stroke();
        lastX = x;
        lastY = y;
    }
}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect(), // abs. size of element
        scaleX = canvas.width / rect.width,    // relationship bitmap vs. element for X
        scaleY = canvas.height / rect.height;  // relationship bitmap vs. element for Y

    return {
        x: Math.floor((evt.clientX - rect.left) * scaleX),   // scale mouse coordinates after they have
        y: Math.floor((evt.clientY - rect.top) * scaleY)     // been adjusted to be relative to element
    }
}
