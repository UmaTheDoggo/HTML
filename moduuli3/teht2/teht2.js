const amount = prompt("Kuinka moni osallistuu?");
const osallistujat = [];

for (let i = 0; i < amount; i++) {
const nimet = prompt("Kerro osallistujien nimet.")
osallistujat.push(nimet);
}

osallistujat.sort((a, b) => a.localeCompare(b, 'fi'));
console.log(osallistujat);

const listaHtml = osallistujat.map(nimi => `<li>${nimi}</li>`).join('');

document.querySelector("#target").innerHTML = `
  <p>Lista aakkosjärjestyksessä:</p>
  <ul>${listaHtml}</ul>
`;
