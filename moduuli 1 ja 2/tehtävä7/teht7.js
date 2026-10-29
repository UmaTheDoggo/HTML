"use strict";

const luku = Number(prompt("Monta kertaa noppaa heitetään?"));
const noppaluvut = []

let summa = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

for (let x = 0; x < luku; x++) {
    const heitonTulos = getRandomInt(6); // Heitetään 6-tahkoista noppaa
    console.log("Heiton tulos: " + heitonTulos);
    noppaluvut.push(heitonTulos)
}

noppaluvut.forEach( numero => {
summa += numero;
})

console.log("Noppien lukujen summa: " + summa)
document.querySelector("#target").innerHTML = "Noppien lukujen summa: " + summa;