// JSnack 2: L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

// chiedo all'utente l'inserimento di una parola
var primaParola = prompt("Inserisci una parola");

// chiedo all'utente l'inserimento di una parola
var secondaParola = prompt("Inserisci una parola");

// calcolo la lunghezza delle 2 stringhe
var lunghezza1 = primaParola.length;
var lunghezza2 = secondaParola.length;

console.log('lunghezza 1 = ' + lunghezza1);
console.log('lunghezza 2 = ' + lunghezza2);

// condizione per verificare i dati inseriti dall'utente
if (lunghezza1 > lunghezza2) {
    // la parola 1 è più lunga quindi stampa prima la seconda parola
    console.log(secondaParola);
    console.log(primaParola);
} else if (lunghezza2 > lunghezza1) {
    // la parola 2 è più lunga quindi stampa prima la prima parola
    console.log(primaParola);
    console.log(secondaParola);
} else {
    // sono uguali
    console.log('Le parole sono della stessa lunghezza');
}
