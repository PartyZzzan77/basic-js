const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let target = n.toString().split('');
  let buffer = target.map((elem, index, array) => {
    let variantsDigits = JSON.parse(JSON.stringify(array));
    variantsDigits.splice(index, 1)
    return +variantsDigits.join('');
  })
  return Math.max(...buffer);
}

module.exports = {
  deleteDigit
};
