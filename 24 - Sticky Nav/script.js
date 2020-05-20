const nav = document.querySelector("nav");
const header = document.querySelector("header");
const logo = document.querySelector(".logo");
const siteWrap = document.querySelector(".site-wrap");

document.addEventListener("scroll", stickNavBar);

function hello() {
    console.log("hello");
}

// console.log(header.getBoundingClientRect());

// function checkNavBarPosition() {
//     let navBarPosition = nav.getBoundingClientRect();
//     if (navBarPosition.top <= 0) {
//         return true;
//     } else {
//         return false;
//     }
// }



function stickNavBar() {
    // console.log(document.documentElement.scrollTop);
    if (document.documentElement.scrollTop > header.getBoundingClientRect().height) {
        nav.style.position = "fixed";
        document.body.style.paddingTop = nav.offsetHeight + "px";
        logo.style.transition = "all 5s";
        logo.style.maxWidth = "500px";
        siteWrap.style.transform = "scale(1)";
    } else {
        nav.style.position = "relative";
        logo.style.maxWidth = "0";
        document.body.style.paddingTop = 0 + "px";
        logo.style.transition = "all 1s";
        siteWrap.style.transform = "scale(0.98)";
    }
}