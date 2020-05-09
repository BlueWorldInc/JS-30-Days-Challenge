let slideInImgs = document.getElementsByClassName("slide-in");

window.addEventListener("scroll", checkIfScrolled);

for (let i = 0; i < slideInImgs.length; i++) {
    console.log(slideInImgs[i]);
    // slideInImgs[i].className += " active";
    slideInImgs[i].addEventListener("click", activateTargetImg);
    slideInImgs[i].myParam = 'This is my parameter';
}

function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

function hello() {
    console.log("hello");
    console.log(document.documentElement.scrollTop);
    if (document.documentElement.scrollTop > 500) {
        activateImg(slideInImgs[0]);
    };
}

function activateTargetImg(evt) {
    console.log("helloa");
    // evt.currentTarget.className += " active";
}

function activateImg(evt) {
    if (!evt.classList.contains("active")) {
        // evt.className += " active";
        evt.classList.add("active");
    }
}

function deactivateImg(evt) {
    if (evt.classList.contains("active")) {
        evt.classList.remove("active");
    }
}

function checkIfScrolled() {
    for (let i = 0; i < slideInImgs.length; i++) {
        if (slideInImgs[i].offsetTop - window.innerHeight + slideInImgs[i].offsetHeight < document.documentElement.scrollTop) {
            activateImg(slideInImgs[i]);
        } else if (slideInImgs[i].offsetTop + slideInImgs[i].offsetHeight - 100 > document.documentElement.scrollTop + window.innerHeight) {
            deactivateImg(slideInImgs[i]);
        }
    }
    // console.log(window.screen.height);
}