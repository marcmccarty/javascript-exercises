const removeFromArray = function(array, ...itemsToRemove) {
    for (item of itemsToRemove) {
        for (let i = 0; i < array.length; i++) {
            if (item === array[i]) {
                array.splice(i, 1);
                i--;
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
