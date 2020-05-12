let heroText = document.querySelector("h1");
let body = document.querySelector("body");
let m = 0;


heroText.style.color = "blue";
heroText.style.textShadow = "10px 10px 0 rgba(250, 0, 0, 1)";

body.addEventListener("mousemove", updateHeroStyle);

function updateHeroStyle() {
    let heroTextRect = heroText.getBoundingClientRect();
    let heroTextCenterX = heroTextRect.left + (heroTextRect.width / 2);
    let heroTextCenterY = heroTextRect.top + (heroTextRect.height / 2);
    let xOffset = (event.clientX - heroTextCenterX) / 20;
    let yOffset = (event.clientY - heroTextCenterY) / 20;
    heroText.style.textShadow = xOffset + "px " + yOffset + "px 0 rgba(250, 0, 0, 1)";
}

function updateHeroStyleAccelerometer() {
    let heroTextRect = heroText.getBoundingClientRect();
    let heroTextCenterX = heroTextRect.left + (heroTextRect.width / 2);
    let heroTextCenterY = heroTextRect.top + (heroTextRect.height / 2);
    let xOffset = (event.beta - heroTextCenterX) / 20;
    let yOffset = (event.gamma - heroTextCenterY) / 20;
    heroText.style.textShadow = xOffset + "px " + yOffset + "px 0 rgba(250, 0, 0, 1)";
}

