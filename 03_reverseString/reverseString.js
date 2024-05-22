const reverseString = function(string) {
    const stringArray = string.split('');
    const reversedStringArray = stringArray.reverse();
    let reversedString = "";
    for (let char of stringArray) {
        reversedString += char;
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
