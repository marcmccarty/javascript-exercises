const palindromes = function (string) {
    let strippedPalindrome = string
    .split(' ').join('')
    .split('!').join('')
    .split(',').join('')
    .split('.').join('')
    .toLowerCase();
    if (strippedPalindrome == reverseString(strippedPalindrome)) {
        return true;
    } else {
        return false;
    }
};

// Alternative Solution:
// Create a new reversed string for comparison
// const reversedString = cleanedString.split('').reverse().join('');
function reverseString(string) {
    let reversedString = "";
    for (i = string.length -1; i >= 0; i--) {
        reversedString += string[i];
    }
    return reversedString;
}

// Do not edit below this line
module.exports = palindromes;
