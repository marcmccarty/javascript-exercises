const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum, num) => sum += num, 0);
};

const multiply = function(arr) {
  return arr.reduce((product, num) => product *= num, 1);
};

const power = function(base, exponent) {
	solution = base;
  for (i = 1; i < exponent; i++) {
    solution *= base;
  }
  return solution;
};

const factorial = function(num) {
	solution = 1;
  if (num == 0 || num == 1) {
    return solution;
  } else {
    for (i = 2; i <= num; i++) {
      solution = i * factorial(i-1);
    }
  }
  return solution;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
