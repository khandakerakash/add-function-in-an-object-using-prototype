'use strict'

let checkPalindrome = ((word) => {

  let l = word.length;
    for (var i = 0; i < l / 2; i++) {
        if (word.charAt(i) !== word.charAt(l - 1 - i)) {
            return false;
        }
    }
    return true;
}); 


if (checkPalindrome("Ammu")) {
    console.log("The word is a palindrome!");
} else {
    console.log("The word is NOT a palindrome!!");
}