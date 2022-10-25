/*
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/

// crea una lista di mail
const validMails = ["alessandro.fabbretti@gmail.com", "marcorossi@libero.it", "luca.bianchi@esempio.com"];
console.log(validMails);

//chiedi all'utente la sua mail
const userMail = prompt("Inserisci la tua mail");
console.log(userMail);

//controlla che sia nella lista di chi può accedere
for ( let i = 0; i < validMails.length; i++) {
    const mail = validMails[i];

    //aggiungo condizione di verifica
    if ( userMail === mail){
        alert("La tua E-mail è valida")

        break;
    } else {
        alert("La tua E-mail non è corretta! Per favore riprova")

        break;
    }
}


