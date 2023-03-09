'use strict';

// creazione di un array lista di bici che contiene degli oggetti
const biciDaCorsa = [
    {
        nome: 'graziella',
        peso: 20,
    },
    {
        nome: 'mountainbike',
        peso: 15,
    },
    {
        nome: 'bicirubata',
        peso: 14,
    },
    {
        nome: 'bmx',
        peso: 10,
    },
];


let i = 0;
let pesoMinore = biciDaCorsa[0].peso;
biciDaCorsa.forEach((element, index) => {
    if (pesoMinore > element.peso) {
        pesoMinore = element.peso;
        i = index;
    }
});

console.log(biciDaCorsa[i]);


const {nome, peso} = biciDaCorsa[i];

const messaggio = `la bici col nome ${nome} è più leggera di tutte le altre bici della nostra lista perchè pesa ${peso} kg`;

console.log(messaggio);


// ALTRO METODO PER SAPERE L'OGGETTO CON PESO MINORE

// let biciLeggera = biciDaCorsa[0];
// let pesoMinore = biciDaCorsa[0].peso;
// for (let i = 0; i < biciDaCorsa.length; i++) {
//     if (pesoMinore > biciDaCorsa[i].peso) {
//         pesoMinore = biciDaCorsa[i].peso
//         biciLeggera = biciDaCorsa[i];
//     }
// }
// console.log(biciLeggera);






// destrutturazione di un array
// const [,,,terzo] = biciDaCorsa;

// uso del template literal per scrivere un testo in console che comprende la variabile della destrutturazione creata per ricavare la bici più leggera
// console.log(`la bicicletta della lista che ha il peso minore rispetto alle altre, si chiama ${terzo.nome} e pesa ${terzo.peso} kg`);

