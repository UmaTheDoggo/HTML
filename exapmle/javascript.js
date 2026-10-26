"use strict";
console.log("Hei, maailma!");

document.querySelector("#target").innerHTML = "Testi!";

const nimi = prompt(`Kerro nimesi`);
console.log(`Hyvää päivää! $nimi`);

const age = 22;
const onkoMaanantai = true;

let v1, v2, v3
v1 = 100;
v2 = 200;
v3 = 300;

console.log(v1, v2, v3);

let value1 = null;

let value2;

console.log(typeof value1);
console.log(typeof value2);

const ika = 20;
if (ika < 18){
    console.log("Olet alaikäinen!")
} else if (age < 12){
    console.log("Olet liian nuori!");
} else {
    console.log("Olet aikuinen!");
}

