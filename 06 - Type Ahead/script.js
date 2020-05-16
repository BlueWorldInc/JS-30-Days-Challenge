const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
let cities = [];
let requestLoaded = false;
// console.log(endpoint);

const request = new XMLHttpRequest();
request.addEventListener("load", logRequest);
request.responseType = "json";
request.open("GET", endpoint);
request.send();

function logRequest() {
    requestLoaded = true;
    for (let i = 0; i < this.response.length; i++) {
        // console.log(this.response[i]);
        cities.push(this.response[i]);
    }
}

let searchBar = document.querySelector(".search");
let suggestions = document.querySelector(".suggestions");

searchBar.addEventListener("input", searchCity);

function hello(e) {
    console.log(e.currentTarget.value);
    console.log("hello");
}

function searchCity(evt) {
    let currentSearch = evt.currentTarget.value;
    if (requestLoaded) {
        eraseSuggestions();
        let resultCities = searchCitiesByName(currentSearch);
        fillSuggestions(resultCities);
    }
}

function searchCitiesByName(name) {
    let resultCities = [];
    for (let i = 0; i < cities.length; i++) {
        if (cities[i].city.toLocaleUpperCase().includes(name.toLocaleUpperCase()) || cities[i].state.toLocaleUpperCase().includes(name.toLocaleUpperCase())) {
            resultCities.push(cities[i]);
            // addToList(cities[i]);
        }
    }
    return resultCities;
}

function addToList(city) {
    var li = document.createElement("li");
    li.innerHTML += "<span class='hl'>" + city.city + ", " + city.state + "</span>";
    li.innerHTML += "<span class='population'> " + parseInt(city.population).toLocaleString() + " </span>";
    suggestions.appendChild(li);
}

function eraseSuggestions() {
    while (suggestions.firstChild) {
        suggestions.firstChild.remove();
    }
}

function fillSuggestions(cities) {
    for (c of cities) {
        addToList(c);
    }
}