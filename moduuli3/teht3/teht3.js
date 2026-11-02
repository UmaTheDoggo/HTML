"use strict";

const koiraList = [];

for (let x = 0; x < 6; x++) {
const koira = prompt("Kerro koirien nimet.");
koiraList.push(koira)
}

console.log(koiraList)

koiraList.sort((a, b) => b.localeCompare(a, 'fi'));

const listaHtml = koiraList.map(koira => `<li>${koira}</li>`).join('');

document.querySelector("#target").innerHTML =`
<p>Lista käänteisessä aakkosjärjestyksessä:</p>
<ul>${listaHtml}</ul>`;