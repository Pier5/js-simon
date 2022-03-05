const output = document.querySelector('.output');
const outputTwo = document.querySelector('.output-two');
const outputThree = document.querySelector('.output-three');
const h2 = document.querySelector('h2');
let arr = [];
let arrUser = [];
let correctNumbers = [];
let num;
let totalNumbers;

// Visualizzare in pagina 5 numeri casuali.

for (let i = 0; i < 5; i++) {
    let num = Math.floor(Math.random() * (100 - 1) + 1);
    while (arr.includes(num)) {
        num = Math.floor(Math.random() * (100 - 1) + 1);
    } 
    arr.push(num);
    output.innerHTML = `Ecco i numeri che dovrai ricordare: ${arr}`;
}

// Da lì parte un timer di 30 secondi. (Cioè lasciate i numeri visibili per 
// 30 secondi  allo scadere dei quali li nascondete).

setTimeout(hideNumbers, 3000);

function hideNumbers() {
    output.innerHTML = '';
    h2.innerHTML = '';
}

// Dopo aver nascosto i numeri chiedete all'utente (con dei prompt) di inserirli 
// in ordine, uno alla volta.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e
// quali dei numeri  da indovinare sono stati individuati.

setTimeout(guessNumbers, 3100);

function guessNumbers() {
    let j = 0;
    while (j < arr.length) {
        let userNumbers = parseInt(prompt('Inserisci i numeri nello stesso ordine in cui erano scritti, uno alla volta, altrimenti sarà contato come errore.'));
        arrUser.push(userNumbers);
        if (arr[j] == arrUser[j]) {
        correctNumbers.push(arrUser[j]);
        totalNumbers = correctNumbers.length;
        }    
        j++;
        h2.innerHTML = 'Risultato';
        outputTwo.innerHTML = `Punteggio totale: ${totalNumbers} su 5`;
        outputThree.innerHTML = `Hai indovinato i seguenti numeri: ${correctNumbers}`;
    }
}

