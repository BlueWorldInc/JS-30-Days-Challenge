const nav = document.querySelector("nav");
const header = document.querySelector("header");

document.addEventListener("scroll", stickNavBar);

function hello() {
    console.log("hello");
}

console.log(header.getBoundingClientRect());

function checkNavBarPosition() {
    let navBarPosition = nav.getBoundingClientRect();
    if (navBarPosition.top <= 0) {
        return true;
    } else {
        return false;
    }
}

function stickNavBar() {
    console.log(document.documentElement.scrollTop);
    if (checkNavBarPosition()) {
        nav.style.position = "fixed";
    } else {
        nav.style.position = "relative";
    }
}