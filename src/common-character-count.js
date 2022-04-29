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
  let count = 0;
  if (s1.length <= s2.length) {
    let arrs1 = [...s1].sort();
    let arrs2 = [...s2].sort();
    arrs1.forEach((elem) => {
      if (arrs2.includes(elem)) {
        count++;
        arrs2.splice(arrs2.indexOf(elem), 1);
      }
    })
  }
  return count;
}
module.exports = {
  getCommonCharacterCount
};
