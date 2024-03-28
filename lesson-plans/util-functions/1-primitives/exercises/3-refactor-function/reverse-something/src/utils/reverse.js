/**
 *
 */
export const reverse = (text) => {
  // return text.reverse();
   let backwards = '';
  for (const char of text) {
    backwards = char + backwards;
  }
  return backwards;
};
