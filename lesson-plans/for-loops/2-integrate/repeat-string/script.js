import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById("repeat-it").addEventListener('click', () => {
  // debugger;

  let input = readString('user-text');
  let times = readNumber('number-of-times');
  let output = '';

  // repeat the characters in the text
 for (let j = 0; j < times; j++) {
    output += input;
  }

  // display the text with repeated characters
  display('repeated-output', output)

  // display the repeated string
});
