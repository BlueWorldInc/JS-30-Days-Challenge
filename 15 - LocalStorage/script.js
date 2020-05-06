const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const item = document.querySelector('input[name="item"]');
let items = [];
let listInitialized = false;

// addToList({name: "Gambas", isChecked: "checked"});
initItems();
initList(items);

function addToList(iter) {
    // console.log(item);
    console.log(iter);
    if (!listInitialized) {
        listInitialized = true;
        itemsList.innerHTML = "<li> <input type='checkbox' id='" + iter.name + "' value='" + iter.name + "' " + iter.isChecked + " onChange='boxToggle(this)'> <label for='" + iter.name + "'>"+ iter.name + "</label></li>";
    } else {
        itemsList.innerHTML += "<li> <input type='checkbox' id='" + iter.name + "' value='" + iter.name + "' " + iter.isChecked + " onChange='boxToggle(this)'> <label for='" + iter.name + "'>"+ iter.name + "</label></li>";
        //localStorage.setItem(item, '{"name": "history", "age": 15}');
    }
}

function initList(it) {
    for (let ite of it) {
        addToList({name: ite, isChecked: JSON.parse(localStorage.getItem(ite)).isChecked});
    }
}

function initItems() {
    for (let ls in Object.keys(localStorage)) {
        items.push(Object.keys(localStorage)[ls]);
     }
}

function boxToggle(iters) {
    console.log(localStorage.getItem(iters.value));
    isChecked = JSON.parse(localStorage.getItem(iters.value)).isChecked;
    if (isChecked === "checked") {
        localStorage.setItem(iters.value, '{"isChecked": ""}');
    } else {
        localStorage.setItem(iters.value, '{"isChecked": "checked"}');
    }
}

document.getElementsByClassName("add-items")[0].addEventListener("submit", eventHandler);

function eventHandler(event) {
    event.preventDefault();
    localStorage.setItem(item.value, '{"isChecked": ""}');
    addToList({name: item.value, isChecked: ""});
}

function clearLocalStorage() {
    localStorage.clear();
    itemsList.innerHTML = "<li>Loading Tapas...</li>";
    listInitialized = false;
    items = [];
    initItems();
    initList(items);
    console.log("clear");
}