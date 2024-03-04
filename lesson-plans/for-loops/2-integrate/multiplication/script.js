import { readNumber, display } from '../../../../lib/dom-io.js';

document.getElementById('do-math').addEventListener('click', () => {
  debugger;

  // read user values
  let left = Number(readNumber('left'));
  let right = Number(readNumber('right'));

  // initialize product variable
  let product = 0;

  // handle multiplication for positive 'right'
  if (right > 0) {
    for (let i = 0; i < left; i++) {
      product += right;
    }
  }
  // handle multiplication for negative 'right'
  else if (right < 0) {
    // if both left and right are negative, set product to 0
    if (left < 0) {
      product = 0;
    } else {
      for (let i = 0; i > right; i--) {
        product -= left;
      }
    }
  }
 
  // display the product
   display('product', product);
});
