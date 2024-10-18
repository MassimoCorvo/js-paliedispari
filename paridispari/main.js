let choice = prompt("Scegli pari o dispari");

while ( choice.toLowerCase() !== "pari"  && choice.toLowerCase() !== "dispari" )
{
    console.log("Scelta non valida");
    choice = prompt("Scegli pari o dispari");
}
console.log("Scelta: ", choice);

let number = Number(prompt("Scegli un numero da 1 a 5"));

while ( number < 1 || number > 5 )
    {
        console.log("Scelta non valida");
        number = Number(prompt("Scegli un numero da 1 a 5"));
    }

console.log("Numero scelto: ", number);

const randomNumber = getRndInteger(1, 5);
console.log("Random: ", randomNumber);

const finalSum = sum(number, randomNumber);
console.log("Somma: ", finalSum);

if( evenOdd(finalSum) === choice.toLowerCase() ){
    console.log("Hai vinto");}
else {
    console.log("Hai perso");
}


//FUNCTIONS

/**
 * La funzione che definisce se il numero è pari o dispari
 * @param {number} numToCheck
 * @returns {string} "even" se il numero è pari, "odd" se il numero è dispari
 */
function evenOdd(numToCheck) {
    let result = "";
    if (numToCheck % 2 === 0) {
        result = "pari";
    } else {
        result = "dispari";
    }
    return result;
}

/**
* Genera un numero intero random compreso tra min e max intrambi inclusi
* @param {number} min
* @param {number} max
* @returns {number}
*/
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


/**
 * Calcola la somma di due numeri
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
function sum(num1, num2){
    return num1 + num2;
}