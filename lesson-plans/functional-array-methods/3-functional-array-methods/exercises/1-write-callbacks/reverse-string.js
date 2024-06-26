/**
 * reverses a string
 * @param {string} str - the string to reverse
 * @returns {string} the string, reversed
 */
export const reverseString = (str) => {
  let reversed = '';
  for (const character of str) {
   reversed = character + reversed;
  }
  return reversed
};
