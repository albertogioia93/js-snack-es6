'use strict';

const elencoStudenti = [
    {
        id: 213,
        nome: 'Marco Della Rovere',
        voto: 78,
    },
    {
        id: 110,
        nome: 'Paola Cortellessa',
        voto: 96,
    },
    {
        id: 250,
        nome: 'Andrea Mantegna',
        voto: 48,
    },
    {
        id: 145,
        nome: 'Gaia Borromini',
        voto: 74,
    },
    {
        id: 196,
        nome: 'Luigi Grimaldello',
        voto: 68,
    },
    {
        id: 102,
        nome: 'Piero Della Francesca',
        voto: 50,
    },
    {
        id: 120,
        nome: 'Francesca Da Polenta',
        voto: 84,
    },
];

// const nomiMaiuscolo = [];
// for( let i = 0; i < elencoStudenti.length; i++){
//     nomiMaiuscolo.push(elencoStudenti[i].nome.toUpperCase());   
// };

// console.log(nomiMaiuscolo);

const nomiDimap = elencoStudenti.map((element) => element.nome.toUpperCase());

console.log(nomiDimap);

const votiSuperiori = elencoStudenti.filter((element) => {
    if (element.voto > 70) {
        return true;
    }
    return false;
}).map((element) => element.nome.toUpperCase());

console.log(votiSuperiori);
