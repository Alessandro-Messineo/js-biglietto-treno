/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

TIP:
per controllare che la vostra logica sui prezzi funzioni correttamente, provate a verificare quanto segue:

100km, 10 anni => prezzo corretto:  €16.80
100km, 70 anni => prezzo corretto: €12.60
*/



// richiesta età e chilometri da percorrere
const age = parseInt(prompt("Inserisci l'età"));
const km = parseInt(prompt("Inserisci i chilometri che devi percorrere"));

let price;

//calcolo prezzo biglietto
if(age < 18){
    price = km * 0.21;
    const  discount = (price * 20)/ 100;
    price = price - discount;
    console.log("età: "+ age + " anni" + " - " + "distanza: " + km + "km");
    console.log("Prezzo del biglietto: €" + price.toFixed(2))
}else if(age >65){
    price = km * 0.21;
    const  discount = (price * 40)/ 100;
    price = price - discount;
    console.log("età: "+ age + " anni" + " - " + "distanza: " + km + "km");
    console.log("Prezzo del biglietto: €" + price.toFixed(2))
}else{
    price = km * 0.21;
    console.log("età: "+ age + " anni" + " - " + "distanza: " + km + "km");
    console.log("Prezzo del biglietto: €" + price.toFixed(2))
}
