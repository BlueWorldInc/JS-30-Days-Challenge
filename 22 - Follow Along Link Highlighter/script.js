let hrefs = document.querySelectorAll("a");
let span = document.createElement('span');
span.classList.add('highlight');



// console.log(document.querySelector("body").innerHTML);

for (let i = 0; i < hrefs.length; i++) {
    hrefs[i].addEventListener("mouseover", moveSpan);
    // hrefs[i].addEventListener("mouseout", highlight);
}

span.style = "width: " + hrefs[0].offsetWidth + "px ; height: " + hrefs[0].offsetHeight + "px ; transform: translate(" + (hrefs[0].offsetLeft + hrefs[0].offsetParent.offsetLeft) + "px , " + (hrefs[0].offsetTop + hrefs[0].offsetParent.offsetTop) + "px );"
document.querySelector("body").appendChild(span);

// const mouseoverEvent = new Event('mouseover');
// hrefs[0].dispatchEvent(mouseoverEvent);


// console.log(hrefs);

function hello() {
    console.log("hello");
}

function highlight(evt) {
    evt.currentTarget.classList.toggle("highlight");
}

function test() {
    span.classList.toggle('test');
    console.log(document.querySelector("body").innerHTML);
}

function moveSpan(evt) {
    let href = evt.currentTarget;
    // console.log(href);
    span.style = "width: " + href.offsetWidth + "px ; height: " + href.offsetHeight + "px ; transform: translate(" + (href.offsetLeft + href.offsetParent.offsetLeft) + "px , " + (href.offsetTop + href.offsetParent.offsetTop) + "px );"
    // span = "<span class='highlight' style='width: 133px; height: 28px; transform: translate(300px, 100px);'></span>";
}

// let span = "<span class='highlight' style='width: 133px; height: 28px; transform: translate(300px, 100px);'></span>";

// document.querySelector("body").innerHTML += span;
