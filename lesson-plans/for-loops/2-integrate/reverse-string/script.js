import { readString, display } from '../../../../lib/dom-io.js';

document.getElementById('reverse-it').addEventListener('click', () => {
  // debugger;

  // read user text
  let input = readString('user-text');
  let output = '';
  // use a for loop that counts down (i--) to reverse the input
  for (let  i = input.length - 1; i >= 0; i--){
    console.log(i);
    output += input[i] 
    console.log(output)
  }

  // display the reversed string
  display('reversed-output', output)
});
