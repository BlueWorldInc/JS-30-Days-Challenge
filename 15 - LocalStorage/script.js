const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const item = document.querySelector('input[name="item"]');
const items = [];
let listInitialized = false;

addToList("Gambas");
initItems();
initList(items);

function addToList(item) {
    if (!listInitialized) {
        listInitialized = true;
        itemsList.innerHTML = "<li>" + item + "</li>";
    } else {
        itemsList.innerHTML += "<li>" + item + "</li>";
        //localStorage.setItem(item, '{"name": "history", "age": 15}');
    }
}

function initList(it) {
    for (let ite of it) {
        addToList(ite);
    }
}

function initItems() {
    for (let ls in Object.keys(localStorage)) {
        items.push(Object.keys(localStorage)[ls]);
     }
}

document.getElementsByClassName("add-items")[0].addEventListener("submit", eventHandler);

function eventHandler(event) {
    event.preventDefault();
    localStorage.setItem(item.value, '{"name": "history", "age": 15}');
    addToList(item.value);
    // let l = localStorage.getItem("Fisher");
    // console.log(l);
    // let j = JSON.parse(l);
    // console.log(j.age);
}

function clearLocalStorage() {
    localStorage.clear();
    console.log("clear");
}