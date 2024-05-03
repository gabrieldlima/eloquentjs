/*
===============================================================================
Minimum
===============================================================================
The previous chapter introduced the standard function Math.min
that returns its smallets argument. We can write a function like that
ourselves now. Define the function min that takes two arguments
and returns their minimum.
*/

let number1 = 10;
let number2 = 20;

let min = (n1, n2) => {
  if (n1 < n2) {
    return n1;
  } else if (n1 > n2) {
    return n2;
  }
  return n1;
}

console.log(min(number1, number2));
