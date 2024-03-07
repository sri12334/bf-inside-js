import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('repeat-them').addEventListener('click', () => {
  debugger;

  // read user values
  let input = readString('user-text');
  let times = readNumber('number-of-times');
  let output = '';

  // repeat the characters in the text

   for (let i = 0; i < input.length; i++) {
    console.log("i=", i)
    for (let j = 0; j < times; j++) {
      console.log('j=', j)
      output += input[i];
      console.log(output)
    }
  }

  // display the text with repeated characters
  display('repeated-output', output)
});
