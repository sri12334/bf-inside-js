import { readString, display } from '../../../../lib/dom-io.js';

document.getElementById('pyramid-it').addEventListener('click', () => {
  debugger;

  // read user text
  let input  = readString('to-pyramid');
  let output = '';


  // create the pyramid

  for (let i = 0; i < input.length; i++) {
    console.log('i=', i)
    for (let j = i; j < input.length; j++) {
      console.log('j=', j)
      output +=  input[j];
      console.log(output)
    }
    if (i !== input.length - 1) { // Add a new line only if it's not the last row
    output += '\n';
    console.log(output)
  }
  }

  // display the pyramid
  display('pyramided', output)
});
