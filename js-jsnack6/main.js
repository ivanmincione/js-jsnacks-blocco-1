// Stampa le potenze di 2 senza superare il numero 1000.

// identifico una variabile a cui assegno il valore 2
var number = 2;

var potenza = 0;

// creo un ciclo for che smetterà di contare quando il valore della potenza supera 1000 e stamperà l'ultimo risultato utile
for (var i = 0; i <= 1000; i++) {
    potenza = Math.pow(2, i);
    if (potenza <=1000) {
        console.log(potenza);
    }
}
