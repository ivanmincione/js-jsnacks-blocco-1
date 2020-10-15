// // Il software deve chiedere per 5 volte all’utente di inserire un
// numero. Il programma stampa la somma di tutti i numeri
// inseriti.

// creo una variabile di supporto
var somma = 0;

// inserisco nel ciclo for l'input dei numeri scelti dall'utente e la somma tra essi
for (var i = 0; i < 5; i++){
  var numero = parseInt(prompt('Inserisci un numero'));
  console.log(numero);
  somma = somma + numero;
}

// stampo la somma
console.log(somma);
