const displayNumList = document.getElementById(`numbers-list`);

//Genero 5 numeri casuali univoci nell'intervallo [1, 99].
const numArr = getRandomIntInclusiveArrayWithMaxLength(1, 99, 5);





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