const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  buffer: [],
  getLength() {
    return this.buffer.length;
  },
  addLink(value) {
    this.buffer.push(String(value));
    return this;
  },
  removeLink(position) {
    if (isNaN(position) || parseInt(position) > this.buffer.length || position < 1) {
      this.buffer = [];
      throw new Error('You can\'t remove incorrect link!')
    }
    let index = position - 1;
    this.buffer.splice(index, 1);
    return this;
  },
  reverseChain() {
    this.buffer = this.buffer.reverse();
    return this;
  },
  finishChain() {
    const target = this.buffer
      .map(elem => `( ${(elem)} )`)
      .join('~~');

    this.buffer = [];
    return target;
  }
};

module.exports = {
  chainMaker
};
