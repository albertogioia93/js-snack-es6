'use strict';

// inizializzo variabile con dentro un array fatto solo di stringhe
const squadreCalcio = ['milan', 'juventus', 'inter', 'napoli', 'roma'];

// ciclo sull'array creato sopra utilizzando il metodo .map. così facendo faccio diventare ogni stringa di quell'array un oggetto con le varie parole chiave
const squadreComplete = squadreCalcio.map((element) => {
    return {
        nome: element,
        puntiFatti: 0,
        falliSubiti: 0,
    }
})

// creo la funzione che mi permette di avere numeri random
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// inizializzo delle variabili che vanno dentro quella funzione per i numeri random (un numero minimo e uno massimo)
const puntiMinimi = 1;
const puntiMassimi = 100;

// ho preso il primo array in alto e ho modificato 2 valori specifici (puntifatti e fallisubiti) degli oggetti al suo interno usando quella funzione per i numeri random
const secondaLista = squadreComplete.map((element) => {
    return {
        nome: element.nome,
        puntiFatti: getRndInteger(puntiMinimi, puntiMassimi),
        falliSubiti: getRndInteger(puntiMinimi, puntiMassimi),  
    }
});


// creazione seconda lista con soli nomi delle squadre e falli subiti
const listaFinale = secondaLista.map((element) => {
    const {nome, falliSubiti} = element;
    return {
        nome,
        falliSubiti,
    }
});

// stampa in console della seconda lista senza aprire le freccettine
listaFinale.forEach((element) => {
    console.log(element);
});










