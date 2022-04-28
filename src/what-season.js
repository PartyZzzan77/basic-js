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

  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if(!(date instanceof Date) || Object.getOwnPropertyNames(date).length > 0){
    throw new Error("Invalid date!");
  }
  
  try {
    const currentMonth = date.getMonth();
    let season = 'winter';
    if (currentMonth >= 2 && currentMonth < 5) {
      season = 'spring';
    }
    if (currentMonth >= 5 && currentMonth < 8) {
      season = 'summer';
    }
    if (currentMonth >= 8 && currentMonth < 11) {
      season = 'autumn';
    }

    return season;
  }
  catch (err) {
    throw new Error('Invalid date!');
  }
}

module.exports = {
  getSeason
};
