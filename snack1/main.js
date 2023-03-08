'use strict';

const listaInvitati = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];

// listaInvitati.forEach((element) => {
//     console.log(element);
// });

// semplifico il foreach di riga 5
listaInvitati.forEach((element) => console.log(element));



// al click sul div creato in index.html viene stampato su console: <div class='red'>CIAO</div>
const divRed = document.querySelector('.red');
divRed.addEventListener('click', function (){
    console.log(this);
});


// al click sul div creato in index.html viene stampato su console: window ecc ecc
divRed.addEventListener('click', () => {
    console.log(this);
});
document.querySelector('.red').addEventListener('click', () => {
    console.log(this);
})
document.querySelector('.red').addEventListener('click', () => console.log(this));


// funzione scritta in maniera normale
// function somma(argom1, argom2) {
//     return argom1 + argom2;
// }

// funzione scritta con arrow. non uso graffe perchè voglio eseguire solo un blocco di codice
const somma = (argom1, argom2) => argom1 + argom2;


// stampo il risultato della funzione creata nei 2 modi (ma devo disattivare uno dei 2)
console.log(somma(2,3));



// **********************************************************
// FUNZIONE IN UN OGGETTO
// **********************************************************

// scrivere assolutamente function dentro un oggetto. no arrow perchè sennò in console stampa window ecc
const object = {
    nome: 'alby',
    cognome: 'gioia',
    nomeEcognome: function() {
        return this.nome + ' ' + this.cognome;
    }
}

console.log(object);
// su console viene stampato così: {nome: 'alby', cognome: 'gioia', nomeEcognome: ƒ}

console.log(object.nomeEcognome());
// su console viene stampato così: alby gioia


// **********************************************************
// FUNZIONE DI UN OGGETTO DENTRO UN ALTRO OGGETTO
// **********************************************************

// anche in questo caso scrivere function e niente arrow perchè altrimenti stampa sempre window ecc
const object2 = {
    prova1: 'sono una stringa',
    prova2: {
        nome: 'alby',
        cognome: 'gioia',
        nomeEcognome: function() {
            return this.nome + ' ' + this.cognome;
        }
    }
}

console.log(object2);
// su console viene stampato così: {prova1: 'sono una stringa', prova2: {…}}