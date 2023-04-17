const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits( n ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
   // if the number is already one digit, return it
   if (n < 10) {
    return n;
  }
  
  // calculate the sum of digits
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  
  // call the function recursively with the sum
  return getSumOfDigits(sum);
}

module.exports = {
  getSumOfDigits
};
