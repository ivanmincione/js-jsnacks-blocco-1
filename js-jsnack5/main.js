// Stampa il cubo dei primi N numeri, dove N è un numero
// indicato dall’utente.

// chiedo all'utente di inserire un numero
var number = parseInt(prompt('inserisci un numero'));

// ciclo for con proprietà Math.pow per calcolare il cubo del numero

for (var i = 0; i <= number; i++) {
// variabile di supporto
    var cube = Math.pow(i, 3);

    // stampo il risultato del cubo fino al numero inserito dall'utente
    console.log(cube);

}
