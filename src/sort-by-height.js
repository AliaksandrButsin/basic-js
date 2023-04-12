const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight( arr ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // filter out the -1 values and sort the remaining elements
  const sorted = arr.filter((val) => val !== -1).sort((a, b) => a - b);

  // iterate over the original array and replace the non -1 values with the sorted values
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      arr[i] = sorted[j];
      j++;
    }
  }

  return arr;
}

module.exports = {
  sortByHeight
};
