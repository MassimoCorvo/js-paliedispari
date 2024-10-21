const word = prompt("Inserire parola");

console.log(word);

const result = isPalindrome(word);
console.log(result);

const print = document.getElementById("result");
print.innerText = result;




//FUNCTION
/**
 * Verifica se la parola è palindroma
 * @param {string} wordToCheck
 * @returns {string}
 */

function isPalindrome(wordToCheck) {

    //Soluzione con metodi built-in

    /*
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
    
     return result; */

     //Soluzione #2

     let result = "E' palindroma";
     const wordToCheckLowerCase = wordToCheck.toLowerCase();
     const wordLength = wordToCheck.length;

     if(wordLength === 0)
        return "Non è palindroma";

     if(wordLength === 1 && wordToCheck !== " ")
        return result;

     else if ( wordToCheck === " " || wordToCheck === "" ){
        return "Non è palindroma";
     }

     else {
        let j = wordLength - 1;

        for(let i = 0; i < j; i++){
            if( wordToCheckLowerCase[i] !== wordToCheckLowerCase[j])
                {return "Non è palindroma";}

            j--;
        }

        return result;
     }


}

