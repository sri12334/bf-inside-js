// #todo

'use strict';

/**
 * Adds two numbers together.
 *
 * @param {number} [x=0] - The left left.
 * @param {number} [y=0] - The right number.
 * @returns {number} The sum of x and y.
 */
const toAdd = (x=0, y=0) => {
  let number = x + y;
  return number;
};

describe('toAdd: it checks the sum of two numbers', () => {
  describe('adding two numbers together', () => {
    it('with two parameters', () => {
      const expected = 7;
      const actual = toAdd(3, 4);
      expect(actual).toEqual(expected);
    });
     it('with out parameters', () => {
      const expected = toAdd();
      const actual = 0;
      expect(expected).toEqual(actual);
    });
     it('with only one parameters', () => {
      const expected = toAdd(2);
      const actual = 2;
      expect(expected).toEqual(actual);
    });
    it('with negative parameters', () => {
      const expected = toAdd(-1, -5);
      const actual = -6;
      expect(expected).toEqual(actual);
    });
  });
});