'use strict';
console.log(process.argv);
const number = process.argv[2] || 0;
console.log(typeof process.argv[2]);
if (!process.argv[2]) console.log('値がない');
let sum = 0;
for (let i = 1; i <= number; i++) {
  sum = sum + i;
}
console.log(sum);