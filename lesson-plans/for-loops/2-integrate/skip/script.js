import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('skip-them').addEventListener('click', () => {
  debugger;

  // read user values
  let skip = readNumber('skip-size');
  let input = readString('user-text');
  let output = '';

  // create a new string with skipped characters
 for (let i = 0; i < input.length; i+=skip) {
    console.log('=i', i)
    output += input[i];
    console.log('out', output)
  }
  

  // display the skipped string
  display('skipped-output', output)
});
