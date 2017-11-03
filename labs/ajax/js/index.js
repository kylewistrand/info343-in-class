// @ts-check
"use strict";

const POKEMON_API = "https://pokeapi.co/api/v2/pokemon/{name}/";
const POKEMON = "pikachu";
const ERROR_ALERT_DIV = document.querySelector("#error-alert");

const NAME = document.querySelector("#name");
const IMAGE = document.querySelector("#pokemon-pic");
const TYPES = document.querySelector("#types");
const MOVES = document.querySelector("#moves");
const GAMES = document.querySelector("#games");

function handleError(err) {
    console.error(err);
    ERROR_ALERT_DIV.textContent = err.message;
    ERROR_ALERT_DIV.classList.remove("d-none");
}

function handleResponse(response) {
    console.log("got response");
    if (response.ok) {
        return response.json();
    } else {
        return response.text()
            .then(function(message) {
                throw new Error(message);
            });
    }
}

function upperFirstChar(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function makeList(data) {
    let ul = document.createElement("ul");
    //TODO for each:
    //ul.appendChild();
}

function render(data) {
    console.log(data);
    NAME.textContent = upperFirstChar(data.name);
    IMAGE.src = data.sprites.front_default;
    IMAGE.alt = upperFirstChar(data.name);

    data.types.forEach(function() {

    });
}

fetch(POKEMON_API.replace("{name}", POKEMON))
    .then(handleResponse)
    .then(render)
    .catch(handleError)