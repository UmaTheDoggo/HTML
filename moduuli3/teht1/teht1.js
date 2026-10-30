const lista = [];

for (let kerta = 0; kerta < 5; kerta++) {
let num = prompt("Anna luku");
lista.push(num);
}

for (let num of lista) {
    console.log(num);
}

function reverseArray(arr) {
    let uusilista = [...arr]

    let vasen = 0;
    let oikea = uusilista.length -1;

    while (vasen < oikea) {
        let apu = uusilista[vasen];
        uusilista[vasen] = uusilista[oikea];
        uusilista[oikea] = apu;
        vasen++;
        oikea--;
    }
    return uusilista
}
console.log("Käännetty lista: ", reverseArray(lista));