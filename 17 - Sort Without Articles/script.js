const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything',
    'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

let orderedBands = bands.slice(0);

orderedBands.sort(function(a, b) { 
    var x = getNameOfBand(a.toLowerCase());
    var y = getNameOfBand(b.toLowerCase());
    return x < y ? -1 : x > y ? 1 : 0;
})


for (const b of orderedBands) {
    document.getElementById("bands").innerHTML += "<li>" + b + "</li>";
}

function getNameOfBand(band) {
    let bandArray = band.split(' ');
    switch (bandArray[0]) {
        case "a":
            bandArray.shift();
            break;
        case "an":
            bandArray.shift();
            break;
        case "the":
            bandArray.shift();
            break;
        default:
            break;
    }
    return bandArray.join(' ');
}