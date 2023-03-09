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

// destrutturazione di un array
const [,,,terzo] = biciDaCorsa;

// uso del template literal per scrivere un testo in console che comprende la variabile della destrutturazione creata per ricavare la bici più leggera
console.log(`la bicicletta della lista che ha il peso minore rispetto alle altre, si chiama ${terzo.nome} e pesa ${terzo.peso} kg`);

