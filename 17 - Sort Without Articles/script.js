const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything',
    'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

let orderedBands = [];

for (let i = 0; i < bands.length; i++) {
    orderedBands.push(getNameOfBand(bands[i]));
}

orderedBands.sort(function(a, b) { 
    var x = a.newBand.toLowerCase();
    var y = b.newBand.toLowerCase();
    return x < y ? -1 : x > y ? 1 : 0;
})


for (const b of orderedBands) {
    document.getElementById("bands").innerHTML += "<li>" + b.band + "</li>";
}

function getNameOfBand(band) {
    let bandArray = band.split(' ');
    switch (bandArray[0]) {
        case "A":
            bandArray.shift();
            break;
        case "An":
            bandArray.shift();
            break;
        case "The":
            bandArray.shift();
            break;
        default:
            break;
    }
    newBand  = bandArray.join(' ');
    return {band: band, newBand: newBand};
}