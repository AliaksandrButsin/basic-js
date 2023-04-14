const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  
    if(!date) return 'Unable to determine the time of year!';
  
    try {
      date.getTime();
    }
    catch (error) {
      throw new Error ('Invalid date!');
    }
    let month = date.getMonth();
  
    if(month <= 1 || month === 11) return 'winter'; 
    if(month > 1 && month <= 4) return 'spring';
    if(month > 4 && month <= 7) return 'summer';
    if(month > 7 && month <= 10) return 'autumn'; 
  }


module.exports = {
  getSeason
};

// getSeason(new Date(1682, 0, 28, 4, 2, 55, 833));
