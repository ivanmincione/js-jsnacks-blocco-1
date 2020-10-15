// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
// un numero, se è dispari inseriscilo nell’array.

// creazione di un array vuoto
var array = [];
console.log(array);

// se il numer inserito è dispari inserisci quest'ultimo nell'array

for (var i = 0; i < 6; i++) {
    var numero = parseInt(prompt("Insersci un numero qualsiasi"));
    var dispari = numero % 2 == 1;
    if ( dispari == 1 ){
        // inserisco l'eventuale numer odispari nell'array
        array.push(numero);
    }
}

// stampo il numero dispari nell'array
console.log(array);
