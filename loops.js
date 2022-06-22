// ==========================================
// Opdracht 1. Maak een for-loop die 3 keer "Hoera!" in de terminal logt
// Verwachte uitkomsten:
// Hoera!
// Hoera!
// Hoera!
// ==========================================

const exclamation = ["Hoera!", "Hoera!", "Hoera!"];

for (let i = 0; i < exclamation.length; i++) {
console.log(exclamation[i]);
}



// ==========================================
// Opdracht 2. Maak een for-loop die 4 keer het woord "loop..." logt, en bij de vijfde loop het woord "klaar!"
// Verwachte uitkomsten:
// loop...
// loop...
// loop...
// loop...
// klaar!
 // ==========================================

const loopKlaar = ["loop...", "loop...", "loop...", "loop...", "klaar!"];

for (let i = 0; i < loopKlaar.length; i++) {
console.log(loopKlaar[i]);
}




// ==========================================
// Opdracht 3. Maak een for-loop die van 0 tot 15 loopt. Voor ieder getal wordt in de console gelogd of het getal even of oneven is.
// Verwachte uitkomsten:
// 0 is even
// 1 is oneven
// 2 is even
// 3 is oneven
// .... etc.
// 15 is oneven

// Tip: een getal is oneven als je het door 2 deelt en er blijft nog iets over. Een getal is even als je het deelt door 2 en er blijft niets over. Google daarom eens naar 'mdn webdocs remainder operator'.
// ==========================================


const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 === 0) {
        console.log(number[i] = number[i] + 1 + " is even.");
    } else {
        console.log(number[i] = number[i] + 1 + " is oneven.");
    }
}



// ==========================================
// [BONUSOPDRACHT] - optioneel: maak een for-loop die van 0 tot 9 loopt en de getallen 0 tot 9 logt.
// Echter, vanaf het getal 3 komt er een > voor ieder getal te staan, en vanaf het getal 6 komt er >> voor ieder getal te staan.
// Verwachte uitkomsten:
// 0
// 1
// 2
// > 3
// > 4
// > 5
// >> 6
// >> 7
// >> 8
// >> 9
// ==========================================

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 3) {
        console.log(numbers[i]);
    } else if (numbers[i] >= 3) {
        console.log("> " + numbers[i]);
    } else {
        console.log("> " + numbers[i]);
    }

}


