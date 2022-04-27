const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (Array.isArray(members) && members.some(elem => typeof elem === 'string')) {
    return members.filter(member => typeof member === 'string')
      .map(firstChar => firstChar.trim()[0].toUpperCase())
      .sort()
      .join('')
  }
  return false;
}
module.exports = {
  createDreamTeam
};
