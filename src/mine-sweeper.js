const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper( matrix ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const rows = matrix.length;
  const cols = matrix[0].length;

  // initialize the result matrix with zeros
  const result = Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => 0)
  );

  // iterate over the rows and columns of the matrix
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // check if the current cell contains a mine
      if (matrix[i][j]) {
        // increment the count of neighboring cells
        for (let r = Math.max(i - 1, 0); r <= Math.min(i + 1, rows - 1); r++) {
          for (
            let c = Math.max(j - 1, 0);
            c <= Math.min(j + 1, cols - 1);
            c++
          ) {
            if (!(r === i && c === j)) {
              result[r][c]++;
            }
          }
        }
      }
    }
  }

  return result;


}

module.exports = {
  minesweeper
};
