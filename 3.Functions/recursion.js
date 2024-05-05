/*
===============================================================================
Recursion
===============================================================================
We've seen that we can use % (the remainder operator) to test
whether a number is even or odd by using % 2 to see whether its'
divisible by two. Here's another way to define whether a positive
whole number is even or odd:

- Zero is even.
- One is odd.
- For any other number N, it's evenness is the same as N - 2.

Define a function isEven corresponding to this
description. The function should accept a single paramenter (a
positive, whole number) and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think
of a way to fix this?
*/

function isEven(n) {
  if (n < 0) return undefined;
  else {
    if (n == 0) {
      return true;
    } else if (n == 1) {
      return false;
    } 
    else {
      return isEven(n - 2);
    }
  }
}

console.log(isEven(50));
// true
console.log(isEven(75));
// false
console.log(isEven(-1));
// ??
