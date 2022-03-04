const output = document.querySelector('.output');
const outputTwo = document.querySelector('.output-two');
let arr = [];
let arrUser = [];

// Visualizzare in pagina 5 numeri casuali.

for (let i = 0; i < 5; i++) {
    let num = Math.floor(Math.random() * (100 - 1) + 1);
    arr.push(num);
    output.innerHTML = `${arr}`;
}

// Da lì parte un timer di 30 secondi. (Cioè lasciate i numeri visibili per 30 secondi 
// allo scadere dei quali li nascondete)
// Dopo aver nascosto i numeri chiedete all'utente (con dei prompt) di inserirli in ordine, 
// uno alla volta.

setTimeout(hideNumbers, 3000);

function hideNumbers() {
    output.innerHTML = '';
}

setTimeout(guessNumbers, 5000);

function guessNumbers() {
    for (let j = 0; j < 5; j++) {
        let userNumbers = parseInt(prompt('Inserisci i numeri che hai letto prima, uno alla volta'));
        arrUser.push(userNumbers);
    }
    outputTwo.innerHTML = `${arrUser}`;
}

// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri 
// da indovinare sono stati individuati.

  

