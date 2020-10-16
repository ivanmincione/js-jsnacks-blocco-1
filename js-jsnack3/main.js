// // Il software deve chiedere per 5 volte all’utente di inserire un
// numero. Il programma stampa la somma di tutti i numeri
// inseriti.

// -----------------SOLUZIONE PASSO PER PASSO CON DUE CICLI FOR-------------------------

// var numero;
// // predispongo una variabile per contenere tutti i numeri inseriti dall'utente
// var contenitore = [];
//
// // creo una variabile di supporto
// var somma = 0;
//
// // inserisco nel ciclo for l'input dei numeri scelti dall'utente e li aggiungo ad un array per contenerli tutti
// for (var i = 0; i < 5; i++){
//   numero = parseInt(prompt('Inserisci un numero'));
//   // console.log(numero);
//   contenitore.push(numero);
//   // console.log(contenitore);
// }
// // stampa dell'array
// console.log(contenitore);
//
// // ciclo per la conta e la somma dei valori nell'array
// for (var i = 0; i < contenitore.length; i++) {
//     console.log(contenitore[i]);
//
//     somma = somma + contenitore[i];
// }
//
// // stampo la somma
// console.log(somma);


// ----------------------SOLUZIONE COMPATTA---------------------------

var somma = 0;

for (var i = 0; i < 5; i++) {
    var numero = parseInt(prompt('Inserisci un numero'));
    // controllo dati inseriti se non viene inseriti un numero il dato viene scartato e si va avanti
    if(!isNaN(numero)){

    somma = somma + numero;
    }
}

console.log(somma);
