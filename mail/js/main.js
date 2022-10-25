/*
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/

// crea una lista di mail
const validMails = [ "alessandro.fabbretti@gmail.com", "marcorossi@libero.it", "luca.bianchi@esempio.com"];
console.log(validMails);

//chiedi all'utente la sua mail
const userMail = prompt("Inserisci la tua mail");
console.log(userMail);

//controlla che sia nella lista di chi può accedere
