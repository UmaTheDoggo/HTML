"use strict";

const nimi = prompt("Kirjoita nimesi");

function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 3;
}

const tuvat = ["Rohkelikko", "Luihuinen", "Puuskapuuh", "Korpikynsi"];
const arvottuTupa = Math.floor(Math.random() * tuvat.length);
const valittuTupa = tuvat[arvottuTupa]

document.querySelector("#target").innerHTML = "Hei, " + nimi + " Arvottu tupasi on " + valittuTupa;