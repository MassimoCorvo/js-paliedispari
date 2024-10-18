console.log("collegato");

const word = prompt("Inserire parola");

console.log(word);

const result = isPalindrome(word);
console.log(result);



//FUNCTION
/**
 * Verifica se la parola è palindroma
 * @param {string} wordToCheck
 * @returns {string}
 */

function isPalindrome(wordToCheck) {

    const wordArray = wordToCheck.split("");
    const wordArrayLength = wordArray.length;
    const wordArrayReverse = wordArray.toReversed();

    let result = "E' palindroma";

    for(let i = 0; i < wordArrayLength; i++){

        if(wordArray[i] !== wordArrayReverse[i])
        {   
            result = "Non è palindroma";
            return result;
        }

    }
    
     return result;

}

