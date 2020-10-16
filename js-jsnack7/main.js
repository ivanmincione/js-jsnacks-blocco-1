// Calcola la somma e la media dei numeri da 1 a 10.

var array = [1,2,3,4,5,6,7,8,9,10];

var somma = 0;
var media;

for(var i=0; i < array.length; i++) {
    // calcolo la somma dei numeri contenuti nell'array
    somma = somma + array[i];

}
    // calcolo la media
    media = somma / i;

console.log(somma);
console.log(media);
