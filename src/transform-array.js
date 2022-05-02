const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr) || !arr) {
    throw new Error('\'arr\' parameter must be an instance of the Array!')
  }
  const buffer = arr.slice(0);
  for (let i = 0; i < buffer.length; i++) {
    if (buffer[i] === "--double-prev") {
      buffer[i] = buffer[i - 1]
    }
    if (buffer[i] === "--double-next") {
      buffer[i] = buffer[i + 1]
    }
    if (buffer[i] === "--discard-next") {
      buffer[i] = undefined
      buffer[i + 1] = undefined
    }
    if (buffer[i] === "--discard-prev") {
      buffer[i] = undefined
      buffer[i - 1] = undefined
    }
  }

  return buffer.filter(elem => elem !== undefined);
}

module.exports = {
  transform
};
