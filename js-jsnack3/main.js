// // Il software deve chiedere per 5 volte all’utente di inserire un
// numero. Il programma stampa la somma di tutti i numeri
// inseriti.


// chiedo per 5 volte all'utente l'inserimento di un numero
var numero1 = parseInt(prompt("Inserisci un numero qualsiasi"));
var numero2 = parseInt(prompt("Inserisci un numero qualsiasi"));
var numero3 = parseInt(prompt("Inserisci un numero qualsiasi"));
var numero4 = parseInt(prompt("Inserisci un numero qualsiasi"));
var numero5 = parseInt(prompt("Inserisci un numero qualsiasi"));

// stampo i numeri inseriti
console.log( numero1 );
console.log( numero2 );
console.log( numero3 );
console.log( numero4 );
console.log( numero5 );

// creo un array per contenere i numeri inseriti dall'utente
var list = [];
// aggiungo all'array i numeri inseriti dall'utente
list.push (numero1);
list.push (numero2);
list.push (numero3);
list.push (numero4);
list.push (numero5);

console.log(list);

var somma = 0

for (var i = 0; i < list.length; i++) {
    somma = somma + list[i]
    console.log("somma" + somma);
}
