'use strict';
let a = 1;
let b = 1;
function fiboNachi(n) {
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}
console.log(fiboNachi(8));
