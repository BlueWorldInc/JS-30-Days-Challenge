let items = document.querySelectorAll(".item");
let toggleShift = false;
let firstSelect = false;
let firstItemIndex = 0;
// items[0].childNodes[1].checked = true;

// console.log(toggleShift);

// window.onload = function () { 
//     toggleShift = false; 
//     console.log(toggleShift);
// };



// document.addEventListener("keydown", holdShift);
// document.addEventListener("mousemove", shiftDown);
// document.addEventListener("keyup", holdShift);

for (let i = 0; i < items.length; i++) {
    items[i].childNodes[1].itemIndex = i;
    items[i].childNodes[1].addEventListener("click", multipleSelect);
}

// function shiftDown(e) {
//     console.log(e.shiftKey);
// }

// function holdShift(e) {
//     if (e.key === "Shift") {
//         toggleShift = !toggleShift;
//         console.log(toggleShift);
//     }
// }

function multipleSelect(e) {
    firstSelect = !firstSelect;
    if (firstSelect) {
        firstItemIndex = e.currentTarget.itemIndex;
    } else {
        if (e.shiftKey) {
            selectItems(firstItemIndex, e.currentTarget.itemIndex);
        }
    }
}

function selectItems(firstItemIndex, secondItemIndex) {
    if (firstItemIndex > secondItemIndex) {
        [firstItemIndex, secondItemIndex] = [secondItemIndex, firstItemIndex];
    }
    for (let i = firstItemIndex; i < secondItemIndex; i++) {
        items[i].childNodes[1].checked = true;
    }
}