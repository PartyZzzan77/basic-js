const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direction = true) {
    this.direction = direction
  }

  #isUpperCase(letter) {
    let l = letter.charCodeAt();
    if (l >= 65 && l <= 90) {
      return true;
    } else {
      return false;
    }
  };

  #isLowerCase(letter) {
    let l = letter.charCodeAt();
    if (l >= 97 && l <= 122) {
      return true;
    } else {
      return false;
    }
  };

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!')
    }
    let cypherBuffer = [];
    for (let i = 0, j = 0; i < message.length; i++) {
      let currentLetter = message[i];
      if (this.#isUpperCase(currentLetter)) {
        let upperLetter = ((currentLetter.charCodeAt() - 65) + (key[j % key.length].toUpperCase().charCodeAt() - 65)) % 26;
        cypherBuffer.push(String.fromCharCode(upperLetter + 65).toUpperCase());
        j++;
      } else if (this.#isLowerCase(currentLetter)) {
        let lowerLetter = ((currentLetter.charCodeAt() - 97) + (key[j % key.length].toLowerCase().charCodeAt() - 97)) % 26;
        cypherBuffer.push(String.fromCharCode(lowerLetter + 97).toUpperCase())
        j++;
      } else {
        cypherBuffer.push(currentLetter.toUpperCase());
      }
    }
    return this.direction ? cypherBuffer.join('') : cypherBuffer.reverse().join('');
  };
  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!')
    }
    let cypherBuffer = [];
    for (let i = 0, j = 0; i < message.length; i++) {
      let currentLetter = message[i];
      if (this.#isUpperCase(currentLetter)) {
        let upperLetter = ((currentLetter.charCodeAt() - 65) - (key[j % key.length].toUpperCase().charCodeAt() - 65) + 26) % 26;
        cypherBuffer.push(String.fromCharCode(upperLetter + 65).toUpperCase());
        j++;
      } else if (this.#isLowerCase(currentLetter)) {
        let lowerLetter = ((currentLetter.charCodeAt() - 97) - (key[j % key.length].toLowerCase().charCodeAt() - 97) + 26) % 26;
        cypherBuffer.push(String.fromCharCode(lowerLetter + 97).toUpperCase())
        j++;
      } else {
        cypherBuffer.push(currentLetter.toUpperCase());
      }
    }
    return this.direction ? cypherBuffer.join('') : cypherBuffer.reverse().join('');
  };
}

module.exports = {
  VigenereCipheringMachine
};
