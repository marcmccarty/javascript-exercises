const fibonacci = function(num) {
    if (parseInt(num) < 0) {
        return "OOPS"
    } else if (parseInt(num) == 0) {
        return 0;
    } else if (parseInt(num) == 1 || parseInt(num) == 2) {
        return 1;
    } else {
        return fibonacci(parseInt(num) - 1) + fibonacci(parseInt(num) - 2);
    }
};

// Do not edit below this line
module.exports = fibonacci;
