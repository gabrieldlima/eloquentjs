/*
===============================================================================
Bean counting
===============================================================================
You can get the Nth character, or letter, from a string by writing [N]
after the string (for example, string[2]). The resulting value will be
a string containing only one character (for example, "b"). The first
character has position 0, which causes the last one to be found at
position string.Lenght -1. In other words, a two-character string
has lenght 2, and it's characters have positions 0 and 1.

Write a function countBs that takes a string as it's only argument and
returns a number after that indicates how many uppercase B characters
there are in the string.

Next, write a function called countChar that behaves like countBs,
except it taks a second argument that indicates the character that
is to be counted (rather than couting only uppercase B charactesrs).
Rewrite countBs to make use of this new function.
*/

let countBs = (string) => {
  return countChar(string, "B");
}

let countChar = (string, char) => {
  let total = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] == char) {
      total += 1;
    }
  }

  return total;
}

console.log(countBs("BOB"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
