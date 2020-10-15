// JSnack 1: L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

// inserimento numero primo utente
var primoNumero = parseInt(prompt("Inserisci un numero"));

// inserimento numero secondo utente
var secondoNumero = parseInt(prompt("Inserisci un numero"));

// calcola quale dei due numeri inseriti è il maggiore con isNaN obbligo ad inserire un valore che sia numero

if ( !isNaN(primoNumero) && !isNaN(secondoNumero)) {
    if (primoNumero > secondoNumero){
        console.log("Il primo numer è maggiore rispetto al secondo " + primoNumero);
    } else if (primoNumero < secondoNumero) {
        console.log("Il secondo numero è maggiore rispetto al primo" + secondoNumero);
    } else {
        console.log("I due numeri sono uguali" + primoNumero + secondoNumero);
    }
} else {
    console.log("Non stai inserendo un numero valido");
}
