/* Descrizione:
Un alert() espone 5 numeri generati casualmente. (Decidete voi se debbano essere tutti diversi)
Non appena l'utente schiaccia "ok", parte un timer di 30 secondi. (Bonus: visualizzare il timer)
Al termine dei 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). (Bonus: far inserire i numeri da un form)
Dopo che sono stati inseriti i 5 numeri, il software mostra in un alert quanti e quali dei numeri da indovinare sono stati individuati. (Bonus: stampare in pagina il risultato, in alternativa all'alert.)

*/

/* ------------------ DIVISIONE IN STEPS --------------

1. Array di 5 numeri deve essere generato casualmente (nr tutti diversi)
2. Array viene mostrato all'utente
3. Utente schiaccia ok, parte timer di 30 sec.
4. Al termine dei 30sec, compare prompt dove l'utente deve inserire i numeri visti precedentemente
5. Pop up alert con quanti e quali numeri sono stati individuati

BONUS:
+ punto 4 = uso un form
+ punto 5 = stampare in pagina i risultati


*/

// VARIABILI UTILI 

var randomNr = [];
var points = 0;
var numbersGuessed = [];

// generate 5 DIFFERENT numbers and push them in randomNr:

while (randomNr.length < 5) {

    var num = generateNumbers(1, 10);

    if (!randomNr.includes(num)) {

        randomNr.push(num);
    }
}

// Show numbers to the user: 

alert("Numeri da ricordare: " + randomNr);

// Set countdown to 30 sec. and after ask the user to guess the previous numbers: 

setTimeout(function () {

}, 30000);


// function to generate numbers: (declaration)

function generateNumbers(min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min);

}

