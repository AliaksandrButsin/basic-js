const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles( names ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const map = new Map(); // to keep track of the counts for each name
  const result = []; // to store the renamed names

  for (const name of names) {
    if (!map.has(name)) { // if the name is new
      map.set(name, 1); // set its count to 1
      result.push(name); // add it to the result
    } else {
      let count = map.get(name); // get the current count for the name
      let newName = `${name}(${count})`; // construct the new name with suffix
      while (map.has(newName)) { // if the new name already exists
        count++; // increment the suffix
        newName = `${name}(${count})`; // construct a new new name
      }
      map.set(name, count + 1); // update the count for the original name
      map.set(newName, 1); // set the count for the new name to 1
      result.push(newName); // add the new name to the result
    }
  }

  return result;
}

module.exports = {
  renameFiles
};
