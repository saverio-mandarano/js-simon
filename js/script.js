//Genera intero random nell'internvallo [min, max]. 
function getRandomIntInclusive(min, max) { 
  const minCeiled = Math.ceil(min); 
  const maxFloored = Math.floor(max); 
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

//Crea un array di nNumbers interi random "univoci" nell'intervallo [min, max].
function getRandomIntInclsuiveArrayWithMaxLength(nMin, nMax, nNumbers) {
    const numArr = [];

    while (numArr.length < nNumbers) {
        const randomNum = getRandomIntInclusive(nMin, nMax);

        if (!numArr.includes(randomNum)) {
            numArr.push(randomNum);
        }
    }

    return numArr
}