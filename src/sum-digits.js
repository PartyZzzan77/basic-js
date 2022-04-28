const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let targetSum;
  let targetSumLength;

  let curentDigit = n.toString().split('');
  targetSum = curentDigit.reduce((acc, elem) => acc += +elem, 0);
  targetSumLength = targetSum.toString().split('').length;

  while (targetSumLength !== 1) {
    targetSum = targetSum.toString().split('').reduce((acc, elem) => acc += +elem, 0);
    targetSumLength = targetSum.toString().split('').length;
  }
  return targetSum;
}

module.exports = {
  getSumOfDigits
};
