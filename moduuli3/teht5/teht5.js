"use strict";

const numeroList = [];

while(true) {
    const numerot = Number(prompt("Anna luku"));

    if (numeroList.includes(numerot)) {
    console.log("Sama luku annettu aijemmin.")
    break;
    }

    numeroList.push(numerot);
}


console.log("Luvut: ", numeroList);
numeroList.sort((a, b) => a - b);
console.log("Luvut järjestyksessä: ", numeroList);

document.querySelector("#target").innerHTML =`
<p>Luku jo annettu lopetetaan ohjelma.</p>
<p>Luvut järjestyksessä: </p>
<p>${numeroList}</p>`;