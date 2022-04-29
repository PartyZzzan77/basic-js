const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let buffer = {};
  domains.forEach(elem => {
    let sep = elem.split('.').reverse();
    console.log(sep);
    buffer[`.${sep[0]}`] = (buffer[`.${sep[0]}`] || 0) + 1;
    buffer[`.${sep[0]}.${sep[1]}`] = (buffer[`.${sep[0]}.${sep[1]}`] || 0) + 1;
    if (sep[2]) {
      buffer[`.${sep[0]}.${sep[1]}.${sep[2]}`] = (buffer[`.${sep[0]}.${sep[1]}.${sep[2]}`] || 0) + 1;
    }
  });
  return buffer;
}

module.exports = {
  getDNSStats
};
