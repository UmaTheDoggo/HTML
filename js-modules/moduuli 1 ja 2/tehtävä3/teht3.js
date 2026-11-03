"use strict";
let luku1 = Number(prompt("Anna luku"));
let luku2 = Number(prompt("Anna toinen luku"));
let luku3 = Number(prompt("Anna kolmas luku"));


let summa = luku1 + luku2 + luku3;
let tulo = luku1 * luku2 * luku3;
let ka = summa /3;

document.querySelector("#target").innerHTML = `
    lukujen summa: ${summa} <br>
    lukejen tulo: ${tulo} <br>
    lukejen keskiarvo: ${ka}
    `;






