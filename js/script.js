// Seleziono gli elementi dal mio HTML
const displayNumList = document.getElementById(`numbers-list`);
const displayCountdown = document.getElementById(`countdown`);
const displayInstructions = document.getElementById(`instructions`);
const displayForm = document.getElementById(`answers-form`);

//Genero 5 numeri casuali univoci nell'intervallo [1, 99].
const numArr = getRandomIntInclusiveArrayWithMaxLength(1, 99, 5);

//Aggiungo nel <ul> i numeri dentro numArr come <li>
addElementLi(numArr);

// Creo un intervallo che chiama la funzione ogni 1000 millisecondi (1 secondo)
let timeLeft = 5;
const intervalId = setInterval(function(){
    // Decremento il tempo, aggiorno il Countdown in display.
    timeLeft--;
    displayCountdown.textContent = timeLeft;

    // Allo scadere del countdown:
    // 1. fermo il countdown quando arrivo a 0.
    if (timeLeft <= 0) {
        clearInterval(intervalId);
        displayInstructions.textContent = `Tempo scaduto! Inserisci i numeri.`;


        // 2. nascondo i numeri precedentemente generati a display:
        displayNumList.classList.add(`d-none`); 
        
        // 3. mostro 5 input in cui l'utente deve inserire i numeri precedentemente generati:
        displayForm.classList.remove(`d-none`); 

    }


}, 1000);






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

