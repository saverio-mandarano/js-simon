// Seleziono gli elementi dal mio HTML
const displayNumList = document.getElementById(`numbers-list`);
const displayCountdown = document.getElementById(`countdown`);
const displayInstructions = document.getElementById(`instructions`);
const displayForm = document.getElementById(`answers-form`);
const userInputs = document.querySelectorAll(`.form-control`);
const displayMessage = document.getElementById(`message`);



//Genero 5 numeri casuali univoci nell'intervallo [1, 99].
const numArr = getRandomIntInclusiveArrayWithMaxLength(1, 50, 5);

//Aggiungo nel <ul> i numeri dentro numArr come <li>
addElementLi(numArr);

// Creo un intervallo che chiama la funzione ogni 1000 millisecondi (1 secondo)
let timeLeft = 1;
const intervalId = setInterval(function(){
    // Decremento il tempo, aggiorno il Countdown in display.
    timeLeft--;
    displayCountdown.textContent = timeLeft;

    // Allo scadere del countdown:
    // 1. fermo il countdown quando arrivo a 0.
    if (timeLeft <= 0) {
        clearInterval(intervalId);
        displayInstructions.textContent = `Tempo scaduto! Inserisci i numeri nell'ordine che preferisci.`;


        // 2. nascondo i numeri precedentemente generati a display:
        displayNumList.classList.add(`d-none`); 
        
        // 3. mostro 5 input in cui l'utente deve inserire i numeri precedentemente generati:
        displayForm.classList.remove(`d-none`); 

    }


}, 1000);

// Aggiunto evento submit: voglio confrontare gli utenti inseriti dall utente con quelli generati.
displayForm.addEventListener(`submit`,function(e){
    e.preventDefault(); // prevengo il comportamento di default: la pagina non viene ricaricata.
    
    let value;
    const userNumIdentified = [];
    const userNumInputArr = [];

    for(let i=0; i<userInputs.length; i++){
        const inputValue = userInputs[i].value.trim(); //tolgo spazi vuoti all'inzio e alla fine.
        value = Number(inputValue); //conversione stringa in numero.

        // confronto il numero inserito, con quelli già inseriti dall'utente:
        if(userNumInputArr.includes(value)){
            displayMessage.textContent = `Hai inserito due volte lo stesso numero, riprova!`;
            return
        }
        else{
            userNumInputArr.push(value);
        }


        // confronto i numeri generati, con quelli inseriti dall'utente:
        if (numArr.includes(value)){
            userNumIdentified.push(value); // salvo in un array i numeri individuati dall'utente.
        }
    
    }

    // il software dice quanti e quali dei numeri sono stati individuati.
    displayMessage.textContent = `Hai individuato ${userNumIdentified.length} numeri: ${userNumIdentified.join(", ")} `;

});







//Funzioni:

//Genera intero random nell'internvallo [min, max]. 
function getRandomIntInclusive(min, max) { 
  const minCeiled = Math.ceil(min); 
  const maxFloored = Math.floor(max); 
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

//Crea un array di nNumbers interi random "univoci" nell'intervallo [min, max].
function getRandomIntInclusiveArrayWithMaxLength(nMin, nMax, nNumbers) {
    const numArr = [];

    while (numArr.length < nNumbers) {
        const randomNum = getRandomIntInclusive(nMin, nMax);

        if (!numArr.includes(randomNum)) {
            numArr.push(randomNum);
        }
    }

    return numArr
}

// Aggiunge ogni elemento dell'array arr come <li> della lista <ul id="numbers-list">
function addElementLi(arr) {
    for (let i = 0; i < arr.length; i++) {
        const newListItem = document.createElement("li");
        newListItem.textContent = arr[i];
        displayNumList.appendChild(newListItem);
    }
}

