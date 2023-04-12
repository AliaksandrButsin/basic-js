const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [], 
  getLength() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.chain.length; // return the length of the chain array
  },
  addLink(value) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (value === undefined) { // if no value is passed, add an empty link
      this.chain.push("( )");
    } else {
      this.chain.push(`( ${value} )`); // add a link with the specified value
    }
    return this; // return the chainMaker object for chaining
  },
  removeLink( position ) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (
      !Number.isInteger(position) || // check if the position is not an integer
      position < 1 || // check if the position is less than 1
      position > this.chain.length // check if the position is greater than the length of the chain array
    ) {
      this.chain = []; // reset the chain array
      throw new Error("You can't remove incorrect link!"); // throw an Error with the specified message
    }
    this.chain.splice(position - 1, 1); // remove the link at the specified position
    return this; // return the chainMaker object for chaining
  },
  reverseChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.chain.reverse(); // reverse the order of the links in the chain array
    return this; // return the chainMaker object for chaining
  

  },
  finishChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const result = this.chain.join("~~"); // join the links in the chain array with the separator '~~'
    this.chain = []; // reset the chain array
    return result; // return the finished chain as a string
  
  }
};

module.exports = {
  chainMaker
};
