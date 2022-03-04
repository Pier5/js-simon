const output = document.querySelector('.output');
let arr = [];
let num; 

// Visualizzare in pagina 5 numeri casuali.

for (let i = 0; i < 5; i++) {
    num = Math.floor(Math.random() * (100 - 1) + 1);
    arr.push(num);
    output.innerHTML = `${arr}`;
}

// Da lì parte un timer di 30 secondi. (Cioè lasciate i numeri visibili per 30 secondi 
// allo scadere dei quali li nascondete)
// Dopo aver nascosto i numeri chiedete all'utente (con dei prompt) di inserirli in ordine, 
// uno alla volta.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri 
// da indovinare sono stati individuati.

  

