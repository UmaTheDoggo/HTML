"use strict";

let numerot = [];
let x = 1;

while (true) {
    x = Number(prompt("Anna luku."));

    if (x === 0) {
        break;
    }
    numerot.push(x)
}

numerot.sort((a, b) => b - a).forEach(num => console.log(num))