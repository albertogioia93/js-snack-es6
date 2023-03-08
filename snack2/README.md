SNACK 2

Abbiamo un elenco degli studenti di una facoltà, identificati da _id_, _Nome_ e _somma totale_ dei loro voti di esame...

1. Per preparare l’aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
ES (Marco della Rovere => MARCO DELLA ROVERE);

2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70

3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120

Questo è l’elenco degli studenti:
Id  Name                Grades
213 Marco della Rovere      78
110 Paola Cortellessa       96
250 Andrea Mantegna         48
145 Gaia Borromini          74
196 Luigi Grimaldello       68
102 Piero della Francesca   50
120 Francesca da Polenta    84

COME SVOLGO QUESTO ESERCIZIO:

- creo un array1 con dentro degli oggetti che hanno come chiavi { id, nome, voto}
- creo un altroarray 
for( let i = 0; i < array1.length; i++){
    altroarray.push(array1[i].nome.toUpperCase());
    
};
