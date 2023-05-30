'use strict';
let a = 1;
let b = 1;
function fibaNachi(n) {
    for (let i = 1; i <= n; i++) {
      let c = a + b; 
      a = b; 
      b = c;
      console.log(c); 
    }
  }
  fibaNachi(8);
  