/*
Generare un numero random da 1 a 6, 
sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

//dado giocatore utente - aggiungo variabile
let userNut = Math.floor(Math.random() * 6) + 1;
console.log(userNut);

//dado cpu - aggiungo variabile

let cpuNut = Math.floor(Math.random() * 6) + 1;
console.log(cpuNut);

//aggiungo condizione per aggiudicare la vittoria

if ( userNut > cpuNut ) {
    alert (`HAI VINTO!!!`)
} else if ( userNut === cpuNut) {
    alert (`Hai pareggiato! Ritenta!`)
} else {
    alert (`Mi dispiace, Hai perso!Ritenta!`)
}

//aggiungo ricarica della pagina
window.location.reload();
