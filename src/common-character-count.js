const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

    // Initialize a variable to keep track of the number of common characters
    let count = 0;

    // Loop through each character in s1
    for (let i = 0; i < s1.length; i++) {
      // Check if the current character is also in s2
      if (s2.includes(s1[i])) {
        // Increment the count and remove the character from s2 to avoid counting it again
        count++;
        s2 = s2.replace(s1[i], '');
      }
    }
  
    // Return the count
    return count;
}

module.exports = {
  getCommonCharacterCount
};
