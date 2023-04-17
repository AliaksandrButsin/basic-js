const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum( matrix ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let sum = 0;

  // iterate over the rows and columns of the matrix
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      // check if the current element is not below a 0
      if (i === 0 || matrix[i - 1][j] !== 0) {
        sum += matrix[i][j]; // add the element to the sum
      }
    }
  }

  return sum;

}

module.exports = {
  getMatrixElementsSum
};
