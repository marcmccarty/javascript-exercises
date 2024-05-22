const sumAll = function(firstValue, secondValue) {
    let sum = 0;
    let minimumValue;
    let maximumValue;

    if (typeof(firstValue) != "number" || typeof(secondValue) != "number") {
        return 'ERROR';
    }

    if (firstValue < 0 || secondValue < 0) {
        return 'ERROR';
    }

    if (firstValue < secondValue) {
        minimumValue = firstValue;
        maximumValue = secondValue;
    } else if (firstValue > secondValue) {
        minimumValue = secondValue;
        maximumValue = firstValue;
    } else {
        minimumValue = firstValue;
        maximumValue = minimumValue;
    }

    for (i = minimumValue; i <= maximumValue; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
