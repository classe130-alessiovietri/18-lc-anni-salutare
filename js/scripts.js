/* 

- Anni:
chiediamo all'utente la sua età e comunichiamo l'anno di nascita.

STEP DA ESEGUIRE:
1. chiedo l'età all'utente e mi salvo il valore - FATTO
2. mi salvo da qualche parte l'anno in corso - FATTO
3. sottraggo dall'anno in corso l'età dell'utente - FATTO
4. comunichiamo il risultato - FATTO

*/

// 1. chiedo l'età all'utente e mi salvo il valore - FATTO
const age = parseInt(prompt('Quanti anni hai?'));
console.log('age:', age);

// 2. mi salvo da qualche parte l'anno in corso - FATTO
const year = 2024;

// 3. sottraggo dall'anno in corso l'età dell'utente - FATTO
const birthYear = year - age;
console.log('birthYear:', birthYear);

// 4. comunichiamo il risultato - FATTO
/* Modo 1: console.log */
console.log('Sei nato nel ' + birthYear);

/* Modo 2: mettendo il risultato nell'HTML */
document.getElementById('birth-text').innerHTML = 'Sei nato nel ' + birthYear;

/* Modo 3: mettendo il risultato nell'HTML sottoforma di stringa */
document.writeln('Sei nato nel ' + birthYear);






/* 

- Salutare: chiediamo all'utente il suo nome e inseriamo in pagina la stringa "ciao <nome_utente>"

STEP DA ESEGUIRE:
1.


*/